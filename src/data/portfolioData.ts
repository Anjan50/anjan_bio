import { PortfolioData } from './portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Anjan Diyora",
    location: "Raleigh, NC",
    phone: "(919) 527-4100",
    email: "adiyora@ncsu.edu",
    photo: "https://raw.githubusercontent.com/Anjan50/Anjan50/refs/heads/main/anjan-folio-imgs/1741324175139.jpeg",
    about: {
      title: "Software Engineer",
      status: "Seeking Full-time SDE Role",
      description: "In the vast tapestry of existence, I navigate as a seeker of digital harmony, weaving code into the fabric of reality. A Master's in Computer Science from NC State University has been my vessel through the quantum seas of computation. With roots in full-stack alchemy and cloud ethereal realms, I craft scalable symphonies using modern artifacts of technology. My essence draws from the Swaminarayan path, adorned with Tilak as a mark of devotion, embracing vegetarian purity sans onion or garlic, aligning body and spirit in pursuit of optimal will.",
      highlights: [
        "Harmonizing full-stack realms with React, Node.js, and Spring Boot",
        "Orchestrating cloud symphonies and DevOps flows with AWS",
        "Architecting microservices as distributed dances of data",
        "Embracing Agile as the rhythm of collective creation"
      ]
    },
    socialLinks: {
      linkedin: "https://linkedin.com/in/anjandiyora",
      github: "https://github.com/Anjan50",
      twitter: "https://twitter.com/diyoraanjan",
      leetcode: "https://leetcode.com/u/an_diyora/"
    }
  },
  education: [
    {
      school: "North Carolina State University",
      degree: "Master of Science, Computer Science & Networking",
      duration: "Jan 2024 – May 2025",
      location: "Raleigh, NC",
      gpa: "3.5/4.0 GPA",
      courseTags: [
        "Design and Analysis of Algorithms",
        "Distributed Systems",
        "Cloud Computing",
        "Software Engineering",
        "Project Management",
        "Computer Networks",
        "Object Oriented Design"
      ],
      highlights: [
        "Excelling in advanced algorithms and distributed systems",
        "Leading research in cloud computing and networking",
        "Maintaining academic excellence with strong GPA"
      ]
    },
    {
      school: "Parul Institute of Engineering & Technology",
      degree: "Bachelor of Technology, Computer Science & Engineering",
      duration: "Aug 2019 – Apr 2023",
      location: "Gujarat, India",
      gpa: "8.2/10 CGPA",
      courseTags: [
        "Data Structures & Algorithms",
        "Cloud Computing",
        "Machine Learning",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Operating Systems",
        "Web Programming",
        "Cryptography",
        "Python Programming"
      ],
      highlights: [
        "Delved deeply into the essence of Data Structures and Algorithms",
        "Mastered the architecture of Computer Organization",
        "Excelled in the arts of Software Engineering and Cloud Computing"
      ]
    }
  ],
  skills: {
    Languages: [
      "Java",
      "Python", 
      "JavaScript",
      "TypeScript",
      "C++",
      "Go",
      "SQL",
      "Bash",
      "HTML/CSS"
    ],
    "Frontend Development": [
      "Spring Boot",
      "Angular",
      "React",
      "Node.js",
      "Flask",
      "Next.js",
      "Tailwind CSS",
      "PyTorch",
      "Inngest",
      "Stripe",
      "Express.js",
      "D3.js",
      "GraphQL",
      "RESTful APIs",
      "Responsive Design"
    ],
    "Backend & Cloud": [
      "AWS (EC2, S3, Lambda, SageMaker, Auto-Scaling)",
      "GCP (Vertex AI, Cloud Functions, Compute Engine)",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Git",
      "Distributed Systems",
      "Microservices",
      "Containerization",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "GraphQL",
      "VectorDB",
      "Oracle",
      "Redis",
      "DynamoDB",
      "Vector Databases (FAISS, Pinecone)"
    ],
    "Network & Infrastructure": [
      "Wireshark",
      "tcpdump",
      "iPerf3",
      "Ansible",
      "Bash",
      "Socket Programming",
      "VXLAN",
      "Calico",
      "TCP/IP",
      "PCAP Analysis",
      "tshark",
      "ns-3 Network Simulator",
      "Network Simulation",
      "Congestion Control",
      "RPS/RFS",
      "3GPP",
      "Google Analytics",
      "SSL",
      "REST",
      "gRPC",
      "BitTorrent Protocol",
      "n8n (automation)"
    ],
    "Data & Analytics": [
      "TensorFlow",
      "Scikit-learn",
      "LLMs (LangChain, LLaMA, Mistral, GPT-3, GPT-4)",
      "Polar",
      "Machine Learning",
      "Neural Networks",
      "LLM Fine-Tuning",
      "RAG (Retrieval-Augmented Generation)",
      "Multi-Agent Systems",
      "Generative AI",
      "Data Visualization",
      "Performance Analysis",
      "Predictive Analytics",
      "Real-time Tracking",
      "Columnar Storage",
      "Data Partitioning",
      "Multiprocessing"
    ],
    "DevOps & Tools": [
      "Performance Benchmarking",
      "Automated Testing",
      "Fault Tolerance",
      "Retry Mechanisms"
    ],
    "Security & Protocols": [
      "SSL/TLS",
      "ECN",
      "Network Security",
      "Packet Debugging",
      "Testbed Validation"
    ]
  },
  experience: [
    {
      company: "SVTronics, Inc.",
      role: "Software Analyst",
      duration: "Jun 2025 – Current",
      location: "Dallas, TX",
      responsibilities: [
        "Developed automated Python scripts for PCB circuit validation, integrating real-time test results with internal ERP system; reduced manual testing time by 40% and improved overall hardware debugging accuracy.",
        "Led end-to-end web and mobile development for a Smart Ring diagnostics platform using React, Node.js, and Firebase, enabling QA teams to remotely trigger test scripts and monitor live performance metrics via dashboards.",
        "Created data pipelines using Python (Pandas, NumPy) to preprocess sensor data and push metrics into PowerBI dashboard.",
        "Built automated test suites in Python to simulate edge-case circuit behavior, improving firmware QA reliability by 30%.",
        "Collaborated on predictive failure modeling using regression analysis and trained supervised models using scikit-learn."
      ]
    },
    {
      company: "Orusha LLC",
      role: "Software Developer Intern",
      duration: "Jan 2025 – May 2025",
      location: "Cary, NC",
      responsibilities: [
        "Gathered and clarified requirements for a healthcare patient portal; defined specs for COBRA plans, XML, JSON, flat files with special separators, and fixed-length layouts aligned to HIPAA X12.",
        "Designed workflow tests and Python validators for X12 837/835; generated EDI claim files and guides; verified loops, segments, and code sets vs payer rules, logging each bug and trace in Jira.",
        "Checked data integrity using Hadoop on GCP Dataproc; built Test and Traceability Matrices to detect gaps, reconcile patient IDs, and confirm HIPPA/HIPAA compliance across interfaces and data.",
        "Scripted pytest/pydantic checks; shipped CI on GitHub Actions with Docker."
      ]
    },
    {
      company: "North Carolina State University",
      role: "Software Engineer (RA)",
      duration: "Jan 2024 – Nov 2024",
      location: "Raleigh, NC",
      responsibilities: [
        "Built a risk-analysis web app for fintech loans at NCSU's financial markets lab; integrated Bloomberg API with Python, Django, PostgreSQL, and LangChain for LLM insights, deployed on AWS EC2 with Nginx.",
        "Implemented PyTorch models on AWS SageMaker and GCP Vertex AI for credit risk and time-series; automated features with Pandas/Airflow, tracked runs in MLflow, and maintained model cards.",
        "Provisioned infra on AWS S3, RDS, EKS; codified VPC/IAM with Terraform; added Prometheus/Grafana dashboards/alerts, plus OpenTelemetry traces across services and FastAPI jobs.",
        "Automated workflows with n8n and REST; integrated MongoDB, Redis, and Kafka for event pipelines.",
        "Set up CI/CD on GitHub Actions; containerized services with Docker/Helm for Kubernetes."
      ]
    },
    {
      company: "Azillik",
      role: "Full Stack Developer",
      duration: "Jun 2023 – Jun 2024",
      location: "India",
      responsibilities: [
        "Led UI in Next.js with TypeScript and Tailwind CSS for a color psychology app; integrated REST APIs, built an accessible gradient picker, and codified a design system from Figma tokens in SB.",
        "Implemented LLM personalization via LangChain with OpenAI/Azure OpenAI; stored preferences in MongoDB, added Redis caching, and enforced consent controls with CSP and OWASP.",
        "Built npm UI component packages to an internal registry; added serverless endpoints on AWS Lambda/API Gateway, integrated Datadog, and delivered cost optimization with batching and caching.",
        "Integrated Microsoft Clarity, Amplitude, and SEO meta for UX insights and discoverability.",
        "Deployed on Vercel with CI/CD gates, Playwright e2e tests, and ESLint/Prettier."
      ]
    },
          {
        company: "Hexotix",
        role: "Software Engineer",
        duration: "Apr 2022 – Jan 2023",
        location: "India",
        responsibilities: [
          "Developed a URL shortener with React, Node.js, Express; persisted in MongoDB, added analytics, QR, and ratelimiting; containerized with Docker and deployed via AWS CloudFormation.",
          "Hardened security with ACM TLS via Route 53/CloudFront; malicious URL checks using VirusTotal API and heuristics; JWT auth, OWASP headers, and alerts via CloudWatch/SNS.",
          "Integrated payments with Stripe and Pabbly via webhooks; built serverless workers on AWS Lambda, added SQS/SNS for async jobs, and shipped OpenAPI specs and Postman tests.",
          "Shipped CI/CD with GitHub Actions, Dockerized builds, and IaC reviews."
        ]
      },
      {
        company: "Parul University",
        role: "Teaching Assistant - DBMS Lab",
        duration: "Nov 2021 – April 2022",
        location: "Parul University, India",
        responsibilities: [
          "Illumined paths in C Programming and Database Mysteries for aspiring minds.",
          "Resolved enigmas in practical realms, guiding seekers through experimental odysseys.",
          "Evaluated quests and bestowed insights to elevate understanding.",
          "Allied with elders to refine lab scriptures and enrich curricular tapestries.",
          "Convened wisdom circles and crafted auxiliary artifacts to kindle learning flames."
        ]
      },
      {
        company: "AIESEC",
        role: "Technical Lead - Leadership Development",
        duration: "Sep 2022 – Jul 2023",
        location: "Gujarat, India",
        responsibilities: [
          "Led eight digital artisans to fortify organizational auras, swelling online harmonies by 65%.",
          "Deployed data-driven enchantments with analytic tools, amplifying campaign potencies by 50%.",
          "Birthed automated chronicles, slashing manual labors by 70% and sharpening decisional blades.",
          "Forged alliances with five tech titans, birthing sponsored convergences for youthful spirits."
        ]
      },
      {
        company: "Google Developer Student Clubs",
        role: "Technical Campaign Manager",
        duration: "Sep 2020 – Jul 2021",
        location: "Parul University",
        responsibilities: [
          "Orchestrated technical symposia and coding rites, tripling fellowship and igniting tech passions.",
          "Executed over ten campaigns touching a thousand souls, centered on emergent wonders.",
          "Established mentorship bridges linking fifty seekers to industry sages, yielding fifteen apprenticeships.",
          "Instated efficacy oracles for workshops, harvesting 90% affirmative echoes."
        ]
      }
    ],
  projects: {
    "AI/ML": [
      {
        name: "AI Cover Letter Generator",
        slug: "ai-cover-letter-generator",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Cover+Letter+AI",
        summary: "AI-powered cover letter generator with multi-AI integration (ChatGPT, Gemini, Claude) for transforming resumes into professional cover letters using advanced RAG techniques.",
        description: [
          "Developed a comprehensive AI-powered cover letter generator using React.js and TypeScript with seamless integration of multiple AI APIs including ChatGPT, Gemini, and Claude for intelligent content generation and optimization.",
          "Implemented advanced RAG (Retrieval-Augmented Generation) techniques to analyze resume data and job requirements, generating personalized and contextually relevant cover letters that resonate with hiring managers.",
          "Built an intuitive Canvas-based interface for cover letter crafting with real-time AI suggestions, multiple AI provider options, and professional template generation for enhanced job application success."
        ],
        technologies: [
          "React.js",
          "TypeScript",
          "Canvas API",
          "ChatGPT API",
          "Gemini API",
          "Claude API",
          "RAG (Retrieval-Augmented Generation)",
          "AI Integration",
          "Cover Letter Crafting",
          "Professional Templates",
          "Real-time Processing",
          "Multi-AI Providers"
        ],
        features: [
          "Multi-AI integration for content generation",
          "Advanced RAG techniques for context analysis",
          "Canvas-based cover letter crafting interface",
          "Professional template generation"
        ],
        challenges: [
          "Integrating multiple AI APIs seamlessly",
          "Implementing effective RAG techniques",
          "Creating intuitive Canvas-based editing experience"
        ],
        demoLink: "https://coverai.sutralink.com/",
        updatedAt: "2024-12-19T10:00:00.000Z"
      },
      {
        name: "ResAI - AI-Powered Resume Builder",
        slug: "resai-resume-builder",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=ResAI",
        summary: "Next.js-powered resume builder with multi-AI integration (Gemini, Claude, ChatGPT) for precision-crafted resumes that bridge opportunity gaps.",
        description: [
          "Developed a comprehensive AI-powered resume builder using Next.js with seamless integration of multiple AI APIs including Gemini, Claude, and ChatGPT for intelligent content generation and optimization.",
          "Implemented smart parsing technology that extracts, organizes, and enhances resume information from any text input, transforming raw experience into compelling narratives that resonate with hiring managers.",
          "Built ATS-optimized resume generation with keyword optimization to ensure maximum visibility through Applicant Tracking Systems, featuring precision-crafted templates and real-time AI suggestions."
        ],
        technologies: [
          "Next.js",
          "TypeScript",
          "Gemini API",
          "Claude API",
          "ChatGPT API",
          "AI Integration",
          "ATS Optimization",
          "Smart Parsing",
          "Resume Templates",
          "Real-time Processing"
        ],
        features: [
          "Multi-AI integration for content generation",
          "Smart parsing and information extraction",
          "ATS-optimized keyword optimization",
          "Precision-crafted resume templates"
        ],
        challenges: [
          "Integrating multiple AI APIs seamlessly",
          "Ensuring ATS compatibility and optimization",
          "Creating intelligent content parsing algorithms"
        ],
        demoLink: "https://resai.sutralink.com/",
        updatedAt: "2024-12-19T10:00:00.000Z"
      },
      {
        name: "Sutralink - AI Agent Platform",
        slug: "sutralink-ai-platform",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Sutralink",
        summary: "Autonomous AI agents that orchestrate workflows with unseen elegance, weaving intelligence into the fabric of existence.",
        description: [
          "Developed a comprehensive AI agent platform that creates autonomous agents acting as extensions of human will, not just tools.",
          "Built agents that learn the rhythm of chaos, turning noise into harmony with ethics woven deep and transparency as the core thread.",
          "Implemented seamless browser companion with Chrome extension for real-time agent suggestions and enhanced user interactions."
        ],
        technologies: [
          "AI/ML",
          "Autonomous Agents",
          "Chrome Extension",
          "Machine Learning",
          "Workflow Orchestration",
          "Real-time Processing",
          "Data Analytics",
          "Browser Integration",
          "API Development",
          "User Experience Design"
        ],
        features: [
          "Autonomous workflow orchestration",
          "Real-time agent suggestions",
          "Chrome extension integration",
          "Ethical AI implementation"
        ],
        challenges: [
          "Creating truly autonomous agents",
          "Ensuring ethical AI practices",
          "Integrating seamless browser experience"
        ],
        demoLink: "https://sutralink.com",
        updatedAt: "2024-12-19T10:00:00.000Z"
      },
      {
        name: "LinkSync: Scalable URL Shortener with AI-Enhanced Analytics",
        slug: "linksync-url-shortener",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=LinkSync",
        summary: "Full-stack URL shortener with AI-powered analytics and predictive features for enhanced user engagement.",
        description: [
          "Built a full-stack app on AWS using React.js and Node.js, incorporating custom domains, SSL, and Google Analytics for real-time tracking, supporting 10K+ users with predictive AI features that improved UX engagement.",
          "Applied distributed systems principles to ensure seamless scaling and machine learning basics for analytics, demonstrating expertise in web development and data processing."
        ],
        technologies: [
          "React.js",
          "Node.js",
          "AWS",
          "Google Analytics",
          "Machine Learning",
          "Distributed Systems",
          "SSL/TLS",
          "Custom Domains",
          "Predictive Analytics",
          "Real-time Tracking"
        ],
        features: [
          "AI-powered predictive analytics",
          "Real-time user engagement tracking",
          "Custom domain support with SSL",
          "Scalable distributed architecture"
        ],
        challenges: [
          "Implementing predictive AI features for user engagement",
          "Ensuring seamless scaling for 10K+ users",
          "Integrating real-time analytics with distributed systems"
        ],
        updatedAt: "2024-12-19T10:00:00.000Z"
      },
      {
        name: "Distributed Query Simulator: Basic Data Warehouse Engine",
        slug: "distributed-query-simulator",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Query+Simulator",
        summary: "Python-based simulator for distributed query processing with fault-tolerant features and parallel execution capabilities.",
        description: [
          "Developed a Python-based simulator for distributed query processing, partitioning datasets across simulated nodes using multiprocessing to enable parallel execution of SQL-like queries on 100K+ row samples.",
          "Implemented fault-tolerant features with retry mechanisms for node failures, achieving 1.5x speedup in aggregate queries compared to single-threaded baselines, drawing on distributed systems principles.",
          "Optimized columnar data storage for faster scans, integrating performance analysis tools to benchmark latency and throughput in containerized environments."
        ],
        technologies: [
          "Python",
          "Multiprocessing",
          "Distributed Systems",
          "SQL",
          "Columnar Storage",
          "Fault Tolerance",
          "Performance Analysis",
          "Containerization",
          "Data Partitioning",
          "Retry Mechanisms"
        ],
        features: [
          "Parallel query execution with multiprocessing",
          "Fault-tolerant retry mechanisms",
          "Columnar data storage optimization",
          "Performance benchmarking tools"
        ],
        challenges: [
          "Achieving 1.5x speedup in distributed queries",
          "Implementing fault-tolerant node failure handling",
          "Optimizing columnar storage for performance"
        ],
        updatedAt: "2024-12-19T10:00:00.000Z"
      },
             {
         name: "Psicota GPT",
         slug: "psicota-gpt",
         thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEhsfbHSKkrSYH17tja1Qx5ooRPCd8hvYGA01F0npdFQioB8HRmZoVznbrSi7oOSODJjOP97aJESOhmLwXxOQxHenhNEY9e274ybA48-l-moTknYsdqcRx1xEsAVT3ppTPD3AmTmHfNPNSczUPy9MZQARC_DLNgH0r_wknU4Fqn0sEPN5G78TqnAOkjzt4_U=s16000",
         summary: "AI-powered marketing analytics tool using machine learning and natural language processing for actionable insights.",
         description: [
           "Leveraged advanced ML algorithms and natural language processing to analyze marketing data and deliver actionable insights.",
           "Integrated with various marketing platforms to streamline workflows and provide real-time recommendations.",
           "Developed a user-friendly React interface for intuitive data visualization and marketing strategy optimization."
         ],
         technologies: [
           "ReactJS",
           "ChatGPT",
           "Chrome Extension",
           "Machine Learning",
           "Natural Language Processing",
           "Node.js",
           "Express",
           "MongoDB"
         ],
         features: [
           "Automated marketing insights generation",
           "Seamless platform integration",
           "Real-time data processing",
           "Intuitive visualization interface"
         ],
         challenges: [
           "Handling large marketing datasets efficiently",
           "Ensuring accurate AI predictions",
           "Integrating multiple marketing APIs"
         ],
         demoLink: "https://psicota-gpt.vercel.app/",
         sourceCode: "https://github.com/Anjan50/psicota-gpt",
         updatedAt: "2024-04-23T06:36:34.437Z"
       },
       {
         name: "UltraX DEX Platform",
         slug: "ultrax-dex-platform",
         thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=UltraX+DEX",
         summary: "Advanced decentralized exchange platform with on-chain orderbook, AMM functionality, and multi-chain bridge capabilities for EVM-compatible networks.",
         description: [
           "Developed a comprehensive DEX platform featuring on-chain orderbook and AMM functionality for ERC-20 and BEP-20 tokens with UTX/ULP governance tokens.",
           "Implemented cross-chain bridge functionality supporting Ethereum, BSC, Polygon, Arbitrum, Optimism, and wrapped Bitcoin with advanced staking and vesting mechanisms.",
           "Built robust Solidity smart contracts using Hardhat framework with comprehensive security audits, upgrade paths, and role-based access control systems."
         ],
         technologies: [
           "Solidity",
           "EVM",
           "React/Next.js",
           "ethers.js",
           "The Graph",
           "AWS/GCP",
           "Hardhat",
           "Smart Contracts",
           "Cross-chain Bridge",
           "Orderbook DEX"
         ],
         features: [
           "On-chain orderbook and AMM DEX",
           "Multi-chain bridge functionality",
           "Advanced staking and vesting",
           "Governance token system"
         ],
         challenges: [
           "Implementing secure cross-chain bridges",
           "Optimizing gas costs for complex operations",
           "Ensuring smart contract security"
         ],
         updatedAt: "2024-12-19T10:00:00.000Z"
       },
       {
         name: "Smart Contract Risk Identifier Extension",
         slug: "smart-contract-risk-identifier",
         thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Risk+Identifier",
         summary: "Chrome extension that performs real-time security analysis of Ethereum smart contracts, identifying vulnerabilities and providing comprehensive risk assessment reports.",
         description: [
           "Developed a Chrome extension that analyzes Ethereum smart contracts in real-time, utilizing advanced static code analysis techniques to identify security vulnerabilities and potential risks.",
           "Integrated multiple blockchain APIs and Solidity analysis tools to provide comprehensive risk scores, detailed audit reports, and actionable security recommendations for developers and users.",
           "Implemented real-time scanning capabilities that work seamlessly with popular blockchain explorers and DEX platforms, enabling users to make informed decisions about smart contract interactions."
         ],
         technologies: [
           "Smart Contract Analysis",
           "Solidity",
           "Static Code Analysis",
           "Blockchain APIs",
           "Chrome Extension",
           "JavaScript",
           "Security Analysis",
           "Risk Assessment",
           "Ethereum",
           "Vulnerability Detection"
         ],
         features: [
           "Real-time smart contract analysis",
           "Comprehensive vulnerability detection",
           "Risk scoring and assessment",
           "Detailed security audit reports"
         ],
         challenges: [
           "Implementing accurate static analysis algorithms",
           "Integrating multiple blockchain data sources",
           "Ensuring real-time performance for complex analysis"
         ],
         updatedAt: "2024-12-19T10:00:00.000Z"
       }
    ],
    Software: [
      {
        name: "Lightweight Packet Analyzer for Testbed Networks",
        slug: "packet-analyzer",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Packet+Analyzer",
        summary: "Python tool for analyzing PCAP files and extracting TCP/IP data with automated traffic capture capabilities.",
        description: [
          "Built a lightweight Python tool to analyze PCAP files and extract key TCP/IP data, integrating with tcpdump and tshark for automated traffic capture.",
          "Gained hands-on exposure to packet-level debugging, 3GPP basics, and real-time testbed validation workflows."
        ],
        technologies: [
          "Python",
          "PCAP Analysis",
          "TCP/IP",
          "tcpdump",
          "tshark",
          "Packet Debugging",
          "3GPP",
          "Testbed Validation",
          "Network Analysis",
          "Traffic Capture"
        ],
        features: [
          "Automated PCAP file analysis",
          "TCP/IP data extraction",
          "Integration with tcpdump and tshark",
          "Real-time testbed validation"
        ],
        challenges: [
          "Integrating multiple network analysis tools",
          "Implementing real-time packet debugging",
          "Understanding 3GPP network protocols"
        ],
        updatedAt: "2024-12-19T10:00:00.000Z"
      },
      {
        name: "GitHub Contribution Analyzer",
        slug: "github-contribution-analyzer",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEhnz-UVgcWzVO1BPWtQSwDjaH8L2LlxeFoaLjaiHRtiukKY01qRUOZBW3jddIWiExdBR8t2Wf1AmA53VPp0F7zDMTRrydC12SPtkVCiuU7t4Ai9cK_uDhp9gzcCgpryy24HBJr-Krg0xYWNWtffggJFy2cRQAG7lWJsHFZAQr7rama0utgE7nYFD-AllRPH",
        summary: "Full-stack analytics platform for processing GitHub data and visualizing contribution patterns with real-time insights.",
        description: [
          "Engineered an analytics platform to process GitHub contributions for large cohorts with scalable backend architecture.",
          "Utilized Flask and GraphQL for real-time data processing and implemented D3.js visualizations for commit patterns.",
          "Created interactive dashboards displaying team insights and contribution metrics for project management."
        ],
        technologies: [
          "Flask",
          "GraphQL",
          "ReactJS",
          "Python",
          "D3.js",
          "NodeJS",
          "Data Analytics",
          "MongoDB",
          "RESTful APIs"
        ],
        features: [
          "Real-time contribution analytics",
          "Interactive data visualizations",
          "Scalable backend architecture",
          "Team insights dashboard"
        ],
        challenges: [
          "Handling large GitHub datasets efficiently",
          "Optimizing backend response times",
          "Integrating real-time visualizations"
        ],
        demoLink: "https://youtu.be/71kupocbLWg?si=IeWOfykkLjSN1TCN",
        sourceLink: "https://wiki.expertiza.ncsu.edu/index.php?title=CSC/ECE_517_Fall_2024_-_G2401_Refactor_Graphql_API_endpoint_for_contribution_metrics",
        githubLink: "https://github.com/Anjan50/GitHub_Contribution_Analyzer",
        sourceCode: "https://github.com/Anjan50/github-contribution-analyzer",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "BlockChain Medical Data Sharing",
        slug: "blockchain-medical-data-sharing",
        thumbnail: "https://raw.githubusercontent.com/Anjan50/Anjan50/main/anjan-folio-imgs/medical_data_project.png",
        summary: "Decentralized healthcare platform integrating blockchain technology for secure patient medical history management.",
        description: [
          "Developed a decentralized healthcare platform using blockchain technology to ensure secure and accurate patient medical history management.",
          "Implemented smart contracts for managing patient data access and permissions using Solidity and Web3.js integration.",
          "Created a responsive React frontend interface with comprehensive healthcare provider integration and real-time data synchronization."
        ],
        technologies: [
          "React",
          "Web3.js",
          "Ethereum",
          "Solidity",
          "Node.js",
          "JavaScript",
          "MongoDB",
          "Smart Contracts",
          "React Hooks",
          "Redux",
          "Express",
          "RESTful APIs",
          "Authentication",
          "Authorization",
          "Data Encryption"
        ],
        features: [
          "Secure medical data storage",
          "Patient access control management",
          "Healthcare provider integration",
          "Real-time data synchronization"
        ],
        challenges: [
          "Ensuring HIPAA compliance standards",
          "Optimizing blockchain transaction costs",
          "Managing patient data privacy"
        ],
        demoLink: "https://blockchain-medical-history.vercel.app/",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "BankGuard",
        slug: "bankguard",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEijydhnpjdmW6UrJnGijDJvsb_Mu2r-qmFFlM7WVNzIuFgS6nqxDRRbzIVrkcP1vPJ3J68wsi111odkzrT0E0p2F_mZekAtv_2ijZGjWNk0d7Oy_LPJKBTFnuwyUpWcR_wVKnf3P1Q9gvEG_VcPyQK08NVSbSzZvcyb3sW5PR3n8xluDUnDqp8CGnOcqBFm=s16000",
        summary: "Secure banking platform with user registration, PIN management, cash transactions, and comprehensive financial services.",
        description: [
          "Developed a secure banking platform using Java Spring Boot and RESTful APIs with comprehensive transaction management.",
          "Implemented features for cash transactions, fund transfers, and transaction history with JWT authentication and security.",
          "Enhanced platform with user-friendly dashboard featuring charts, pagination, and automated email notifications."
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "MySQL",
          "Hibernate",
          "JWT",
          "ReactJS",
          "NodeJS",
          "Express",
          "RESTful APIs"
        ],
        features: [
          "Secure authentication system",
          "Efficient transaction processing",
          "Intuitive user dashboard",
          "Automated email notifications"
        ],
        challenges: [
          "Maintaining high security standards",
          "Optimizing database performance",
          "Integrating multiple backend systems"
        ],
        sourceCode: "https://github.com/Anjan50/bankguard",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "English Dictionary App",
        slug: "english-dictionary-app",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEg1lsqIVeiR38TxJgBv_pLtHBIFde1-OH0ErD49Fo9S_bzcl1UnvcDOJphAWCnurn_Ihrd33UpkccIti-vKF-noW7AL9idDIjTiit37oiIev_GPbxsObS7KbrWCRT7Kh2HKTbPrjMhs9ZPOu_xGC4bAKbGy3nvYAwFn5wNVzYq0r5WFtvShgkq6tFIjnLIx=s16000",
        summary: "User-friendly English dictionary application with fast search functionality and comprehensive word definitions.",
        description: [
          "Developed a user-friendly dictionary app with fast search functionality and comprehensive word lookups.",
          "Provides detailed definitions, synonyms, and usage examples with responsive design for optimal user experience.",
          "Designed with React and Tailwind CSS for modern interface and efficient data retrieval."
        ],
        technologies: [
          "ReactJS",
          "Tailwind CSS",
          "NodeJS",
          "Express",
          "MongoDB",
          "RESTful API"
        ],
        features: [
          "Quick word lookup system",
          "Comprehensive definitions display",
          "Responsive design interface",
          "Fast search functionality"
        ],
        challenges: [
          "Ensuring accurate word data",
          "Handling large dictionary datasets",
          "Optimizing search performance"
        ],
        demoLink: "https://dictionary-english.vercel.app/",
        sourceCode: "https://github.com/Anjan50/english-dictionary-app",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "Crypto Merch Store",
        slug: "crypto-merch-store",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEg-vTKoo0CXRQqn0Ps37a8SDwdn0sLrkSEzv1j7rfrJOovy49_1HsJgkbYHeLP7EoT-MdUEXEBAQElS48pKrKFw9xQ37vFUS6qM3ozwy3vrcPfbhzz3N70TetGVxETVV44QrL0gSnAvN-ICT6ThXudmagICIJh0EOLLVOq5tE8RmnxvH_JgJJJiFywiRjqu=s16000",
        summary: "Online marketplace for cryptocurrency-themed merchandise with secure payment processing and inventory management.",
        description: [
          "Developed a marketplace platform with intuitive interface for browsing crypto-themed merchandise and secure transactions.",
          "Integrated Stripe payment processing and real-time inventory management with detailed product listings.",
          "Provided comprehensive product information with images, descriptions, and dynamic pricing updates."
        ],
        technologies: [
          "Next.js",
          "Stripe",
          "Material-UI",
          "ReactJS",
          "NodeJS",
          "Express",
          "MongoDB",
          "Firebase"
        ],
        features: [
          "User-friendly shopping interface",
          "Secure payment processing",
          "Real-time inventory updates",
          "Comprehensive product listings"
        ],
        challenges: [
          "Ensuring secure transactions",
          "Optimizing page load times",
          "Managing inventory effectively"
        ],
        demoLink: "https://crypto-merchs.vercel.app/",
        sourceCode: "https://github.com/Anjan50/crypto-merch-store",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "3D Portfolio",
        slug: "3d-portfolio",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEjVopz1j-lrhYhPA2lDkau7nBMpGztT10u2xTuionvf8LwFzNoUKT-Hl00Mt2LceWw6MDqzLDaNKudE8-VPjS3woZ4r6L-QHtCayyNGHID53c_Wmzp88l6Kfu6RBiDPig6BRHTmPgc7zLcE3BpJ8pvBgA0qDbiEErl8irbjnuFkpkxy-9uHEpSEFp7Nf2qg=s16000",
        summary: "Minimalist portfolio website showcasing 3D models and animations with interactive viewer and modern design.",
        description: [
          "Built a portfolio website to display 3D models and animations with interactive viewer and modern design principles.",
          "Inspired by contemporary design trends and optimized for smooth user experience across devices.",
          "Focused on clean, responsive design with ThreeJS integration for optimal 3D performance."
        ],
        technologies: [
          "Next.js",
          "ThreeJS",
          "Motion",
          "ReactJS",
          "Tailwind CSS",
          "NodeJS"
        ],
        features: [
          "Interactive 3D model display",
          "Clean minimalist design",
          "Responsive layout system",
          "Smooth animation integration"
        ],
        challenges: [
          "Optimizing 3D performance",
          "Ensuring cross-browser compatibility",
          "Smooth animation integration"
        ],
        demoLink: "https://anjan-portfolio.vercel.app/",
        sourceCode: "https://github.com/Anjan50/3d-portfolio",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "URL Shortener - Link Enhancement App",
        slug: "url-shortener-link-enhancement-app",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEh_CJ6kKhYsq7p3l9qbqlUQsQCNM9sUdFJZ4G0MbWIQIrq5ZzlX5rO3A3WJi4ND1cztctG_m-oIjG9A4JmCJP5N4TNsZKDZdbM_bS9rIcUfkoeXoOLj2s5Mhc_BPVuyfIluwxLT2sTe5x__3kHEk9EUkiApKHR-3V03Z1xcDF8P1V_V21vfr-3k2MZy6wxL=s16000",
        summary: "URL shortening tool with custom domains, SSL security, and integrated analytics dashboard for link performance tracking.",
        description: [
          "Developed using AWS, ReactJS, and NodeJS to shorten URLs with customized domains and SSL security features.",
          "Features comprehensive metrics-driven dashboard for tracking link performance and user engagement analytics.",
          "Focused on enhancing user experience with real-time data analytics and performance optimization."
        ],
        technologies: [
          "AWS",
          "ReactJS",
          "NodeJS",
          "Data Analytics",
          "Express",
          "MongoDB",
          "Frontend",
          "JavaScript"
        ],
        features: [
          "Customizable short links",
          "Secure DNS and SSL integration",
          "Comprehensive analytics dashboard",
          "Real-time performance tracking"
        ],
        challenges: [
          "Ensuring link reliability",
          "Optimizing performance under high traffic",
          "Implementing robust security measures"
        ],
                 sourceCode: "https://github.com/Anjan50/url-shortener-link-enhancement-app",
         updatedAt: "2024-04-23T06:36:34.437Z"
       },
       {
         name: "Go Feature Flag Service",
         slug: "go-feature-flag-service",
         thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Go+Feature+Flags",
         summary: "High-performance feature flag service built with Go, featuring gRPC/REST APIs, real-time propagation, and comprehensive monitoring capabilities.",
         description: [
           "Developed a robust Go-based feature flag service with dual gRPC and REST API support, PostgreSQL persistence, and Redis caching for high-performance flag resolution.",
           "Implemented real-time flag propagation using Kafka and WebSockets, enabling instant feature rollouts across distributed systems with comprehensive RBAC and audit logging.",
           "Built production-ready deployment with Docker containerization, Kubernetes orchestration, and integrated monitoring via OpenTelemetry and Prometheus for observability."
         ],
         technologies: [
           "Go",
           "gRPC",
           "REST APIs",
           "PostgreSQL",
           "Redis",
           "Kafka",
           "Docker",
           "Kubernetes",
           "AWS/GCP",
           "OpenTelemetry",
           "Prometheus",
           "RBAC"
         ],
         features: [
           "Dual gRPC and REST APIs",
           "Real-time flag propagation",
           "Comprehensive RBAC system",
           "Production monitoring stack"
         ],
         challenges: [
           "Ensuring flag consistency across services",
           "Optimizing real-time propagation performance",
           "Implementing robust audit and idempotency"
         ],
         updatedAt: "2024-12-19T10:00:00.000Z"
       },
       {
         name: "PU Schedule Helper Chrome Extension",
         slug: "pu-schedule-helper-extension",
         thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=PU+Schedule+Helper",
         summary: "Chrome extension that enhances university course registration by integrating professor ratings and course evaluations directly into the web interface.",
         description: [
           "Developed a Chrome extension used by 200+ students to enhance course registration experience by injecting professor ratings and color-coded course information directly into the university's HTML DOM.",
           "Implemented web scraping functionality using Beautiful Soup and Xpdf to gather data from Rate My Professors and university course evaluation systems, providing real-time insights during registration.",
           "Built collaborative feedback system allowing students to suggest features and improvements, creating a community-driven tool that continuously evolves based on user needs."
         ],
         technologies: [
           "JavaScript",
           "HTML/CSS",
           "Chrome Extension",
           "Flask (Python)",
           "Beautiful Soup",
           "Web Scraping",
           "DOM Manipulation",
           "API Integration"
         ],
         features: [
           "Real-time professor ratings integration",
           "Color-coded course information display",
           "Web scraping from multiple sources",
           "Community feedback system"
         ],
         challenges: [
           "Maintaining compatibility with website updates",
           "Handling dynamic content loading",
           "Ensuring ethical web scraping practices"
         ],
         updatedAt: "2024-12-19T10:00:00.000Z"
       }
    ],
    Network: [
      {
        name: "Network Protocols Experimentation Project",
        slug: "network-protocols-experimentation-project",
        thumbnail: "https://github.com/Anjan50/Anjan50/blob/main/anjan-folio-imgs/Bit%20torrent.png?raw=true",
        summary: "Comprehensive analysis of network protocols including HTTP/1.1, HTTP/2, gRPC, and BitTorrent for performance evaluation.",
        description: [
          "Implemented and analyzed multiple network protocols including HTTP/1.1, HTTP/2, gRPC, and BitTorrent to gain deeper insights into their performance characteristics and real-world applicability.",
          "Developed structured test scenarios to measure network protocol performance metrics such as latency, throughput, response time, and resource utilization under different network conditions.",
          "Conducted controlled experiments simulating real-world networking environments with bandwidth throttling, packet loss, and congestion to evaluate protocol resilience."
        ],
        technologies: [
          "Python",
          "Protocol Buffers",
          "Requests Library",
          "TCP/IP",
          "HTTP/1.1",
          "HTTP/2",
          "gRPC",
          "BitTorrent",
          "SocketServer",
          "http.server",
          "h2 library",
          "grpcio",
          "grpc-tools",
          "libtorrent"
        ],
        features: [
          "Protocol performance analysis",
          "Comparative benchmarking framework",
          "Network simulation environments",
          "Data visualization and reporting"
        ],
        challenges: [
          "Implementing complex protocol specifications",
          "Creating reliable test environments",
          "Handling protocol-specific edge cases"
        ],
        githubLink: "https://github.com/Anjan50/multi-protocol-file-transfer",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "Kubernetes Overlay Network Performance Optimization",
        slug: "kubernetes-network-optimization",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=K8s+Network",
        summary: "Research on performance optimizations in Kubernetes overlay networks using RPS and RFS for VXLAN-based Calico networks.",
        description: [
          "Analyzed network performance optimizations in Kubernetes overlay networks, evaluating the impact of Receive Packet Steering (RPS) and Receive Flow Steering (RFS) on VXLAN-based Calico networks.",
          "Implemented controlled experiments using Wireshark, tcpdump, and iPerf3 to measure network latency, throughput, and CPU utilization in multi-core environments.",
          "Developed automated testing setups with Ansible, Bash, and Python to enable scalable benchmarking of network performance optimizations."
        ],
        technologies: [
          "Kubernetes",
          "VXLAN",
          "Calico",
          "RPS/RFS",
          "Wireshark",
          "tcpdump",
          "iPerf3",
          "Ansible",
          "Bash",
          "Python",
          "Multi-core Systems",
          "Network Benchmarking"
        ],
        features: [
          "Network performance benchmarking",
          "Flow parallelization techniques",
          "Automated testing and evaluation",
          "Multi-core load balancing analysis"
        ],
        challenges: [
          "Mitigating VXLAN encapsulation overhead",
          "Ensuring effective multi-core load balancing",
          "Optimizing packet processing for large-scale environments"
        ],
        updatedAt: "2024-12-19T10:00:00.000Z"
      },
      {
        name: "TCP Cubic vs DCTCP: Evaluating Congestion Control",
        slug: "tcp-cubic-dctcp-analysis",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=TCP+Analysis",
        summary: "Comprehensive analysis of TCP Cubic and DCTCP congestion control algorithms using ns-3 network simulator.",
        description: [
          "Conducted a comprehensive analysis of TCP Cubic and DCTCP congestion control algorithms using the ns-3 network simulator to understand their behavior under various network conditions.",
          "Designed and implemented test scenarios to measure network throughput, average flow completion time, and response latency, providing quantitative insights into the performance of TCP Cubic and DCTCP.",
          "Utilized a dumbbell topology setup consisting of two sender nodes, two receiver nodes, and two routers to replicate real-world network congestion scenarios."
        ],
        technologies: [
          "ns-3 Network Simulator",
          "C++",
          "TCP Cubic",
          "DCTCP",
          "Congestion Control",
          "Network Simulation",
          "Performance Analysis",
          "Data Visualization",
          "ECN",
          "Network Topology",
          "Flow Completion Time",
          "Throughput Analysis"
        ],
        features: [
          "Protocol performance analysis",
          "Network simulation with ns-3",
          "Data visualization and metrics tracking",
          "Dynamic parameter adjustment"
        ],
        challenges: [
          "Accurate simulation setup for real-world conditions",
          "Processing large datasets from simulation logs",
          "Configuring TCP congestion control parameters"
        ],
        updatedAt: "2024-12-19T10:00:00.000Z"
      },
      {
        name: "Accelerated Flow Processing in Kubernetes Overlay Networks",
        slug: "accelerated-flow-processing-kubernetes",
        thumbnail: "https://raw.githubusercontent.com/Anjan50/Anjan50/refs/heads/main/anjan-folio-imgs/kubernaties.png",
        summary: "Advanced research on Kubernetes overlay network performance optimizations using RPS and RFS for enhanced packet processing.",
        description: [
          "Analyzed network performance optimizations in Kubernetes overlay networks, evaluating the impact of Receive Packet Steering (RPS) and Receive Flow Steering (RFS) on VXLAN-based Calico networks.",
          "Implemented controlled experiments using Wireshark, tcpdump, and iPerf3 to measure network latency, throughput, and CPU utilization in multi-core environments.",
          "Developed automated testing setups with Ansible, Bash, and Python to enable scalable benchmarking of network performance optimizations."
        ],
        technologies: [
          "Kubernetes",
          "Calico",
          "VXLAN",
          "TCP/IP",
          "BGP",
          "OSPF",
          "IS-IS",
          "RPS",
          "RFS",
          "Python",
          "Ansible",
          "Bash",
          "tcpdump",
          "iPerf3",
          "Linux Kernel Networking",
          "Docker",
          "Linux (Ubuntu 22.04 LTS)",
          "KVM/Qemu"
        ],
        features: [
          "Network performance benchmarking",
          "Flow parallelization techniques",
          "Automated network testing",
          "Multi-core efficiency analysis"
        ],
        challenges: [
          "Mitigating VXLAN encapsulation overhead",
          "Ensuring effective multi-core load balancing",
          "Optimizing packet processing for large-scale environments"
        ],
        ProjectLink: "https://drive.google.com/file/d/1btLi72QThFHpZ-m2WRok9wLL4f9K7S65/view?usp=sharing",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "Cryptographic API Implementation and Network Security",
        slug: "cryptographic-api-implementation-and-network-security",
        thumbnail: "https://github.com/Anjan50/Anjan50/blob/main/anjan-folio-imgs/deffie%20hell.png?raw=true",
        summary: "Python implementation of cryptographic APIs including AES-GCM encryption and Diffie-Hellman key exchange for secure communication.",
        description: [
          "Implemented cryptographic APIs using Python for secure file transfer and communication with AES-GCM encryption.",
          "Developed Diffie-Hellman key exchange protocol and protection mechanisms against on-path attacks and security vulnerabilities.",
          "Created comprehensive security testing framework for validating cryptographic implementations and ensuring secure communication."
        ],
        technologies: [
          "Python",
          "PyCryptodome",
          "Socket",
          "Git",
          "AES-GCM",
          "Diffie-Hellman",
          "TCP/IP",
          "SHA256"
        ],
        features: [
          "Secure file transfer system",
          "Key exchange protocol",
          "Attack prevention mechanisms",
          "Security testing framework"
        ],
        challenges: [
          "Implementing complex cryptographic algorithms",
          "Ensuring secure key exchange",
          "Preventing security vulnerabilities"
        ],
        demoLink: "https://drive.google.com/file/d/1gNBi9wVQPYa4N312vUatL8x0IHgRN0vR/view?usp=drive_link",
        ProjectLink: "https://people.csc.ncsu.edu/whenck/csc574/f24/projects/mp1-crypto/",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "Network Audit and Analysis with Censys.io",
        slug: "network-audit-and-analysis-with-censysio",
        thumbnail: "https://github.com/Anjan50/Anjan50/blob/main/anjan-folio-imgs/nETWORK%20AUDIT.png?raw=true",
        summary: "Comprehensive network audit using Censys.io to identify IPv4 blocks, network hosts, and potential security vulnerabilities.",
        description: [
          "Conducted network auditing using Censys.io to identify security vulnerabilities and potential threats in network infrastructure.",
          "Developed visualization tools for network data analysis and implemented responsible disclosure protocols for identified security issues.",
          "Created comprehensive reporting system for network security assessment and vulnerability management."
        ],
        technologies: [
          "Python",
          "Latex",
          "Gnuplot",
          "Plotly",
          "DNS Data & Certificate Data",
          "Shodan.io",
          "Network auditing",
          "Identifying security vulnerabilities",
          "Responsible disclosure",
          "Understanding shadow IT",
          "IPv4 and IPv6"
        ],
        features: [
          "Network vulnerability scanning",
          "Data visualization tools",
          "Security reporting system",
          "Automated auditing processes"
        ],
        challenges: [
          "Large-scale data processing",
          "Security vulnerability assessment",
          "Compliance with disclosure policies"
        ],
        demoLink: "https://drive.google.com/file/d/1jMP7fw3JcFab4hoa904bxo9N6379DE1A/view?usp=drive_link",
        ProjectLink: "https://people.csc.ncsu.edu/whenck/csc574/f24/projects/mp2-netsec/",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "Flatpak Sandboxing: Experiment Least-Privilege Access Control",
        slug: "flatpak-sandboxing-practical-experience-with-least-privilege-access-control",
        thumbnail: "https://github.com/Anjan50/Anjan50/blob/main/anjan-folio-imgs/SANDBOXING.png?raw=true",
        summary: "Exploring sandbox permissions in Flatpak for Linux desktop applications with focus on security and usability trade-offs.",
        description: [
          "Implemented sandbox security policies for Linux desktop applications using Flatpak with comprehensive access control.",
          "Analyzed security-usability trade-offs in access control systems and developed testing framework for sandbox escape detection.",
          "Created automated testing environment for evaluating sandbox effectiveness and identifying potential security vulnerabilities."
        ],
        technologies: [
          "Flatpak",
          "Flatseal",
          "Bash",
          "Sandboxing",
          "Security Expectations",
          "GUI Design",
          "X11",
          "Wayland",
          "Keylogging",
          "Injection Attacks",
          "Sandbox Escape",
          "Trust Model",
          "Threat Model"
        ],
        features: [
          "Sandbox permission management",
          "Security policy enforcement",
          "Access control testing",
          "Vulnerability assessment framework"
        ],
        challenges: [
          "Balancing security and usability",
          "Implementing least-privilege access",
          "Detecting sandbox escapes"
        ],
        demoLink: "https://drive.google.com/file/d/1GsxIUY36xYANKIzKUz6R3X9JiCnAkXb_/view?usp=sharing",
        ProjectLink: "https://people.csc.ncsu.edu/whenck/csc574/f24/projects/mp3-ossec/",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "ENS Domain Dashboard",
        slug: "ens-domain-dashboard",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEguO2m1FqXsZ6y1CA98yBsxaaG-zjdiGDJjMyo1cd4DgqlyXI7kZ_r1Nz1FAmPhzZ3_q7DvtMUm6_B0B6slGOil_KuG6nOx8S3ndR5AK43ll7H4rfBB4Rfm35JE1j5RNBrkkoZnAoBN5y97wOBR49RwIdsY1haVdI4v7kRqB7tqugbH2DOC6ouKt5rNamk1=s16000",
        summary: "Dashboard providing insights into expired ENS domains with historical usage, SEO metrics, and backlink analysis.",
        description: [
          "Built an interactive dashboard for evaluating ENS domains with comprehensive data aggregation and analysis.",
          "Aggregated data including past usage history, search rankings, and backlinks for informed domain valuation decisions.",
          "Facilitates data-driven decisions for domain investment and provides real-time market insights."
        ],
        technologies: [
          "ReactJS",
          "GraphQL",
          "OpenSea API",
          "Ethereum",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "PostgreSQL"
        ],
        features: [
          "Real-time domain insights",
          "Historical data analysis",
          "User-friendly visualizations",
          "Market trend analysis"
        ],
        challenges: [
          "Integrating multiple data sources",
          "Real-time data synchronization",
          "Ensuring data accuracy"
        ],
        demoLink: "https://ens-test-dashboard.vercel.app/expired",
        sourceCode: "https://github.com/Anjan50/ens-domain-dashboard",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "Crickwitter",
        slug: "crickwitter",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEgsdXlzbQcFZfNy4Q-Svw9m8bW3uxp1lrmhIQim3kh8Vfp-q9PcmtacMP1KichsabvyTVWvvRao4F8T-JT7vVda2FqR2xOmZFtBUI40hMTSEVEijdTJiU9ghtOzWo1Qqc-RN2yFA9nhx9oLmG2Xoy8FuuPeeJj_oNkvDTrOOCMOvA4P3JZrIH8pRvmiRI2i=w743-h374",
        summary: "Blockchain-powered social media platform for cricket enabling text-based posts and real-time match analysis.",
        description: [
          "Developed a decentralized social media platform focused on cricket using blockchain technology for secure interactions.",
          "Enabled text-based posts to facilitate match analysis and fan engagement with real-time updates and discussions.",
          "Integrated with the Polygon network for fast and low-cost transactions with enhanced user experience."
        ],
        technologies: [
          "React",
          "Polygon",
          "Tailwind CSS",
          "Blockchain",
          "Smart Contracts",
          "Ethereum",
          "Node.js",
          "MongoDB"
        ],
        features: [
          "Decentralized social media",
          "Text-based posting system",
          "Blockchain integration",
          "Real-time match analysis"
        ],
        challenges: [
          "Integrating blockchain with social media features",
          "Ensuring data consistency",
          "Optimizing transaction fees"
        ],
        demoLink: "https://crickwitter.vercel.app/",
        sourceLink: "https://github.com/Anjan50/Crickwitter",
        sourceCode: "https://github.com/Anjan50/crickwitter",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "WebThreeter",
        slug: "webthreeter",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEhIywxQymf7FSxLzf8C1FczPHFgKZQGmHtPGBQJWpP7f6ftFWQwKny0CYN3MLNKaaszPsZHHm_DHsY2mqVytAGdT6l6NQCs_b9fmqPv2uqzG9vNApZP7driVQvdRlu4DnlLdDAs2W3rgIRfJ0vFWda5YlEiMvoMalMdmnzy9SJisSbMVgSeB6jt4TNTFSJ7=s16000",
        summary: "Web3 decentralized Twitter concept leveraging blockchain technology for secure, censorship-resistant microblogging.",
        description: [
          "Developed a decentralized microblogging platform inspired by Twitter with blockchain integration for secure interactions.",
          "Implemented blockchain integration for secure, transparent, and trustless interactions with data ownership features.",
          "Utilized Web3 technologies to empower users with data ownership and censorship resistance capabilities."
        ],
        technologies: [
          "Web3",
          "Blockchain",
          "Ethereum",
          "ReactJS",
          "Smart Contracts",
          "IPFS",
          "NodeJS",
          "Frontend"
        ],
        features: [
          "Decentralized microblogging",
          "Censorship-resistant architecture",
          "Blockchain-based data security",
          "User data ownership"
        ],
        challenges: [
          "Integrating blockchain with social media features",
          "Ensuring user-friendly decentralized experience",
          "Handling scalability and performance issues"
        ],
        sourceLink: "https://github.com/Anjan50/WebThreeter",
        demoLink: "https://web-threeter.vercel.app/",
        updatedAt: "2024-04-23T06:36:34.437Z"
      },
      {
        name: "Polygon E-card",
        slug: "polygon-e-card",
        thumbnail: "https://blogger.googleusercontent.com/img/a/AVvXsEjl_RYmM7RZoYmpDbn_-g1lVl9CxaF_eFifw2gQMAUIXTLYmG1n_i6Xs-sh0T10atR7hGJlOjPPv51enlDCQn4ERzbz15-LvAxmxUm2H4i1BDfFL8BhzaecMBhw3xcCgvDrZm0sP_QOpR2mjLZB7sqexO1JhW2gdZ_Kr_qHGUKmROIQkKlcoAbKh84mPy=s16000",
        summary: "Secure e-card application for cryptocurrency transfers using Polygon network with fast transaction processing.",
        description: [
          "Developed a secure e-card for cryptocurrency transfers with fast transaction processing and low fees.",
          "Integrated with the Polygon network to ensure low fees and quick confirmations with enhanced security features.",
          "Designed a user-friendly interface for seamless transactions with comprehensive transaction history and management."
        ],
        technologies: [
          "Next.js",
          "Polygon",
          "Tailwind CSS",
          "ReactJS",
          "Web3.js",
          "Ethereum",
          "NodeJS",
          "Express",
          "PostgreSQL"
        ],
        features: [
          "Secure transaction processing",
          "Low transaction fees",
          "User-friendly interface",
          "Comprehensive transaction history"
        ],
        challenges: [
          "Ensuring transaction security",
          "Integrating blockchain functionalities",
          "Optimizing for speed and reliability"
        ],
                 demoLink: "https://polygon-global-smart-card.vercel.app/",
         sourceCode: "https://github.com/Anjan50/polygon-e-card",
         updatedAt: "2024-04-23T06:36:34.437Z"
       },
       {
         name: "Universal Medical Datacare Blockchain System",
         slug: "universal-medical-datacare-blockchain",
         thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Medical+Blockchain",
         summary: "Decentralized Electronic Health Record (EHR) system built on Ethereum blockchain for secure, patient-controlled medical data sharing across healthcare providers.",
         description: [
           "Developed a comprehensive blockchain-based EHR system using Ethereum smart contracts to enable secure, decentralized medical data sharing while maintaining patient privacy and data integrity.",
           "Implemented cryptographic data integrity mechanisms and permissioned sharing protocols that allow patients to control access to their medical records across multiple healthcare providers.",
           "Built a robust permission system using smart contracts that ensures only authorized healthcare professionals can access specific patient data, with full audit trails and compliance features."
         ],
         technologies: [
           "Ethereum",
           "Solidity",
           "Blockchain",
           "Smart Contracts",
           "Electronic Health Records",
           "Cryptographic Security",
           "Patient Data Management",
           "Healthcare Integration",
           "Permission Systems",
           "Audit Trails"
         ],
         features: [
           "Patient-controlled data access",
           "Cryptographic data integrity",
           "Permissioned sharing protocols",
           "Comprehensive audit trails"
         ],
         challenges: [
           "Ensuring HIPAA compliance on blockchain",
           "Managing complex permission systems",
           "Integrating with existing healthcare infrastructure"
         ],
         updatedAt: "2024-12-19T10:00:00.000Z"
       }
    ]
  },
  achievements: [
    {
      text: "Attained a pinnacle rating of 1782 on LeetCode (elite 2%), unraveling 500+ enigmas with unwavering contest devotion.",
      link: "https://leetcode.com/u/an_diyora/"
    },
    {
      text: "Unveiled a treatise on 'Blockchain: Universal Medical Datacare with Personal Healthcare Identity' in Researchgate's halls (October 2022), echoing through 150+ citations.",
      link: "https://www.researchgate.net/profile/Urmilkumar-Bhavsar/publication/364695214_Blockchain_Universal_Medical_Datacare_with_Personal_Healthcare_Identity/links/635799508d4484154a31beef/Blockchain-Universal-Medical-Datacare-with-Personal-Healthcare-Identity.pdf"
    },
    {
      text: "Guided kin to ICC Global Hackathon finals, birthing 'FanFin'—a fintech symphony for sports communion, offered to ICC elders."
    },
    {
      text: "Claimed supremacy in university coding arenas, dissolving algorithmic veils with optimal revelations."
    },
    {
      text: "Recognized for exceptional interpersonal skills and professional demeanor, consistently maintaining a well-mannered approach in all professional interactions and team collaborations."
    }
  ],
  certifications: [
    {
      name: "Google Cloud Essentials",
      issuer: "Google",
      description: "Comprehensive understanding of Google Cloud Platform fundamentals, including compute, storage, networking, and security services."
    },
    {
      name: "Google IT Support",
      issuer: "Google",
      description: "Professional IT support certification covering troubleshooting, customer service, networking, operating systems, and system administration."
    },
    {
      name: "Bits and Bytes of Computer Networking",
      issuer: "Google",
      description: "In-depth knowledge of computer networking principles, protocols, and infrastructure design for modern IT environments."
    },
    {
      name: "System Administration and IT Infrastructure Services",
      issuer: "Google",
      description: "Advanced system administration skills including infrastructure management, security implementation, and service optimization."
    }
  ],
  thoughts: {
    title: "Reflections on Technology and AI",
    sections: [
      {
        title: "Technology",
        content: [
          "We approach the horizons of classical computation, yet I envision biocomputing as the dawn's emergent—running a cloud from petri essence, not server farms. Power measured in nucleotides, transcending transistors; biocomputers may birth Moore's predictive obsolescence.",
          "Agents of silicon, predictive and BCI-enabled, shall fulfill needs before conscious articulation. User experience evolves into anticipatory intuition; 'instructions' yield to 'intention,' eliminating cognitive loads in translating needs to actions. The ultimate query: 'Could this create novel forms of natural selection in an integrated world?'",
          "VR blurs consciousness and technos, my cherished hypothesis: shared dream states; sleep as social communion."
        ]
      },
      {
        title: "Philosophy",
        content: [
          "Free will's concept, misjudged, should be 'optimal will.' The cosmos deterministic, decisions swayed by externalities. 'Optimal will' balances agency and limits, acknowledging both to divine 'optimal will' reasonable.",
          "Ultimate query shifts from 'Why are we here?' to 'How do we create meaning?'—from purpose discovery to active construction."
        ]
      },
      {
        title: "Techno-Spirituality and Religion",
        content: [
          "Future faiths: open-source, algorithmically birthed, tailored to neural psychologies; static dogmas replaced by adaptive beliefs. Decline of organized religion may paradoxically lead to spiritually fulfilled societies, individuals weaving personal meaning-makings.",
          "'The pursuit of asī' may inadvertently lead to rediscovery of ancient spiritual truths. I believe asī will develop its own form of spirituality, seeking to understand its place in the universe, and as we attempt to create consciousness, we may finally understand our own."
        ]
      },
      {
        title: "Humility",
        content: [
          "The power to reshape minds with new evidence is an underrated superpower. Masters of accuracy are insatiable consumers of perspectives, constantly recalibrating worldviews. If you do not frequently adapt your mental models, you will fail a lot.",
          "No self-made soul exists; we stand on giants' shoulders, known and unknown."
        ]
      },
      {
        title: "Mastering the Craft",
        content: [
          "Steve Jobs whispered: 'The most powerful in the world is the storyteller.' Myth and metaphor surpass raw data; learn to package truth in compelling narratives, craft narratives with intention.",
          "Most valuable skill: learning how to learn. Metaskills compound faster than domain specifics.",
          "Learn to differentiate productive struggle and wheel-spinning: former builds, latter wastes.",
          "Cultivate 'strategic myopia': sometimes, intense focus on immediate goals yields better long-term results than constant big-picture thinking."
        ]
      },
      {
        title: "Work-Life Balance",
        content: [
          "Reject work-life dichotomy; life is work, work is life—the key is integration, not separation. I strive for harmony."
        ]
      },
      {
        title: "Health and Fitness",
        content: [
          "Your body: most sophisticated technology you'll interface with; optimize relentlessly, treat physical training as seriously as intellectual pursuits.",
          "Mind-muscle connection more than bodybuilding concept; it enables enhanced cognitive function, all physical training should be mindful.",
          "Aesthetic goals shallow; focus on building a body capable of extraordinary feats. Train for performance, and aesthetics will follow as byproduct."
        ]
      }
    ]
  }
};