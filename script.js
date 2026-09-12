/**
 * ==============================================================================
 * PEDAGO ACADEMY - CAREER GUIDANCE LEADS & RIASEC PERSONALITY ASSESSMENT
 * Frontend Controller (Bilingual Bangla/English & Light/Dark Theme)
 * ==============================================================================
 */

// 1. DEPLOYED APPS SCRIPT WEB APP URL (Phase 1 Lead Capture)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwn_AdmqTW1Vk1DSMapI2VuG62QNRYI5cmO3WVZ595Kw2a90Y73zl2HKVb2ob_e4oIO/exec";

// 2. COMPLETE RIASEC QUESTION BANK (10 Questions, 6 Options A-F)
// Mapping: A = Realistic (R), B = Investigative (I), C = Artistic (A), D = Social (S), E = Enterprising (E), F = Conventional (C)
const questionBank = [
  {
    id: 1,
    bn: {
      question: "আপনার সন্তান নতুন কোনো খেলনা, যন্ত্র বা জিনিস হাতে পেলে সাধারণত কী করে?",
      options: [
        { letter: "A", type: "R", text: "কীভাবে কাজ করে তা নিজে করে দেখে বা খুলে দেখতে চায়।" },
        { letter: "B", type: "I", text: "কেন বা কীভাবে কাজ করে এ নিয়ে প্রশ্ন করতে থাকে।" },
        { letter: "C", type: "A", text: "সেটি দিয়ে নিজের মতো করে নতুন কিছু বানাতে বা তৈরি করতে চায়।" },
        { letter: "D", type: "S", text: "অন্যদের সঙ্গে নিয়ে খেলতে বা কাউকে দেখাতে বেশি আগ্রহী হয়।" },
        { letter: "E", type: "E", text: "খেলাটার নিয়ম নিজে ঠিক করতে বা অন্যদের নেতৃত্ব দিতে চায়।" },
        { letter: "F", type: "C", text: "কীভাবে ব্যবহার করতে হবে, সেই নির্দেশনা মেনে চলতে স্বাচ্ছন্দ্যবোধ করে।" }
      ]
    },
    en: {
      question: "When your child gets a new toy, gadget, or item, what do they usually do first?",
      options: [
        { letter: "A", type: "R", text: "Tries it out hands-on or takes it apart to see how it works." },
        { letter: "B", type: "I", text: "Keeps asking questions about why and how it works." },
        { letter: "C", type: "A", text: "Tries to invent or build something new with it in their own creative way." },
        { letter: "D", type: "S", text: "Eager to play with others or show it to friends and family." },
        { letter: "E", type: "E", text: "Wants to set the rules of the game or lead others." },
        { letter: "F", type: "C", text: "Prefers following the instruction manual and guidelines." }
      ]
    }
  },
  {
    id: 2,
    bn: {
      question: "আপনার সন্তান কোনো কাজ করতে গিয়ে সমস্যায় পড়লে সাধারণত কী করে?",
      options: [
        { letter: "A", type: "R", text: "নিজে হাতে বিভিন্নভাবে চেষ্টা করে সমাধান বের করতে চায়।" },
        { letter: "B", type: "I", text: "সমস্যাটা কেন হচ্ছে তা বোঝার চেষ্টা করে এবং কারণ খোঁজে।" },
        { letter: "C", type: "A", text: "অন্য কোনো নতুন উপায়ে কাজটি করার Idea বের করে।" },
        { letter: "D", type: "S", text: "কারও সঙ্গে আলোচনা করে বা সাহায্য নিয়ে সমাধান করতে চায়।" },
        { letter: "E", type: "E", text: "অন্যদের নিয়ে সমাধান বের করার উদ্যোগ নেয়।" },
        { letter: "F", type: "C", text: "নিয়ম বা নির্দেশনা দেখে ধাপে ধাপে আবার চেষ্টা করে।" }
      ]
    },
    en: {
      question: "When your child encounters a problem or hurdle, what do they usually do?",
      options: [
        { letter: "A", type: "R", text: "Tries multiple hands-on attempts to fix it practically." },
        { letter: "B", type: "I", text: "Analyzes why the problem occurred and searches for root causes." },
        { letter: "C", type: "A", text: "Comes up with an imaginative, out-of-the-box alternative idea." },
        { letter: "D", type: "S", text: "Discusses it with someone or asks for collaborative help." },
        { letter: "E", type: "E", text: "Takes the initiative to organize others to solve it together." },
        { letter: "F", type: "C", text: "Consults instructions or guidelines to retry step-by-step." }
      ]
    }
  },
  {
    id: 3,
    bn: {
      question: "অবসর সময়ে আপনার সন্তান কোন ধরনের কাজ বেছে নিতে বেশি আগ্রহী?",
      options: [
        { letter: "A", type: "R", text: "LEGO, Blocks, Model বা কোনো কিছু বানানো।" },
        { letter: "B", type: "I", text: "Science Experiment, Quiz, Puzzle বা Brain Game।" },
        { letter: "C", type: "A", text: "Drawing, Writing, Music, Storytelling বা Creative Activity।" },
        { letter: "D", type: "S", text: "বন্ধুদের সঙ্গে খেলাধুলা করা, কাউকে সাহায্য করা বা কিছু শেখানো।" },
        { letter: "E", type: "E", text: "কোনো খেলা বা Activity-এর নেতৃত্ব দেওয়া বা আয়োজন করা।" },
        { letter: "F", type: "C", text: "কিছু Organize করা, তালিকা তৈরি করা বা নিয়ম মেনে Activity করা।" }
      ]
    },
    en: {
      question: "What kind of activity does your child most prefer during free time?",
      options: [
        { letter: "A", type: "R", text: "Building with LEGO, blocks, models, or making crafts." },
        { letter: "B", type: "I", text: "Science experiments, quizzes, puzzles, or brain teasers." },
        { letter: "C", type: "A", text: "Drawing, creative writing, music, storytelling, or art." },
        { letter: "D", type: "S", text: "Playing with friends, helping others, or teaching something." },
        { letter: "E", type: "E", text: "Organizing games, leading activities, or planning events." },
        { letter: "F", type: "C", text: "Organizing personal belongings, making lists, or routine tasks." }
      ]
    }
  },
  {
    id: 4,
    bn: {
      question: "আপনার সন্তান কোনো নতুন বিষয় সম্পর্কে জানতে চাইলে সাধারণত কীভাবে এগিয়ে যায়?",
      options: [
        { letter: "A", type: "R", text: "নিজে করে বা ব্যবহার করে দেখে বুঝতে চায়।" },
        { letter: "B", type: "I", text: "“কেন?”, “কীভাবে?”, “এর কারণ কী?” এ ধরনের প্রশ্ন করতে থাকে।" },
        { letter: "C", type: "A", text: "নিজের কল্পনা ও চিন্তা দিয়ে বিষয়টিকে নতুনভাবে ভাবতে চায়।" },
        { letter: "D", type: "S", text: "কাউকে জিজ্ঞেস করে এবং আলোচনা করে জানতে চায়।" },
        { letter: "E", type: "E", text: "নিজের মতামত প্রকাশ করে এবং অন্যদের সঙ্গে আলোচনা করতে চায়।" },
        { letter: "F", type: "C", text: "বই, নির্দেশনা বা নির্ভরযোগ্য তথ্য দেখে ধাপে ধাপে জানতে চায়।" }
      ]
    },
    en: {
      question: "How does your child typically approach learning about a new topic?",
      options: [
        { letter: "A", type: "R", text: "Prefers learning by doing, testing, and touching directly." },
        { letter: "B", type: "I", text: "Constantly asks 'Why?', 'How?', and 'What is the reason?'." },
        { letter: "C", type: "A", text: "Envisions it through imagination and creative perspectives." },
        { letter: "D", type: "S", text: "Asks people and enjoys conversational discussions." },
        { letter: "E", type: "E", text: "Shares opinions boldly and engages others in discussion." },
        { letter: "F", type: "C", text: "Follows books, structured guides, and reliable facts step-by-step." }
      ]
    }
  },
  {
    id: 5,
    bn: {
      question: "কোনো Group Activity-তে আপনার সন্তান সাধারণত কোন ভূমিকা নিতে বেশি আগ্রহী?",
      options: [
        { letter: "A", type: "R", text: "কীভাবে কাজটি বাস্তবে করা যায়, সেটা নিয়ে ব্যস্ত থাকে।" },
        { letter: "B", type: "I", text: "সমস্যাটা কোথায় এবং কীভাবে সমাধান করা যায় তা খুঁজে দেখে।" },
        { letter: "C", type: "A", text: "নতুন Idea দেয় বা কাজটিকে অন্যভাবে করার প্রস্তাব দেয়।" },
        { letter: "D", type: "S", text: "সবাই যেন ভালোভাবে কাজ করতে পারে, সেটা দেখার চেষ্টা করে।" },
        { letter: "E", type: "E", text: "নেতৃত্ব নেয়, কাজ ভাগ করে দেয় বা সিদ্ধান্ত নিতে চায়।" },
        { letter: "F", type: "C", text: "কে কী করবে, কখন করবে এসব গুছিয়ে রাখতে চায়।" }
      ]
    },
    en: {
      question: "In a group activity, which role does your child naturally gravitate toward?",
      options: [
        { letter: "A", type: "R", text: "Focuses on the practical execution and physical work." },
        { letter: "B", type: "I", text: "Analyzes obstacles and investigates optimal solutions." },
        { letter: "C", type: "A", text: "Pitches novel ideas and suggests imaginative twists." },
        { letter: "D", type: "S", text: "Ensures everyone gets along and cooperates harmoniously." },
        { letter: "E", type: "E", text: "Takes charge, delegates tasks, and makes decisions." },
        { letter: "F", type: "C", text: "Keeps schedules, manages checklists, and organizes roles." }
      ]
    }
  },
  {
    id: 6,
    bn: {
      question: "আপনার সন্তান কোনো কাজ নিজে করতে গিয়ে ভুল করলে সাধারণত কী করে?",
      options: [
        { letter: "A", type: "R", text: "আবার হাতে-কলমে চেষ্টা করে দেখে কোথায় সমস্যা হয়েছে।" },
        { letter: "B", type: "I", text: "ভুলটা কেন হয়েছে তা বোঝার চেষ্টা করে।" },
        { letter: "C", type: "A", text: "অন্যভাবে করার নতুন Idea বের করে।" },
        { letter: "D", type: "S", text: "কারও সঙ্গে কথা বলে বা সাহায্য নিয়ে আবার চেষ্টা করে।" },
        { letter: "E", type: "E", text: "নতুন পরিকল্পনা করে এবং অন্যদেরও উৎসাহ দেয়।" },
        { letter: "F", type: "C", text: "কী ভুল হয়েছে তা খুঁজে নিয়ম অনুযায়ী ঠিক করার চেষ্টা করে।" }
      ]
    },
    en: {
      question: "When making a mistake while working on something, what do they usually do?",
      options: [
        { letter: "A", type: "R", text: "Retries hands-on to see where the physical error occurred." },
        { letter: "B", type: "I", text: "Seeks to comprehend the logical reason behind the mistake." },
        { letter: "C", type: "A", text: "Pivots to a completely fresh, creative direction." },
        { letter: "D", type: "S", text: "Talks to someone or seeks guidance to retry comfortably." },
        { letter: "E", type: "E", text: "Formulates a new plan and motivates peers to keep going." },
        { letter: "F", type: "C", text: "Pinpoints the error against standard rules to fix it methodically." }
      ]
    }
  },
  {
    id: 7,
    bn: {
      question: "আপনার সন্তানকে নিজের মতো করে কোনো Project করার সুযোগ দিলে কোন কাজটি তার বেশি ভালো লাগতে পারে?",
      options: [
        { letter: "A", type: "R", text: "কিছু তৈরি করা, জোড়া লাগানো বা বাস্তবে কাজটি সম্পন্ন করা।" },
        { letter: "B", type: "I", text: "তথ্য খোঁজা, Experiment করা বা কোনো সমস্যার সমাধান করা।" },
        { letter: "C", type: "A", text: "Design করা বা নিজের Creative Idea প্রকাশ করা।" },
        { letter: "D", type: "S", text: "অন্যদের সঙ্গে কাজ করা, শেখানো বা সাহায্য করা।" },
        { letter: "E", type: "E", text: "পরিকল্পনা করা, নেতৃত্ব দেওয়া এবং Project পরিচালনা করা।" },
        { letter: "F", type: "C", text: "তথ্য সাজানো, পরিকল্পনা করা এবং কাজটি সঠিকভাবে সম্পন্ন করা।" }
      ]
    },
    en: {
      question: "If given the freedom to do an independent project, what would they enjoy most?",
      options: [
        { letter: "A", type: "R", text: "Building, assembling, or crafting a tangible physical product." },
        { letter: "B", type: "I", text: "Researching data, conducting experiments, or solving a puzzle." },
        { letter: "C", type: "A", text: "Designing, illustrating, or expressing creative artwork." },
        { letter: "D", type: "S", text: "Collaborating with peers, mentoring, or helping others." },
        { letter: "E", type: "E", text: "Pitching, strategizing, and leading the project execution." },
        { letter: "F", type: "C", text: "Structuring data, maintaining timeline, and executing accurately." }
      ]
    }
  },
  {
    id: 8,
    bn: {
      question: "আপনার সন্তানকে নতুন কোনো Skill শেখাতে হলে কোন পদ্ধতিতে সে বেশি স্বাচ্ছন্দ্যবোধ করে?",
      options: [
        { letter: "A", type: "R", text: "দেখিয়ে দিলে নিজে করে করে শিখতে।" },
        { letter: "B", type: "I", text: "বিষয়টির কারণ ও Logic বুঝে শিখতে।" },
        { letter: "C", type: "A", text: "নিজের মতো করে Experiment ও Creativity ব্যবহার করতে।" },
        { letter: "D", type: "S", text: "কারও কাছ থেকে শিখতে এবং অন্যের সঙ্গে Practice করতে।" },
        { letter: "E", type: "E", text: "Challenge বা Competition-এর মাধ্যমে শিখতে।" },
        { letter: "F", type: "C", text: "Step-by-Step Instruction অনুসরণ করে শিখতে।" }
      ]
    },
    en: {
      question: "When acquiring a new skill, which learning method feels most natural to them?",
      options: [
        { letter: "A", type: "R", text: "Demonstration followed by self-paced hands-on practice." },
        { letter: "B", type: "I", text: "Understanding the underlying logic, science, and reasoning first." },
        { letter: "C", type: "A", text: "Experimenting freely and applying personal creativity." },
        { letter: "D", type: "S", text: "Interactive learning with mentors and peer practice." },
        { letter: "E", type: "E", text: "Excelling through gamified challenges and friendly competition." },
        { letter: "F", type: "C", text: "Following structured, step-by-step tutorials sequentially." }
      ]
    }
  },
  {
    id: 9,
    bn: {
      question: "আপনার সন্তান নতুন কোনো জায়গা বা পরিবেশে গেলে সাধারণত কী করে?",
      options: [
        { letter: "A", type: "R", text: "আশেপাশের জিনিসগুলো দেখে, স্পর্শ করে বা ব্যবহার করে দেখতে চায়।" },
        { letter: "B", type: "I", text: "জায়গাটি সম্পর্কে প্রশ্ন করে এবং নতুন কিছু জানতে চায়।" },
        { letter: "C", type: "A", text: "নতুন পরিবেশ দেখে নিজের মতো গল্প বা কল্পনা তৈরি করে।" },
        { letter: "D", type: "S", text: "দ্রুত মানুষের সঙ্গে পরিচিত হতে এবং কথা বলতে চায়।" },
        { letter: "E", type: "E", text: "অন্যদের সঙ্গে কী করা যায় বা কীভাবে সময় কাটানো যায় তার উদ্যোগ নেয়।" },
        { letter: "F", type: "C", text: "জায়গাটির নিয়ম-কানুন বা কীভাবে কী করতে হবে তা আগে বুঝে নিতে চায়।" }
      ]
    },
    en: {
      question: "When visiting a new place or environment, what does your child usually do?",
      options: [
        { letter: "A", type: "R", text: "Explores tangible objects, touching or interacting with them." },
        { letter: "B", type: "I", text: "Inquires about the history, function, or nature of the place." },
        { letter: "C", type: "A", text: "Draws imaginative stories inspired by the ambience." },
        { letter: "D", type: "S", text: "Quickly strikes up conversations and befriends people." },
        { letter: "E", type: "E", text: "Takes charge of suggesting activities to do together." },
        { letter: "F", type: "C", text: "Checks the guidelines, map, or schedule to navigate properly." }
      ]
    }
  },
  {
    id: 10,
    bn: {
      question: "আপনার সন্তানকে একটি দায়িত্ব দিলে তার মধ্যে কোন আচরণটি বেশি দেখা যায়?",
      options: [
        { letter: "A", type: "R", text: "দায়িত্বটি কীভাবে বাস্তবে সম্পন্ন করা যায়, সেটা নিয়ে কাজ শুরু করে।" },
        { letter: "B", type: "I", text: "কাজটি ভালোভাবে করার জন্য তথ্য ও প্রয়োজনীয় বিষয়গুলো খুঁজে দেখে।" },
        { letter: "C", type: "A", text: "দায়িত্বটি নিজের মতো করে করার নতুন Idea বের করে।" },
        { letter: "D", type: "S", text: "অন্যদের সঙ্গে আলোচনা করে এবং প্রয়োজনে সাহায্য নেয়।" },
        { letter: "E", type: "E", text: "নিজেই সিদ্ধান্ত নেয় এবং প্রয়োজনে অন্যদেরও কাজে যুক্ত করে।" },
        { letter: "F", type: "C", text: "আগে পরিকল্পনা করে, তারপর নিয়ম মেনে কাজটি শেষ করে।" }
      ]
    },
    en: {
      question: "When assigned a task or responsibility, how do they typically proceed?",
      options: [
        { letter: "A", type: "R", text: "Gets right into physical action to execute it practically." },
        { letter: "B", type: "I", text: "Researches facts and gathers information to do it thoroughly." },
        { letter: "C", type: "A", text: "Finds unique and inventive ways to deliver creative results." },
        { letter: "D", type: "S", text: "Consults teammates and cooperates closely throughout." },
        { letter: "E", type: "E", text: "Makes bold decisions and coordinates peers to get it done." },
        { letter: "F", type: "C", text: "Plans first, organizing every detail systematically to completion." }
      ]
    }
  }
];

