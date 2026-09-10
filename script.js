/**
 * ==============================================================================
 * PEDAGO ACADEMY - CAREER GUIDANCE LEADS & VARK LEARNING STYLE EVALUATOR
 * Frontend Controller (Bilingual Bangla/English & Light/Dark Theme)
 * ==============================================================================
 */

// 1. DEPLOYED APPS SCRIPT WEB APP URL (Phase 1 Lead Capture)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzLfoHnGM6kqKqnTxFhtQs7ivbGQlb9hzl_eX9GBSkdoDt1MDYM6C2d8EPffGx_4S24/exec";

// 2. COMPLETE QUESTION BANK (From Assets/Question for Website (1).pdf)
const questionBank = [
  {
    id: 1,
    bn: {
      question: "আপনার সন্তান যখন কোনো নতুন খেলনা (যেমন: লেগো বা রোবট) পায়, তখন সে প্রথমে সাধারণত কী করে?",
      options: [
        { type: "V", text: "খেলনার বাক্সের গায়ে থাকা ছবি বা ডায়াগ্রামগুলো মনোযোগ দিয়ে দেখে।" },
        { type: "A", text: "আপনার কাছে জানতে চায় খেলনাটি কীভাবে চালাতে হবে বা মুখে বলা নিয়ম শোনে।" },
        { type: "R", text: "খেলনার সাথে থাকা লিখিত নির্দেশিকা বইটি (Manual) নিজে নিজে পড়ার চেষ্টা করে।" },
        { type: "K", text: "কোনো নিয়ম বা ছবি না দেখেই সরাসরি খেলনাটি নিয়ে হাত-পা দিয়ে পরীক্ষা শুরু করে দেয়।" }
      ]
    },
    en: {
      question: "When your child gets a new toy (e.g. Lego or a robot), what do they usually do first?",
      options: [
        { type: "V", text: "Carefully examines the pictures or diagrams on the toy box." },
        { type: "A", text: "Asks you how to operate it or listens to verbal instructions." },
        { type: "R", text: "Tries to read the written instruction manual by themselves." },
        { type: "K", text: "Immediately starts experimenting hands-on without looking at manuals or pictures." }
      ]
    }
  },
  {
    id: 2,
    bn: {
      question: "স্কুলে বা বাসায় কোনো নতুন গল্প শেখার সময় আপনার সন্তান কীভাবে সবচেয়ে বেশি আনন্দ পায়?",
      options: [
        { type: "V", text: "গল্পের ওপর বানানো কোনো রঙিন কার্টুন, ছবি বা অ্যানিমেশন ভিডিও দেখে।" },
        { type: "A", text: "আপনার বা শিক্ষকের মুখে নাটুকে ভঙ্গিতে গল্পটি শুনতে পারলে।" },
        { type: "R", text: "গল্পের বইটি নিজে নিজে রিডিং পড়ে এবং ছবির চেয়ে লেখার দিকে বেশি মনোযোগ দেয়।" },
        { type: "K", text: "গল্পের চরিত্র সেজে নিজে অভিনয় বা অ্যাক্টিং করতে পারলে।" }
      ]
    },
    en: {
      question: "When learning a new story at home or school, how does your child enjoy it the most?",
      options: [
        { type: "V", text: "Watching a colorful cartoon, picture book, or animated video of the story." },
        { type: "A", text: "Listening to you or a teacher tell the story in an expressive, dramatic voice." },
        { type: "R", text: "Reading the storybook independently, focusing more on the text than illustrations." },
        { type: "K", text: "Dressing up and acting out the characters and plot." }
      ]
    }
  },
  {
    id: 3,
    bn: {
      question: "আপনার সন্তান কোনো নতুন কঠিন শব্দ বা বানান সহজে কীভাবে মনে রাখে?",
      options: [
        { type: "V", text: "শব্দটির বা বস্তুটির একটি ছবি মনের মধ্যে গেঁথে নিয়ে।" },
        { type: "A", text: "শব্দটির বানান বারবার মুখে জোরে জোরে উচ্চারণ বা ছন্দে ছন্দে আউড়ে।" },
        { type: "R", text: "খাতার পাতায় বা ডায়েরিতে শব্দটির বানান বারবার লিখে বা নোট করে।" },
        { type: "K", text: "মাটিতে/বাতাসে আঙুল দিয়ে লিখে অথবা অক্ষরের ফ্ল্যাশকার্ড হাত দিয়ে সাজিয়ে।" }
      ]
    },
    en: {
      question: "How does your child easily remember a new difficult word or spelling?",
      options: [
        { type: "V", text: "By visualizing an image of the word or object in their mind." },
        { type: "A", text: "By repeating the spelling out loud or chanting it in rhythm." },
        { type: "R", text: "By writing it down repeatedly in a notebook or diary." },
        { type: "K", text: "By tracing it in the air/ground with fingers or manipulating physical flashcards." }
      ]
    }
  },
  {
    id: 4,
    bn: {
      question: "আপনার সন্তানের সবচেয়ে প্রিয় শখ বা অবসর সময়ের কাজ কোনটি?",
      options: [
        { type: "V", text: "ছবি আঁকা, রং করা, কমিকস বা কার্টুন দেখা।" },
        { type: "A", text: "গান শোনা, ছড়া আবৃত্তি করা বা গল্প শোনা।" },
        { type: "R", text: "ডায়েরি লেখা, গল্পের বই পড়া বা শব্দের ধাঁধাঁ (Word Search) সমাধান করা।" },
        { type: "K", text: "সাইকেল চালানো, নাচ করা, কাদামাটি/ক্লে দিয়ে জিনিস বানানো বা খেলাধুলা করা।" }
      ]
    },
    en: {
      question: "What is your child's favorite hobby or leisure activity?",
      options: [
        { type: "V", text: "Drawing, coloring, reading comics, or watching cartoons." },
        { type: "A", text: "Listening to music, reciting rhymes, or hearing stories." },
        { type: "R", text: "Writing in a diary, reading books, or solving word search puzzles." },
        { type: "K", text: "Cycling, dancing, molding clay/playdough, or outdoor sports." }
      ]
    }
  },
  {
    id: 5,
    bn: {
      question: "পড়ার টেবিলে বা ক্লাসরুমে আপনার সন্তান সাধারণত কীভাবে মনোযোগ ধরে রাখে?",
      options: [
        { type: "V", text: "শিক্ষকের ব্ল্যাকবোর্ড/হোয়াইটবোর্ডের লেখা বা চার্টের দিকে তাকিয়ে থেকে।" },
        { type: "A", text: "শিক্ষকের কথার দিকে কান খাড়া করে রাখে এবং খুব শান্ত হয়ে শোনে।" },
        { type: "R", text: "বইয়ের লাইনের নিচে আঙুল বা স্কেল রেখে রিডিং পড়তে ভালোবাসে।" },
        { type: "K", text: "পড়ার সময় অনবরত পেনসিল ঘুরায়, পা দোলায় বা হাত-পা নাড়াচাড়া করে।" }
      ]
    },
    en: {
      question: "How does your child typically stay focused at the study desk or in the classroom?",
      options: [
        { type: "V", text: "Looking intently at the teacher's board, charts, or visuals." },
        { type: "A", text: "Listening attentively and calmly to every word the teacher says." },
        { type: "R", text: "Guiding their reading along text lines using a finger or ruler." },
        { type: "K", text: "Spinning pencils, swinging legs, or moving hands while studying." }
      ]
    }
  },
  {
    id: 6,
    bn: {
      question: "আপনার সন্তানকে কোনো নতুন জায়গায় (যেমন: চিড়িয়াখানা বা মিউজিয়াম) নিয়ে গেলে সে কী করে?",
      options: [
        { type: "V", text: "চারপাশের সুন্দর দৃশ্য, পশুপাখি বা ওখানকার ম্যাপ আগ্রহ নিয়ে দেখে।" },
        { type: "A", text: "গাইড বা আপনাকে বিভিন্ন প্রশ্ন করে এবং আপনার ব্যাখ্যা মন দিয়ে শোনে।" },
        { type: "R", text: "খাঁচার সামনে বা দেওয়ালে নোটিশবোর্ডে লেখা তথ্যগুলো দাঁড়িয়ে দাঁড়িয়ে পড়ে।" },
        { type: "K", text: "পশুপাখিকে খাবার খাওয়াতে চায়, গাছপালা বা রাইডগুলো হাত দিয়ে ছুঁয়ে দেখতে চায়।" }
      ]
    },
    en: {
      question: "When taking your child to a new place (e.g. Zoo or Museum), what do they do?",
      options: [
        { type: "V", text: "Fascinated by scenic views, animals, or following the map." },
        { type: "A", text: "Asks questions to the guide or you and listens carefully to explanations." },
        { type: "R", text: "Stands and reads information boards, plaques, and placards." },
        { type: "K", text: "Wants to feed animals, touch plants, or interact with hands-on exhibits." }
      ]
    }
  },
  {
    id: 7,
    bn: {
      question: "পরীক্ষার পড়া রিভিশন দেওয়ার সময় আপনার সন্তানের কোন পদ্ধতিটি পছন্দ?",
      options: [
        { type: "V", text: "রঙিন মার্কার বা হাইলাইটার দিয়ে দাগানো ছবি, চার্ট ও ছকগুলো দেখে।" },
        { type: "A", text: "আপনার বা বন্ধুর সাথে প্রশ্ন-উত্তর খেলা খেলে (মুখে মুখে পড়া ধরা)।" },
        { type: "R", text: "নিজের তৈরি করা সংক্ষিপ্ত নোট বা বইয়ের প্রশ্নোত্তরগুলো বারবার রিডিং পড়ে।" },
        { type: "K", text: "পড়ার বিষয়টিকে কোনো বাস্তব উদাহরণ বা প্র্যাক্টিক্যাল কাজের সাথে মিলিয়ে মনে করার চেষ্টা করে।" }
      ]
    },
    en: {
      question: "When revising for an exam, which method does your child prefer?",
      options: [
        { type: "V", text: "Reviewing highlighted text, visual diagrams, flowcharts, and tables." },
        { type: "A", text: "Playing Q&A quiz games verbally with you or friends." },
        { type: "R", text: "Rereading self-made concise notes, summaries, and book answers." },
        { type: "K", text: "Connecting concepts to real-life practical examples or hands-on practice." }
      ]
    }
  },
  {
    id: 8,
    bn: {
      question: "আপনার সন্তান যখন কোনো জটিল ধাঁধাঁ বা পাজল (Puzzle) সমাধান করে, তখন তার কৌশল কী হয়?",
      options: [
        { type: "V", text: "আগে টুকরোগুলোর রং এবং আকৃতি চোখ দিয়ে ভালো করে দেখে নেয়।" },
        { type: "A", text: "জোরে জোরে নিজে নিজেই কথা বলে (\"এইটা এখানে যাবে, ওইটা ওখানে\") সমাধান করে।" },
        { type: "R", text: "যদি কোনো নিয়ম বা টিপস লেখা থাকে, তবে আগে তা পড়ে নেয়।" },
        { type: "K", text: "কোনো কিছু না ভেবেই সরাসরি টুকরোগুলো একটার সাথে আরেকটা জোড়া দিয়ে চেষ্টা করতে থাকে।" }
      ]
    },
    en: {
      question: "When solving a complex puzzle, what is your child's strategy?",
      options: [
        { type: "V", text: "Carefully inspects colors and shapes of puzzle pieces visually first." },
        { type: "A", text: "Talks aloud to themselves (\"this goes here, that goes there\") while solving." },
        { type: "R", text: "Reads the rules, guidelines, or puzzle tips before starting." },
        { type: "K", text: "Immediately jumps into physically fitting pieces together through trial and error." }
      ]
    }
  },
  {
    id: 9,
    bn: {
      question: "আপনার সন্তান অন্য কোনো মানুষের বর্ণনা দেওয়ার সময় কোন বিষয়ের ওপর বেশি জোর দেয়?",
      options: [
        { type: "V", text: "সে কেমন পোশাক পরেছিল বা তার চেহারা ও লুক কেমন ছিল।" },
        { type: "A", text: "সে কীভাবে কথা বলছিল বা তার গলার আওয়াজ কেমন ছিল।" },
        { type: "R", text: "তার নাম কী, সে কী কাজ করে বা তার সম্পর্কে কী কী লিখিত তথ্য সে জানে।" },
        { type: "K", text: "সে কতটুকু চটপটে ছিল বা তার সাথে হ্যান্ডশেক/কোলাকুলি করার অভিজ্ঞতা কেমন ছিল।" }
      ]
    },
    en: {
      question: "When your child describes another person, what do they emphasize most?",
      options: [
        { type: "V", text: "What clothes they wore, their facial appearance, and overall visual look." },
        { type: "A", text: "How they spoke, their tone of voice, accent, or laughter." },
        { type: "R", text: "Their name, designation, factual details, or written background info." },
        { type: "K", text: "How energetic they were, or the physical handshake/hug experience." }
      ]
    }
  },
  {
    id: 10,
    bn: {
      question: "আপনার সন্তান যখন কোনো কারণে খুব উত্তেজিত বা আনন্দিত হয়, তখন সে তা কীভাবে প্রকাশ করে?",
      options: [
        { type: "V", text: "তার চোখ-মুখ উজ্জ্বল হয়ে ওঠে এবং সে চারদিকের সুন্দর জিনিসগুলোর দিকে ইশারা করে।" },
        { type: "A", text: "সে অনেক বেশি কথা বলতে শুরু করে এবং উচ্চস্বরে চিৎকার বা হাসাহাসি করে।" },
        { type: "R", text: "সে শান্ত হয়ে তার আনন্দের কথা ডায়েরিতে লিখতে বা কাউকে মেসেজ লিখে জানাতে পছন্দ করে।" },
        { type: "K", text: "সে খুশিতে লাফাতে শুরু করে, তালি দেয় বা আপনাকে জড়িয়ে ধরে।" }
      ]
    },
    en: {
      question: "When your child is very excited or happy, how do they express it?",
      options: [
        { type: "V", text: "Their eyes and face light up, pointing out delightful things around." },
        { type: "A", text: "Starts talking a lot and expresses delight with loud cheering or giggles." },
        { type: "R", text: "Quietly writes about their happiness in a diary or sends a text message." },
        { type: "K", text: "Jumps up and down with joy, claps hands, or hugs you tightly." }
      ]
    }
  }
];

