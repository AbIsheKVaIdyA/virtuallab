export const stats = [
  { title: "Labs Completed", value: "18", detail: "+4 this week" },
  { title: "Quizzes Taken", value: "32", detail: "92% avg score" },
  { title: "Badges Earned", value: "12", detail: "3 new badges" },
  { title: "Current Level", value: "Level 6", detail: "Cloud Defense" },
];

export const continueLearning = {
  title: "Cloud Intrusion Lab",
  description:
    "Simulate a multi-stage breach across a hybrid cloud environment.",
  progress: 68,
  cta: "Resume Lab",
};

export const progressTracks = [
  { label: "Cyber Foundations", value: 72 },
  { label: "Cloud Security", value: 58 },
  { label: "AI for Threat Intel", value: 41 },
];

export const labs = [
  {
    title: "Linux Sandbox: Forensics",
    difficulty: "Beginner",
    type: "Sandbox",
    description: "Practice log parsing, file recovery, and system triage.",
  },
  {
    title: "Kubernetes Hardening",
    difficulty: "Intermediate",
    type: "Sandbox",
    description: "Secure a container cluster using best-practice baselines.",
  },
  {
    title: "SOC Incident Response Drill",
    difficulty: "Advanced",
    type: "Scenario",
    description: "Coordinate a response to a live ransomware simulation.",
  },
  {
    title: "Phishing Investigation Lab",
    difficulty: "Beginner",
    type: "Scenario",
    description: "Trace a suspicious email campaign and neutralize it.",
  },
];

export const quizzes = [
  {
    topic: "Zero Trust Fundamentals",
    questions: 12,
    time: "8 min",
    question: "Which principle is core to Zero Trust architecture?",
    options: [
      "Implicitly trust internal networks",
      "Always verify access requests",
      "One-time authentication only",
      "Open network segmentation",
    ],
    correctIndex: 1,
  },
  {
    topic: "Cloud IAM Policies",
    questions: 10,
    time: "6 min",
    question: "What is the best practice for IAM role assignment?",
    options: [
      "Use shared admin accounts",
      "Grant permissions permanently",
      "Apply least privilege access",
      "Avoid MFA requirements",
    ],
    correctIndex: 2,
  },
  {
    topic: "Network Segmentation",
    questions: 14,
    time: "9 min",
    question: "Why is micro-segmentation valuable?",
    options: [
      "It removes the need for firewalls",
      "It limits lateral movement",
      "It disables network logging",
      "It simplifies public access",
    ],
    correctIndex: 1,
  },
];

export const videos = {
  quick: [
    {
      title: "Threat Hunting in 10 Minutes",
      duration: "10:22",
      level: "Beginner",
    },
    {
      title: "Secure API Gateways",
      duration: "08:45",
      level: "Intermediate",
    },
  ],
  gamified: [
    {
      title: "Cloud Defense Saga: Episode 1",
      duration: "14:30",
      level: "Beginner",
    },
    {
      title: "Red Team Relay",
      duration: "18:10",
      level: "Advanced",
    },
  ],
};

export const tutorials = {
  projects: [
    {
      title: "Build a SIEM Dashboard",
      description: "Create alerts, dashboards, and detection workflows.",
      progress: 48,
    },
    {
      title: "Secure a CI/CD Pipeline",
      description: "Implement scanning, policies, and secrets management.",
      progress: 72,
    },
  ],
  challenges: [
    {
      title: "Starter Challenges",
      level: "Beginner",
      progress: 65,
    },
    {
      title: "Blueprint Series",
      level: "Intermediate",
      progress: 42,
    },
    {
      title: "Expert Gauntlet",
      level: "Advanced",
      progress: 20,
    },
  ],
};

export const games = {
  paths: [
    {
      title: "Blue Team Pathfinder",
      description: "Earn points by hardening cloud assets.",
      points: 1240,
    },
    {
      title: "Malware Defender",
      description: "Solve puzzles to unlock threat intel packs.",
      points: 980,
    },
  ],
  badges: [
    { label: "SOC Sprint", points: 300 },
    { label: "Cloud Sentinel", points: 450 },
    { label: "AI Analyst", points: 220 },
  ],
  challenges: [
    {
      title: "Co-op Incident Drill",
      description: "Work in squads to contain a breach scenario.",
      status: "Open",
    },
    {
      title: "Capture the Flag Weekend",
      description: "Race to solve multi-stage security puzzles.",
      status: "Starts Friday",
    },
  ],
};

export const blogs = {
  howto: [
    {
      title: "How to Build Resilient Cloud Workloads",
      readTime: "6 min read",
    },
    {
      title: "Deploying MFA the Right Way",
      readTime: "5 min read",
    },
  ],
  insights: [
    {
      title: "2026 Threat Landscape: What Changed",
      readTime: "7 min read",
    },
    {
      title: "AI Security Operations in Practice",
      readTime: "8 min read",
    },
  ],
  opinions: [
    {
      title: "Why Human-Centered Security Wins",
      readTime: "4 min read",
    },
  ],
};

export const progressData = {
  tracker: [
    "Onboarding",
    "Foundations",
    "Applied Labs",
    "Scenario Mastery",
    "Certification Prep",
  ],
  completed: [
    "Intro to Network Defense",
    "Log Analysis Basics",
    "Phishing Simulation",
    "Cloud IAM Quickstart",
  ],
  badges: ["Threat Hunter", "Lab Master", "Cloud Guardian", "Streak Champ"],
  streak: {
    current: 9,
    longest: 18,
    goal: 14,
  },
};
