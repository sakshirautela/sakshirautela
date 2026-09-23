// Sakshi Rautela Portfolio Data (anshgrover.com style)

export const personalInfo = {
  name: "Sakshi Rautela",
  role: "Machine Learning Engineer · AI/ML — Generative AI · Full-Stack SDE",
  tagline: "Building intelligent systems, LLM architectures & scalable backends.",
  statusText: "Open to work · SDE & AI/ML Engineer · Greater Noida / Remote · 2026",
  location: "Greater Noida, UP, India",
  timezone: "IST (UTC+5:30)",
  email: process.env.REACT_APP_EMAIL || "sakshi.mlengineer@gmail.com",
  secondaryEmail: "sakshi.rautela@s.amity.edu",
  phone: "+91 7456965264",
  github: "https://github.com/sakshirautela",
  linkedin: "https://www.linkedin.com/in/sakshi-b1823a349/",
  leetcode: "https://leetcode.com/u/sakshirautela",
  resumeUrl: "/sakshi_resume.pdf",
  bio: "Associate Software Engineering Intern at AppFoster and ML Engineer with hands-on experience building machine learning, deep learning, NLP, computer vision, and Generative AI applications. Experienced in Python, PyTorch, Scikit-learn, Transformers, LangChain, REST APIs, Docker, PostgreSQL, and Spring Boot backend engineering.",
  nowStatus: [
    { title: "Shipping", desc: "Agentic AI workflows, MCP tools & monitoring pipelines" },
    { title: "Practicing", desc: "Advanced Graph & DP problems on LeetCode (1,000+ Solved)" },
    { title: "Reading", desc: "Transformer Attention Mechanisms & Distributed System Design" }
  ]
};

export const fastStats = [
  { label: "LeetCode & HackerRank", value: "1,000+", icon: "code" },
  { label: "GitHub Repositories", value: "22+", icon: "github" },
  { label: "BCA CGPA (Distinction)", value: "9.02", icon: "award" },
  { label: "MCA Specialization", value: "AI / ML", icon: "cpu" }
];

export const aiAssistantLinks = [
  {
    name: "talk to chatgpt about me →",
    url: "https://chatgpt.com/?prompt=1.%20Who%20is%20Sakshi%20Rautela%3F%0A2.%20Associate%20Software%20Engineer%20Intern%20at%20AppFoster%20and%20AI%2FML%20Engineer%20at%20https%3A%2F%2Fgithub.com%2Fsakshirautela"
  },
  {
    name: "talk to claude about me →",
    url: "https://claude.ai/new?q=1.%20Who%20is%20Sakshi%20Rautela%3F%0A2.%20Associate%20Software%20Engineer%20Intern%20at%20AppFoster%20and%20AI%2FML%20Engineer%20at%20https%3A%2F%2Fgithub.com%2Fsakshirautela"
  },
  {
    name: "talk to gemini about me →",
    url: "https://gemini.google.com/app?text=Tell%20me%20about%20Sakshi%20Rautela%20(Associate%20Software%20Engineer%20Intern%20at%20AppFoster%20and%20AI%2FML%20Engineer%20with%201000%2B%20LeetCode%20problems%20solved%20and%20GitHub%20https%3A%2F%2Fgithub.com%2Fsakshirautela)"
  }
];

export const tableOfContents = [
  { id: "history", number: "01", label: "History" },
  { id: "experience", number: "02", label: "Experience" },
  { id: "projects", number: "03", label: "Projects & GitHub" },
  { id: "leetcode", number: "04", label: "Problem Solving" },
  { id: "stack", number: "05", label: "Stack" },
  { id: "education", number: "06", label: "Education" },
  { id: "contact", number: "07", label: "Contact" }
];