// 3. GUIDELINES & SUGGESTIONS REPOSITORY (Part 2 of PDF)
const varkGuidelines = {
  V: {
    icon: "👁️",
    bn: {
      title: "Visual Learner (দৃশ্যমান শিক্ষার্থী)",
      summary: "আপনার সন্তান চোখে যা দেখে, তা খুব দ্রুত মাথায় গেঁথে ফেলে এবং দীর্ঘদিন মনে রাখতে পারে।",
      suggestions: [
        { icon: "📚", title: "পড়ার কৌশল", text: "পড়ার সময় গুরুত্বপূর্ণ লাইনগুলো রঙিন হাইলাইটার বা মার্কার দিয়ে দাগানোর অভ্যাস করান।" },
        { icon: "🛠️", title: "সহায়ক টুলস", text: "কঠিন তথ্য বা শব্দ মনে রাখার জন্য ছবিযুক্ত ফ্ল্যাশকার্ড, ফ্লো-চার্ট, ম্যাপ বা ডায়াগ্রাম ব্যবহার করুন।" },
        { icon: "💻", title: "ডিজিটাল মাধ্যম", text: "ইউটিউব বা শিক্ষামূলক অ্যাপের অ্যানিমেশন ও ইনফোগ্রাফিক ভিডিওর মাধ্যমে জটিল বিষয়গুলো বুঝিয়ে দিন।" },
        { icon: "🏡", title: "পড়ার পরিবেশ", text: "পড়ার টেবিল বা ঘর যেন একদম গোছানো থাকে। চারপাশ অগোছালো বা হিজিবিজি হলে এদের মনোযোগ নষ্ট হয়।" }
      ]
    },
    en: {
      title: "Visual Learner",
      summary: "Your child absorbs and retains information best through visual stimuli, diagrams, and visual organization.",
      suggestions: [
        { icon: "📚", title: "Study Techniques", text: "Encourage highlighting important lines with colored highlighters or colored pens." },
        { icon: "🛠️", title: "Supporting Tools", text: "Use illustrated flashcards, mind maps, flowcharts, and diagrams for tough concepts." },
        { icon: "💻", title: "Digital Media", text: "Explain complex topics via animated explainer videos and infographic visual media." },
        { icon: "🏡", title: "Study Environment", text: "Maintain a clutter-free, tidy desk. Visual clutter easily distracts visual learners." }
      ]
    }
  },
  A: {
    icon: "👂",
    bn: {
      title: "Auditory Learner (শ্রুতিগত শিক্ষার্থী)",
      summary: "আপনার সন্তান কান দিয়ে শুনে এবং মুখে নিজের আওয়াজ শুনে সবচেয়ে ভালো ও দ্রুত শেখে।",
      suggestions: [
        { icon: "📚", title: "পড়ার কৌশল", text: "তাকে মুখ বন্ধ করে পড়ার চেয়ে শব্দ করে বা বিড়বিড় করে পড়ার পূর্ণ স্বাধীনতা দিন।" },
        { icon: "🛠️", title: "সহায়ক টুলস", text: "পড়া শেষে শিশুকে মুখস্থ লিখতে না দিয়ে মুখে মুখে পড়া ধরুন। অথবা তাকেই 'শিক্ষক' সাজিয়ে আপনাকে পড়াটি বুঝিয়ে দিতে বলুন।" },
        { icon: "💻", title: "ডিজিটাল মাধ্যম", text: "ছড়া, গল্প বা সাধারণ জ্ঞানের বিষয়গুলো অডিও বুক বা শিক্ষামূলক পডকাস্ট শুনিয়ে শেখাতে পারেন।" },
        { icon: "🏡", title: "পড়ার পরিবেশ", text: "পড়ার সময় ঘরের চারপাশ যেন একদম নিস্তব্ধ থাকে। সামান্য আওয়াজ বা টেলিভিশনের শব্দে এদের মনোযোগ দ্রুত ভেঙে যায়।" }
      ]
    },
    en: {
      title: "Auditory Learner",
      summary: "Your child learns fastest by listening, speaking, discussing, and hearing concepts spoken out loud.",
      suggestions: [
        { icon: "📚", title: "Study Techniques", text: "Allow them to read aloud or mutter while reading rather than forcing silent reading." },
        { icon: "🛠️", title: "Supporting Tools", text: "Conduct verbal Q&A sessions, or let the child act as the teacher and explain the lesson to you." },
        { icon: "💻", title: "Digital Media", text: "Utilize audiobooks, podcasts, educational recordings, and rhymes." },
        { icon: "🏡", title: "Study Environment", text: "Ensure a quiet room during study. Background chatter or TV noise breaks their focus quickly." }
      ]
    }
  },
  R: {
    icon: "📖",
    bn: {
      title: "Reading/Writing Learner (পঠন ও লিখন শিক্ষার্থী)",
      summary: "আপনার সন্তান যেকোনো বিষয়ের লিখিত রূপ (Text) দেখতে, বই পড়তে এবং খাতার পাতায় লিখতে সবচেয়ে বেশি ভালোবাসে।",
      suggestions: [
        { icon: "📚", title: "পড়ার কৌশল", text: "পড়ার সময় পাশে একটি খাতা রাখুন, যেন সে নিজে নিজে প্রধান পয়েন্টগুলো ডায়েরি বা নোটের মতো করে লিখে রাখতে পারে।" },
        { icon: "🛠️", title: "সহায়ক টুলস", text: "যেকোনো কাজের রুটিন বা পড়ার অধ্যায়গুলো ডায়েরিতে সুন্দর করে ক্রমিক তালিকা (List) করে দিন।" },
        { icon: "📖", title: "বই পড়ার অভ্যাস", text: "তাকে ক্লাসের বইয়ের বাইরে প্রচুর গল্পের বই পড়ার সুযোগ দিন এবং নতুন শব্দের অর্থ খোঁজার জন্য ডিকশনারি ব্যবহারে উৎসাহিত করুন।" },
        { icon: "📝", title: "মূল্যায়ন পদ্ধতি", text: "পড়া যাচাই করার জন্য তাকে মুখে ধরার চেয়ে ছোট ছোট লিখিত কুইজ বা পরীক্ষা নিলে সে বেশি স্বাচ্ছন্দ্য বোধ করবে।" }
      ]
    },
    en: {
      title: "Reading/Writing Learner",
      summary: "Your child thrives on textual information, note-taking, reading books, and writing things down in their own words.",
      suggestions: [
        { icon: "📚", title: "Study Techniques", text: "Keep a study notepad handy so they can summarize main points and take bullet notes." },
        { icon: "🛠️", title: "Supporting Tools", text: "Organize lessons and routines into neat checklists and structured bulleted lists." },
        { icon: "📖", title: "Reading Habits", text: "Provide access to storybooks and encourage using dictionaries to look up new vocabulary." },
        { icon: "📝", title: "Assessment Method", text: "Test understanding via short written quizzes rather than verbal questioning." }
      ]
    }
  },
  K: {
    icon: "🏃",
    bn: {
      title: "Kinesthetic Learner (শারীরিক বা হাতে-কলমে শিক্ষার্থী)",
      summary: "আপনার সন্তান শরীর নাড়িয়ে, জিনিসপত্র ছুঁয়ে এবং সরাসরি বাস্তব অভিজ্ঞতার বা কাজের মাধ্যমে শেখে।",
      suggestions: [
        { icon: "📚", title: "পড়ার কৌশল", text: "তাকে এক জায়গায় জোর করে ঘণ্টার পর ঘণ্টা বসিয়ে রাখবেন না। ২০-২৫ মিনিট পড়ার পর ৫ মিনিটের জন্য একটু হেঁটে আসার বা হাত-পা স্ট্রেচ করার ছোট বিরতি (Study Breaks) দিন।" },
        { icon: "🛠️", title: "সহায়ক টুলস", text: "গণিত শেখানোর সময় মার্বেল বা কাঠি ব্যবহার করুন। বিজ্ঞান শেখাতে ছোটখাটো নিরাপদ ল্যাব এক্সপেরিমেন্ট বা ঘরের চারপাশের প্রকৃতির সাহায্য নিন।" },
        { icon: "🏃", title: "শারীরিক মুভমেন্ট", text: "পড়ার সময় বা কোনো কিছু মুখস্থ করার সময় তাকে ঘরের মধ্যে পায়চারি বা হাঁটাহাঁটি করতে দিন। হাত-পা নাড়ালে এদের ব্রেইন বেশি সচল হয়।" },
        { icon: "💡", title: "মেধা বিকাশ", text: "লেগো (Lego), ব্লক গেম, কাদামাটি/ক্লে দিয়ে জিনিস বানানো বা ধাঁধাঁ মেলানোর মাধ্যমে তার মেধার বিকাশ ঘটান।" }
      ]
    },
    en: {
      title: "Kinesthetic Learner",
      summary: "Your child learns through movement, tactile touch, real-world examples, and hands-on physical activity.",
      suggestions: [
        { icon: "📚", title: "Study Techniques", text: "Avoid making them sit still for hours. Provide a 5-minute movement break every 20-25 minutes." },
        { icon: "🛠️", title: "Supporting Tools", text: "Use physical counting beads, sticks for math, and simple hands-on nature experiments for science." },
        { icon: "🏃", title: "Physical Movement", text: "Allow pacing or walking around while memorizing or revising; physical motion stimulates their brain." },
        { icon: "💡", title: "Skill Growth", text: "Engage them with Lego, blocks, modeling clay, and 3D tactile puzzles to develop problem-solving." }
      ]
    }
  },
  M: {
    icon: "🔀",
    bn: {
      title: "Multimodal Learner (বহুমুখী শিক্ষার্থী)",
      summary: "আপনার সন্তান একজন Multimodal Learner (বহুমুখী শিক্ষার্থী)। সে কেবল একটি পদ্ধতিতে সীমাবদ্ধ নয়। তাকে কখনো ছবি দেখিয়ে, কখনো মুখে আলোচনা করে, আবার কখনো প্র্যাক্টিক্যাল কাজের মিশ্রণে শেখানোই সবচেয়ে কার্যকরী হবে।",
      suggestions: [
        { icon: "🔀", title: "সমন্বিত পড়ার কৌশল", text: "একাধিক পদ্ধতির মিশ্রণ ঘটান—কখনো ছবি ও ডায়াগ্রাম, কখনো অডিও আলোচনা এবং মাঝে মাঝে হাতে-কলমে প্র্যাক্টিস।" },
        { icon: "📚", title: "বিষয়নিয়ন্ত্রিত পদ্ধতি", text: "কঠিন বিষয়ে যে পদ্ধতিতে সন্তান সাড়া দেয় সেটিকে প্রাধান্য দিন; একঘেয়েমি কাটাতে ভিন্ন ভিন্ন টেকনিক কাজে লাগান।" },
        { icon: "🛠️", title: "উপকরণ বৈচিত্র্য", text: "ভিজ্যুয়াল চার্ট, অডিও বুক ও নোট লেখার সংমিশ্রণে পড়াশোনাকে আকর্ষণীয় রাখুন।" },
        { icon: "🏡", title: "নমনীয় পরিবেশ", text: "কখনো শান্ত টেবিলে, কখনো পায়চারি করে পড়ার নমনীয় স্বাধীনতা দিন।" }
      ]
    },
    en: {
      title: "Multimodal Learner",
      summary: "Your child is a versatile learner who benefits from a flexible blend of visual, auditory, reading, and hands-on techniques.",
      suggestions: [
        { icon: "🔀", title: "Integrated Study", text: "Combine multiple styles: pair visual illustrations with verbal discussions and hands-on practice." },
        { icon: "📚", title: "Adaptive Approach", text: "Tailor techniques by subject—use visual diagrams for science and verbal role-play for languages." },
        { icon: "🛠️", title: "Diverse Learning Tools", text: "Keep a balanced mix of flashcards, audiobooks, written checklists, and tactile models." },
        { icon: "🏡", title: "Flexible Environment", text: "Offer flexibility: allow quiet focused reading as well as active movement when energy is high." }
      ]
    }
  }
};