// 3. COMPLETE RIASEC GUIDELINES REPOSITORY (All 6 Personalities)
const riasecGuidelines = {
  R: {
    code: "R",
    icon: "🛠️",
    bn: {
      name: "Realistic",
      title: "01 — REALISTIC",
      subtitle: "হাতে-কলমে কাজ ও Practical Thinking",
      description: "Realistic Personality-এর শিশুরা সাধারণত কিছু করা, বানানো, ব্যবহার করা বা বাস্তবে প্রয়োগ করার মাধ্যমে শেখা ও কাজ করতে বেশি স্বাচ্ছন্দ্যবোধ করতে পারে।",
      observedTraits: [
        "কিছু খুলে দেখা বা কীভাবে কাজ করে তা বোঝার চেষ্টা",
        "LEGO, Blocks বা Building Activity-এর প্রতি গভীর আগ্রহ",
        "হাতে-কলমে কাজ ও প্র্যাক্টিক্যাল কর্মকাণ্ডে উৎসাহ",
        "Practical problem solving-এ আনন্দ পাওয়া",
        "“নিজে করে দেখলে” দ্রুত ও নিখুঁত বুঝতে পারা"
      ],
      doList: [
        "LEGO ও Building Activity-এর সুযোগ দিন",
        "বাস্তব ছোট ছোট Project তৈরি করতে দিন",
        "Science & Making Activity-তে যুক্ত রাখুন",
        "হাতে-কলমে সরাসরি শেখার সুযোগ তৈরি করুন",
        "ভুল করে নিজে নিজে শেখার স্বাধীনতা দিন"
      ],
      avoidList: [
        "সবসময় “বসে পড়ো” ধরনের একঘেয়ে learning চাপিয়ে দেওয়া",
        "কোনো কিছু খুলে দেখলে বা মেরামত করতে গেলে সঙ্গে সঙ্গে বকা দেওয়া",
        "সন্তানের Practical interest-কে শুধুই “দুষ্টুমি” হিসেবে গণ্য করা"
      ],
      careers: [
        "Engineering", "Architecture", "Aviation", "Technical Fields", "Construction", "Agriculture", "Practical/Hands-on Professions"
      ]
    },
    en: {
      name: "Realistic",
      title: "01 — REALISTIC",
      subtitle: "Hands-on Work & Practical Thinking",
      description: "Children with a Realistic Personality thrive through tangible action, building, manipulating tools, and applying knowledge practically.",
      observedTraits: [
        "Tinkering with objects to explore how they operate",
        "High affinity for LEGO, building blocks, and construction toys",
        "Eagerness for hands-on, active real-world tasks",
        "Natural inclination toward practical problem-solving",
        "Absorbs concepts best through experiential practice"
      ],
      doList: [
        "Provide LEGO and hands-on building sets",
        "Assign mini DIY projects around the house",
        "Engage in interactive science and maker activities",
        "Create tactile, experiential learning opportunities",
        "Allow room for trial, error, and discovery"
      ],
      avoidList: [
        "Forcing purely sedentary, static rote study methods",
        "Scolding curiosity when they take things apart to explore",
        "Dismissing practical exploration as mere mischief"
      ],
      careers: [
        "Engineering", "Architecture", "Aviation", "Technical Fields", "Construction", "Agriculture", "Practical/Hands-on Professions"
      ]
    }
  },
  I: {
    code: "I",
    icon: "🔬",
    bn: {
      name: "Investigative",
      title: "02 — INVESTIGATIVE",
      subtitle: "কৌতূহলী, বিশ্লেষণধর্মী ও Problem-Solving Mind",
      description: "Investigative Personality-এর শিশুরা সাধারণত কোনো বিষয় শুধু জানার চেয়ে কেন এবং কীভাবে কাজটি হচ্ছে তা গভীরভাবে বুঝতে আগ্রহী হয়।",
      observedTraits: [
        "বারবার “কেন?” ও “কীভাবে?” প্রশ্ন করা",
        "যেকোনো সমস্যার মূল কারণ ও কার্যকারণ খোঁজা",
        "Puzzle, ধাঁধাঁ বা Brain Game খুব পছন্দ করা",
        "Experiment ও বৈজ্ঞানিক নিরীক্ষা করতে আগ্রহী হওয়া",
        "সন্তোষজনক উত্তর না পাওয়া পর্যন্ত কৌতূহল ধরে রাখা"
      ],
      doList: [
        "প্রশ্ন করার কৌতূহলকে মন খুলে উৎসাহ দিন",
        "Science Experiment ও অনুসন্ধানী কাজ করতে দিন",
        "Puzzle ও Problem-solving Activity উপহার দিন",
        "“চলো, উত্তরটা একসাথে খুঁজে দেখি”—এই দৃষ্টিভঙ্গি রাখুন",
        "বই, এনসাইক্লোপিডিয়া ও নির্ভরযোগ্য তথ্য খোঁজার সুযোগ দিন"
      ],
      avoidList: [
        "“এত প্রশ্ন করো কেন?” বলে থামিয়ে দেওয়া",
        "সব কৌতূহলী প্রশ্নের উত্তর না দিয়ে এড়িয়ে যাওয়া",
        "শুধু মুখস্থনির্ভর পড়াশোনার সীমানায় আটকে রাখা"
      ],
      careers: [
        "Science", "Medicine", "Engineering", "Research", "Programming", "Data Science", "Economics", "Analytical Fields"
      ]
    },
    en: {
      name: "Investigative",
      title: "02 — INVESTIGATIVE",
      subtitle: "Inquisitive, Analytical & Problem-Solving Mind",
      description: "Children with an Investigative Personality are driven to understand the fundamental mechanics, logic, and reasons behind everything.",
      observedTraits: [
        "Inquisitively asking 'Why?' and 'How?' repeatedly",
        "Investigating the root cause behind problems",
        "Loves brain teasers, riddles, logic games, and puzzles",
        "Eagerness to test theories through experiments",
        "Relentlessly researches until satisfied with the answer"
      ],
      doList: [
        "Enthusiastically encourage their inquisitive questioning",
        "Provide home science experiments and discovery kits",
        "Introduce analytical puzzles and logic challenges",
        "Use collaborative prompts like 'Let's discover the answer together'",
        "Offer access to informative books, documentaries, and research tools"
      ],
      avoidList: [
        "Dismissing their queries with 'Why do you ask so many questions?'",
        "Shutting down curiosity without guiding them to answers",
        "Restricting their education to rote memorization"
      ],
      careers: [
        "Science", "Medicine", "Engineering", "Research", "Programming", "Data Science", "Economics", "Analytical Fields"
      ]
    }
  },
  A: {
    code: "A",
    icon: "🎨",
    bn: {
      name: "Artistic",
      title: "03 — ARTISTIC",
      subtitle: "সৃজনশীলতা, Imagination ও Self-Expression",
      description: "Artistic Personality-এর শিশুরা সাধারণত নতুন কিছু তৈরি করা এবং নিজের চিন্তা, কল্পনা ও অনুভূতি প্রকাশ করার মাধ্যমে মানসিক আনন্দ পায়।",
      observedTraits: [
        "নতুন জিনিস আঁকা, ক্রাফট বানানো বা ডিজাইন করা",
        "উচ্চ কল্পনাপ্রবণতা ও নিজের মতো গল্প তৈরি করা",
        "রং, সুর, ছন্দ ও সৌন্দর্যের প্রতি গভীর সংবেদনশীলতা",
        "স্বকীয়তা ও ব্যতিক্রমী চিন্তা প্রকাশে স্বাচ্ছন্দ্য",
        "প্রচলিত ছকের বাইরে গিয়ে কিছু করার প্রবল চেষ্টা"
      ],
      doList: [
        "Drawing, Writing, Music, Craft ও শিল্পের সুযোগ দিন",
        "নিজের পছন্দমতো Creative Project করতে দিন",
        "সন্তানকে তার নিজস্ব Idea স্বাধীনভাবে প্রকাশে উৎসাহ দিন",
        "“একমাত্র সঠিক উত্তর” ছাড়াও ভিন্ন ভিন্ন দৃষ্টিকোণ থেকে ভাবার সুযোগ দিন"
      ],
      avoidList: [
        "সবসময় অন্যের কাজের সাথে সন্তানের Creativity তুলনা করা",
        "সৃজনশীল বা শিল্পকর্মকে “অযথা সময় নষ্ট” হিসেবে আখ্যা দেওয়া",
        "একটিমাত্র বাঁধাধরা নির্দিষ্ট পদ্ধতিতে কাজ করতে বাধ্য করা"
      ],
      careers: [
        "Design", "Architecture", "Writing", "Media", "Animation", "Fashion", "Music", "Creative Industries"
      ]
    },
    en: {
      name: "Artistic",
      title: "03 — ARTISTIC",
      subtitle: "Creativity, Imagination & Self-Expression",
      description: "Children with an Artistic Personality discover fulfillment through originality, creative storytelling, visual design, and open self-expression.",
      observedTraits: [
        "Passionate about drawing, painting, crafting, or designing",
        "Rich imagination and spontaneous narrative creation",
        "Keen sensitivity to color, melody, aesthetics, and rhythm",
        "Values individuality and unconventional ideas",
        "Thinks outside established frameworks comfortably"
      ],
      doList: [
        "Provide ample access to art supplies, music, and writing journals",
        "Support self-directed creative projects",
        "Encourage original ideas without judging standard correctness",
        "Embrace diverse creative perspectives beyond one 'right' answer"
      ],
      avoidList: [
        "Comparing their unique artistic style with others",
        "Devaluing creative endeavors as a 'waste of study time'",
        "Imposing rigid, formulaic methods that stifle artistic flair"
      ],
      careers: [
        "Design", "Architecture", "Writing", "Media", "Animation", "Fashion", "Music", "Creative Industries"
      ]
    }
  },
  S: {
    code: "S",
    icon: "🤝",
    bn: {
      name: "Social",
      title: "04 — SOCIAL",
      subtitle: "মানুষকে সাহায্য করা, শেখানো ও যোগাযোগ",
      description: "Social Personality-এর শিশুরা সাধারণত মানুষের সঙ্গে কাজ করা, সহমর্মিতা দেখানো, অন্যকে সাহায্য করা, শেখানো এবং যোগাযোগ করতে স্বাচ্ছন্দ্যবোধ করে।",
      observedTraits: [
        "সহজেই বন্ধুদের সঙ্গে মেশা ও আলাপচারিতা উপভোগ করা",
        "অন্যদের সমস্যা বা কষ্টে সহযোগিতার হাত বাড়িয়ে দেওয়া",
        "ছোটদের বা সহপাঠীদের কোনো কিছু স্নেহভরে শেখানো",
        "দলগত কর্মকাণ্ডে সম্প্রীতি ও একাত্মতা বজায় রাখা",
        "অন্যের অনুভূতি ও মানসিক অবস্থা সহজেই উপলব্ধি করতে পারা"
      ],
      doList: [
        "Group Activity ও দলগত খেলায় অংশগ্রহণের সুযোগ দিন",
        "অন্য বন্ধুদের বা ছোট ভাইবোনকে শেখানোর সুযোগ দিন",
        "Teamwork ও পারস্পরিক সহযোগিতার সুস্থ অভ্যাস গড়ে তুলুন",
        "Communication Skill ও সক্রিয় শোনার অভ্যাস বাড়াতে সহায়তা করুন"
      ],
      avoidList: [
        "সবসময় একা একা বা ঘরে একা বসে কাজ করতে বাধ্য করা",
        "সন্তানের সহানুভূতি ও empathy-কে দুর্বলতা মনে করা",
        "সামাজিক মেলামেশা ও বন্ধুত্বের সুযোগ অতিরিক্ত সীমিত করে দেওয়া"
      ],
      careers: [
        "Teaching", "Medicine", "Psychology", "Counseling", "Human Resources", "Social Work", "Communication-based Professions"
      ]
    },
    en: {
      name: "Social",
      title: "04 — SOCIAL",
      subtitle: "Helping, Mentoring & Human Connection",
      description: "Children with a Social Personality flourish in collaborative environments, enjoying helping, teaching, and connecting with peers.",
      observedTraits: [
        "Naturally friendly, empathetic, and communicative",
        "Quick to assist peers when they are struggling or sad",
        "Enjoys explaining lessons or mentoring younger children",
        "Fosters harmony in group play and teamwork",
        "High emotional intelligence and intuitive empathy"
      ],
      doList: [
        "Encourage team sports, clubs, and group activities",
        "Provide opportunities to peer-tutor or teach",
        "Cultivate cooperative teamwork and collaboration",
        "Support effective listening and interpersonal communication skills"
      ],
      avoidList: [
        "Forcing prolonged solitary confinement during study",
        "Misinterpreting deep empathy as emotional weakness",
        "Overly restricting healthy peer interactions and social bonds"
      ],
      careers: [
        "Teaching", "Medicine", "Psychology", "Counseling", "Human Resources", "Social Work", "Communication-based Professions"
      ]
    }
  },
  E: {
    code: "E",
    icon: "🚀",
    bn: {
      name: "Enterprising",
      title: "05 — ENTERPRISING",
      subtitle: "Leadership, Initiative ও Decision-Making",
      description: "Enterprising Personality-এর শিশুরা সাধারণত উদ্যোগ নেওয়া, আত্মবিশ্বাসের সাথে সিদ্ধান্ত নেওয়া, অন্যকে প্রভাবিত করা এবং নেতৃত্ব দিতে আগ্রহী হতে পারে।",
      observedTraits: [
        "যেকোনো খেলায় দলনেতা হওয়ার বা নেতৃত্ব দেওয়ার দৃঢ় ইচ্ছা",
        "নিজের মতামত নির্ভীক ও জোরালোভাবে উপস্থাপন করা",
        "নতুন কোনো কাজের স্বতঃস্ফূর্ত উদ্যোগ গ্রহণ ও পরিকল্পনা",
        "বন্ধুদের কোনো লক্ষ্যে উদ্বুদ্ধ ও সংগঠিত করার সহজাত দক্ষতা",
        "চ্যালেঞ্জ গ্রহণ ও প্রতিযোগিতায় স্বতঃস্ফূর্ত অংশগ্রহণ"
      ],
      doList: [
        "ঘরের বা স্কুলের ছোট ছোট দায়িত্ব পালনের সুযোগ দিন",
        "Leadership opportunity ও দল পরিচালনার সুযোগ তৈরি করুন",
        "ছোটখাটো বিষয়ে নিজে সিদ্ধান্ত নেওয়ার (Decision-making) অভ্যাস করান",
        "Team Project-এর নেতৃত্বের দায়িত্ব তাদের ওপর ছেড়ে দিন"
      ],
      avoidList: [
        "সব সিদ্ধান্ত সবসময় অভিভাবক নিজেই নিয়ে দেওয়া",
        "সন্তান স্বতঃস্ফূর্ত উদ্যোগ নিলে “বেশি কথা বলছ” বলে থামিয়ে দেওয়া",
        "Leadership-কে ইতিবাচক সেবার বদলে শুধুই কর্তৃত্ব খাটানো হিসেবে শেখানো"
      ],
      careers: [
        "Entrepreneurship", "Business", "Management", "Sales", "Marketing", "Leadership", "Public Relations"
      ]
    },
    en: {
      name: "Enterprising",
      title: "05 — ENTERPRISING",
      subtitle: "Leadership, Initiative & Decision-Making",
      description: "Children with an Enterprising Personality are bold initiators who love leading peers, taking charge, persuading others, and driving goals.",
      observedTraits: [
        "Natural inclination to assume leadership in games",
        "Assertively voices viewpoints with poise and confidence",
        "Proactively initiates new plans, clubs, or projects",
        "Talent for persuading and mobilizing peers toward a goal",
        "Energized by healthy competition and ambitious challenges"
      ],
      doList: [
        "Entrust them with real household and group responsibilities",
        "Provide leadership roles in student clubs and projects",
        "Foster decision-making and problem prioritization practice",
        "Guide them in managing and motivating team efforts"
      ],
      avoidList: [
        "Making every single choice for them without consulting their voice",
        "Silencing bold initiative by accusing them of being 'too talkative'",
        "Conflating positive leadership with authoritarian dominance"
      ],
      careers: [
        "Entrepreneurship", "Business", "Management", "Sales", "Marketing", "Leadership", "Public Relations"
      ]
    }
  },
  C: {
    code: "C",
    icon: "📋",
    bn: {
      name: "Conventional",
      title: "06 — CONVENTIONAL",
      subtitle: "Organized, Structured ও Detail-Oriented",
      description: "Conventional Personality-এর শিশুরা সাধারণত নিয়ম, কাঠামো, সময়ানুবর্তিতা, সুনির্দিষ্ট তথ্য এবং পরিপাটিভাবে গুছিয়ে কাজ করার ক্ষেত্রে স্বাচ্ছন্দ্যবোধ করে।",
      observedTraits: [
        "নিজের জিনিসপত্র, বইখাতা ও ঘর নিয়মমাফিক গুছিয়ে রাখা",
        "রুটিন, নিয়ম ও নির্দেশিকা অত্যন্ত দায়িত্বশীলভাবে মেনে চলা",
        "তালিকা (List) বানানো বা চেকলিস্ট অনুসরণ করে কাজ করা",
        "নির্ভুলভাবে ও যত্নের সাথে যেকোনো কাজ শেষ করার মানসিকতা",
        "শৃঙ্খলাবদ্ধ ও পূর্বাভাসযোগ্য পরিবেশে সবচেয়ে ভালো কাজ করা"
      ],
      doList: [
        "দৈনন্দিন সুশৃঙ্খল Routine তৈরি ও বজায় রাখতে সহায়তা করুন",
        "কাজের জন্য চেকলিস্ট (Checklist) বা প্ল্যানার ব্যবহারের সুযোগ দিন",
        "Planning ও Organizing সংক্রান্ত কর্মকাণ্ডের দায়িত্ব দিন",
        "Step-by-step ধাপে ধাপে শেখার কাঠামো ব্যবহার করুন"
      ],
      avoidList: [
        "পূর্বপ্রস্তুতি ছাড়া হঠাৎ করে নিয়ম বা কাজের ধারা অগোছালো করে দেওয়া",
        "সন্তানের শৃঙ্খলা ও গোছানোর আগ্রহকে গুরুত্বহীন ভাবা",
        "ছোটখাটো ভুলের জন্য অতিরিক্ত সমালোচনা বা মানসিক চাপ দেওয়া"
      ],
      careers: [
        "Accounting", "Finance", "Administration", "Data Management", "Banking", "Documentation", "Operations"
      ]
    },
    en: {
      name: "Conventional",
      title: "06 — CONVENTIONAL",
      subtitle: "Organized, Structured & Detail-Oriented",
      description: "Children with a Conventional Personality excel in systematic, organized, and reliable environments with clear structure and standards.",
      observedTraits: [
        "Keeps study desk, books, and belongings neatly ordered",
        "Respects routines, rules, and established procedures",
        "Enjoys creating schedules, checklists, and inventories",
        "Attention to detail and drive for neat, accurate execution",
        "Performs at peak potential in predictable, structured settings"
      ],
      doList: [
        "Help establish structured daily timetables and study routines",
        "Provide organizational planners, calendars, and checklists",
        "Involve them in categorization, scheduling, and cataloging tasks",
        "Present lessons through clear, step-by-step structural paths"
      ],
      avoidList: [
        "Disrupting routines abruptly without advance heads-up",
        "Underestimating the value of their organizational neatness",
        "Over-penalizing occasional errors with harsh perfectionist pressure"
      ],
      careers: [
        "Accounting", "Finance", "Administration", "Data Management", "Banking", "Documentation", "Operations"
      ]
    }
  }
};