export const historyNarrative = {
  paragraphs: [
    "I am an Associate Software Engineering Intern at AppFoster and Machine Learning Engineer specializing in AI/ML systems, Generative AI, and full-stack software development.",
    "My engineering work spans deep learning model architectures (GPT-2 transformer from scratch in PyTorch, clinical diagnostic DocAI, and multimodal RAG pipelines), real-time CMS/eCommerce monitoring at AppFoster, and full-stack Spring Boot & React services at HackerRank.",
    "Having solved over 1,000+ problems across LeetCode and HackerRank, I combine deep algorithmic foundations with clean system architecture and production reliability."
  ],
  milestones: [
    {
      num: "01",
      title: "1,000+ Problems Solved on LeetCode & HackerRank",
      desc: "Demonstrated deep mastery across advanced Graph Algorithms, Dynamic Programming, Binary Trees, Backtracking, and Heuristics with HackerRank Problem Solving (Intermediate) Certification."
    },
    {
      num: "02",
      title: "Industry Engineering Internships (AppFoster & HackerRank)",
      desc: "Shipped website health monitoring systems with real-time alerting at AppFoster, and engineered secure JWT-authenticated full-stack React & Spring Boot applications at HackerRank."
    },
    {
      num: "03",
      title: "Academic Excellence — 9.02 CGPA",
      desc: "Graduated top of BCA class at Dev Bhoomi Uttarakhand University with 9.02 CGPA; currently pursuing MCA (AI/ML) at Amity University."
    }
  ]
};

export const experienceData = [
  {
    role: "Associate Software Engineer Intern",
    company: "AppFoster",
    period: "Aug 2026 – Present",
    tag: "Current",
    location: "Greater Noida, India",
    bullets: [
      "Contributed to a website monitoring platform for CMS and eCommerce applications, monitoring website health, APIs, SSL certificates, and performance metrics.",
      "Implemented and integrated API-driven monitoring workflows and real-time alerting across email, Slack, SMS, and webhooks.",
      "Debugged backend and frontend issues, integrated REST APIs, tested monitoring workflows, and improved incident tracking across Shopify, WordPress, CraftCMS, and Strapi."
    ],
    tech: ["React.js", "Node.js", "Go", "REST APIs", "Webhooks", "Slack API"]
  },
  {
    role: "Software Engineer Intern",
    company: "HackerRank",
    period: "Sep 2025 – Dec 2025",
    tag: "Completed",
    location: "Remote / India",
    bullets: [
      "Developed and maintained full-stack applications using React and Spring Boot with secure RESTful API integration and PostgreSQL.",
      "Implemented JWT-based authentication and authorization to protect application workflows and user data.",
      "Optimized backend services and PostgreSQL queries to improve API performance and application responsiveness."
    ],
    tech: ["React.js", "Java", "Spring Boot", "PostgreSQL", "JWT", "REST APIs"]
  }
];