// 4. UI BILINGUAL DICTIONARY
const translations = {
  bn: {
    docTitle: "ক্যারিয়ার গাইডেন্স ও লার্নিং স্টাইল মূল্যায়ন - পেডাগো একাডেমি",
    badgeText: "ক্যারিয়ার গাইডেন্স ও মূল্যায়ন",
    pageTitle: "সন্তানের লার্নিং স্টাইল মূল্যায়ন",
    pageSubtitle: "আপনার সন্তান কীভাবে সবচেয়ে ভালো শেখে এবং আচরণ করে তা জানতে তথ্যগুলো পূরণ করে মূল্যায়ন জরিপ শুরু করুন।",

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
    agePlaceholder: "শিক্ষার্থীর বয়স লিখুন (যেমন: ১০)",
    ageErrorEmpty: "অনুগ্রহ করে শিক্ষার্থীর বয়স লিখুন।",
    ageErrorInvalid: "সঠিক বয়স লিখুন (১ থেকে ৯৯ এর মধ্যে)।",

    btnSubmit: "জমা দিন ও মূল্যায়ন শুরু করুন",
    btnSubmitting: "অপেক্ষা করুন...",

    successToast: "ধন্যবাদ! তথ্য সফলভাবে জমা হয়েছে। মূল্যায়ন জরিপ শুরু হচ্ছে...",
    errorToast: "দুঃখিত! তথ্য জমা দেওয়া সম্ভব হয়নি। অনুগ্রহ করে আপনার ইন্টারনেট কানেকশন চেক করে আবার চেষ্টা করুন।",
    unconfiguredUrlToast: "দয়া করে প্রথমে Google Apps Script ডিপ্লয় করে প্রাপ্ত Web App URL-টি script.js-এর SCRIPT_URL ভ্যারিয়েবলে পেস্ট করুন।",

    footerCallUs: "যে কোনো তথ্যের জন্য কল করুন:",

    // Stepper translations
    qInstruction: "নিচের ৪টি অপশনের মধ্যে যেটি আপনার সন্তানের সাথে সবচেয়ে বেশি মিলে, সেটি সিলেক্ট করুন:",
    btnPrev: "পূর্ববর্তী",
    btnNext: "পরবর্তী",
    btnFinish: "ফলাফল ও মূল্যায়ন দেখুন",
    calculating: "ফলাফল তৈরি হচ্ছে...",
    stepTextTemplate: (curr, total) => `${toBengaliNum(total)}টির মধ্যে ${toBengaliNum(curr)}ম প্রশ্ন`,
    pillTextTemplate: (curr, total) => `প্রশ্ন ${toBengaliNum(curr)}/${toBengaliNum(total)}`,
    pctTextTemplate: (pct) => `${toBengaliNum(pct)}% সম্পন্ন`,

    // Evaluator translations
    evalBadge: "লার্নিং স্টাইল রিপোর্ট ও মূল্যায়ন",
    evalStudentTemplate: (name) => `${name}-এর মূল্যায়ন সম্পন্ন হয়েছে!`,
    dominantTag: "প্রধান লার্নিং স্টাইল",
    statsTitle: "পরিসংখ্যান ও লার্নিং স্কোর ফিগার",
    statsSubtitle: "১০টি প্রশ্নের উত্তরের ওপর ভিত্তি করে প্রাপ্ত শতকরা হার ও স্কোর:",
    labelVisual: "Visual (দৃশ্যমান)",
    labelAuditory: "Auditory (শ্রুতিগত)",
    labelReading: "Reading/Writing (পঠন ও লিখন)",
    labelKinesthetic: "Kinesthetic (শারীরিক বা হাতে-কলমে)",
    guidelinesTitle: "অভিভাবকের জন্য পরিচর্যা ও পড়ার পরামর্শ",
    guidelinesSubtitle: "সন্তানের পড়াশোনাকে আনন্দময় ও কার্যকর করতে বিশেষজ্ঞ গাইডলাইন:",
    btnPrint: "রিপোর্ট প্রিন্ট বা সেভ করুন",
    btnCounselor: "কাউন্সেলরের পরামর্শ নিন",
    btnRetake: "নতুন করে মূল্যায়ন করুন"
  },
  en: {
    docTitle: "Career Guidance & VARK Learning Style Evaluator - Pedago Academy",
    badgeText: "Career Guidance & Evaluation",
    pageTitle: "Student Learning Style Evaluation",
    pageSubtitle: "Fill in the details to discover how your child learns best and receive personalized parenting guidelines.",

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
    agePlaceholder: "Enter student's age (e.g. 10)",
    ageErrorEmpty: "Please enter the student's age.",
    ageErrorInvalid: "Enter a valid age (between 1 and 99).",

    btnSubmit: "Submit & Start Evaluation",
    btnSubmitting: "Submitting...",

    successToast: "Thank you! Information submitted successfully. Launching evaluation survey...",
    errorToast: "Sorry! Submission failed. Please check your internet connection and try again.",
    unconfiguredUrlToast: "Please deploy the Google Apps Script first and paste the Web App URL into SCRIPT_URL in script.js.",

    footerCallUs: "For any inquiries, call:",

    // Stepper translations
    qInstruction: "Select the option that best matches your child's natural behavior:",
    btnPrev: "Previous",
    btnNext: "Next",
    btnFinish: "View Evaluation Results",
    calculating: "Generating report...",
    stepTextTemplate: (curr, total) => `Question ${curr} of ${total}`,
    pillTextTemplate: (curr, total) => `Question ${curr}/${total}`,
    pctTextTemplate: (pct) => `${pct}% Completed`,

    // Evaluator translations
    evalBadge: "Learning Style Report & Evaluation",
    evalStudentTemplate: (name) => `Evaluation completed for ${name}!`,
    dominantTag: "Dominant Learning Style",
    statsTitle: "Statistics & Learning Score Breakdown",
    statsSubtitle: "Percentage distribution and scores calculated from 10 assessment answers:",
    labelVisual: "Visual",
    labelAuditory: "Auditory",
    labelReading: "Reading / Writing",
    labelKinesthetic: "Kinesthetic",
    guidelinesTitle: "Parenting Care & Study Guidelines",
    guidelinesSubtitle: "Expert recommendations to make learning joyful and effective for your child:",
    btnPrint: "Print or Save Report",
    btnCounselor: "Speak with a Counselor",
    btnRetake: "Retake Evaluation"
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

  // Student Lead Information from Phase 1
  student: {
    name: '',
    mobile: '',
    studentAge: ''
  },

  // Questionnaire Progress (Purely Client-Side Static Evaluation)
  currentQuestionIndex: 0,
  answers: {}, // index 0..9 -> 'V' | 'A' | 'R' | 'K'
  evaluatedScores: null,
  evaluatedDominantStyle: null
};

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

  // Phase 1 Elements
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
  inputAge: document.getElementById('studentAge'),
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
  footerCallUs: document.getElementById('footerCallUs'),

  // Phase 2: Survey Stepper Elements
  surveyStudentName: document.getElementById('surveyStudentName'),
  surveyProgressPill: document.getElementById('surveyProgressPill'),
  progressBarFill: document.getElementById('progressBarFill'),
  surveyStepDetail: document.getElementById('surveyStepDetail'),
  surveyPercentText: document.getElementById('surveyPercentText'),
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
  dominantStyleIcon: document.getElementById('dominantStyleIcon'),
  dominantStyleTag: document.getElementById('dominantStyleTag'),
  dominantStyleTitle: document.getElementById('dominantStyleTitle'),
  dominantStyleSummary: document.getElementById('dominantStyleSummary'),

  statsSectionTitle: document.getElementById('statsSectionTitle'),
  statsSectionSubtitle: document.getElementById('statsSectionSubtitle'),
  labelMeterVisual: document.getElementById('labelMeterVisual'),
  scoreVisual: document.getElementById('scoreVisual'),
  fillVisual: document.getElementById('fillVisual'),
  labelMeterAuditory: document.getElementById('labelMeterAuditory'),
  scoreAuditory: document.getElementById('scoreAuditory'),
  fillAuditory: document.getElementById('fillAuditory'),
  labelMeterReading: document.getElementById('labelMeterReading'),
  scoreReading: document.getElementById('scoreReading'),
  fillReading: document.getElementById('fillReading'),
  labelMeterKinesthetic: document.getElementById('labelMeterKinesthetic'),
  scoreKinesthetic: document.getElementById('scoreKinesthetic'),
  fillKinesthetic: document.getElementById('fillKinesthetic'),

  guidelinesSectionTitle: document.getElementById('guidelinesSectionTitle'),
  guidelinesSectionSubtitle: document.getElementById('guidelinesSectionSubtitle'),
  suggestionsContainer: document.getElementById('suggestionsContainer'),

  btnPrintText: document.getElementById('btnPrintText'),
  btnCounselorText: document.getElementById('btnCounselorText'),
  btnRetakeText: document.getElementById('btnRetakeText'),
  printReportBtn: document.getElementById('printReportBtn'),
  retakeBtn: document.getElementById('retakeBtn')
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
  DOM.badgeText.textContent = t.badgeText;
  DOM.pageTitle.textContent = t.pageTitle;
  DOM.pageSubtitle.textContent = t.pageSubtitle;

  DOM.labelName.textContent = t.labelName;
  DOM.inputName.placeholder = t.namePlaceholder;

  DOM.labelMobile.textContent = t.labelMobile;
  DOM.inputMobile.placeholder = t.mobilePlaceholder;
  DOM.mobileHint.textContent = t.mobileHint;

  DOM.labelAge.textContent = t.labelAge;
  DOM.inputAge.placeholder = t.agePlaceholder;

  if (!state.isSubmitting) {
    DOM.btnText.textContent = t.btnSubmit;
  } else {
    DOM.btnText.textContent = t.btnSubmitting;
  }

  DOM.footerCallUs.textContent = t.footerCallUs;

  // Stepper UI Texts
  DOM.questionInstruction.textContent = t.qInstruction;
  DOM.btnPrevText.textContent = t.btnPrev;
  DOM.btnNextText.textContent = t.btnNext;
  DOM.btnFinishText.textContent = t.btnFinish;

  // Evaluator Dashboard Texts
  DOM.evalResultBadge.textContent = t.evalBadge;
  DOM.dominantStyleTag.textContent = t.dominantTag;
  DOM.statsSectionTitle.textContent = t.statsTitle;
  DOM.statsSectionSubtitle.textContent = t.statsSubtitle;
  DOM.labelMeterVisual.textContent = t.labelVisual;
  DOM.labelMeterAuditory.textContent = t.labelAuditory;
  DOM.labelMeterReading.textContent = t.labelReading;
  DOM.labelMeterKinesthetic.textContent = t.labelKinesthetic;
  DOM.guidelinesSectionTitle.textContent = t.guidelinesTitle;
  DOM.guidelinesSectionSubtitle.textContent = t.guidelinesSubtitle;
  DOM.btnPrintText.textContent = t.btnPrint;
  DOM.btnCounselorText.textContent = t.btnCounselor;
  DOM.btnRetakeText.textContent = t.btnRetake;

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

// 10. CLIENT-SIDE VALIDATION
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
  const val = DOM.inputAge.value.trim();
  const t = translations[state.lang];

  if (!val) {
    DOM.groupAge.classList.add('has-error');
    DOM.ageErrorText.textContent = t.ageErrorEmpty;
    if (focusOnError) DOM.inputAge.focus();
    return false;
  }

  const ageNum = parseInt(val, 10);
  if (isNaN(ageNum) || ageNum < 1 || ageNum > 99) {
    DOM.groupAge.classList.add('has-error');
    DOM.ageErrorText.textContent = t.ageErrorInvalid;
    if (focusOnError) DOM.inputAge.focus();
    return false;
  }

  DOM.groupAge.classList.remove('has-error');
  return true;
}