// 4. BILINGUAL UI DICTIONARY
const translations = {
  bn: {
    docTitle: "আপনার সন্তানের Personality কোন ধরনের? - Pedago Career Guidance",
    badgeText: "PEDAGO CAREER GUIDANCE",
    pageTitle: "আপনার সন্তানের Personality কোন ধরনের?",
    pageSubtitle: "John Holland-এর RIASEC Model-এর আলোকে Parent Observation Assessment",

    introP1: "প্রতিটি শিশুর Personality, পছন্দ ও কাজের ধরন আলাদা। কেউ হাতে-কলমে কাজ করতে ভালোবাসে, কেউ জানতে চায় “কেন” ও “কীভাবে”, কেউ সৃজনশীল, কেউ সাহায্য করতে বা নেতৃত্ব দিতে পছন্দ করে।",
    introP2: "এই ১০টি প্রশ্ন আপনার সন্তানের দৈনন্দিন আচরণ ও পছন্দের ওপর ভিত্তি করে তৈরি। আপনার সন্তানের সঙ্গে সবচেয়ে বেশি মিলে যায় এমন উত্তরটি নির্বাচন করুন।",
    noteTag: "নোট:",
    noteText: "এটি কোনো Clinical Psychological Test বা Career Prediction নয়; বরং সন্তানকে আরও ভালোভাবে বুঝতে একটি Parent Observation & Career Guidance Tool। সময় নিয়ে প্রতিটি প্রশ্নের উত্তর দিন—আপনার প্রতিটি উত্তরই সন্তানের Personality বুঝতে গুরুত্বপূর্ণ।",

    formStartTitle: "START করার আগে — অভিভাবকের তথ্য",

    labelParentName: "অভিভাবকের নাম",
    placeholderParentName: "অভিভাবকের পূর্ণ নাম লিখুন",
    errorParentNameEmpty: "অনুগ্রহ করে অভিভাবকের নাম লিখুন।",
    errorParentNameShort: "অভিভাবকের নাম কমপক্ষে ২ অক্ষরের হতে হবে।",

    labelStudentName: "সন্তানের নাম",
    placeholderStudentName: "সন্তানের পূর্ণ নাম লিখুন",
    errorStudentNameEmpty: "অনুগ্রহ করে সন্তানের নাম লিখুন।",
    errorStudentNameShort: "সন্তানের নাম কমপক্ষে ২ অক্ষরের হতে হবে।",

    labelStudentAge: "সন্তানের বয়স",
    placeholderStudentAge: "যেমন: ১০",
    errorStudentAgeEmpty: "অনুগ্রহ করে বয়স লিখুন।",
    errorStudentAgeInvalid: "সঠিক বয়স দিন (১ থেকে ৯৯ এর মধ্যে)।",

    labelStudentClass: "সন্তানের শ্রেণি",
    placeholderStudentClass: "যেমন: ৪র্থ শ্রেণি / Class 4",
    errorStudentClassEmpty: "অনুগ্রহ করে শ্রেণি উল্লেখ করুন।",

    labelMobile: "মোবাইল নম্বর",
    placeholderMobile: "01XXXXXXXXX",
    mobileHint: "১১ ডিজিটের বাংলাদেশি মোবাইল নম্বর (যেমন: 01712345678)",
    errorMobileEmpty: "অনুগ্রহ করে মোবাইল নম্বর লিখুন।",
    errorMobileInvalid: "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (01XXXXXXXXX)।",

    btnSubmit: "শুরু করুন →",
    btnSubmitting: "অপেক্ষা করুন...",

    successToast: "ধন্যবাদ! তথ্য সফলভাবে জমা হয়েছে। মূল্যায়ন জরিপ শুরু হচ্ছে...",
    errorToast: "দুঃখিত! তথ্য জমা দেওয়া সম্ভব হয়নি। অনুগ্রহ করে ইন্টারনেট কানেকশন চেক করে আবার চেষ্টা করুন।",
    unconfiguredUrlToast: "দয়া করে প্রথমে Google Apps Script ডিপ্লয় করে প্রাপ্ত Web App URL-টি script.js-এর SCRIPT_URL ভ্যারিয়েবলে পেস্ট করুন।",

    footerCallUs: "যে কোনো তথ্যের জন্য কল করুন:",

    // Stepper translations
    assessmentSectionTag: "PERSONALITY ASSESSMENT",
    qInstruction: "আপনার সন্তানের সঙ্গে সবচেয়ে বেশি মিলে যায় এমন উত্তরটি নির্বাচন করুন:",
    btnPrev: "পূর্ববর্তী",
    btnNext: "পরবর্তী",
    btnFinish: "আপনার সন্তানের Personality Profile দেখুন →",
    calculating: "প্রোফাইল তৈরি হচ্ছে...",
    stepTextTemplate: (curr, total) => `${toBengaliNum(total)}টির মধ্যে ${toBengaliNum(curr)}ম প্রশ্ন`,
    pillTextTemplate: (curr, total) => `প্রশ্ন ${toBengaliNum(curr)}/${toBengaliNum(total)}`,
    pctTextTemplate: (pct) => `${toBengaliNum(pct)}% সম্পন্ন`,

    // Evaluator translations
    evalResultBadge: "RESULT PAGE",
    evalHeadingTemplate: (studentName) => `${studentName}-এর Personality Profile`,
    rankTitlePrimary: "Primary Personality",
    rankTitleSecondary: "Secondary Personality",
    rankTitleSupporting: "Supporting Personality",
    badgeTraitHigh: "উচ্চ প্রবণতা",
    badgeTraitModerate: "মাঝারি প্রবণতা",
    summaryTemplate: (pName, sName) => `আপনার উত্তরের ভিত্তিতে দেখা যাচ্ছে, আপনার সন্তানের মধ্যে ${pName} ও ${sName} Personality-এর বৈশিষ্ট্য তুলনামূলকভাবে বেশি।`,

    statsTitle: "John Holland RIASEC স্কোর বিশ্লেষণ",
    statsSubtitle: "১০টি মূল্যায়নের ওপর ভিত্তি করে ৬টি Personality-এর প্রাপ্ত স্কোর অনুপাত:",
    labelMeterR: "01 — Realistic (হাতে-কলমে কাজ ও Practical Thinking)",
    labelMeterI: "02 — Investigative (কৌতূহলী, বিশ্লেষণধর্মী ও Problem-Solving)",
    labelMeterA: "03 — Artistic (সৃজনশীলতা, Imagination ও Self-Expression)",
    labelMeterS: "04 — Social (সাহায্য করা, শেখানো ও যোগাযোগ)",
    labelMeterE: "05 — Enterprising (Leadership, Initiative ও Decision-Making)",
    labelMeterC: "06 — Conventional (Organized, Structured ও Detail-Oriented)",

    guidelinesTitle: "সন্তানের Personality পরিচর্যা গাইডলাইন",
    guidelinesSubtitle: "শীর্ষ পার্সোনালিটি অনুযায়ী অভিভাবক হিসেবে কী করবেন এবং এড়িয়ে চলবেন:",
    traitsHeading: "আপনার সন্তানের মধ্যে যা দেখা যেতে পারে:",
    doHeading: "অভিভাবক হিসেবে কী করবেন (DO ✓)",
    avoidHeading: "যা এড়িয়ে চলবেন (AVOID ✕)",
    careerEnvHeading: "সম্ভাব্য Career Environment:",

    rememberTitle: "মনে রাখবেন",
    rem1: "Personality কোনো শিশুর ভবিষ্যৎ Career নির্ধারণ করে না।",
    rem2: "একজন শিশুর Personality-এর সঙ্গে তার Interest + Ability + Skills এই বিষয়গুলোও বিবেচনা করতে হবে।",
    rem3: "একটি শিশুর Personality সময়ের সঙ্গে পরিবর্তিত ও বিকশিতও হতে পারে। তাই এই Assessment-এর ফলাফলকে একটি নির্দিষ্ট Career-এর সিদ্ধান্ত হিসেবে নয়, বরং সন্তানকে আরও ভালোভাবে বুঝতে একটি starting point হিসেবে দেখুন।",

    stepsBoxTitle: "আপনার সন্তানের জন্য ৩টি Practical Step",
    step1Title: "Observe",
    step1Desc: "পরবর্তী কয়েক সপ্তাহ সন্তানের স্বাভাবিক আচরণ লক্ষ্য করুন।",
    step2Title: "Provide Opportunity",
    step2Desc: "তার Personality অনুযায়ী বিভিন্ন Activity করার সুযোগ দিন।",
    step3Title: "Develop",
    step3Desc: "যে কাজে তার আগ্রহ ও সম্ভাবনা দেখা যাচ্ছে, সেখানে Practice, Learning ও Skill Development-এর সুযোগ তৈরি করুন।",

    closingCtaTitle: "আপনার সন্তানের Career Journey শুরু হোক তাকে বোঝার মাধ্যমে",
    closingCtaFlow: "Personality জানুন → Interest বুঝুন → Ability ও Skills তৈরি করুন → তারপর Career Path নিয়ে ভাবুন।",
    closingCtaTagline: "Pedago Career Guidance — সন্তানের জন্য Career বেছে দেওয়ার আগে, তাকে বুঝুন।",

    btnPrint: "রিপোর্ট প্রিন্ট বা সেভ করুন",
    btnCounselor: "কাউন্সেলরের পরামর্শ নিন",

    // Visual Hexagon Radar & Progressive Disclosure
    chartCardTitle: "ব্যক্তিত্ব হেক্সাগন রাডার গ্রাফ",
    chartCardSubtitle: "John Holland-এর ৬টি প্রবণতার পারস্পরিক সামঞ্জস্যের ভিজ্যুয়াল চিত্র:",
    btnExpandGuidelines: "বিস্তারিত পরামর্শ ও গাইডলাইন দেখুন ↓",
    btnCollapseGuidelines: "সংক্ষেপ করুন ↑",
    expandHintText: "অভিভাবক হিসেবে কী করবেন (DO/AVOID), ক্যারিয়ার সম্ভাবনা ও পরবর্তী পদক্ষেপ জানতে ক্লিক করুন",
    tabPrimaryText: "Primary Personality",
    tabSecondaryText: "Secondary Personality",
    tabSupportingText: "Supporting Personality",

    // Social Sharing & Community
    shareTitle: "আপনার পরিচিত কোনো অভিভাবককে শেয়ার করুন",
    shareSubtitle: "তিনিও জেনে নিন তার প্যারেন্টিং স্টাইল কেমন",
    shareWhatsappText: "WhatsApp-এ পাঠান",
    shareFacebookText: "Facebook-এ শেয়ার করুন",
    shareCopyText: "লিংক কপি করুন",
    copiedText: "✓ লিংক কপি হয়েছে!",
    linkCopiedToast: "লিংক ক্লিপবোর্ডে কপি করা হয়েছে!",
    communityTitle: "প্যারেন্টিং সম্পর্কে নিয়মিত টিপস পেতে যোগ দিন আমাদের কমিউনিটিতে",
    communityWaText: "WhatsApp চ্যানেলে যোগ দিন",
    communityFbText: "Facebook গ্রুপে যোগ দিন",
    btnRetake: "আবার উত্তর দিন"
  },
  en: {
    docTitle: "What Personality Type is Your Child? - Pedago Career Guidance",
    badgeText: "PEDAGO CAREER GUIDANCE",
    pageTitle: "What Personality Type is Your Child?",
    pageSubtitle: "Parent Observation Assessment based on John Holland's RIASEC Model",

    introP1: "Every child has a unique personality, learning preferences, and work style. Some love hands-on making, some constantly ask 'why' and 'how', some are artistic creators, and some thrive in helping or leading others.",
    introP2: "These 10 situational questions reflect your child's daily habits and natural behaviors. Choose the option that best resonates with your child.",
    noteTag: "Note:",
    noteText: "This is not a clinical psychological evaluation or deterministic career prediction; it is a supportive Parent Observation & Career Guidance tool to understand your child more deeply. Please take your time—every answer is valuable.",

    formStartTitle: "Before Starting — Guardian Information",

    labelParentName: "Guardian's Name",
    placeholderParentName: "Enter guardian's full name",
    errorParentNameEmpty: "Please enter guardian's name.",
    errorParentNameShort: "Guardian's name must be at least 2 characters.",

    labelStudentName: "Child's Name",
    placeholderStudentName: "Enter child's full name",
    errorStudentNameEmpty: "Please enter child's name.",
    errorStudentNameShort: "Child's name must be at least 2 characters.",

    labelStudentAge: "Child's Age",
    placeholderStudentAge: "e.g. 10",
    errorStudentAgeEmpty: "Please enter child's age.",
    errorStudentAgeInvalid: "Enter a valid age (between 1 and 99).",

    labelStudentClass: "Child's Grade / Class",
    placeholderStudentClass: "e.g. Class 4 / Grade 4",
    errorStudentClassEmpty: "Please enter child's grade or class.",

    labelMobile: "Mobile Number",
    placeholderMobile: "01XXXXXXXXX",
    mobileHint: "11-digit Bangladeshi mobile number (e.g. 01712345678)",
    errorMobileEmpty: "Please enter mobile number.",
    errorMobileInvalid: "Enter a valid 11-digit mobile number (01XXXXXXXXX).",

    btnSubmit: "Get Started →",
    btnSubmitting: "Please wait...",

    successToast: "Thank you! Information submitted successfully. Launching evaluation survey...",
    errorToast: "Sorry! Submission failed. Please check your internet connection and try again.",
    unconfiguredUrlToast: "Please deploy the Google Apps Script Web App first and update SCRIPT_URL in script.js.",

    footerCallUs: "For any inquiries, call:",

    // Stepper translations
    assessmentSectionTag: "PERSONALITY ASSESSMENT",
    qInstruction: "Select the option that best reflects your child's natural behavior:",
    btnPrev: "Previous",
    btnNext: "Next",
    btnFinish: "View Personality Profile →",
    calculating: "Generating profile...",
    stepTextTemplate: (curr, total) => `Question ${curr} of ${total}`,
    pillTextTemplate: (curr, total) => `Question ${curr}/${total}`,
    pctTextTemplate: (pct) => `${pct}% Completed`,

    // Evaluator translations
    evalResultBadge: "RESULT PAGE",
    evalHeadingTemplate: (studentName) => `${studentName}'s Personality Profile`,
    rankTitlePrimary: "Primary Personality",
    rankTitleSecondary: "Secondary Personality",
    rankTitleSupporting: "Supporting Personality",
    badgeTraitHigh: "High Affinity",
    badgeTraitModerate: "Moderate Affinity",
    summaryTemplate: (pName, sName) => `Based on your responses, your child demonstrates pronounced traits of ${pName} and ${sName} personalities.`,

    statsTitle: "John Holland RIASEC Score Analysis",
    statsSubtitle: "Distribution and scores calculated across the 6 personality traits:",
    labelMeterR: "01 — Realistic (Hands-on & Practical Thinking)",
    labelMeterI: "02 — Investigative (Inquisitive & Problem-Solving)",
    labelMeterA: "03 — Artistic (Creativity & Self-Expression)",
    labelMeterS: "04 — Social (Helping, Mentoring & Connection)",
    labelMeterE: "05 — Enterprising (Leadership & Decision-Making)",
    labelMeterC: "06 — Conventional (Organized, Structured & Detail-Oriented)",

    guidelinesTitle: "Parental Guidance & Nurturing Roadmap",
    guidelinesSubtitle: "Recommended parenting DOs and AVOID practices for their dominant traits:",
    traitsHeading: "Key Behaviors You May Observe:",
    doHeading: "What to Do as a Parent (DO ✓)",
    avoidHeading: "Practices to Avoid (AVOID ✕)",
    careerEnvHeading: "Potential Career Environments:",

    rememberTitle: "Keep in Mind",
    rem1: "Personality alone does not fix or limit a child's future career destiny.",
    rem2: "A child's personality must be viewed in tandem with their evolving Interests + Abilities + Skills.",
    rem3: "Children develop and adapt as they grow. Treat this assessment as a starting point to understand your child, rather than an unchangeable verdict.",

    stepsBoxTitle: "3 Practical Next Steps for Your Child",
    step1Title: "Observe",
    step1Desc: "Observe your child's natural, spontaneous behaviors closely over the coming weeks.",
    step2Title: "Provide Opportunity",
    step2Desc: "Offer diverse activities tailored to their personality traits and curiosity.",
    step3Title: "Develop",
    step3Desc: "Cultivate structured practice, learning, and skill development where genuine excitement sparks.",

    closingCtaTitle: "A Child's Career Journey Begins by Understanding Them",
    closingCtaFlow: "Discover Personality → Identify Interests → Build Abilities & Skills → Then Shape Career Paths.",
    closingCtaTagline: "Pedago Career Guidance — Before choosing a career for your child, understand who they are.",

    btnPrint: "Print or Save Report",
    btnCounselor: "Speak with a Counselor",

    // Visual Hexagon Radar & Progressive Disclosure
    chartCardTitle: "Personality Hexagon Radar Graph",
    chartCardSubtitle: "Visual representation of affinity across John Holland's 6 RIASEC domains:",
    btnExpandGuidelines: "View Detailed Suggestions & Guidelines ↓",
    btnCollapseGuidelines: "Collapse Guidelines ↑",
    expandHintText: "Click to reveal in-depth parental guidelines (DO/AVOID), career outlooks, and practical steps",
    tabPrimaryText: "Primary Personality",
    tabSecondaryText: "Secondary Personality",
    tabSupportingText: "Supporting Personality",

    // Social Sharing & Community
    shareTitle: "Share with a Fellow Parent",
    shareSubtitle: "Help them discover their child's personality and parenting approach",
    shareWhatsappText: "Send via WhatsApp",
    shareFacebookText: "Share on Facebook",
    shareCopyText: "Copy Link",
    copiedText: "✓ Link Copied!",
    linkCopiedToast: "Link copied to clipboard!",
    communityTitle: "Join our community for regular parenting & career guidance tips",
    communityWaText: "Join WhatsApp Channel",
    communityFbText: "Join Facebook Group",
    btnRetake: "Answer Again"
  }
};

