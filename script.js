/**
 * ==============================================================================
 * PEDAGO ACADEMY - CAREER GUIDANCE LEADS
 * Frontend Controller (Bilingual Bangla/English & Light/Dark Theme)
 * ==============================================================================
 */

// 1. DEPLOYED APPS SCRIPT WEB APP URL
// Replace this placeholder with your deployed Google Apps Script Web App URL:
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzLfoHnGM6kqKqnTxFhtQs7ivbGQlb9hzl_eX9GBSkdoDt1MDYM6C2d8EPffGx_4S24/exec";

// 2. COMPLETE BILINGUAL TRANSLATION DICTIONARY
const translations = {
  bn: {
    docTitle: "ক্যারিয়ার গাইডেন্স লিডস - পেডাগো একাডেমি",
    badgeText: "ক্যারিয়ার গাইডেন্স প্রোগ্রাম",
    pageTitle: "ক্যারিয়ার গাইডেন্স ফর্ম",
    pageSubtitle: "আপনার সন্তানের উপযোগী দিকনির্দেশনা ও ফ্রি কাউন্সেলিং সেশনের জন্য নিচের তথ্যগুলো পূরণ করুন।",

    labelName: "শিক্ষার্থীর নাম",
    namePlaceholder: "শিক্ষার্থীর পূর্ণ নাম লিখুন",
    nameErrorEmpty: "অনুগ্রহ করে শিক্ষার্থীর নাম লিখুন।",
    nameErrorShort: "শিক্ষার্থীর নাম কমপক্ষে ২ অক্ষরের হতে হবে।",

    labelMobile: "অভিভাবকের মোবাইল নম্বর",
    mobilePlaceholder: "01XXXXXXXXX",
    mobileHint: "১১ ডিজিটের বাংলাদেশি মোবাইল নম্বর (যেমন: 01712345678)",
    mobileErrorEmpty: "অনুগ্রহ করে অভিভাবকের মোবাইল নম্বর লিখুন।",
    mobileErrorInvalid: "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (01XXXXXXXXX)।",

    labelAge: "শিক্ষার্থীর বয়স",
    agePlaceholder: "বয়স নির্বাচন করুন",
    ageErrorEmpty: "অনুগ্রহ করে শিক্ষার্থীর বয়স নির্বাচন করুন।",
    ageSuffix: " বছর",

    btnSubmit: "জমা দিন",
    btnSubmitting: "অপেক্ষা করুন...",

    successToast: "ধন্যবাদ! আপনার তথ্য সফলভাবে জমা হয়েছে। পেডাগো একাডেমি থেকে শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।",
    errorToast: "দুঃখিত! তথ্য জমা দেওয়া সম্ভব হয়নি। অনুগ্রহ করে আপনার ইন্টারনেট কানেকশন চেক করে আবার চেষ্টা করুন।",
    unconfiguredUrlToast: "দয়া করে প্রথমে Google Apps Script ডিপ্লয় করে প্রাপ্ত Web App URL-টি script.js-এর SCRIPT_URL ভ্যারিয়েবলে পেস্ট করুন।",

    footerCallUs: "যে কোনো তথ্যের জন্য কল করুন:"
  },
  en: {
    docTitle: "Career Guidance Leads - Pedago Academy",
    badgeText: "Career Guidance Program",
    pageTitle: "Career Guidance Form",
    pageSubtitle: "Fill in the details below to receive personalized guidance and a free counseling session for your child.",

    labelName: "Student Name",
    namePlaceholder: "Enter student's full name",
    nameErrorEmpty: "Please enter the student's name.",
    nameErrorShort: "Student name must be at least 2 characters.",

    labelMobile: "Guardian's Mobile Number",
    mobilePlaceholder: "01XXXXXXXXX",
    mobileHint: "11-digit Bangladeshi mobile number (e.g. 01712345678)",
    mobileErrorEmpty: "Please enter the guardian's mobile number.",
    mobileErrorInvalid: "Enter a valid 11-digit mobile number (01XXXXXXXXX).",

    labelAge: "Student Age",
    agePlaceholder: "Select Age",
    ageErrorEmpty: "Please select the student's age.",
    ageSuffix: " Years",

    btnSubmit: "Submit",
    btnSubmitting: "Submitting...",

    successToast: "Thank you! Your information has been submitted successfully. Pedago Academy will contact you shortly.",
    errorToast: "Sorry! Submission failed. Please check your internet connection and try again.",
    unconfiguredUrlToast: "Please deploy the Google Apps Script first and paste the Web App URL into SCRIPT_URL in script.js.",

    footerCallUs: "For any inquiries, call:"
  }
};