function clearErrorOnInput(groupEl) {
  groupEl.classList.remove('has-error');
}

// 11. PHASE 1: FORM SUBMISSION (Records Lead into Google Sheet)
async function handlePhase1Submit(e) {
  e.preventDefault();
  hideToast();

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

  state.student.name = DOM.inputName.value.trim();
  state.student.mobile = DOM.inputMobile.value.trim();
  state.student.studentAge = DOM.inputAge.value.trim();

  const payload = {
    name: state.student.name,
    mobile: state.student.mobile,
    studentAge: state.student.studentAge
  };

  const t = translations[state.lang];

  // If SCRIPT_URL has not been set yet
  if (!SCRIPT_URL || SCRIPT_URL === "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE") {
    showToast('error', t.unconfiguredUrlToast, 8000);
    return;
  }

  // Submitting state
  state.isSubmitting = true;
  DOM.submitBtn.disabled = true;
  DOM.submitBtn.classList.add('loading');
  DOM.btnText.textContent = t.btnSubmitting;

  try {
    // Send Phase 1 lead data to Google Apps Script Web App
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
      
      // Transition to Phase 2 (Static Evaluator) after short delay
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

// 12. TRANSITION TO PHASE 2 (Interactive Questionnaire & Evaluator)
function transitionToPhase2() {
  DOM.phase1View.style.display = 'none';
  DOM.phase2View.style.display = 'block';
  DOM.surveyStepperContainer.style.display = 'block';
  DOM.evaluatorDashboard.style.display = 'none';

  DOM.surveyStudentName.textContent = state.student.name;

  state.currentQuestionIndex = 0;
  state.answers = {};
  renderQuestion(0);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 13. QUESTIONNAIRE RENDERING & INTERACTION
function renderQuestion(index) {
  const qData = questionBank[index];
  const t = translations[state.lang];
  const langData = qData[state.lang];

  const totalQ = questionBank.length;
  const currentNum = index + 1;
  const pct = Math.round((currentNum / totalQ) * 100);

  // Update progress headers
  DOM.surveyProgressPill.textContent = t.pillTextTemplate(currentNum, totalQ);
  DOM.progressBarFill.style.width = `${pct}%`;
  DOM.surveyStepDetail.textContent = t.stepTextTemplate(currentNum, totalQ);
  DOM.surveyPercentText.textContent = t.pctTextTemplate(pct);

  // Question Title
  const prefix = state.lang === 'bn' ? `প্রশ্ন ${toBengaliNum(currentNum)}: ` : `Question ${currentNum}: `;
  DOM.currentQuestionTitle.textContent = `${prefix}${langData.question}`;

  // Options List
  DOM.optionsList.innerHTML = '';
  const selectedType = state.answers[index];

  langData.options.forEach((opt) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'option-item' + (selectedType === opt.type ? ' selected' : '');
    itemEl.setAttribute('role', 'radio');
    itemEl.setAttribute('aria-checked', selectedType === opt.type ? 'true' : 'false');
    itemEl.tabIndex = 0;

    itemEl.innerHTML = `
      <div class="option-radio">
        <div class="option-radio-dot"></div>
      </div>
      <div class="option-text">${opt.text}</div>
    `;

    const selectOption = () => {
      state.answers[index] = opt.type;
      
      // Update UI classes
      const allItems = DOM.optionsList.querySelectorAll('.option-item');
      allItems.forEach(el => el.classList.remove('selected'));
      itemEl.classList.add('selected');

      // Update Navigation Buttons
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

  // Previous button: disabled only on first question
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

// 14. EVALUATOR CALCULATION & DASHBOARD (Purely Client-Side Static Evaluation)
function handleFinishSurvey() {
  const t = translations[state.lang];
  DOM.finishSurveyBtn.disabled = true;
  DOM.finishSpinner.style.display = 'inline-block';
  DOM.btnFinishText.textContent = t.calculating;

  // Count scores for V, A, R, K
  const scores = { V: 0, A: 0, R: 0, K: 0 };
  for (let i = 0; i < questionBank.length; i++) {
    const ans = state.answers[i];
    if (ans && scores[ans] !== undefined) {
      scores[ans]++;
    }
  }

  // Determine Dominant Learning Style
  // If top scores are tied or within 1 point of each other -> Multimodal (M)
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const highestScore = sorted[0][1];
  const secondHighest = sorted[1][1];

  let dominantKey = sorted[0][0];
  if (highestScore - secondHighest <= 1 && highestScore > 0) {
    dominantKey = 'M'; // Multimodal Learner
  }

  state.evaluatedScores = scores;
  state.evaluatedDominantStyle = dominantKey;

  setTimeout(() => {
    DOM.finishSpinner.style.display = 'none';
    DOM.finishSurveyBtn.disabled = false;
    DOM.btnFinishText.textContent = t.btnFinish;

    // Show Evaluator Dashboard
    DOM.surveyStepperContainer.style.display = 'none';
    DOM.evaluatorDashboard.style.display = 'flex';
    renderEvaluatorResults();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 400);
}

function renderEvaluatorResults() {
  const scores = state.evaluatedScores;
  const dominantKey = state.evaluatedDominantStyle;
  const lang = state.lang;
  const t = translations[lang];

  // Personalized Student Heading
  DOM.evalStudentHeading.textContent = t.evalStudentTemplate(state.student.name || (lang === 'bn' ? 'শিক্ষার্থী' : 'Student'));

  // Dominant Profile Box
  const profile = varkGuidelines[dominantKey];
  const profileLang = profile[lang];

  DOM.dominantStyleIcon.textContent = profile.icon;
  DOM.dominantStyleTitle.textContent = profileLang.title;
  DOM.dominantStyleSummary.textContent = profileLang.summary;

  // Update Statistics Meter Figures
  const total = 10;
  const vPct = Math.round((scores.V / total) * 100);
  const aPct = Math.round((scores.A / total) * 100);
  const rPct = Math.round((scores.R / total) * 100);
  const kPct = Math.round((scores.K / total) * 100);

  if (lang === 'bn') {
    DOM.scoreVisual.textContent = `${toBengaliNum(scores.V)}/${toBengaliNum(total)} (${toBengaliNum(vPct)}%)`;
    DOM.scoreAuditory.textContent = `${toBengaliNum(scores.A)}/${toBengaliNum(total)} (${toBengaliNum(aPct)}%)`;
    DOM.scoreReading.textContent = `${toBengaliNum(scores.R)}/${toBengaliNum(total)} (${toBengaliNum(rPct)}%)`;
    DOM.scoreKinesthetic.textContent = `${toBengaliNum(scores.K)}/${toBengaliNum(total)} (${toBengaliNum(kPct)}%)`;
  } else {
    DOM.scoreVisual.textContent = `${scores.V}/${total} (${vPct}%)`;
    DOM.scoreAuditory.textContent = `${scores.A}/${total} (${aPct}%)`;
    DOM.scoreReading.textContent = `${scores.R}/${total} (${rPct}%)`;
    DOM.scoreKinesthetic.textContent = `${scores.K}/${total} (${kPct}%)`;
  }

  // Trigger meter fill animation
  setTimeout(() => {
    DOM.fillVisual.style.width = `${vPct}%`;
    DOM.fillAuditory.style.width = `${aPct}%`;
    DOM.fillReading.style.width = `${rPct}%`;
    DOM.fillKinesthetic.style.width = `${kPct}%`;
  }, 50);

  // Render Detailed Suggestions (Part 2 of PDF)
  DOM.suggestionsContainer.innerHTML = '';
  profileLang.suggestions.forEach(item => {
    const cardEl = document.createElement('div');
    cardEl.className = 'suggestion-card';
    cardEl.innerHTML = `
      <div class="suggestion-header">
        <span class="suggestion-icon">${item.icon}</span>
        <h4 class="suggestion-title">${item.title}</h4>
      </div>
      <p class="suggestion-body">${item.text}</p>
    `;
    DOM.suggestionsContainer.appendChild(cardEl);
  });
}

function handleRetake() {
  state.answers = {};
  state.currentQuestionIndex = 0;
  state.evaluatedScores = null;
  state.evaluatedDominantStyle = null;

  DOM.evaluatorDashboard.style.display = 'none';
  DOM.surveyStepperContainer.style.display = 'block';
  renderQuestion(0);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 15. INITIALIZATION & EVENT LISTENERS
function init() {
  applyTheme(state.theme);
  applyLanguage(state.lang);

  // Theme toggle
  DOM.themeToggleBtn.addEventListener('click', toggleTheme);

  // Language toggles
  DOM.langBtnBn.addEventListener('click', () => applyLanguage('bn'));
  DOM.langBtnEn.addEventListener('click', () => applyLanguage('en'));

  // Phase 1 Input formatting & Error clearing
  DOM.inputName.addEventListener('input', () => clearErrorOnInput(DOM.groupName));
  DOM.inputMobile.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
    clearErrorOnInput(DOM.groupMobile);
  });
  DOM.inputAge.addEventListener('input', () => clearErrorOnInput(DOM.groupAge));

  // Phase 1 Form Submit
  DOM.form.addEventListener('submit', handlePhase1Submit);

  // Phase 2 Stepper Navigation
  DOM.nextQuestionBtn.addEventListener('click', handleNextQuestion);
  DOM.prevQuestionBtn.addEventListener('click', handlePrevQuestion);
  DOM.finishSurveyBtn.addEventListener('click', handleFinishSurvey);

  // Phase 2 Evaluator Actions
  DOM.retakeBtn.addEventListener('click', handleRetake);
  DOM.printReportBtn.addEventListener('click', () => window.print());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