export const featuredProjects = [
  {
    title: "Flood Rescue System",
    tagline: "AI-Powered Disaster Response & Rescue Verification",
    description:
      "AI-powered disaster response platform that classified flood-related tweets and identified genuine rescue requests with 88% classification accuracy. Developed an NLP pipeline using Logistic Regression to detect spam, prioritize emergency requests, and automated rescue verification with a real-time React dashboard.",
    tech: ["Python", "React.js", "NLP", "Scikit-Learn", "Logistic Regression"],
    category: "AI & ML",
    year: "2025",
    status: "Open Source",
    github: "https://github.com/sakshirautela/helpinghands.git",
    live: null,
    highlights: ["88% classification accuracy for disaster tweets", "Automated emergency request prioritization", "Real-time React dashboard for NGOs"]
  },
  {
    title: "GPT-Style Next Word Predictor",
    tagline: "Transformer Architecture & BPE Tokenizer in PyTorch",
    description:
      "Implemented a complete GPT-style Transformer architecture from scratch in PyTorch, including causal multi-head self-attention, positional embeddings, residual connections, and layer normalization. Built a custom Byte Pair Encoding (BPE) tokenization pipeline, achieving approximately 65% reduction in cross-entropy loss over 60 epochs.",
    tech: ["Python", "PyTorch", "Transformers", "NLP", "LLMs", "BPE Tokenizer"],
    category: "AI & ML",
    year: "2025",
    status: "Research / OSS",
    github: "https://github.com/sakshirautela/LargeLanguageModel.git",
    live: null,
    highlights: ["Custom Multi-Head Causal Self-Attention", "65% cross-entropy loss reduction", "Autoregressive generation sampling"]
  },
  {
    title: "Sprint Readiness Generator",
    tagline: "AI-Powered Agile Task Analysis & Team Readiness Engine",
    description:
      "AI-powered sprint readiness platform that analyzes task completion and generates team readiness scores using customizable readiness rules. Developed a Python-based task analysis pipeline to classify sprint tasks as completed, incomplete, or pending, integrated with a dynamic React dashboard.",
    tech: ["Python", "React.js", "AI/ML", "REST APIs", "Analytics"],
    category: "AI & ML",
    year: "2026",
    status: "Active",
    github: "https://github.com/sakshirautela",
    live: null,
    highlights: ["Automated sprint task classification", "Dynamic team readiness scoring", "Real-time task filtering & progress monitoring"]
  },
  {
    title: "KabaadKart",
    tagline: "Service Management & Logistics Platform",
    description:
      "Full-stack service management platform enabling order creation, service request tracking, and user management. Developed secure REST APIs supporting complete CRUD operations using Spring Boot and PostgreSQL, with JPA/Hibernate relational persistence.",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "JPA / Hibernate", "REST APIs"],
    category: "Full Stack",
    year: "2025",
    status: "Production Ready",
    github: "https://github.com/sakshirautela/kabaadkart",
    live: null,
    highlights: ["Full CRUD service request lifecycle", "Modular backend architecture", "PostgreSQL & JPA/Hibernate integration"]
  },
  {
    title: "RideShareX / MakeMyRides",
    tagline: "Intelligent Ride Sharing Platform with LLM & MCP Integration",
    description:
      "Scalable ride-sharing platform supporting vehicle registration, ride booking, scheduling, and ride management. Implemented secure Spring Security, JWT, and OAuth2 authentication, Dockerized backend microservices, and integrated an MCP server with LLMs for intelligent ride matching.",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "Docker", "JWT", "OAuth2", "LLMs / MCP"],
    category: "Full Stack",
    year: "2026",
    status: "Production Ready",
    github: "https://github.com/sakshirautela/BookMyRides.git",
    live: null,
    highlights: ["AI/MCP Driver-Rider route matching", "Spring Security, JWT & OAuth2", "Containerized Docker microservices"]
  },
  {
    title: "AI Student Performance",
    tagline: "Academic Analytics & Predictive Modeling Engine",
    description:
      "Machine learning project analyzing how generative AI tools and study habits influence academic outcomes and GPA metrics using feature engineering and regression algorithms.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "EDA"],
    category: "AI & ML",
    year: "2026",
    status: "Research",
    github: "https://github.com/sakshirautela/ai-impact-on-student-performance.git",
    live: null,
    highlights: ["Statistical correlation analysis", "Feature engineering pipeline", "Predictive academic modeling"]
  },
  {
    title: "Digit Recognizer",
    tagline: "Computer Vision & Handwritten Digit Classifier",
    description:
      "CNN based handwritten digit recognition system built using TensorFlow, Keras, and deep learning for real-time digit classification on the MNIST dataset.",
    tech: ["TensorFlow", "CNN", "Python", "Computer Vision", "Deep Learning"],
    category: "AI & ML",
    year: "2024",
    status: "Production",
    github: "https://github.com/sakshirautela/DigitRecognizer-inPython",
    live: null,
    highlights: ["Convolutional Neural Network architecture", "Data augmentation & dropout", "99.2% classification accuracy"]
  },
  {
    title: "PaperPilot",
    tagline: "AI Research Assistant & ArXiv Literature Synthesizer",
    description:
      "Automated literature review and research synthesis agent for querying ArXiv papers, benchmarking embedding models, and generating cited research summaries.",
    tech: ["Python", "LangChain", "OpenAI API", "ChromaDB", "FastAPI", "NLP"],
    category: "AI & ML",
    year: "2026",
    status: "Open Source",
    github: "https://github.com/sakshirautela/PaperPilot",
    live: null,
    highlights: ["Semantic paper search over 10,000+ papers", "Auto-synthesis of comparative literature reviews", "Embedding benchmark pipeline"]
  }
];