const banglaDigits = {
  '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
  '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
};

function toBengaliNum(num) {
  return num.toString().split('').map(d => banglaDigits[d] || d).join('');
}

// 5. APPLICATION STATE
const state = {
  lang: localStorage.getItem('pedago_lang') || 'bn',
  theme: localStorage.getItem('pedago_theme') || 'light',
  isSubmitting: false,

  // Lead Information collected in Phase 1
  lead: {
    parentName: '',
    studentName: '',
    studentAge: '',
    studentClass: '',
    mobile: ''
  },

  // Questionnaire Stepper Progress (Purely Client-Side Static Evaluator)
  currentQuestionIndex: 0,
  answers: {}, // index 0..9 -> 'R' | 'I' | 'A' | 'S' | 'E' | 'C'
  shuffledOptionOrders: {}, // index 0..9 -> permuted indices [0..5]
  evaluatedScores: null,
  evaluatedRankings: null,
  activeGuidelineTab: 'primary'
};

// Shuffling helper functions for question options
function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function initShuffledOptions() {
  state.shuffledOptionOrders = {};
  for (let i = 0; i < questionBank.length; i++) {
    state.shuffledOptionOrders[i] = shuffleArray([0, 1, 2, 3, 4, 5]);
  }
}

function getQuestionOptions(index, lang) {
  const qData = questionBank[index];
  if (!qData) return [];
  const baseOptions = qData[lang].options;

  if (!state.shuffledOptionOrders || !state.shuffledOptionOrders[index]) {
    if (!state.shuffledOptionOrders) state.shuffledOptionOrders = {};
    state.shuffledOptionOrders[index] = shuffleArray([0, 1, 2, 3, 4, 5]);
  }

  const order = state.shuffledOptionOrders[index];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  return order.map((origIdx, pos) => {
    const origOpt = baseOptions[origIdx];
    return {
      letter: letters[pos],
      type: origOpt.type,
      text: origOpt.text
    };
  });
}

