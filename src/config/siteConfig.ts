// Website Configuration File
// All website content, details, and values are stored here for easy management

export const siteConfig = {
  // Basic Site Information
  site: {
    name: "J.P. EDUCATION ACADEMY",
    tagline: "Excellence in Education Since Foundation",
    description: "Empowering students with knowledge and excellence since our foundation",
    domain: "www.jpeducationacademy.in",
    foundedYear: 2005,
    currentYear: new Date().getFullYear(),
  },

  // Contact Information
  contact: {
    address: {
      line1: "JP Education Academy",
      line2: "Indra Nagar, Tirwa Road",
      line3: "Gursahaiganj, Kannauj",
      state: "Uttar Pradesh",
      pincode: "209722",
      country: "India",
      fullAddress: "J P EDUCATION ACADEMY, VILL UNCHA PARGANA TALGRAM TIRWA RD, NR POWER HOUSE GURSAHAIGANJ, KANNAUJ, - 209788"
    },
    phone: {
      admin: "+91 91402 71174",
      main: "+91 94503 78136",
      admissions: "+91 78970 88115",
      emergency: "+91 94503 78136",
      principal: "+91 79858 67405"
    },
    email: {
      general: "jpeducationacademyghj@gmail.com",
      admissions: "jpeducationacadmeyghj@gmail.com",
      principal: "ams042017@gmail.com",
      official: "jpeducationacadmeyghj@gmail.com"
    },
    officeHours: {
      weekdays: "Monday - Saturday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 8:00 AM - 5:00 PM",
      sunday: "Sunday: Closed"
    }
  },

  // School Official Information
  official: {
    cbse: {
      affiliationNo: "2132627",
      schoolCode: "70724"
    },
    board: "CBSE",
    academicSession: "April - March",
    currentSession: "2025-26"
  },

  // Leadership Team
  leadership: {
    president: {
      name: "Mrs. Radha Gupta",
      title: "President",
      message: "Education is the most powerful tool for transformation. Our vision is to build an institution that not only imparts knowledge but also shapes responsible citizens who will contribute positively to society.",
      photo: "https://ik.imagekit.io/jpeaghj/jpea/precident.jpg?updatedAt=1749740545318"
    },
    principal: {
      name: "Mr. Amarendra Singh",
      title: "Principal",
      qualification: "M.A. B.ED.",
      message: "Education is the foundation of progress. At JP Education Academy, we are committed to providing an environment where every student can discover their potential and excel academically while developing strong character and values.",
      photo: "https://ik.imagekit.io/jpeaghj/jpea/principal.jpg?updatedAt=1749740548019"
    },
    manager: {
      name: "Mr. Indra Kumar Gupta",
      title: "Academic Manager",
      message: "Our mission is to create a seamless educational experience by ensuring efficient operations, excellent facilities, and continuous improvement in all aspects of student life and academic delivery.",
      photo: "https://ik.imagekit.io/jpeaghj/jpea/manager.jpg?updatedAt=1749740550079"
    },
    chairman: {
      name: "Mrs. Radha Gupta",
      title: "Chairman"
    },
    vicePrincipal: {
      name: "Mr. Vijai Mishra",
      title: "Vice Principal"
    }
  },

  // Vision and Mission
  visionMission: {
    vision: "To be a premier educational institution that nurtures innovative thinking, ethical values, and global citizenship in every student we serve.",
    mission: "To provide comprehensive, quality education that empowers students to achieve academic excellence while developing strong moral character and leadership skills."
  },

  // Core Values
  coreValues: [
    {
      name: "Excellence",
      description: "Striving for the highest standards in education and character development",
      icon: "Award"
    },
    {
      name: "Integrity",
      description: "Building trust through honesty, transparency, and ethical practices",
      icon: "Users"
    },
    {
      name: "Innovation",
      description: "Embracing modern teaching methods and educational technologies",
      icon: "Target"
    },
    {
      name: "Tradition",
      description: "Honoring educational traditions while adapting to modern needs",
      icon: "History"
    }
  ],

  // Statistics and Achievements
  stats: {
    yearsOfExcellence: 20,
    alumniNetwork: 1500,
    successRate: 95,
    teachingStaff: 60,
    nonTeachingStaff: 15,
    totalStudents: 1200,
    totalArea: "5 Acres",
    totalAreaSqM: 8326,
    classrooms: 40,
    classroomsSqM: 46,
    libraryBooks: 10000,
    labs: 5,
    labsSqM: 72,
    girlsToilets: 12,
    boysToilets: 12,
    internetFacility: true
  },

  // Staff Information
  staffInfo: {
    principal: 1,
    totalTeachers: 45,
    pgt: 13,
    tgt: 18,
    prt: 14,
    teacherSectionRatio: "1:5",
    specialEducator: {
      name: "Mr. Arun Kumar",
      qualification: "B.A. B.Ed. Special Education"
    },
    counsellor: {
      name: "Ms. Sakshi",
      qualification: "M.A. Psychology"
    }
  },

  // Board Exam Results
  examResults: {
    classX: {
      year: 2022,
      registered: 159,
      passed: 157,
      passPercentage: 98.74
    },
    classXII: {
      year: 2022,
      registered: 84,
      passed: 79,
      passPercentage: 94.04,
      absent: 1
    }
  },

  // Academic Programs
  academicPrograms: [
    {
      name: "Primary School",
      classes: "Classes 1-5",
      description: "Classes 1-5 with focus on foundational learning and creativity",
      features: [
        "Interactive learning methods",
        "Art and craft activities",
        "Physical education"
      ],
      color: "primary"
    },
    {
      name: "Middle School",
      classes: "Classes 6-8",
      description: "Classes 6-8 emphasizing conceptual understanding and skill development",
      features: [
        "STEM education",
        "Language development",
        "Project-based learning"
      ],
      color: "accent"
    },
    {
      name: "High School",
      classes: "Classes 9-12",
      description: "Classes 9-12 preparing students for higher education and careers",
      features: [
        "Stream specialization",
        "Career counseling",
        "Competitive exam prep"
      ],
      color: "green"
    }
  ],

  // Curriculum Areas
  curriculum: [
    {
      name: "Core Subjects",
      description: "Mathematics, Science, English, Social Studies, and regional language",
      icon: "BookOpen",
      color: "blue"
    },
    {
      name: "Arts & Crafts",
      description: "Music, dance, visual arts, and creative expression programs",
      icon: "Award",
      color: "purple"
    },
    {
      name: "Sports",
      description: "Physical education, team sports, and individual fitness programs",
      icon: "Users",
      color: "green"
    },
    {
      name: "Life Skills",
      description: "Leadership, communication, problem-solving, and character development",
      icon: "Clock",
      color: "orange"
    }
  ],

  // Admission Information
  admissions: {
    importantDates: [
      {
        event: "Application Opens",
        date: "February 15, 2025",
        description: "Online and offline applications begin"
      },
      {
        event: "Application Deadline",
        date: "July 15, 2025",
        description: "Last date for form submission"
      },
      {
        event: "Interviews",
        date: "April 5 2025 - July 20, 2025",
        description: "Student and parent interactions"
      }
    ],
    eligibilityCriteria: [
      {
        level: "Primary School (Class 1-5)",
        requirements: [
          "Age appropriate for respective class",
          "Birth certificate required",
          "Previous school records (if applicable)"
        ]
      },
      {
        level: "Middle School (Class 6-8)",
        requirements: [
          "Previous academic records",
          "Transfer certificate",
          "Character certificate"
        ]
      },
      {
        level: "High School (Class 9-12)",
        requirements: [
          "Class 8/10 mark sheets",
          "Migration certificate",
          "Entrance test performance"
        ]
      }
    ]
  },

  // Infrastructure Details
  infrastructure: [
    {
      name: "Total Area",
      description: "5 Acres campus with modern infrastructure",
      icon: "Building",
      color: "primary"
    },
    {
      name: "Classrooms",
      description: "40 well-ventilated and spacious classrooms",
      icon: "Users",
      color: "accent"
    },
    {
      name: "Laboratories",
      description: "Science, Computer, and Language labs",
      icon: "Award",
      color: "green"
    },
    {
      name: "Library",
      description: "Well-stocked library with 10,000+ books",
      icon: "CheckCircle",
      color: "blue"
    }
  ],

  // Social Media Links
  socialMedia: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#"
  },

  // Images and Media
  media: {
    logo: "https://ik.imagekit.io/jpeaghj/jpea/schoollogo.png?updatedAt=1749740537537",
    carousel: [
      {
        id: 1,
        image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        title: "Excellence in Education",
        description: "Nurturing young minds with comprehensive learning programs and world-class facilities."
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        title: "Modern Learning Environment",
        description: "State-of-the-art classrooms equipped with the latest technology for enhanced learning experiences."
      },
      {
        id: 3,
        image: "https://images.pexels.com/photos/207756/pexels-photo-207756.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        title: "Holistic Development",
        description: "Fostering creativity, critical thinking, and character development in every student."
      }
    ],
    aboutImages: {
      history: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      vision: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      mission: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  },

  // Navigation Menu
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' },
    { name: 'Mandatory Public Disclosure', href: '/mandatory-disclosure' }
  ],

  // Footer Links
  footerLinks: {
    quickLinks: [
      { name: "Academic Calendar", href: "#" },
      { name: "Fee Structure", href: "#" },
      { name: "Student Portal", href: "#" },
      { name: "Parent Portal", href: "#" },
      { name: "Alumni Network", href: "#" }
    ]
  },

  // Mandatory Disclosure Information
  mandatoryDisclosure: {
    title: "Mandatory Public Disclosure",
    subtitle: "(As per CBSE SARAS Portal Appendix-IX)",
    description: "Complete transparency in school operations and compliance with CBSE regulations",
    
    generalInfo: {
      schoolName: "J.P. EDUCATION ACADEMY",
      affiliationNo: "2132627",
      schoolCode: "70724",
      address: "J P EDUCATION ACADEMY, VILL UNCHA PARGANA TALGRAM TIRWA RD, NR POWER HOUSE GURSAHAIGANJ, KANNAUJ, - 209722",
      principalName: "Amarendra Singh",
      principalQualification: "M.A. B.ED.",
      schoolEmail: "jpeducationacadmeyghj@gmail.com",
      contactNumber: "9450378136"
    },

    documents: [
      {
        name: "CBSE Affiliation Certificate",
        description: "Affiliation/Upgradation Letter & Extension",
        url: "https://www.jpeducationacademy.com/wp-content/uploads/2021/06/UPGRADATION-LETTERCERTIFIED.pdf",
        category: "legal",
        icon: "FileText"
      },
      {
        name: "Trust Registration",
        description: "Society/Trust Registration Certificate",
        url: "https://www.jpeducationacademy.com/wp-content/uploads/2021/06/RC-certified.pdf",
        category: "legal",
        icon: "Shield"
      },
      {
        name: "NOC from State Government",
        description: "No Objection Certificate (NOC) - State Govt.",
        url: "https://www.jpeducationacademy.com/wp-content/uploads/2021/06/NOCCERTIFIED.pdf",
        category: "legal",
        icon: "CheckCircle"
      },
      {
        name: "RTE Recognition Certificate",
        description: "Recognition Certificate under RTE Act, 2009",
        url: "https://www.jpeducationacademy.com/wp-content/uploads/2021/06/RL-N-TO-8CERTIFIED.pdf",
        category: "legal",
        icon: "Award"
      },
      {
        name: "Building Safety Certificate",
        description: "Building Safety Certificate",
        url: "https://www.jpeducationacademy.com/wp-content/uploads/2021/06/NBCCERTIFIED.pdf",
        category: "safety",
        icon: "Building"
      },
      {
        name: "Fire Safety Certificate",
        description: "Fire Safety Certificate",
        url: "https://www.jpeducationacademy.com/wp-content/uploads/2021/06/FIRE-NOC-INITIALCERTIFIEDN.pdf",
        category: "safety",
        icon: "Flame"
      },
      {
        name: "DEO Certificate",
        description: "DEO Certificate for Affiliation/Upgradation",
        url: "https://www.jpeducationacademy.com/wp-content/uploads/2021/06/DEO-CERTIFICATECERTIFIED.pdf",
        category: "academic",
        icon: "GraduationCap"
      },
      {
        name: "Health & Sanitation",
        description: "Water, Health & Sanitation Certificates",
        url: "https://www.jpeducationacademy.com/wp-content/uploads/2021/06/HEALTH-AND-SANITATIONCERTIFIED.pdf",
        category: "safety",
        icon: "Heart"
      }
    ],

    academicDocuments: [
      {
        name: "Fee Structure",
        description: "Detailed fee structure for all classes and academic year",
        url: "http://www.jpeducationacademy.com/wp-content/uploads/2023/04/fee-structure-2023-24.pdf",
        icon: "DollarSign"
      },
      {
        name: "Academic Calendar",
        description: "Annual academic calendar with important dates and events",
        url: "http://www.jpeducationacademy.com/wp-content/uploads/2023/04/annual-academic-calender-2023-24.pdf",
        icon: "Calendar"
      },
      {
        name: "School Management Committee",
        description: "School Management Committee (SMC) details",
        url: "http://www.jpeducationacademy.com/wp-content/uploads/2021/06/SMCCERTIFIED.pdf",
        icon: "Users"
      },
      {
        name: "PTA Members",
        description: "Parent Teacher Association members list",
        url: "http://www.jpeducationacademy.com/wp-content/uploads/2021/06/PTACERTIFIED.pdf",
        icon: "UserCheck"
      },
      {
        name: "Board Results",
        description: "Last 3 years board examination results",
        url: "http://www.jpeducationacademy.com/wp-content/uploads/2023/04/last-3-years-results-2023-24.pdf",
        icon: "TrendingUp"
      }
    ],

    inspectionVideo: {
      title: "School Inspection Video",
      description: "Official inspection video showcasing school facilities",
      url: "https://www.youtube.com/watch?v=i91PFqpKOUE"
    },

    disclaimer: "Note: Uploads are self-attested by Chairman/Manager/Secretary and Principal. Non-genuine documents may attract action as per norms."
  },

  // FAQ Data
  faq: [
    {
      question: "What are your admission requirements?",
      answer: "Admission requirements vary by grade level. Generally, we require previous academic records, age-appropriate documentation, and completion of our admission process including an interview."
    },
    {
      question: "Do you offer transportation services?",
      answer: "Yes, we provide safe and reliable transportation services covering major areas of the city. Contact us for route information and transportation fees."
    },
    {
      question: "What extracurricular activities are available?",
      answer: "We offer a wide range of activities including sports, music, dance, art, drama, debate, and various clubs to ensure holistic development of our students."
    },
    {
      question: "Can I schedule a campus tour?",
      answer: "Absolutely! We encourage prospective students and parents to visit our campus. Please call our admission office to schedule a guided tour at your convenience."
    }
  ]
};

export default siteConfig;