// Bengali numeral map for age dropdown rendering
const banglaDigits = {
  '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
  '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
};

function toBengaliNumber(num) {
  return num.toString().split('').map(d => banglaDigits[d] || d).join('');
}

// 3. APPLICATION STATE
const state = {
  lang: localStorage.getItem('pedago_lang') || 'bn',
  theme: localStorage.getItem('pedago_theme') || 'light',
  isSubmitting: false
};

// 4. DOM ELEMENT CACHE
const DOM = {
  html: document.documentElement,
  langBtnBn: document.getElementById('langBtnBn'),
  langBtnEn: document.getElementById('langBtnEn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  sunIcon: document.getElementById('sunIcon'),
  moonIcon: document.getElementById('moonIcon'),

  badgeText: document.getElementById('badgeText'),
  pageTitle: document.getElementById('pageTitle'),
  pageSubtitle: document.getElementById('pageSubtitle'),

  form: document.getElementById('leadForm'),

  groupName: document.getElementById('groupName'),
  labelName: document.getElementById('labelName'),
  inputName: document.getElementById('name'),
  nameError: document.getElementById('nameError'),
  nameErrorText: document.getElementById('nameErrorText'),

  groupMobile: document.getElementById('groupMobile'),
  labelMobile: document.getElementById('labelMobile'),
  inputMobile: document.getElementById('mobile'),
  mobileHint: document.getElementById('mobileHint'),
  mobileError: document.getElementById('mobileError'),
  mobileErrorText: document.getElementById('mobileErrorText'),

  groupAge: document.getElementById('groupAge'),
  labelAge: document.getElementById('labelAge'),
  selectAge: document.getElementById('studentAge'),
  ageError: document.getElementById('ageError'),
  ageErrorText: document.getElementById('ageErrorText'),

  submitBtn: document.getElementById('submitBtn'),
  btnSpinner: document.getElementById('btnSpinner'),
  btnSendIcon: document.getElementById('btnSendIcon'),
  btnText: document.getElementById('btnText'),

  statusToast: document.getElementById('statusToast'),
  toastSuccessIcon: document.getElementById('toastSuccessIcon'),
  toastErrorIcon: document.getElementById('toastErrorIcon'),
  toastMessage: document.getElementById('toastMessage'),

  footerCallUs: document.getElementById('footerCallUs')
};

// 5. THEME SWITCHING
function applyTheme(theme) {
  state.theme = theme;
  DOM.html.setAttribute('data-theme', theme);
  localStorage.setItem('pedago_theme', theme);

  if (theme === 'dark') {
    DOM.sunIcon.style.display = 'block';
    DOM.moonIcon.style.display = 'none';
  } else {
    DOM.sunIcon.style.display = 'none';
    DOM.moonIcon.style.display = 'block';
  }
}

function toggleTheme() {
  const nextTheme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme(nextTheme);
}

// 6. LANGUAGE SWITCHING & DOM LOCALIZATION
function populateAgeDropdown(lang, preserveVal = '') {
  const t = translations[lang];
  const currentValue = preserveVal !== '' ? preserveVal : DOM.selectAge.value;

  DOM.selectAge.innerHTML = '';

  // Placeholder option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.disabled = true;
  defaultOption.selected = !currentValue;
  defaultOption.textContent = t.agePlaceholder;
  DOM.selectAge.appendChild(defaultOption);

  // Ages 3 through 18
  for (let age = 3; age <= 18; age++) {
    const opt = document.createElement('option');
    opt.value = age.toString();
    if (lang === 'bn') {
      opt.textContent = `${toBengaliNumber(age)}${t.ageSuffix}`;
    } else {
      opt.textContent = `${age}${t.ageSuffix}`;
    }
    if (currentValue === age.toString()) {
      opt.selected = true;
    }
    DOM.selectAge.appendChild(opt);
  }
}

function applyLanguage(lang) {
  state.lang = lang;
  DOM.html.setAttribute('lang', lang);
  localStorage.setItem('pedago_lang', lang);

  const t = translations[lang];

  // Document Title
  document.title = t.docTitle;

  // Header & Badges
  DOM.badgeText.textContent = t.badgeText;
  DOM.pageTitle.textContent = t.pageTitle;
  DOM.pageSubtitle.textContent = t.pageSubtitle;

  // Language buttons
  if (lang === 'bn') {
    DOM.langBtnBn.classList.add('active');
    DOM.langBtnBn.setAttribute('aria-pressed', 'true');
    DOM.langBtnEn.classList.remove('active');
    DOM.langBtnEn.setAttribute('aria-pressed', 'false');
  } else {
    DOM.langBtnEn.classList.add('active');
    DOM.langBtnEn.setAttribute('aria-pressed', 'true');
    DOM.langBtnBn.classList.remove('active');
    DOM.langBtnBn.setAttribute('aria-pressed', 'false');
  }

  // Name Field
  DOM.labelName.textContent = t.labelName;
  DOM.inputName.placeholder = t.namePlaceholder;

  // Mobile Field
  DOM.labelMobile.textContent = t.labelMobile;
  DOM.inputMobile.placeholder = t.mobilePlaceholder;
  DOM.mobileHint.textContent = t.mobileHint;

  // Age Field
  DOM.labelAge.textContent = t.labelAge;
  populateAgeDropdown(lang);

  // Submit Button
  if (!state.isSubmitting) {
    DOM.btnText.textContent = t.btnSubmit;
  } else {
    DOM.btnText.textContent = t.btnSubmitting;
  }

  // Footer
  DOM.footerCallUs.textContent = t.footerCallUs;

  // Update visible error messages if any are active
  if (DOM.groupName.classList.contains('has-error')) {
    validateName(false);
  }
  if (DOM.groupMobile.classList.contains('has-error')) {
    validateMobile(false);
  }
  if (DOM.groupAge.classList.contains('has-error')) {
    validateAge(false);
  }
}

// 7. TOAST NOTIFICATIONS
let toastTimer = null;
function showToast(type, message, duration = 6500) {
  if (toastTimer) clearTimeout(toastTimer);

  DOM.statusToast.className = 'status-toast show';
  DOM.toastMessage.textContent = message;

  if (type === 'success') {
    DOM.statusToast.classList.add('toast-success');
    DOM.toastSuccessIcon.style.display = 'block';
    DOM.toastErrorIcon.style.display = 'none';
  } else {
    DOM.statusToast.classList.add('toast-error');
    DOM.toastSuccessIcon.style.display = 'none';
    DOM.toastErrorIcon.style.display = 'block';
  }

  toastTimer = setTimeout(() => {
    DOM.statusToast.className = 'status-toast';
  }, duration);
}

function hideToast() {
  if (toastTimer) clearTimeout(toastTimer);
  DOM.statusToast.className = 'status-toast';
}

// 8. CLIENT-SIDE VALIDATION
// Bangladeshi phone number format: 11 digits starting with 01 (operators: 013, 014, 015, 016, 017, 018, 019)
const BD_PHONE_REGEX = /^01[3-9]\d{8}$/;

function validateName(focusOnError = false) {
  const val = DOM.inputName.value.trim();
  const t = translations[state.lang];

  if (!val) {
    DOM.groupName.classList.add('has-error');
    DOM.nameErrorText.textContent = t.nameErrorEmpty;
    if (focusOnError) DOM.inputName.focus();
    return false;
  }

  if (val.length < 2) {
    DOM.groupName.classList.add('has-error');
    DOM.nameErrorText.textContent = t.nameErrorShort;
    if (focusOnError) DOM.inputName.focus();
    return false;
  }

  DOM.groupName.classList.remove('has-error');
  return true;
}

function validateMobile(focusOnError = false) {
  const val = DOM.inputMobile.value.trim();
  const t = translations[state.lang];

  if (!val) {
    DOM.groupMobile.classList.add('has-error');
    DOM.mobileErrorText.textContent = t.mobileErrorEmpty;
    if (focusOnError) DOM.inputMobile.focus();
    return false;
  }

  if (!BD_PHONE_REGEX.test(val)) {
    DOM.groupMobile.classList.add('has-error');
    DOM.mobileErrorText.textContent = t.mobileErrorInvalid;
    if (focusOnError) DOM.inputMobile.focus();
    return false;
  }

  DOM.groupMobile.classList.remove('has-error');
  return true;
}

function validateAge(focusOnError = false) {
  const val = DOM.selectAge.value;
  const t = translations[state.lang];

  if (!val) {
    DOM.groupAge.classList.add('has-error');
    DOM.ageErrorText.textContent = t.ageErrorEmpty;
    if (focusOnError) DOM.selectAge.focus();
    return false;
  }

  DOM.groupAge.classList.remove('has-error');
  return true;
}

function clearErrorOnInput(groupEl) {
  groupEl.classList.remove('has-error');
}

// 9. FORM SUBMISSION HANDLER
async function handleSubmit(e) {
  e.preventDefault();
  hideToast();

  // Validate all fields
  const isNameValid = validateName(false);
  const isMobileValid = validateMobile(false);
  const isAgeValid = validateAge(false);

  if (!isNameValid) {
    validateName(true);
    return;
  }
  if (!isMobileValid) {
    validateMobile(true);
    return;
  }
  if (!isAgeValid) {
    validateAge(true);
    return;
  }

  const payload = {
    name: DOM.inputName.value.trim(),
    mobile: DOM.inputMobile.value.trim(),
    studentAge: DOM.selectAge.value
  };

  const t = translations[state.lang];

  // If SCRIPT_URL has not been set yet by the user
  if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE") {
    showToast('error', t.unconfiguredUrlToast, 8000);
    console.warn("Google Apps Script Web App URL is not yet configured. Form payload preview:", payload);
    return;
  }

  // Set submitting state
  state.isSubmitting = true;
  DOM.submitBtn.disabled = true;
  DOM.submitBtn.classList.add('loading');
  DOM.btnText.textContent = t.btnSubmitting;

  try {
    // Send fetch request with Content-Type: text/plain;charset=utf-8
    // This avoids CORS preflight OPTIONS request on Google Apps Script Web Apps
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    let result = null;
    try {
      result = await response.json();
    } catch (parseErr) {
      // If Apps Script returns an HTML redirect or opaque stream
      result = { result: response.ok ? "success" : "error" };
    }

    if (result && result.result === "success") {
      showToast('success', t.successToast);
      DOM.form.reset();
      populateAgeDropdown(state.lang); // Reset age select to placeholder
    } else {
      const errMsg = (result && result.message) ? result.message : t.errorToast;
      showToast('error', errMsg);
    }
  } catch (netErr) {
    console.error("Submission error:", netErr);
    showToast('error', t.errorToast);
  } finally {
    // Restore submit button state
    state.isSubmitting = false;
    DOM.submitBtn.disabled = false;
    DOM.submitBtn.classList.remove('loading');
    DOM.btnText.textContent = t.btnSubmit;
  }
}

// 10. INITIALIZATION & EVENT LISTENERS
function init() {
  // Apply saved theme & language
  applyTheme(state.theme);
  applyLanguage(state.lang);

  // Theme toggle listener
  DOM.themeToggleBtn.addEventListener('click', toggleTheme);

  // Language toggle listeners
  DOM.langBtnBn.addEventListener('click', () => applyLanguage('bn'));
  DOM.langBtnEn.addEventListener('click', () => applyLanguage('en'));

  // Live input error clearing & formatting
  DOM.inputName.addEventListener('input', () => clearErrorOnInput(DOM.groupName));

  DOM.inputMobile.addEventListener('input', (e) => {
    // Only allow numeric digits
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
    clearErrorOnInput(DOM.groupMobile);
  });

  DOM.selectAge.addEventListener('change', () => clearErrorOnInput(DOM.groupAge));

  // Form submit listener
  DOM.form.addEventListener('submit', handleSubmit);
}

// Bootstrap on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