// 6. DOM ELEMENT CACHE
const DOM = {
  html: document.documentElement,
  langBtnBn: document.getElementById('langBtnBn'),
  langBtnEn: document.getElementById('langBtnEn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  sunIcon: document.getElementById('sunIcon'),
  moonIcon: document.getElementById('moonIcon'),

  // Views
  phase1View: document.getElementById('phase1View'),
  phase2View: document.getElementById('phase2View'),
  surveyStepperContainer: document.getElementById('surveyStepperContainer'),
  evaluatorDashboard: document.getElementById('evaluatorDashboard'),

  // Phase 1 Hero Header Elements
  badgeText: document.getElementById('badgeText'),
  pageTitle: document.getElementById('pageTitle'),
  pageSubtitle: document.getElementById('pageSubtitle'),
  introP1: document.getElementById('introP1'),
  introP2: document.getElementById('introP2'),
  noteTag: document.getElementById('noteTag'),
  noteText: document.getElementById('noteText'),
  formStartTitle: document.getElementById('formStartTitle'),

  // Phase 1 Form Elements
  form: document.getElementById('leadForm'),

  groupParentName: document.getElementById('groupParentName'),
  labelParentName: document.getElementById('labelParentName'),
  inputParentName: document.getElementById('parentName'),
  parentNameError: document.getElementById('parentNameError'),
  parentNameErrorText: document.getElementById('parentNameErrorText'),

  groupStudentName: document.getElementById('groupStudentName'),
  labelStudentName: document.getElementById('labelStudentName'),
  inputStudentName: document.getElementById('studentName'),
  studentNameError: document.getElementById('studentNameError'),
  studentNameErrorText: document.getElementById('studentNameErrorText'),

  groupStudentAge: document.getElementById('groupStudentAge'),
  labelStudentAge: document.getElementById('labelStudentAge'),
  inputStudentAge: document.getElementById('studentAge'),
  studentAgeError: document.getElementById('studentAgeError'),
  studentAgeErrorText: document.getElementById('studentAgeErrorText'),

  groupStudentClass: document.getElementById('groupStudentClass'),
  labelStudentClass: document.getElementById('labelStudentClass'),
  inputStudentClass: document.getElementById('studentClass'),
  studentClassError: document.getElementById('studentClassError'),
  studentClassErrorText: document.getElementById('studentClassErrorText'),

  groupMobile: document.getElementById('groupMobile'),
  labelMobile: document.getElementById('labelMobile'),
  inputMobile: document.getElementById('mobile'),
  mobileHint: document.getElementById('mobileHint'),
  mobileError: document.getElementById('mobileError'),
  mobileErrorText: document.getElementById('mobileErrorText'),

  submitBtn: document.getElementById('submitBtn'),
  btnSpinner: document.getElementById('btnSpinner'),
  btnText: document.getElementById('btnText'),

  statusToast: document.getElementById('statusToast'),
  toastSuccessIcon: document.getElementById('toastSuccessIcon'),
  toastErrorIcon: document.getElementById('toastErrorIcon'),
  toastMessage: document.getElementById('toastMessage'),
  footerCallUs: document.getElementById('footerCallUs'),

  // Phase 2: Survey Stepper Elements
  surveyStudentTag: document.getElementById('surveyStudentTag'),
  surveyStudentName: document.getElementById('surveyStudentName'),
  surveyProgressPill: document.getElementById('surveyProgressPill'),
  progressBarFill: document.getElementById('progressBarFill'),
  surveyStepDetail: document.getElementById('surveyStepDetail'),
  surveyPercentText: document.getElementById('surveyPercentText'),
  assessmentSectionTag: document.getElementById('assessmentSectionTag'),
  currentQuestionTitle: document.getElementById('currentQuestionTitle'),
  questionInstruction: document.getElementById('questionInstruction'),
  optionsList: document.getElementById('optionsList'),
  prevQuestionBtn: document.getElementById('prevQuestionBtn'),
  btnPrevText: document.getElementById('btnPrevText'),
  nextQuestionBtn: document.getElementById('nextQuestionBtn'),
  btnNextText: document.getElementById('btnNextText'),
  finishSurveyBtn: document.getElementById('finishSurveyBtn'),
  finishSpinner: document.getElementById('finishSpinner'),
  btnFinishText: document.getElementById('btnFinishText'),

  // Phase 2: Evaluator Dashboard Elements
  evalResultBadge: document.getElementById('evalResultBadge'),
  evalStudentHeading: document.getElementById('evalStudentHeading'),

  rankTitlePrimary: document.getElementById('rankTitlePrimary'),
  namePrimary: document.getElementById('namePrimary'),
  badgeTraitPrimary: document.getElementById('badgeTraitPrimary'),
  scorePrimary: document.getElementById('scorePrimary'),

  rankTitleSecondary: document.getElementById('rankTitleSecondary'),
  nameSecondary: document.getElementById('nameSecondary'),
  badgeTraitSecondary: document.getElementById('badgeTraitSecondary'),
  scoreSecondary: document.getElementById('scoreSecondary'),

  rankTitleSupporting: document.getElementById('rankTitleSupporting'),
  nameSupporting: document.getElementById('nameSupporting'),
  badgeTraitSupporting: document.getElementById('badgeTraitSupporting'),
  scoreSupporting: document.getElementById('scoreSupporting'),

  evalSummaryBanner: document.getElementById('evalSummaryBanner'),
  evalSummaryText: document.getElementById('evalSummaryText'),

  statsSectionTitle: document.getElementById('statsSectionTitle'),
  statsSectionSubtitle: document.getElementById('statsSectionSubtitle'),

  labelMeterR: document.getElementById('labelMeterR'),
  scoreR: document.getElementById('scoreR'),
  fillR: document.getElementById('fillR'),

  labelMeterI: document.getElementById('labelMeterI'),
  scoreI: document.getElementById('scoreI'),
  fillI: document.getElementById('fillI'),

  labelMeterA: document.getElementById('labelMeterA'),
  scoreA: document.getElementById('scoreA'),
  fillA: document.getElementById('fillA'),

  labelMeterS: document.getElementById('labelMeterS'),
  scoreS: document.getElementById('scoreS'),
  fillS: document.getElementById('fillS'),

  labelMeterE: document.getElementById('labelMeterE'),
  scoreE: document.getElementById('scoreE'),
  fillE: document.getElementById('fillE'),

  labelMeterC: document.getElementById('labelMeterC'),
  scoreC: document.getElementById('scoreC'),
  fillC: document.getElementById('fillC'),

  // Visual Hexagon Radar & Progressive Disclosure Elements
  riasecRadarSvg: document.getElementById('riasecRadarSvg'),
  radarTooltip: document.getElementById('radarTooltip'),
  chartLegend: document.getElementById('chartLegend'),
  chartCardTitle: document.getElementById('chartCardTitle'),
  chartCardSubtitle: document.getElementById('chartCardSubtitle'),
  toggleGuidelinesBtn: document.getElementById('toggleGuidelinesBtn'),
  toggleGuidelinesBtnText: document.getElementById('toggleGuidelinesBtnText'),
  expandHintText: document.getElementById('expandHintText'),
  collapsibleGuidelinesWrapper: document.getElementById('collapsibleGuidelinesWrapper'),
  tabPrimary: document.getElementById('tabPrimary'),
  tabSecondary: document.getElementById('tabSecondary'),
  tabSupporting: document.getElementById('tabSupporting'),
  tabPrimaryText: document.getElementById('tabPrimaryText'),
  tabSecondaryText: document.getElementById('tabSecondaryText'),
  tabSupportingText: document.getElementById('tabSupportingText'),

  riasecDetailedContainer: document.getElementById('riasecDetailedContainer'),

  rememberTitle: document.getElementById('rememberTitle'),
  rem1: document.getElementById('rem1'),
  rem2: document.getElementById('rem2'),
  rem3: document.getElementById('rem3'),

  stepsBoxTitle: document.getElementById('stepsBoxTitle'),
  step1Title: document.getElementById('step1Title'),
  step1Desc: document.getElementById('step1Desc'),
  step2Title: document.getElementById('step2Title'),
  step2Desc: document.getElementById('step2Desc'),
  step3Title: document.getElementById('step3Title'),
  step3Desc: document.getElementById('step3Desc'),

  closingCtaTitle: document.getElementById('closingCtaTitle'),
  closingCtaFlow: document.getElementById('closingCtaFlow'),
  closingCtaTagline: document.getElementById('closingCtaTagline'),

  btnPrintText: document.getElementById('btnPrintText'),
  btnCounselorText: document.getElementById('btnCounselorText'),
  printReportBtn: document.getElementById('printReportBtn'),
  retakeBtn: document.getElementById('retakeBtn'),
  btnRetakeText: document.getElementById('btnRetakeText'),

  // Social Sharing & Community
  shareTitle: document.getElementById('shareTitle'),
  shareSubtitle: document.getElementById('shareSubtitle'),
  shareWhatsappBtn: document.getElementById('shareWhatsappBtn'),
  shareWhatsappText: document.getElementById('shareWhatsappText'),
  shareFacebookBtn: document.getElementById('shareFacebookBtn'),
  shareFacebookText: document.getElementById('shareFacebookText'),
  shareCopyBtn: document.getElementById('shareCopyBtn'),
  shareCopyText: document.getElementById('shareCopyText'),
  communityTitle: document.getElementById('communityTitle'),
  communityWaText: document.getElementById('communityWaText'),
  communityFbText: document.getElementById('communityFbText')
};

// 7. THEME SWITCHING
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

// 8. LANGUAGE SWITCHING & LOCALIZATION
function applyLanguage(lang) {
  state.lang = lang;
  DOM.html.setAttribute('lang', lang);
  localStorage.setItem('pedago_lang', lang);

  const t = translations[lang];

  // Document Title
  document.title = t.docTitle;

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

  // Phase 1 Texts
  if (DOM.badgeText) DOM.badgeText.textContent = t.badgeText;
  if (DOM.pageTitle) DOM.pageTitle.textContent = t.pageTitle;
  if (DOM.pageSubtitle) DOM.pageSubtitle.textContent = t.pageSubtitle;

  if (DOM.introP1) DOM.introP1.textContent = t.introP1;
  if (DOM.introP2) DOM.introP2.textContent = t.introP2;
  if (DOM.noteTag) DOM.noteTag.textContent = t.noteTag;
  if (DOM.noteText) DOM.noteText.textContent = t.noteText;
  if (DOM.formStartTitle) DOM.formStartTitle.textContent = t.formStartTitle;

  if (DOM.labelParentName) DOM.labelParentName.textContent = t.labelParentName;
  if (DOM.inputParentName) DOM.inputParentName.placeholder = t.placeholderParentName;

  if (DOM.labelStudentName) DOM.labelStudentName.textContent = t.labelStudentName;
  if (DOM.inputStudentName) DOM.inputStudentName.placeholder = t.placeholderStudentName;

  if (DOM.labelStudentAge) DOM.labelStudentAge.textContent = t.labelStudentAge;
  if (DOM.inputStudentAge) DOM.inputStudentAge.placeholder = t.placeholderStudentAge;

  if (DOM.labelStudentClass) DOM.labelStudentClass.textContent = t.labelStudentClass;
  if (DOM.inputStudentClass) DOM.inputStudentClass.placeholder = t.placeholderStudentClass;

  if (DOM.labelMobile) DOM.labelMobile.textContent = t.labelMobile;
  if (DOM.inputMobile) DOM.inputMobile.placeholder = t.placeholderMobile;
  if (DOM.mobileHint) DOM.mobileHint.textContent = t.mobileHint;

  if (DOM.btnText) {
    DOM.btnText.textContent = !state.isSubmitting ? t.btnSubmit : t.btnSubmitting;
  }

  if (DOM.footerCallUs) DOM.footerCallUs.textContent = t.footerCallUs;

  // Stepper UI Texts
  if (DOM.assessmentSectionTag) DOM.assessmentSectionTag.textContent = t.assessmentSectionTag;
  if (DOM.questionInstruction) DOM.questionInstruction.textContent = t.qInstruction;
  if (DOM.btnPrevText) DOM.btnPrevText.textContent = t.btnPrev;
  if (DOM.btnNextText) DOM.btnNextText.textContent = t.btnNext;
  if (DOM.btnFinishText) DOM.btnFinishText.textContent = t.btnFinish;

  // Evaluator Dashboard Texts
  if (DOM.evalResultBadge) DOM.evalResultBadge.textContent = t.evalResultBadge;
  if (DOM.rankTitlePrimary) DOM.rankTitlePrimary.textContent = t.rankTitlePrimary;
  if (DOM.rankTitleSecondary) DOM.rankTitleSecondary.textContent = t.rankTitleSecondary;
  if (DOM.rankTitleSupporting) DOM.rankTitleSupporting.textContent = t.rankTitleSupporting;

  if (DOM.statsSectionTitle) DOM.statsSectionTitle.textContent = t.statsTitle;
  if (DOM.statsSectionSubtitle) DOM.statsSectionSubtitle.textContent = t.statsSubtitle;

  if (DOM.chartCardTitle) DOM.chartCardTitle.textContent = t.chartCardTitle;
  if (DOM.chartCardSubtitle) DOM.chartCardSubtitle.textContent = t.chartCardSubtitle;
  if (DOM.expandHintText) DOM.expandHintText.textContent = t.expandHintText;
  if (DOM.tabPrimaryText) DOM.tabPrimaryText.textContent = t.tabPrimaryText;
  if (DOM.tabSecondaryText) DOM.tabSecondaryText.textContent = t.tabSecondaryText;
  if (DOM.tabSupportingText) DOM.tabSupportingText.textContent = t.tabSupportingText;

  if (DOM.toggleGuidelinesBtnText) {
    const isExpanded = DOM.collapsibleGuidelinesWrapper && DOM.collapsibleGuidelinesWrapper.style.display !== 'none';
    DOM.toggleGuidelinesBtnText.textContent = isExpanded ? t.btnCollapseGuidelines : t.btnExpandGuidelines;
  }

  if (DOM.labelMeterR) DOM.labelMeterR.textContent = t.labelMeterR;
  if (DOM.labelMeterI) DOM.labelMeterI.textContent = t.labelMeterI;
  if (DOM.labelMeterA) DOM.labelMeterA.textContent = t.labelMeterA;
  if (DOM.labelMeterS) DOM.labelMeterS.textContent = t.labelMeterS;
  if (DOM.labelMeterE) DOM.labelMeterE.textContent = t.labelMeterE;
  if (DOM.labelMeterC) DOM.labelMeterC.textContent = t.labelMeterC;

  if (DOM.rememberTitle) DOM.rememberTitle.textContent = t.rememberTitle;
  if (DOM.rem1) DOM.rem1.textContent = t.rem1;
  if (DOM.rem2) DOM.rem2.textContent = t.rem2;
  if (DOM.rem3) DOM.rem3.textContent = t.rem3;

  if (DOM.stepsBoxTitle) DOM.stepsBoxTitle.textContent = t.stepsBoxTitle;
  if (DOM.step1Title) DOM.step1Title.textContent = t.step1Title;
  if (DOM.step1Desc) DOM.step1Desc.textContent = t.step1Desc;
  if (DOM.step2Title) DOM.step2Title.textContent = t.step2Title;
  if (DOM.step2Desc) DOM.step2Desc.textContent = t.step2Desc;
  if (DOM.step3Title) DOM.step3Title.textContent = t.step3Title;
  if (DOM.step3Desc) DOM.step3Desc.textContent = t.step3Desc;

  if (DOM.closingCtaTitle) DOM.closingCtaTitle.textContent = t.closingCtaTitle;
  if (DOM.closingCtaFlow) DOM.closingCtaFlow.textContent = t.closingCtaFlow;
  if (DOM.closingCtaTagline) DOM.closingCtaTagline.textContent = t.closingCtaTagline;

  if (DOM.btnPrintText) DOM.btnPrintText.textContent = t.btnPrint;
  if (DOM.btnCounselorText) DOM.btnCounselorText.textContent = t.btnCounselor;
  if (DOM.btnRetakeText) DOM.btnRetakeText.textContent = t.btnRetake;

  // Social Share & Community Texts
  if (DOM.shareTitle) DOM.shareTitle.textContent = t.shareTitle;
  if (DOM.shareSubtitle) DOM.shareSubtitle.textContent = t.shareSubtitle;
  if (DOM.shareWhatsappText) DOM.shareWhatsappText.textContent = t.shareWhatsappText;
  if (DOM.shareFacebookText) DOM.shareFacebookText.textContent = t.shareFacebookText;
  if (DOM.shareCopyText && !DOM.shareCopyBtn.classList.contains('copied')) DOM.shareCopyText.textContent = t.shareCopyText;
  if (DOM.communityTitle) DOM.communityTitle.textContent = t.communityTitle;
  if (DOM.communityWaText) DOM.communityWaText.textContent = t.communityWaText;
  if (DOM.communityFbText) DOM.communityFbText.textContent = t.communityFbText;

  // If in survey phase, refresh current question rendering
  if (DOM.phase2View.style.display !== 'none') {
    if (DOM.surveyStepperContainer.style.display !== 'none') {
      renderQuestion(state.currentQuestionIndex);
    } else if (DOM.evaluatorDashboard.style.display !== 'none' && state.evaluatedScores) {
      renderEvaluatorResults();
    }
  }
}

// 9. TOAST NOTIFICATIONS
let toastTimer = null;
function showToast(type, message, duration = 6000) {
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

// 10. CLIENT-SIDE VALIDATION (5 Fields)
const BD_PHONE_REGEX = /^01[3-9]\d{8}$/;

function validateParentName(focusOnError = false) {
  const val = DOM.inputParentName.value.trim();
  const t = translations[state.lang];

  if (!val) {
    DOM.groupParentName.classList.add('has-error');
    DOM.parentNameErrorText.textContent = t.errorParentNameEmpty;
    if (focusOnError) DOM.inputParentName.focus();
    return false;
  }
  if (val.length < 2) {
    DOM.groupParentName.classList.add('has-error');
    DOM.parentNameErrorText.textContent = t.errorParentNameShort;
    if (focusOnError) DOM.inputParentName.focus();
    return false;
  }
  DOM.groupParentName.classList.remove('has-error');
  return true;
}

function validateStudentName(focusOnError = false) {
  const val = DOM.inputStudentName.value.trim();
  const t = translations[state.lang];

  if (!val) {
    DOM.groupStudentName.classList.add('has-error');
    DOM.studentNameErrorText.textContent = t.errorStudentNameEmpty;
    if (focusOnError) DOM.inputStudentName.focus();
    return false;
  }
  if (val.length < 2) {
    DOM.groupStudentName.classList.add('has-error');
    DOM.studentNameErrorText.textContent = t.errorStudentNameShort;
    if (focusOnError) DOM.inputStudentName.focus();
    return false;
  }
  DOM.groupStudentName.classList.remove('has-error');
  return true;
}

function validateStudentAge(focusOnError = false) {
  const val = DOM.inputStudentAge.value.trim();
  const t = translations[state.lang];

  if (!val) {
    DOM.groupStudentAge.classList.add('has-error');
    DOM.studentAgeErrorText.textContent = t.errorStudentAgeEmpty;
    if (focusOnError) DOM.inputStudentAge.focus();
    return false;
  }
  const ageNum = parseInt(val, 10);
  if (isNaN(ageNum) || ageNum < 1 || ageNum > 99) {
    DOM.groupStudentAge.classList.add('has-error');
    DOM.studentAgeErrorText.textContent = t.errorStudentAgeInvalid;
    if (focusOnError) DOM.inputStudentAge.focus();
    return false;
  }
  DOM.groupStudentAge.classList.remove('has-error');
  return true;
}

function validateStudentClass(focusOnError = false) {
  const val = DOM.inputStudentClass.value.trim();
  const t = translations[state.lang];

  if (!val) {
    DOM.groupStudentClass.classList.add('has-error');
    DOM.studentClassErrorText.textContent = t.errorStudentClassEmpty;
    if (focusOnError) DOM.inputStudentClass.focus();
    return false;
  }
  DOM.groupStudentClass.classList.remove('has-error');
  return true;
}

function validateMobile(focusOnError = false) {
  const val = DOM.inputMobile.value.trim();
  const t = translations[state.lang];

  if (!val) {
    DOM.groupMobile.classList.add('has-error');
    DOM.mobileErrorText.textContent = t.errorMobileEmpty;
    if (focusOnError) DOM.inputMobile.focus();
    return false;
  }
  if (!BD_PHONE_REGEX.test(val)) {
    DOM.groupMobile.classList.add('has-error');
    DOM.mobileErrorText.textContent = t.errorMobileInvalid;
    if (focusOnError) DOM.inputMobile.focus();
    return false;
  }
  DOM.groupMobile.classList.remove('has-error');
  return true;
}

function clearErrorOnInput(groupEl) {
  groupEl.classList.remove('has-error');
}

// 11. PHASE 1: FORM SUBMISSION (Submits 5 fields to Google Apps Script Web App)
async function handlePhase1Submit(e) {
  e.preventDefault();
  hideToast();

  const isParentNameValid = validateParentName(false);
  const isStudentNameValid = validateStudentName(false);
  const isAgeValid = validateStudentAge(false);
  const isClassValid = validateStudentClass(false);
  const isMobileValid = validateMobile(false);

  if (!isParentNameValid) { validateParentName(true); return; }
  if (!isStudentNameValid) { validateStudentName(true); return; }
  if (!isAgeValid) { validateStudentAge(true); return; }
  if (!isClassValid) { validateStudentClass(true); return; }
  if (!isMobileValid) { validateMobile(true); return; }

  state.lead.parentName = DOM.inputParentName.value.trim();
  state.lead.studentName = DOM.inputStudentName.value.trim();
  state.lead.studentAge = DOM.inputStudentAge.value.trim();
  state.lead.studentClass = DOM.inputStudentClass.value.trim();
  state.lead.mobile = DOM.inputMobile.value.trim();

  const payload = {
    parentName: state.lead.parentName,
    studentName: state.lead.studentName,
    studentAge: state.lead.studentAge,
    studentClass: state.lead.studentClass,
    mobile: state.lead.mobile
  };

  const t = translations[state.lang];

  if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE") {
    showToast('error', t.unconfiguredUrlToast, 8000);
    return;
  }

  // Set submitting state
  state.isSubmitting = true;
  DOM.submitBtn.disabled = true;
  DOM.submitBtn.classList.add('loading');
  DOM.btnText.textContent = t.btnSubmitting;

  try {
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
      result = { result: response.ok ? "success" : "error" };
    }

    if (result && result.result === "success") {
      showToast('success', t.successToast, 3500);
      setTimeout(() => {
        transitionToPhase2();
      }, 700);
    } else {
      const errMsg = (result && result.message) ? result.message : t.errorToast;
      showToast('error', errMsg);
      state.isSubmitting = false;
      DOM.submitBtn.disabled = false;
      DOM.submitBtn.classList.remove('loading');
      DOM.btnText.textContent = t.btnSubmit;
    }
  } catch (netErr) {
    console.error("Submission error:", netErr);
    showToast('error', t.errorToast);
    state.isSubmitting = false;
    DOM.submitBtn.disabled = false;
    DOM.submitBtn.classList.remove('loading');
    DOM.btnText.textContent = t.btnSubmit;
  }
}

