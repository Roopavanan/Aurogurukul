export type SubjectTag = {
  name: string;
  id: string;
};

export type CourseCategory = {
  id: string;
  title: string;
  course: string;
  description: string;
  bgColor: string;
  textColor: string;
  arrowBgColor: string;
  subjects: SubjectTag[];
  idealFor: string;
  features: string[];
  fees: number | string;
};

export const categories: CourseCategory[] = [
  {
    id: "class-9-a",
    title: "Class 9",
    course: "Course A - 160 Hours",
    description:
      "In Mathematics, Science, and Aptitude to build a strong foundation in Ideal for: (NEET/ JEE Foundation, NTSE, Olympiads)",
    bgColor: "#F8F3FD",
    textColor: "#8363A9",
    arrowBgColor: "#C5A0F1",
    idealFor: "(NEET/ JEE Foundation, , NTSE, Olympiads )",
    features: [
      "Daily Worksheets ",
      "160 hours of class room/teaching session",
      "40 Hands-on Science Experiments ",
      "40 AI-enabled Tests (MCQs) and Detailed Test Analysis ",
      "20 Hours of “Science of Living” Sessions (Focus, Memory, Fitness & Nutrition)"
    ],
    subjects: [
      { name: "Physics", id: "physics-9" },
      { name: "Chemistry", id: "chemistry-9" },
      { name: "Biology", id: "biology-9" },
      { name: "Mathematics", id: "mathematics-9" },
      { name: "Mental Ability", id: "mental ability-9" }
    ],
    fees: "60,000"
  },
  {
    id: "class-9-b",
    title: "Class 9",
    course: "Course B - 160 Hours",
    description:
      "Development of Language Skills, Aptitude, General Knowledge, and General Science, mathematics Ideal for: Aspirants of IAS, IPS, IFS, Leadership, and Entrepreneurship  ",
    bgColor: "#FFF9EF",
    textColor: "#B28842",
    arrowBgColor: "#FCCB7A",
    idealFor: "Aspirants of IAS, IPS, IFS, Leadership, and Entrepreneurship",
    features: [
      "Daily Worksheets ",
      "40 Hands-on Science Experiments ",
      "40 AI-enabled Tests (MCQs) and Detailed Test Analysis ",
      "20 Hours of “Science of Living” Sessions (Focus, Memory, Fitness & Nutrition)"
    ],
    subjects: [
      { name: "English", id: "english-9-1" },
      { name: "General studies", id: "general studies-9-1" },
      { name: "Mental Ability", id: "mental ability-9-1" },
      { name: "General Science", id: "general science-9-1" },
      { name: "Mathematics", id: "mathematics-9-1" }
    ],
    fees: "60,000"
  },
  {
    id: "class-10-a",
    title: "Class 10",
    course: "Course A - 160 Hours",
    description:
      "Advanced training in Science and Mathematics for careers in Medicine, Engineering, and Technology.",
    bgColor: "#F4FCF5",
    textColor: "#669E6E",
    arrowBgColor: "#A4E4AD",
    idealFor: "IAS, IPS, IFS Aspirants, Leadership, and Entrepreneurs ",
    features: [
      "Daily Worksheets ",
      "Comprehensive 10th Board Revision Classes and notes",
      "40 Hands-on Science Experiments ",
      "60 AI-enabled Tests (MCQs) and Detailed Test Analysis ",
      "30 AI enabled analysis subjective tests and for board exam an all subjects Hours of “Science of Living” Sessions "
    ],
    subjects: [
      { name: "Mathematics", id: "mathematics-10" },
      { name: "Physics", id: "physics-10" },
      { name: "Biology", id: "biology-10" },
      { name: "Chemistry", id: "chemistry-10" },
      { name: "Mental Ability", id: "mental-ability-10" }
    ],
    fees: "80,000"
  },
  {
    id: "class-10-b",
    title: "Class 10",
    course: "Course B - 160 Hours",
    description: "IAS, IPS, IFS Aspirants, Leadership, and Entrepreneurs.",
    bgColor: "#FEEFEB",
    textColor: "#AD4027",
    arrowBgColor: "#F6785B",
    idealFor: "IAS, IPS, IFS Aspirants, Leadership, and Entrepreneurs ",
    features: [
      "Daily Worksheets ",
      "Comprehensive 10th Board Revision Classes and notes",
      "40 Hands-on Science Experiments ",
      "40 AI-enabled Tests (MCQs) and Detailed Test Analysis ",
      "20 Hours of “Science of Living” Sessions"
    ],
    subjects: [
      { name: "JEE", id: "jee-10-1" },
      { name: "Engineer", id: "engineer-10-1" },
      { name: "French", id: "french-10-1" },
      { name: "Civil Service", id: "civil-service-10-1" },
      { name: "B.Tech", id: "btech-10-1" }
    ],
    fees: "80,000"
  },
  {
    id: "class-10-c",
    title: "Class 10",
    course: "Course C - 160 Hours",
    description: "Optimized Performance in Class 10 Board Exams.",
    bgColor: "#F8F3FD",
    textColor: "#8363A9",
    arrowBgColor: "#C5A0F1",
    idealFor: "IAS, IPS, IFS Aspirants, Leadership, and Entrepreneurs ",
    features: [
      "Daily Worksheets ",
      "Comprehensive 10th Board Revision Classes and notes",
      "Mental Ability Training ",
      "40 AI-enabled Tests (MCQs) and Detailed Test Analysis ",
      "20 Hours of “Science of Living” Sessions"
    ],

    subjects: [
      { name: "English", id: "english-10-2" },
      { name: "Science", id: "science-10-2" },
      { name: "Social Science", id: "social-science-10-2" },
      { name: "Mathematics", id: "mathematics-10-2" }
    ],
    fees: "60,000"
  },
  {
    id: "class-11-12-a",
    title: "Class 11 & 12",
    course: "Course A - 320 Hours",
    description: " (Integrated) Board + NEET Preparation.  ",
    bgColor: "#FFF9EF",
    textColor: "#B28842",
    arrowBgColor: "#FCCB7A",
    idealFor: "JEE, NEET, Board Exams, Leadership, and Entrepreneurs ",
    features: [
      "20 AI-enabled Subjective Tests and 50 MCQ NEET Mock with Detailed Analysis",
      "20 Hours of “Science of Living” Sessions"
    ],

    subjects: [
      { name: "Physics", id: "physics-11-12" },
      { name: "Chemistry", id: "chemistry-11-12" },
      { name: "Botany", id: "botany-11-12" },
      { name: "Zoology", id: "zoology-11-12" }
    ],
    fees: "90,000"
  },
  {
    id: "class-11-12-b",
    title: "Class 11 & 12",
    course: "Course B - 320 Hours",
    description: "Board + IIT-JEE Preparation.",
    bgColor: "#F4FCF5",
    textColor: "#669E6E",
    arrowBgColor: "#A4E4AD",
    idealFor: "JEE, NEET, Board Exams, Leadership, and Entrepreneurs ",
    features: [
      "50 IIT-JEE AI enabled Mock Tests and 20 AI-enabled Subjective Tests with Detailed test Analysis",
      "20 Hours of “Science of Living” Sessions "
    ],
    subjects: [
      { name: "Mathematics", id: "mathematics-11-12" },
      { name: "Physics", id: "physics-11-12" },
      { name: "Chemistry", id: "chemistry-11-12" }
    ],
    fees: "90,000"
  },
  {
    id: "class-11-12-c",
    title: "Class 11 & 12",
    course: "Course C - 320 Hours",
    description: "Board ( Commerce Stream ) + CA foundation.",
    bgColor: "#FEEFEB",
    textColor: "#AD4027",
    arrowBgColor: "#F6785B",
    idealFor: "CA, Board Exams, Leadership, and Entrepreneurs ",
    features: [
      "AI-enabled Subjective Tests with Detailed Analysis ",
      "20 Hours of “Science of Living” Sessions  "
    ],
    subjects: [
      { name: "Business Mathematics", id: "business-mathematics-11-12-2" },
      { name: "Accounting", id: "accounting-11-12-2" },
      { name: "Economics", id: "economics-11-12-2" }
    ],
    fees: "60,000"
  },
  {
    id: "12th-Pass-a",
    title: "12th Pass ",
    course: "Course A - 540 Hours",
    description: "Integrated + NEET",
    bgColor: "#F8F3FD",
    textColor: "#8363A9",
    arrowBgColor: "#C5A0F1",
    idealFor: "CA, Board Exams, Leadership, and Entrepreneurs ",
    features: [
      "20 AI-enabled Tests Subjective Tests and 50 MCQ NEET mock with detailed analysis ",
      "20 hours of  “Science of Living” Sessions "
    ],
    subjects: [
      { name: "Physics", id: "physics-12th" },
      { name: "Chemistry", id: "chemistry-12th" },
      { name: "Zoology", id: "zoology-12th" },
      { name: "Botany", id: "botany-12th" }
    ],
    fees: "80,000"
  },
  {
    id: "12th-Pass-b",
    title: "12th Pass",
    course: "Course B - 540 Hours",
    description: "JEE Mains/ Advanced",
    bgColor: "#FFF9EF",
    textColor: "#B28842",
    arrowBgColor: "#FCCB7A",
    idealFor: "CA, Board Exams, Leadership, and Entrepreneurs ",
    features: [
      "140 MCQ Tests + 20 AI-enabled Tests  ",
      "Daily Worksheets ",
      "Daily “Science of Living” Sessions "
    ],
    subjects: [
      { name: "Physics", id: "physics-12th-2" },
      { name: "Chemistry", id: "chemistry-12th-2" },
      { name: "Mathematics", id: "mathematics-12th-2" }
    ],
    fees: "100,000"
  }
];
