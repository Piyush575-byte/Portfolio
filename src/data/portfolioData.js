// Portfolio Data Store for Piyush Sharma
// Professional creative portfolio for Digital Creative Designer role.
// All information is authentic and strictly matches verified credentials, real project files, and event records.

export const personalInfo = {
  name: "Piyush Sharma",
  role: "Digital Creative Designer · Motion Graphics & Video Editing",
  education: {
    degree: "B.Tech Computer Science & Engineering",
    institution: "IILM University, Gurugram",
    graduation: "August 2029",
    cgpa: "8.9/10"
  },
  location: "South Delhi, India",
  phone: "+91 96259 76799",
  email: "piyush.sharma.ug25@iilm.edu",
  headline: "Designing visuals. Editing stories. Connecting technology with people.",
  supportingBio:
    "I'm a B.Tech CSE student and digital creative designer focused on video editing, motion graphics, and visual storytelling. I turn complex information into clear, engaging visual experiences."
};

// 1. Selected Work — 4 Projects in Exact Order
export const selectedProjects = [
  {
    id: "lakshya-promotional-reel",
    title: "Language Barrier — Women's Day Promotional Reel",
    client: "Lakshya Jeevan Jagriti",
    role: "AI-Assisted Video Production & Video Editing",
    employment: "Social Impact Initiative",
    category: "Short-Form Video Production",
    badge: "Language Barrier Focus (40s)",
    summary:
      "Created an approximately 40-second promotional podcast-style reel addressing the language barrier for Lakshya Jeevan Jagriti. Extracted the podcast script using ElevenLabs Video-to-Text, generated separate video segments using Google Gemini, and assembled and refined the footage in CapCut.",
    fullDescription:
      "Produced an approximately 40-second promotional podcast-style reel for Lakshya Jeevan Jagriti addressing the critical theme of the language barrier in education and community empowerment. The end-to-end production workflow involved extracting the audio dialogue into a structured script via ElevenLabs Video-to-Text, generating targeted thematic video segments using Google Gemini prompts, and assembling, color-grading, and rhythmically pacing the final cut in CapCut.",
    workflowSteps: [
      "Script Extraction (ElevenLabs Video-to-Text)",
      "AI Video Generation (Google Gemini)",
      "Editing & Post-Production (CapCut)",
      "Published Reel"
    ],
    toolsList: "ElevenLabs (Video-to-Text) · Google Gemini · CapCut",
    highlights: [
      "Centered the narrative specifically on overcoming the language barrier",
      "Extracted spoken dialogue into a clean structured script via ElevenLabs Video-to-Text",
      "Generated targeted thematic video segments utilizing Google Gemini prompts",
      "Assembled and rhythmically paced audio-visual clips in CapCut for a 40s duration",
      "Delivered a native 9:16 mobile-optimized vertical video cut"
    ],
    aspectRatio: "9:16",
    instagramLink: "" // Populated only if genuine URL is configured
  },
  {
    id: "opi-lecture-series",
    title: "OPI Lecture Series",
    client: "Vision Divyang Foundation",
    role: "Video Editor & Content Manager",
    employment: "Freelance (Paid) | Present",
    category: "Curriculum Video Production",
    badge: "National Curriculum (RCI-Approved)",
    summary:
      "Edit and manage the lecture series for the Orientation Programme in Inclusion (OPI), a government-level, RCI-approved training course.",
    fullDescription:
      "Managing the end-to-end video post-production pipeline for the Orientation Programme in Inclusion (OPI) with Vision Divyang Foundation. The course is a government-level, RCI-approved training curriculum. Responsible for video production and post-production using Adobe Premiere Pro, After Effects, Photoshop, and Illustrator, maintaining a unified visual identity across modular lectures, and transforming dense pedagogical material into clear, learner-friendly video content.",
    toolsList: "Adobe Premiere Pro · Adobe After Effects · Photoshop · Illustrator",
    highlights: [
      "Video production and modular timeline assembly in Adobe Premiere Pro",
      "Maintaining a consistent visual style, lower-thirds, and title sequences in After Effects",
      "Turning complex training material into clear, accessible, learner-friendly video content",
      "Designing title cards, infographics, and visual brand assets using Photoshop and Illustrator"
    ],
    aspectRatio: "16:9"
  },
  {
    id: "icra-module-content",
    title: "ICRA Module Content",
    client: "ICRA (Inclusive Counselors & Rehabilitation Association)",
    role: "Video Editing & Content Preparation",
    employment: "Course Content Preparation",
    category: "Courseware & Editorial Video",
    badge: "Hindi & English Editions",
    summary:
      "Prepared and edited course content for ICRA as part of large-scale module preparation, working to deadlines.",
    fullDescription:
      "Prepared and edited instructional course content for ICRA (Inclusive Counselors & Rehabilitation Association) as part of large-scale module preparation across both Hindi and English editions. Focused on high-volume video timeline assembly, visual polish, and structured presentation materials under tight delivery schedules while maintaining consistent pedagogical standards.",
    toolsList: "Adobe Premiere Pro · Adobe Photoshop · Illustrator · Canva",
    highlights: [
      "Executed deadline-driven video editing across both Hindi and English language editions",
      "Structured dense counselor training material into readable, polished visual presentations",
      "Ensured high legibility, accessible contrast ratios, and consistent graphic elements",
      "Delivered production-ready visual assets for rapid institutional course rollout"
    ],
    aspectRatio: "16:9"
  },
  {
    id: "opi-course-co-management",
    title: "OPI Course Co-Management",
    client: "Vision Divyang Foundation",
    role: "Course Co-Manager",
    employment: "Course Operations & Coordination",
    category: "Curriculum Coordination",
    badge: "Operations & Course Logistics",
    summary:
      "Coordinating course operations, curriculum workflows, and launch logistics for the Orientation Programme in Inclusion (OPI).",
    fullDescription:
      "Serving as Course Co-Manager for the Orientation Programme in Inclusion (OPI) at Vision Divyang Foundation. This responsibility focuses specifically on operational coordination, curriculum portal structure, instructor communication, module delivery tracking, and launch logistics—distinct from the technical video editing responsibilities.",
    toolsList: "Course Operations · Curriculum Portal Management · Stakeholder Liaison",
    highlights: [
      "Coordinated curriculum delivery timelines, portal modules, and chapter tracking",
      "Facilitated operational communication between course instructors, experts, and technical teams",
      "Assisted in logistics and attendee coordination for the high-profile course launch ceremony",
      "Operational responsibilities aligned with verified course co-management duties"
    ],
    aspectRatio: "16:9"
  }
];