// 12. TRANSITION TO PHASE 2 (Static RIASEC Evaluator)
function transitionToPhase2() {
  DOM.phase1View.style.display = 'none';
  DOM.phase2View.style.display = 'block';
  DOM.surveyStepperContainer.style.display = 'block';
  DOM.evaluatorDashboard.style.display = 'none';

  DOM.surveyStudentName.textContent = state.lead.studentName;

  state.currentQuestionIndex = 0;
  state.answers = {};
  initShuffledOptions();
  renderQuestion(0);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 13. QUESTIONNAIRE RENDERING & INTERACTION (6 Options A-F)
function renderQuestion(index) {
  const qData = questionBank[index];
  const t = translations[state.lang];
  const langData = qData[state.lang];

  const totalQ = questionBank.length;
  const currentNum = index + 1;
  const pct = Math.round((currentNum / totalQ) * 100);

  // Update progress bar & counters
  DOM.surveyProgressPill.textContent = t.pillTextTemplate(currentNum, totalQ);
  DOM.progressBarFill.style.width = `${pct}%`;
  DOM.surveyStepDetail.textContent = t.stepTextTemplate(currentNum, totalQ);
  DOM.surveyPercentText.textContent = t.pctTextTemplate(pct);

  // Question Title
  const prefix = state.lang === 'bn' ? `প্রশ্ন ${toBengaliNum(currentNum)}: ` : `Question ${currentNum}: `;
  DOM.currentQuestionTitle.textContent = `${prefix}${langData.question}`;

  // Render 6 Options (A to F shuffled)
  DOM.optionsList.innerHTML = '';
  const selectedType = state.answers[index];
  const options = getQuestionOptions(index, state.lang);

  options.forEach((opt) => {
    const itemEl = document.createElement('div');
    const isSelected = selectedType === opt.type;
    itemEl.className = 'option-item' + (isSelected ? ' selected' : '');
    itemEl.setAttribute('role', 'radio');
    itemEl.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    itemEl.tabIndex = 0;

    itemEl.innerHTML = `
      <span class="option-letter-badge">${opt.letter}</span>
      <div class="option-radio">
        <div class="option-radio-dot"></div>
      </div>
      <div class="option-text">${opt.text}</div>
    `;

    const selectOption = () => {
      state.answers[index] = opt.type;

      const allItems = DOM.optionsList.querySelectorAll('.option-item');
      allItems.forEach(el => el.classList.remove('selected'));
      itemEl.classList.add('selected');

      updateNavButtons();
    };

    itemEl.addEventListener('click', selectOption);
    itemEl.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        selectOption();
      }
    });

    DOM.optionsList.appendChild(itemEl);
  });

  updateNavButtons();
}