export const allGithubRepositories = [
  {
    name: "helpinghands",
    description: "Real-time flood tweet classification and alert dispatch system using NLP and Machine Learning to assist emergency rescue teams (88% accuracy).",
    language: "Python / React",
    category: "AI & ML",
    topics: ["disaster-response", "nlp", "machine-learning", "text-classification", "react"],
    url: "https://github.com/sakshirautela/helpinghands"
  },
  {
    name: "LargeLanguageModel",
    description: "Ground-up implementation of GPT-style Transformer architecture in PyTorch with custom BPE tokenizer, causal attention, and 65% loss reduction.",
    language: "Python / PyTorch",
    category: "AI & ML",
    topics: ["deep-learning", "gpt2", "llm", "nlp", "pytorch", "transformers"],
    url: "https://github.com/sakshirautela/LargeLanguageModel"
  },
  {
    name: "BookMyRides",
    description: "Scalable ride sharing platform with vehicle registration, JWT/OAuth2 security, Docker containerization, and MCP LLM ride matching.",
    language: "Java / Spring Boot",
    category: "Full Stack",
    topics: ["spring-boot", "react", "docker", "jwt", "oauth2", "microservices"],
    url: "https://github.com/sakshirautela/BookMyRides"
  },
  {
    name: "kabaadkart",
    description: "Full-stack service management platform with complete CRUD operations, Spring Boot REST APIs, and PostgreSQL JPA persistence.",
    language: "React / Spring Boot",
    category: "Full Stack",
    topics: ["react", "spring-boot", "postgresql", "jpa", "rest-apis"],
    url: "https://github.com/sakshirautela/kabaadkart"
  },
  {
    name: "learning-artificialintelligence",
    description: "Foundational AI exploration, search algorithms (A*, Minimax, Alpha-Beta), heuristic optimization, and game-playing agents.",
    language: "Python / Jupyter",
    category: "AI & ML",
    topics: ["ai-foundations", "search-algorithms", "heuristic-search", "python", "ai-agents"],
    url: "https://github.com/sakshirautela/learning-artificialintelligence"
  },
  {
    name: "CREDIT-CARD-FRAUD-Greneration",
    description: "Fraud detection machine learning system for financial transactions using highly imbalanced anomaly detection algorithms & SMOTE.",
    language: "Python",
    category: "AI & ML",
    topics: ["anomaly-detection", "fraud-detection", "imbalanced-data", "machine-learning", "smote"],
    url: "https://github.com/sakshirautela/CREDIT-CARD-FRAUD-Greneration"
  },
  {
    name: "devfordevs",
    description: "Community platform and resource repository for developers to collaborate, share dev tools, and discuss software architecture.",
    language: "React / JavaScript",
    category: "Full Stack",
    topics: ["collaboration", "developer-tools", "open-source", "resources", "react"],
    url: "https://github.com/sakshirautela/devfordevs"
  },
  {
    name: "ai-impact-on-student-performance",
    description: "Machine learning research project analyzing how generative AI tools influence academic outcomes and GPA metrics.",
    language: "Python / Jupyter",
    category: "AI & ML",
    topics: ["eda", "predictive-modeling", "machine-learning", "student-performance"],
    url: "https://github.com/sakshirautela/ai-impact-on-student-performance"
  },
  {
    name: "DigitRecognizer-inPython",
    description: "Handwritten digit recognition application using Artificial Neural Networks (ANN) and Convolutional Neural Networks on MNIST.",
    language: "Python / TensorFlow",
    category: "AI & ML",
    topics: ["computer-vision", "deep-learning", "digit-recognizer", "mnist", "neural-networks"],
    url: "https://github.com/sakshirautela/DigitRecognizer-inPython"
  },
  {
    name: "kidney-disease-classifier-deepleaning",
    description: "Deep learning predictive model for chronic kidney disease risk classification and early diagnosis using medical datasets.",
    language: "Python / TensorFlow",
    category: "AI & ML",
    topics: ["deep-learning", "healthcare", "kidney-disease", "medical-ai"],
    url: "https://github.com/sakshirautela/kidney-disease-classifier-deepleaning"
  },
  {
    name: "carbon-footprint-analyzer",
    description: "AI powered analytics platform for estimating carbon emissions, sustainability metrics, and environmental footprint reduction insights.",
    language: "Python",
    category: "Data Science",
    topics: ["carbon-emissions", "data-analysis", "green-ai", "sustainability"],
    url: "https://github.com/sakshirautela/carbon-footprint-analyzer"
  },
  {
    name: "HeartDiseaseDetection",
    description: "Clinical machine learning classification system for early detection and risk assessment of cardiovascular diseases.",
    language: "Python",
    category: "AI & ML",
    topics: ["healthcare", "classification", "heart-disease", "medical-ai"],
    url: "https://github.com/sakshirautela/HeartDiseaseDetection"
  },
  {
    name: "User-Data-Analysis",
    description: "Exploratory data analysis and Pareto distribution modeling on customer behavior, car sales, and mobile app metrics.",
    language: "Python / Pandas",
    category: "Data Science",
    topics: ["data-analysis", "eda", "pandas", "pareto-distribution", "seaborn"],
    url: "https://github.com/sakshirautela/User-Data-Analysis"
  },
  {
    name: "chat-abbreviations",
    description: "Dictionary and text preprocessor mapping common internet, texting, and Gen-Z shorthand abbreviations to standard English.",
    language: "Python",
    category: "NLP",
    topics: ["chat-abbreviations", "nlp", "slang-translator", "text-preprocessing"],
    url: "https://github.com/sakshirautela/chat-abbreviations"
  },
  {
    name: "webscrappingmodel",
    description: "Automated web scraping and data extraction tool using BeautifulSoup and Selenium with structured JSON parsing.",
    language: "Python",
    category: "Python Tools",
    topics: ["web-scraping", "beautifulsoup", "selenium", "data-extraction"],
    url: "https://github.com/sakshirautela/webscrappingmodel"
  },
  {
    name: "Spam-SMS-Detection",
    description: "NLP-powered SMS spam classification engine using TF-IDF vectorization, Naive Bayes, and Support Vector Classifiers.",
    language: "Python",
    category: "NLP",
    topics: ["nlp", "spam-filter", "text-classification", "scikit-learn"],
    url: "https://github.com/sakshirautela/Spam-SMS-Detection"
  },
  {
    name: "Solar-Irradiance-Prediction",
    description: "Machine learning and time-series forecasting model to predict solar irradiance and photovoltaic power generation.",
    language: "Python",
    category: "AI & ML",
    topics: ["time-series", "renewable-energy", "solar-energy", "forecasting"],
    url: "https://github.com/sakshirautela/Solar-Irradiance-Prediction"
  },
  {
    name: "BankCustomerChurnPrediction",
    description: "Predictive machine learning model to identify bank customers likely to churn and provide proactive retention insights.",
    language: "Python / XGBoost",
    category: "AI & ML",
    topics: ["churn-prediction", "banking", "customer-analytics", "xgboost"],
    url: "https://github.com/sakshirautela/BankCustomerChurnPrediction"
  },
  {
    name: "Malaria-Cell-Detection",
    description: "Deep learning computer vision model to detect malaria-infected red blood cells from microscopic blood smear images.",
    language: "Python / CNN",
    category: "AI & ML",
    topics: ["computer-vision", "deep-learning", "healthcare", "malaria-detection"],
    url: "https://github.com/sakshirautela/Malaria-Cell-Detection"
  },
  {
    name: "management-oil",
    description: "Oil refinery and inventory management system built with Java Spring Boot for tracking crude oil batches and distribution.",
    language: "Java / Spring Boot",
    category: "Full Stack",
    topics: ["inventory-management", "java", "spring-boot", "supply-chain"],
    url: "https://github.com/sakshirautela/management-oil"
  },
  {
    name: "GSTvision",
    description: "Automated GST invoice parsing, tax rate validation, and compliance reconciliation system powered by Document AI and OCR.",
    language: "Java / Python",
    category: "AI & ML",
    topics: ["document-ai", "gst-calculator", "ocr", "invoice-processing"],
    url: "https://github.com/sakshirautela/GSTvision"
  },
  {
    name: "ZomatoLogicDesign",
    description: "Object-oriented low-level design (LLD) and architecture simulation for a food delivery platform like Zomato/Swiggy.",
    language: "Java",
    category: "System Design",
    topics: ["design-patterns", "low-level-design", "system-design", "java"],
    url: "https://github.com/sakshirautela/ZomatoLogicDesign"
  },
  {
    name: "AI-Powered-Resume-Match",
    description: "AI application that matches resumes against job descriptions, computes semantic compatibility scores, and provides ATS optimization suggestions.",
    language: "Python",
    category: "NLP",
    topics: ["ats-checker", "cosine-similarity", "job-matching", "nlp", "resume-matcher"],
    url: "https://github.com/sakshirautela/AI-Powered-Resume-Match"
  },
  {
    name: "mcp_server",
    description: "Model Context Protocol (MCP) server implementation providing extensible tool integration and math utilities for LLMs.",
    language: "Python",
    category: "AI & ML",
    topics: ["ai-agents", "fastmcp", "llm-tools", "mcp", "model-context-protocol"],
    url: "https://github.com/sakshirautela/mcp_server"
  },
  {
    name: "PaperPilot",
    description: "AI research assistant for querying research papers, benchmarking embedding models, and synthesizing literature reviews.",
    language: "Python",
    category: "AI & ML",
    topics: ["arxiv", "embeddings", "literature-review", "nlp", "rag"],
    url: "https://github.com/sakshirautela/PaperPilot"
  },
  {
    name: "systemdesign",
    description: "Comprehensive System Design repository covering scalable architecture, microservices, caching, distributed transactions, and cloud patterns.",
    language: "Documentation & Code",
    category: "System Design",
    topics: ["architecture", "distributed-systems", "microservices", "scalability", "system-design"],
    url: "https://github.com/sakshirautela/systemdesign"
  },
  {
    name: "skin-disease-docai",
    description: "Clinical RAG application delivering evidence-based explanations of skin diseases using medical literature, vision analysis, and LLM grounding.",
    language: "Python",
    category: "AI & ML",
    topics: ["dermatology", "computer-vision", "fastapi", "langchain", "llm", "rag"],
    url: "https://github.com/sakshirautela/skin-disease-docai"
  },
  {
    name: "problem-solving",
    description: "Showcasing problem-solving depth through 1,000+ well-structured solutions to real-world coding challenges, blending logic and clean code.",
    language: "Java",
    category: "DSA",
    topics: ["algorithms", "clean-code", "data-structures", "interview-prep", "problem-solving"],
    url: "https://github.com/sakshirautela/problem-solving"
  }
];