// 2. Achievements & Recognition
export const recognitionData = {
  delhiEvent: {
    id: "delhi-event-launch",
    title: "OPI Course Launch & Event Documentation",
    organization: "Vision Divyang Foundation",
    event: "Orientation Programme in Inclusion (OPI) Launch Event",
    caption:
      "Photographic and reel documentation from the launch event of the Orientation Programme in Inclusion (OPI), featuring the official memento presented by the Department of Social Welfare, Government of Delhi, the dignitary placard, and the event reel."
  },
  virendraKumar: {
    id: "virendra-kumar-award",
    title: "Award Presentation by Dr. Virendra Kumar",
    honoree: "Dr. Virendra Kumar",
    officialTitle: "Minister for Social Justice & Empowerment",
    event: "National Inclusion Recognition",
    caption:
      "Award presentation by Dr. Virendra Kumar, Minister for Social Justice & Empowerment, recognizing contributions to inclusive education and rehabilitation initiatives.",
    // Strictly kept reserved and hidden from public view until genuine photograph is supplied
    isPublished: false
  }
};

// 3. Hackathon Achievement & Team Leadership
export const hackathonLeadershipData = {
  headline: "1st Runner-Up — HackIndia AI & Web",
  role: "Team Leader & Full-Stack Contributor",
  description:
    "Led the team during the hackathon, coordinating communication and collaboration while contributing to a full-stack web application built using React, Next.js, Node.js, and Google Antigravity.",
  leadershipHighlights: [
    "Orchestrated team communication, task division, and sprint pace under strict hackathon deadlines",
    "Aligned design prototypes with frontend implementation and backend API routes",
    "Contributed actively to core full-stack codebase in React, Next.js, and Node.js with Google Antigravity integration",
    "Represented the team in live architectural walkthroughs and competitive judge evaluations"
  ],
  stack: "React · Next.js · Node.js · Google Antigravity"
};