function updateNavButtons() {
  const index = state.currentQuestionIndex;
  const isAnswered = Boolean(state.answers[index]);
  const isLast = index === questionBank.length - 1;

  DOM.prevQuestionBtn.disabled = index === 0;

  if (!isLast) {
    DOM.nextQuestionBtn.style.display = 'inline-flex';
    DOM.finishSurveyBtn.style.display = 'none';
    DOM.nextQuestionBtn.disabled = !isAnswered;
  } else {
    DOM.nextQuestionBtn.style.display = 'none';
    DOM.finishSurveyBtn.style.display = 'inline-flex';
    DOM.finishSurveyBtn.disabled = !isAnswered;
  }
}

function handleNextQuestion() {
  if (state.currentQuestionIndex < questionBank.length - 1) {
    state.currentQuestionIndex++;
    renderQuestion(state.currentQuestionIndex);
  }
}

function handlePrevQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    renderQuestion(state.currentQuestionIndex);
  }
}

// 14. RIASEC SCORING ENGINE & EVALUATOR DASHBOARD (Purely Client-Side Static Evaluation)
function handleFinishSurvey() {
  const t = translations[state.lang];
  DOM.finishSurveyBtn.disabled = true;
  DOM.finishSpinner.style.display = 'inline-block';
  DOM.btnFinishText.textContent = t.calculating;

  // Initialize scores for R, I, A, S, E, C
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  for (let i = 0; i < questionBank.length; i++) {
    const ans = state.answers[i];
    if (ans && scores[ans] !== undefined) {
      scores[ans]++;
    }
  }

  // Sort traits descending by score
  const traitOrder = ['R', 'I', 'A', 'S', 'E', 'C'];
  const sorted = traitOrder.map(key => ({
    key,
    score: scores[key] || 0
  })).sort((a, b) => b.score - a.score);

  state.evaluatedScores = scores;
  state.evaluatedRankings = sorted;

  setTimeout(() => {
    DOM.finishSpinner.style.display = 'none';
    DOM.finishSurveyBtn.disabled = false;
    DOM.btnFinishText.textContent = t.btnFinish;

    // Show Evaluator Dashboard
    DOM.surveyStepperContainer.style.display = 'none';
    DOM.evaluatorDashboard.style.display = 'flex';
    renderEvaluatorResults();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 450);
}

// RIASEC Hexagon Radar Configuration (Holland's Standard Ordering Clockwise from Top)
const RIASEC_CONFIG = [
  { key: 'R', angle: -90, color: '#2563eb', bn: 'Realistic (হাতে-কলমে)', en: 'Realistic (Hands-on)' },
  { key: 'I', angle: -30, color: '#0284c7', bn: 'Investigative (বিশ্লেষণধর্মী)', en: 'Investigative (Analytical)' },
  { key: 'A', angle: 30, color: '#8b5cf6', bn: 'Artistic (সৃজনশীলতা)', en: 'Artistic (Creative)' },
  { key: 'S', angle: 90, color: '#ec4899', bn: 'Social (সহযোগিতা ও যোগাযোগ)', en: 'Social (Helping)' },
  { key: 'E', angle: 150, color: '#f97316', bn: 'Enterprising (নেতৃত্ব)', en: 'Enterprising (Leadership)' },
  { key: 'C', angle: 210, color: '#10b981', bn: 'Conventional (শৃঙ্খলা)', en: 'Conventional (Structured)' }
];

function renderRiasecRadarChart(scores) {
  if (!DOM.riasecRadarSvg) return;
  const isBn = state.lang === 'bn';
  const total = 10;
  const cx = 190;
  const cy = 160;
  const maxR = 108;
  const levels = [0.25, 0.5, 0.75, 1.0];

  // 1. Concentric Hexagon Grid Rings
  let gridSvg = '';
  levels.forEach((lvl, idx) => {
    const r = lvl * maxR;
    const pts = RIASEC_CONFIG.map(cfg => {
      const rad = (cfg.angle * Math.PI) / 180;
      return `${(cx + r * Math.cos(rad)).toFixed(1)},${(cy + r * Math.sin(rad)).toFixed(1)}`;
    }).join(' ');
    const isOuter = idx === levels.length - 1;
    gridSvg += `<polygon points="${pts}" fill="none" stroke="currentColor" stroke-opacity="${isOuter ? '0.22' : '0.12'}" stroke-width="${isOuter ? '1.5' : '1'}" stroke-dasharray="${isOuter ? 'none' : '3,3'}" />`;
  });

  // 2. Radial Spoke Lines & Axis Labels
  let spokesSvg = '';
  let labelsSvg = '';
  RIASEC_CONFIG.forEach(cfg => {
    const rad = (cfg.angle * Math.PI) / 180;
    const outerX = cx + maxR * Math.cos(rad);
    const outerY = cy + maxR * Math.sin(rad);
    spokesSvg += `<line x1="${cx}" y1="${cy}" x2="${outerX.toFixed(1)}" y2="${outerY.toFixed(1)}" stroke="currentColor" stroke-opacity="0.16" stroke-width="1.2" />`;

    // Outer Label Position
    const labelR = maxR + 24;
    const lx = cx + labelR * Math.cos(rad);
    const ly = cy + labelR * Math.sin(rad);

    let anchor = 'middle';
    let dy = '0.35em';
    if (cfg.angle === -90) { anchor = 'middle'; dy = '-0.4em'; }
    else if (cfg.angle === 90) { anchor = 'middle'; dy = '1.1em'; }
    else if (cfg.angle > -90 && cfg.angle < 90) { anchor = 'start'; }
    else { anchor = 'end'; }

    const labelShort = isBn ? cfg.bn.split(' ')[0] : cfg.en.split(' ')[0];
    labelsSvg += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" dy="${dy}" fill="currentColor" font-size="11.5" font-weight="700" class="radar-axis-label">${cfg.key}: ${labelShort}</text>`;
  });

  // 3. Dynamic Data Polygon (Normalized to the Top Most Gained Value)
  // Scaling by the student's highest score ensures that even when scores are distributed (e.g. 3, 2, 2, 2),
  // the dominant traits reach the top/outer boundary of the hexagon (100% of radius), making the profile prominent and clear.
  const maxScore = Math.max(...RIASEC_CONFIG.map(cfg => scores[cfg.key] || 0), 0);
  const minR = 10;

  const dataCoords = RIASEC_CONFIG.map(cfg => {
    const s = scores[cfg.key] || 0;
    let r = minR;
    if (maxScore > 0) {
      r = s > 0 ? Math.max(16, (s / maxScore) * maxR) : minR;
    }
    const rad = (cfg.angle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
      score: s,
      key: cfg.key,
      color: cfg.color,
      name: isBn ? cfg.bn : cfg.en
    };
  });

  const polyPoints = dataCoords.map(pt => `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(' ');

  const defsSvg = `
    <defs>
      <radialGradient id="radarFillGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ee3e26" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#233e95" stop-opacity="0.45" />
      </radialGradient>
    </defs>
  `;

  const polySvg = `<polygon points="${polyPoints}" fill="url(#radarFillGrad)" stroke="#233e95" stroke-width="2.5" stroke-linejoin="round" class="radar-data-poly" />`;

  // 4. Vertex Interactive Circles
  let nodesSvg = '';
  dataCoords.forEach(pt => {
    nodesSvg += `
      <g class="radar-node-group" data-trait="${pt.key}" data-score="${pt.score}" data-name="${pt.name}" style="cursor: pointer;">
        <circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="6.5" fill="${pt.color}" stroke="#ffffff" stroke-width="2.5" class="radar-node-dot" />
        <circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="16" fill="transparent" class="radar-node-hitbox" />
      </g>
    `;
  });

  DOM.riasecRadarSvg.innerHTML = `${defsSvg}${gridSvg}${spokesSvg}${labelsSvg}${polySvg}${nodesSvg}`;

  // Attach hover interactions to nodes
  const nodeGroups = DOM.riasecRadarSvg.querySelectorAll('.radar-node-group');
  nodeGroups.forEach(grp => {
    grp.addEventListener('mouseenter', () => {
      const score = grp.getAttribute('data-score');
      const name = grp.getAttribute('data-name');
      const circle = grp.querySelector('.radar-node-dot');
      if (circle) circle.setAttribute('r', '9');

      const pct = Math.round((score / total) * 100);
      const scoreStr = isBn ? toBengaliNum(score) : score;
      const pctStr = isBn ? toBengaliNum(pct) : pct;

      DOM.radarTooltip.innerHTML = `<strong>${name}</strong><br/>${isBn ? 'স্কোর' : 'Score'}: <strong>${scoreStr}/${isBn ? '১০' : '10'} (${pctStr}%)</strong>`;
      DOM.radarTooltip.style.display = 'block';

      if (circle) {
        const circleRect = circle.getBoundingClientRect();
        const wrapRect = DOM.riasecRadarSvg.parentElement.getBoundingClientRect();
        const left = circleRect.left + circleRect.width / 2 - wrapRect.left;
        const top = circleRect.top - wrapRect.top;
        DOM.radarTooltip.style.left = `${left}px`;
        DOM.radarTooltip.style.top = `${top}px`;
      }
    });

    grp.addEventListener('mouseleave', () => {
      const circle = grp.querySelector('.radar-node-dot');
      if (circle) circle.setAttribute('r', '6.5');
      DOM.radarTooltip.style.display = 'none';
    });
  });

  // 5. Populate Interactive Legend Chips
  if (DOM.chartLegend) {
    DOM.chartLegend.innerHTML = '';
    RIASEC_CONFIG.forEach(cfg => {
      const s = scores[cfg.key] || 0;
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'legend-chip';
      chip.setAttribute('data-trait', cfg.key);
      const scoreStr = isBn ? toBengaliNum(s) : s;
      const labelShort = isBn ? cfg.bn.split(' ')[0] : cfg.en.split(' ')[0];

      chip.innerHTML = `
        <span class="legend-chip-dot" style="background: ${cfg.color};"></span>
        <span>${cfg.key}: ${labelShort}</span>
        <strong>(${scoreStr})</strong>
      `;

      chip.addEventListener('mouseenter', () => {
        const matchedNode = DOM.riasecRadarSvg.querySelector(`.radar-node-group[data-trait="${cfg.key}"]`);
        if (matchedNode) {
          const event = new MouseEvent('mouseenter');
          matchedNode.dispatchEvent(event);
        }
      });

      chip.addEventListener('mouseleave', () => {
        const matchedNode = DOM.riasecRadarSvg.querySelector(`.radar-node-group[data-trait="${cfg.key}"]`);
        if (matchedNode) {
          const event = new MouseEvent('mouseleave');
          matchedNode.dispatchEvent(event);
        }
      });

      DOM.chartLegend.appendChild(chip);
    });
  }
}

function renderGuidelineTab(rank) {
  state.activeGuidelineTab = rank;
  const lang = state.lang;
  const isBn = lang === 'bn';
  const t = translations[lang];
  const sorted = state.evaluatedRankings;
  if (!sorted || sorted.length === 0) return;

  let targetIndex = 0;
  let rankBadge = isBn ? "🥇 শীর্ষ ১: Primary Personality" : "🥇 Rank 1: Primary Personality";

  if (rank === 'secondary') {
    targetIndex = 1;
    rankBadge = isBn ? "🥈 শীর্ষ ২: Secondary Personality" : "🥈 Rank 2: Secondary Personality";
  } else if (rank === 'supporting') {
    targetIndex = 2;
    rankBadge = isBn ? "🥉 শীর্ষ ৩: Supporting Personality" : "🥉 Rank 3: Supporting Personality";
  }

  const target = sorted[targetIndex];
  if (!target) return;

  const raw = riasecGuidelines[target.key];
  const g = raw[lang];

  // Update active tab buttons
  [DOM.tabPrimary, DOM.tabSecondary, DOM.tabSupporting].forEach(btn => {
    if (!btn) return;
    const isThis = btn.getAttribute('data-rank') === rank;
    if (isThis) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  // Render detail card
  const traitsHtml = g.observedTraits.map(tr => `<li>${tr}</li>`).join('');
  const doHtml = g.doList.map(d => `<li>${d}</li>`).join('');
  const avoidHtml = g.avoidList.map(a => `<li>${a}</li>`).join('');
  const careerChipsHtml = g.careers.map(c => `<span class="career-chip">${c}</span>`).join('');

  DOM.riasecDetailedContainer.innerHTML = `
    <div class="riasec-detail-card">
      <div class="riasec-card-header">
        <div class="riasec-header-left">
          <span class="riasec-card-icon">${raw.icon}</span>
          <div>
            <h4 class="riasec-card-title">${g.title}</h4>
            <span class="riasec-card-subtitle">${g.subtitle}</span>
          </div>
        </div>
        <span class="riasec-rank-tag">${rankBadge}</span>
      </div>

      <p class="suggestion-body" style="margin-bottom: 14px; font-weight: 500;">${g.description}</p>

      <div class="observed-traits-box">
        <h5 class="subheading-traits">
          <span>🔍</span> ${t.traitsHeading}
        </h5>
        <ul class="traits-list">
          ${traitsHtml}
        </ul>
      </div>

      <div class="do-avoid-grid">
        <div class="do-card">
          <h5><span>✓</span> ${t.doHeading}</h5>
          <ul class="do-list">
            ${doHtml}
          </ul>
        </div>
        <div class="avoid-card">
          <h5><span>✕</span> ${t.avoidHeading}</h5>
          <ul class="avoid-list">
            ${avoidHtml}
          </ul>
        </div>
      </div>

      <div class="career-env-box">
        <h5 class="career-env-title">💼 ${t.careerEnvHeading}</h5>
        <div class="career-chips">
          ${careerChipsHtml}
        </div>
      </div>
    </div>
  `;
}

function switchGuidelineTab(rank) {
  renderGuidelineTab(rank);
}

function handleToggleGuidelines() {
  const wrapper = DOM.collapsibleGuidelinesWrapper;
  if (!wrapper) return;
  const isHidden = wrapper.style.display === 'none';
  const t = translations[state.lang];

  if (isHidden) {
    wrapper.style.display = 'flex';
    DOM.toggleGuidelinesBtn.classList.add('expanded');
    DOM.toggleGuidelinesBtnText.textContent = t.btnCollapseGuidelines;
    DOM.toggleGuidelinesBtn.setAttribute('aria-expanded', 'true');
    renderGuidelineTab(state.activeGuidelineTab || 'primary');
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    wrapper.style.display = 'none';
    DOM.toggleGuidelinesBtn.classList.remove('expanded');
    DOM.toggleGuidelinesBtnText.textContent = t.btnExpandGuidelines;
    DOM.toggleGuidelinesBtn.setAttribute('aria-expanded', 'false');
  }
}

function renderEvaluatorResults() {
  const scores = state.evaluatedScores;
  const sorted = state.evaluatedRankings;
  const lang = state.lang;
  const t = translations[lang];
  const isBn = lang === 'bn';

  const primary = sorted[0];
  const secondary = sorted[1];
  const tertiary = sorted[2];

  const primaryGuide = riasecGuidelines[primary.key][lang];
  const secondaryGuide = riasecGuidelines[secondary.key][lang];
  const tertiaryGuide = riasecGuidelines[tertiary.key][lang];

  // 1. Personalized Student Heading
  const studentDisplayName = state.lead.studentName || (isBn ? 'আপনার সন্তান' : 'Your Child');
  DOM.evalStudentHeading.textContent = t.evalHeadingTemplate(studentDisplayName);

  // 2. Podium Rank 1 (Gold 🥇: Primary Personality)
  const totalScoreStr = isBn ? toBengaliNum(10) : '10';
  DOM.namePrimary.textContent = primaryGuide.name;
  DOM.badgeTraitPrimary.textContent = t.badgeTraitHigh;
  DOM.scorePrimary.textContent = `${isBn ? toBengaliNum(primary.score) : primary.score}/${totalScoreStr}`;

  // Podium Rank 2 (Silver 🥈: Secondary Personality)
  DOM.nameSecondary.textContent = secondaryGuide.name;
  DOM.badgeTraitSecondary.textContent = t.badgeTraitHigh;
  DOM.scoreSecondary.textContent = `${isBn ? toBengaliNum(secondary.score) : secondary.score}/${totalScoreStr}`;

  // Podium Rank 3 (Bronze 🥉: Supporting Personality)
  DOM.nameSupporting.textContent = tertiaryGuide.name;
  DOM.badgeTraitSupporting.textContent = t.badgeTraitModerate;
  DOM.scoreSupporting.textContent = `${isBn ? toBengaliNum(tertiary.score) : tertiary.score}/${totalScoreStr}`;

  // 3. Summary Statement
  DOM.evalSummaryText.textContent = t.summaryTemplate(primaryGuide.name, secondaryGuide.name);

  // 4. Animate 6 RIASEC Meters
  const total = 10;
  const meterElements = [
    { key: 'R', label: DOM.scoreR, fill: DOM.fillR },
    { key: 'I', label: DOM.scoreI, fill: DOM.fillI },
    { key: 'A', label: DOM.scoreA, fill: DOM.fillA },
    { key: 'S', label: DOM.scoreS, fill: DOM.fillS },
    { key: 'E', label: DOM.scoreE, fill: DOM.fillE },
    { key: 'C', label: DOM.scoreC, fill: DOM.fillC }
  ];

  meterElements.forEach(m => {
    const val = scores[m.key] || 0;
    const pct = Math.round((val / total) * 100);
    animateMeter(m.label, m.fill, val, total, pct, isBn);
  });

  // 5. Render Interactive Hexagon Radar Chart & Legend
  renderRiasecRadarChart(scores);

  // 6. Update Tab Titles with Trait Names
  if (DOM.tabPrimaryText) DOM.tabPrimaryText.textContent = `${t.rankTitlePrimary} (${primaryGuide.name})`;
  if (DOM.tabSecondaryText) DOM.tabSecondaryText.textContent = `${t.rankTitleSecondary} (${secondaryGuide.name})`;
  if (DOM.tabSupportingText) DOM.tabSupportingText.textContent = `${t.rankTitleSupporting} (${tertiaryGuide.name})`;

  // 7. Progressive Disclosure State
  if (DOM.collapsibleGuidelinesWrapper) {
    if (DOM.collapsibleGuidelinesWrapper.style.display !== 'none') {
      DOM.toggleGuidelinesBtnText.textContent = t.btnCollapseGuidelines;
      DOM.toggleGuidelinesBtn.classList.add('expanded');
      renderGuidelineTab(state.activeGuidelineTab || 'primary');
    } else {
      DOM.toggleGuidelinesBtnText.textContent = t.btnExpandGuidelines;
      DOM.toggleGuidelinesBtn.classList.remove('expanded');
    }
  }
}

function handleRetake() {
  state.answers = {};
  state.currentQuestionIndex = 0;
  state.evaluatedScores = null;
  state.evaluatedRankings = null;
  state.activeGuidelineTab = 'primary';
  initShuffledOptions();

  if (DOM.collapsibleGuidelinesWrapper) {
    DOM.collapsibleGuidelinesWrapper.style.display = 'none';
  }
  if (DOM.toggleGuidelinesBtn) {
    DOM.toggleGuidelinesBtn.classList.remove('expanded');
  }

  DOM.evaluatorDashboard.style.display = 'none';
  DOM.surveyStepperContainer.style.display = 'block';
  renderQuestion(0);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function animateMeter(labelEl, barEl, score, total, targetPct, isBangla) {
  barEl.style.width = '0%';
  let currentPct = 0;
  const duration = 600;
  const stepTime = 25;
  const steps = duration / stepTime;
  const increment = targetPct / steps;

  const timer = setInterval(() => {
    currentPct += increment;
    if (currentPct >= targetPct) {
      currentPct = targetPct;
      clearInterval(timer);
    }
    const currentScore = Math.round((currentPct / 100) * total);
    const scoreText = isBangla ? toBengaliNum(currentScore) : currentScore;
    const totalText = isBangla ? toBengaliNum(total) : total;
    const pctText = isBangla ? toBengaliNum(Math.round(currentPct)) : Math.round(currentPct);
    labelEl.textContent = `${scoreText}/${totalText} (${pctText}%)`;
  }, stepTime);

  setTimeout(() => {
    barEl.style.width = `${targetPct}%`;
  }, 50);
}

// 15. SOCIAL SHARING & COMMUNITY ACTIONS
function handleShareWhatsapp() {
  const pName = state.evaluatedRankings && state.evaluatedRankings[0]
    ? riasecGuidelines[state.evaluatedRankings[0].key][state.lang].name
    : '';
  const currentUrl = window.location.href.split('#')[0];
  const msg = state.lang === 'bn'
    ? `আমার সন্তানের Personality Profile পেলাম: ${pName}! আপনিও আপনার সন্তানের Personality ও ক্যারিয়ার গাইডেন্স বুঝতে এই মূল্যায়নটি করুন: ${currentUrl}`
    : `Discovered my child's RIASEC Personality Profile: ${pName}! Evaluate your child's personality and guidance with this assessment: ${currentUrl}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
}

function handleShareFacebook() {
  const currentUrl = window.location.href.split('#')[0];
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank', 'width=620,height=480,scrollbars=yes');
}

function handleCopyLink() {
  const currentUrl = window.location.href.split('#')[0];
  const t = translations[state.lang];

  const onCopied = () => {
    DOM.shareCopyText.textContent = t.copiedText;
    DOM.shareCopyBtn.classList.add('copied');
    showToast('success', t.linkCopiedToast, 2500);
    setTimeout(() => {
      DOM.shareCopyText.textContent = t.shareCopyText;
      DOM.shareCopyBtn.classList.remove('copied');
    }, 2500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(currentUrl).then(onCopied).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }

  function fallbackCopy() {
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = currentUrl;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    onCopied();
  }
}

// 16. KEYBOARD ACCESSIBILITY SHORTCUTS (Keys 1-6 or A-F, Arrows, Enter)
function handleKeyboardShortcuts(e) {
  if (DOM.phase2View.style.display === 'none' || DOM.surveyStepperContainer.style.display === 'none') {
    return;
  }
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
    return;
  }

  const index = state.currentQuestionIndex;
  const qData = questionBank[index];
  if (!qData) return;
  const options = getQuestionOptions(index, state.lang);

  const key = e.key.toUpperCase();
  const digitIdx = parseInt(e.key, 10) - 1;
  const letterMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5 };

  let optIdx = -1;
  if (digitIdx >= 0 && digitIdx < 6) optIdx = digitIdx;
  else if (letterMap[key] !== undefined) optIdx = letterMap[key];

  if (optIdx >= 0 && options[optIdx]) {
    state.answers[index] = options[optIdx].type;
    const allItems = DOM.optionsList.querySelectorAll('.option-item');
    allItems.forEach((el, idx) => {
      if (idx === optIdx) el.classList.add('selected');
      else el.classList.remove('selected');
    });
    updateNavButtons();
  } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
    if (state.answers[index]) {
      if (index === questionBank.length - 1) {
        handleFinishSurvey();
      } else {
        handleNextQuestion();
      }
    }
  } else if (e.key === 'ArrowLeft') {
    handlePrevQuestion();
  }
}