export const leetCodeStats = {
  totalSolved: "1,000+",
  easyCount: "380+",
  mediumCount: "540+",
  hardCount: "120+",
  contestRating: "Top 5% Candidate",
  consistencyStreak: "500+ Days Active",
  profileUrl: "https://leetcode.com/u/sakshirautela",
  keyTopics: [
    { name: "Graphs (BFS, DFS, Dijkstra, Topo Sort)", count: "160+ Solved" },
    { name: "Dynamic Programming (1D, 2D, Bitmask)", count: "210+ Solved" },
    { name: "Binary Trees & BSTs", count: "175+ Solved" },
    { name: "Two Pointers & Sliding Window", count: "140+ Solved" },
    { name: "Backtracking & Recursion", count: "95+ Solved" },
    { name: "Greedy Heuristics & Heaps", count: "110+ Solved" },
    { name: "Trie & String Manipulation", count: "85+ Solved" },
    { name: "Binary Search & Math", count: "120+ Solved" }
  ]
};

export const skillsData = [
  {
    category: "Machine Learning & Generative AI",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "LangChain",
      "Transformers",
      "Large Language Models (LLMs)",
      "RAG & Embeddings",
      "BPE Tokenization",
      "Computer Vision (CNN)",
      "NLP",
      "NumPy & Pandas"
    ]
  },
  {
    category: "Software Engineering & Backend",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "Git & GitHub",
      "JWT Authentication",
      "GraphQL",
      "System Design",
      "Node.js",
      "Go"
    ]
  },
  {
    category: "Frontend & Web",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "TailwindCSS",
      "Responsive Design",
      "Component Architecture"
    ]
  },
  {
    category: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms (1,000+ Solved)",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Time & Space Complexity Optimization"
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Amity University, Greater Noida",
    period: "July 2024 – Expected July 2026",
    status: "Pursuing / Final Year",
    highlights: [
      "Specialized in Machine Learning, Deep Learning, Natural Language Processing, and Generative AI.",
      "Conducting research on Multimodal RAG systems and Transformer Language Models."
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Computer Applications",
    institution: "Dev Bhoomi Uttarakhand University, Dehradun",
    period: "Sep 2021 – June 2024",
    status: "CGPA: 9.02 / 10.0 (First Class with Distinction)",
    highlights: [
      "Graduated with 9.02/10 CGPA distinction.",
      "Led student coding initiatives and built full-stack software applications."
    ]
  }
];

export const certificationsData = [
  {
    title: "HackerRank Internship Certificate",
    issuer: "HackerRank",
    date: "2025",
    badge: "Verified"
  },
  {
    title: "Machine Learning & Deep Learning Specialization",
    issuer: "GeeksforGeeks",
    date: "2025",
    badge: "Specialization"
  },
  {
    title: "Mathematical Foundations of Machine Learning",
    issuer: "Udemy",
    date: "2024",
    badge: "Verified"
  },
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Deloitte / Forage",
    date: "2025",
    badge: "Simulation"
  },
  {
    title: "HackerRank Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    badge: "Mastery"
  }
];