export const skillsData = {
  designAndVideo: [
    { name: "Adobe After Effects", note: "Motion Graphics, Keyframing, VFX" },
    { name: "Adobe Premiere Pro", note: "Long-form & Short-form Video Editing" },
    { name: "Adobe Photoshop", note: "Image Manipulation & Compositing" },
    { name: "Adobe Illustrator", note: "Vector Design & Technical Diagrams" },
    { name: "CapCut", note: "Short-Form Social Assembly & Fast Turnaround" },
    { name: "Figma", note: "UI/UX Prototyping & Design Systems" }
  ],
  creativeSkills: [
    { name: "Motion Graphics", note: "Title sequences, kinetic type, data motion" },
    { name: "Video Editing", note: "Rhythm, pacing, multi-cam & narrative flow" },
    { name: "AI-Assisted Video", note: "Script extraction, prompt generation & asset synthesis" },
    { name: "Courseware Management", note: "Curriculum coordination, module tracking & delivery" }
  ],
  technology: [
    { name: "Generative AI", note: "Certified by Google & IBM · Gemini, ElevenLabs" },
    { name: "React & Next.js", note: "Component-based UI development & routing" },
    { name: "Node.js & Python", note: "Backend services, logic & automation" },
    { name: "Cloud Fundamentals", note: "Core cloud architecture concepts" },
    { name: "Cybersecurity Basics", note: "Threat vectors, isolation & zero trust concepts" }
  ],
  currentlyLearning: [
    { name: "Blender 3D", note: "3D lighting, hard-surface modeling & camera motion" },
    { name: "Lottie animations", note: "Lightweight JSON vector animations for web & apps" }
  ]
};

export const aboutNarrative = {
  intro:
    "I operate at the convergence of software engineering and visual communication. Pursuing Computer Science & Engineering at IILM University while actively working in production video editing has given me a distinctive edge: I fundamentally understand technical architecture—cloud pipelines, cybersecurity vectors, and system flows—and know precisely how to translate them into visuals people remember.",
  certifications: [
    {
      title: "Google Generative AI Certification",
      issuer: "Google",
      focus: "Foundational LLM concepts, multimodal workflows & practical generation"
    },
    {
      title: "IBM Responsible AI Certification",
      issuer: "IBM",
      focus: "Ethics, transparency, governance & safety in AI-driven implementations"
    }
  ],
  technicalPerspective:
    "I understand the technology I'm designing for, so the visuals are accurate, not just attractive. This dual capability bridges technical architecture with creative storytelling—ensuring motion graphics, infographics, and presentation decks are technically sound and visually engaging."
};

export const honorsList = [
  {
    title: "1st Runner-Up — HackIndia",
    track: "AI & Web Track",
    description: "Led team and engineered full-stack web application competing against nationwide talent."
  },
  {
    title: "Selected — IILM Internal Smart India Hackathon",
    track: "SIH Institutional Round",
    description: "Qualified through rigorous university-level evaluations for national innovation challenges."
  },
  {
    title: "1st Prize — Debate on Artificial Intelligence",
    track: "Academic Competition",
    description: "Articulated nuanced perspectives on AI disruption, ethical boundaries, and human creativity."
  },
  {
    title: "Microsoft Learn Student Ambassador",
    track: "Technical Community Leadership",
    description: "Engaging student peers, exploring modern cloud tooling, and championing tech education."
  }
];
