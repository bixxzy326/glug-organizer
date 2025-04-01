
// Mock data for events
export const events = [
  {
    id: "1",
    title: "Introduction to Open Source Development",
    date: "June 15, 2024 • 3:00 PM",
    location: "Tech Hub, Downtown",
    attendees: 45,
    maxAttendees: 50,
    tags: ["Beginner", "Open Source", "Workshop"],
    glugName: "Central GLUG",
    isRegistered: true
  },
  {
    id: "2",
    title: "Linux Kernel Contribution Workshop",
    date: "June 22, 2024 • 10:00 AM",
    location: "University Computer Lab",
    attendees: 28,
    maxAttendees: 30,
    tags: ["Advanced", "Linux", "Development"],
    glugName: "Kernel Enthusiasts"
  },
  {
    id: "3",
    title: "FOSS for Web Development",
    date: "June 30, 2024 • 2:00 PM",
    location: "Community Center",
    attendees: 15,
    maxAttendees: 40,
    tags: ["Web", "JavaScript", "Beginners Welcome"],
    glugName: "WebDev GLUG"
  },
  {
    id: "4",
    title: "Contributing to Mozilla Projects",
    date: "July 5, 2024 • 5:00 PM",
    location: "Online (Zoom)",
    attendees: 120,
    tags: ["Mozilla", "Browser", "Online"],
    glugName: "Mozilla Contributors Group"
  },
  {
    id: "5",
    title: "Annual FOSS Conference 2024",
    date: "July 15-17, 2024",
    location: "City Convention Center",
    attendees: 350,
    maxAttendees: 400,
    tags: ["Conference", "Networking", "All Levels"],
    glugName: "FOSS Community Central",
    isRegistered: true
  },
  {
    id: "6",
    title: "Python in Open Source Projects",
    date: "July 22, 2024 • 4:00 PM",
    location: "Library Meeting Room",
    attendees: 25,
    maxAttendees: 25,
    tags: ["Python", "Programming", "Full"],
    glugName: "Python Pioneers"
  }
];

// Mock data for GLUGs
export const glugs = [
  {
    id: "1",
    name: "Central GLUG",
    description: "The main GNU/Linux User Group for the metropolitan area focused on spreading FOSS awareness and education.",
    location: "Downtown Tech District",
    memberCount: 120,
    tags: ["All Levels", "General FOSS", "Education"],
    isMember: true
  },
  {
    id: "2",
    name: "University FOSS Club",
    description: "Student-led group promoting open source software usage and contribution in academic environments.",
    location: "State University Campus",
    memberCount: 75,
    tags: ["Students", "Academic", "Research"],
    isMember: false
  },
  {
    id: "3",
    name: "Kernel Enthusiasts",
    description: "Deep-dive into Linux kernel development, device drivers, and low-level systems programming.",
    location: "Tech Incubator Space",
    memberCount: 45,
    tags: ["Advanced", "Kernel", "C Programming"],
    isMember: false
  },
  {
    id: "4",
    name: "WebDev GLUG",
    description: "Focused on open source web technologies, frameworks, and building modern web applications.",
    location: "Coworking Space East",
    memberCount: 92,
    tags: ["Web", "Frontend", "Backend", "JavaScript"],
    isMember: true
  },
  {
    id: "5",
    name: "Python Pioneers",
    description: "Python programming in the context of open source projects, data science, and automation.",
    location: "Community Center",
    memberCount: 68,
    tags: ["Python", "Data Science", "Automation"],
    isMember: false
  },
  {
    id: "6",
    name: "Open Hardware Group",
    description: "Exploring open hardware projects, embedded systems, and IoT devices using open source technologies.",
    location: "Makerspace North",
    memberCount: 37,
    tags: ["Hardware", "IoT", "Embedded", "Arduino"],
    isMember: false
  }
];

// Mock user data
export const currentUser = {
  id: "user1",
  name: "Alex Johnson",
  email: "alex@example.com",
  joinDate: "January 15, 2024",
  bio: "Open source enthusiast and web developer. Passionate about Linux and community-driven projects.",
  skills: ["JavaScript", "React", "Python", "Linux"],
  memberGlugs: ["1", "4"],
  registeredEvents: ["1", "5"],
  contributions: [
    { project: "Community Website", description: "Contributed to UI improvements" },
    { project: "Documentation", description: "Helped translate docs to Spanish" }
  ]
};