// 17. INITIALIZATION
function init() {
  initShuffledOptions();
  applyTheme(state.theme);
  applyLanguage(state.lang);

  // Theme Toggle Listener
  DOM.themeToggleBtn.addEventListener('click', toggleTheme);

  // Language Toggle Listeners
  DOM.langBtnBn.addEventListener('click', () => applyLanguage('bn'));
  DOM.langBtnEn.addEventListener('click', () => applyLanguage('en'));

  // Phase 1 Error Clearing on Input
  DOM.inputParentName.addEventListener('input', () => clearErrorOnInput(DOM.groupParentName));
  DOM.inputStudentName.addEventListener('input', () => clearErrorOnInput(DOM.groupStudentName));
  DOM.inputStudentAge.addEventListener('input', () => clearErrorOnInput(DOM.groupStudentAge));
  DOM.inputStudentClass.addEventListener('input', () => clearErrorOnInput(DOM.groupStudentClass));
  DOM.inputMobile.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
    clearErrorOnInput(DOM.groupMobile);
  });

  // Phase 1 Form Submit
  DOM.form.addEventListener('submit', handlePhase1Submit);

  // Phase 2 Stepper Navigation
  DOM.nextQuestionBtn.addEventListener('click', handleNextQuestion);
  DOM.prevQuestionBtn.addEventListener('click', handlePrevQuestion);
  DOM.finishSurveyBtn.addEventListener('click', handleFinishSurvey);

  // Phase 2 Evaluator Actions
  DOM.retakeBtn.addEventListener('click', handleRetake);
  DOM.printReportBtn.addEventListener('click', () => window.print());

  // Progressive Disclosure & Guidelines Tab Listeners
  if (DOM.toggleGuidelinesBtn) DOM.toggleGuidelinesBtn.addEventListener('click', handleToggleGuidelines);
  if (DOM.tabPrimary) DOM.tabPrimary.addEventListener('click', () => switchGuidelineTab('primary'));
  if (DOM.tabSecondary) DOM.tabSecondary.addEventListener('click', () => switchGuidelineTab('secondary'));
  if (DOM.tabSupporting) DOM.tabSupporting.addEventListener('click', () => switchGuidelineTab('supporting'));

  // Social Sharing & Copy Listeners
  if (DOM.shareWhatsappBtn) DOM.shareWhatsappBtn.addEventListener('click', handleShareWhatsapp);
  if (DOM.shareFacebookBtn) DOM.shareFacebookBtn.addEventListener('click', handleShareFacebook);
  if (DOM.shareCopyBtn) DOM.shareCopyBtn.addEventListener('click', handleCopyLink);

  // Keyboard Shortcuts (1-6, A-F, Enter, Arrow keys)
  window.addEventListener('keydown', handleKeyboardShortcuts);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
