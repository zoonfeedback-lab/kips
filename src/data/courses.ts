export type Course = {
  slug: string;
  title: string;
  urduTitle: string;
  category: string;
  detail: string;
  image: string;
  iconName: string;
  duration: string;
  certificate: string;
  campuses: string[];
  syllabus: string[];
  learningOutcomes: string[];
  prerequisites: string;
};

export const coursesData: Course[] = [
  // IT Category
  {
    slug: "computer-ai-tools",
    title: "Computer AI Tools",
    urduTitle: "کمپیوٹر AI ٹولز",
    category: "IT",
    detail: "Hands-on training in artificial intelligence tools for productivity, content creation, automation, and office efficiency.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Cpu",
    duration: "3 Months",
    certificate: "Mashal Technical Education System Certification",
    campuses: ["Abbottabad", "Haripur", "Mansehra"],
    learningOutcomes: [
      "Master generative AI tools for writing, image generation, and design.",
      "Automate repetitive daily office tasks with AI productivity software.",
      "Understand prompt engineering concepts for best workplace outcomes.",
      "Learn basics of AI ethics and copyright rules in digital content."
    ],
    syllabus: [
      "Introduction to Generative AI & Prompt Design",
      "AI for Office Productivity (Document drafting, emailing)",
      "Design & Visual AI (Image generator tools, Canva AI)",
      "Workplace Automation, APIs, and Future AI Trends"
    ],
    prerequisites: "Basic understanding of operating a computer and browsing the web."
  },
  {
    slug: "cit",
    title: "CIT",
    urduTitle: "سی آئی ٹی",
    category: "IT",
    detail: "Certificate in Information Technology covering basic computing, MS Office, basic programming, and web usage.",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Code",
    duration: "3 Months",
    certificate: "KPBTE / Trade Testing Board Certified",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Understand computer hardware components and operating system basics.",
      "Gain professional proficiency in MS Office (Word, Excel, PowerPoint).",
      "Configure local networks and navigate internet/email utilities.",
      "Learn fundamental principles of web page styling and markup."
    ],
    syllabus: [
      "Computer Fundamentals & Windows OS",
      "Microsoft Office Suite Mastery (Word, Excel, PPT)",
      "Internet Research, Security, and Email Management",
      "Intro to HTML/CSS & Web Design Basics"
    ],
    prerequisites: "Matriculation (Science or Arts) or equivalent."
  },
  {
    slug: "dit",
    title: "DIT",
    urduTitle: "ڈی آئی ٹی",
    category: "IT",
    detail: "One-year Diploma in Information Technology focusing on database, advanced programming, web design, and network management.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Monitor",
    duration: "1 Year",
    certificate: "KP Board of Technical Education (KPBTE) Peshawar",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Mirpur (AJ&K)"],
    learningOutcomes: [
      "Design, implement, and query relational databases (SQL).",
      "Develop interactive web interfaces using modern markup and scripting.",
      "Diagnose, install, and manage local area network infrastructures.",
      "Build basic desktop applications using object-oriented languages."
    ],
    syllabus: [
      "Semester 1: Operating Systems, MS Office, HTML/CSS, C++ Programming",
      "Semester 2: Database Management (Access/SQL), Javascript, Networking, Project"
    ],
    prerequisites: "Intermediate (FA/FSc/ICS/ICom) or equivalent."
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    urduTitle: "گرافک ڈیزائننگ",
    category: "IT",
    detail: "Creative layout and visual branding training covering industry-standard design programs.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "PenTool",
    duration: "3 to 6 Months",
    certificate: "Trade Testing Board / SDC Certified",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Mirpur (AJ&K)"],
    learningOutcomes: [
      "Master Adobe Photoshop for digital image editing and manipulation.",
      "Learn Adobe Illustrator for vector illustration and branding assets.",
      "Understand core design principles: grid systems, color theory, and typography.",
      "Create high-quality portfolios for freelance markets like Upwork/Fiverr."
    ],
    syllabus: [
      "Introduction to Visual Arts and Layout Principles",
      "Raster Graphic Design (Adobe Photoshop)",
      "Vector Graphic Design (Adobe Illustrator)",
      "Freelancing & Portfolio Preparation"
    ],
    prerequisites: "Basic computer familiarity."
  },

  // Professional Category
  {
    slug: "safety-officer",
    title: "Safety Officer",
    urduTitle: "سیفٹی آفیسر",
    category: "Professional",
    detail: "Occupational Health & Safety course preparing candidates for OSHA, IOSH, and NEBOSH pathways.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "ShieldCheck",
    duration: "3 Months",
    certificate: "National & Board Accreditation Pathway",
    campuses: ["Abbottabad", "Haripur", "Mansehra"],
    learningOutcomes: [
      "Identify workplace hazards and conduct basic risk assessments.",
      "Understand legal frameworks for occupational health & safety.",
      "Prepare emergency response and fire safety evacuation protocols.",
      "Implement incident reporting structures and preventative measures."
    ],
    syllabus: [
      "Foundations of Health and Safety at Work",
      "Workplace Hazard Identification & Control Measures",
      "International Standards (OSHA/IOSH framework introduction)",
      "Practical Assessment & Safety Auditing"
    ],
    prerequisites: "Intermediate or Matriculation with relevant science background."
  },
  {
    slug: "montessori-diploma",
    title: "Montessori Diploma",
    urduTitle: "مونٹیسوری ڈپلومہ",
    category: "Professional",
    detail: "Professional early-childhood teacher preparation diploma following Maria Montessori's principles.",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Star",
    duration: "6 Months",
    certificate: "Skill Development Council (SDC) Peshawar Recognized",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Understand child psychology stages and sensory motor development.",
      "Master classroom management using Montessori didactic apparatus.",
      "Design age-appropriate thematic plans and lesson models.",
      "Develop parent-teacher collaboration plans for child progress."
    ],
    syllabus: [
      "Child Development & Montessori History",
      "Exercises of Practical Life (EPL) & Sensorial Education",
      "Mathematics & Language teaching apparatus methodology",
      "School Organization, Practice Teaching & Viva Voce"
    ],
    prerequisites: "Intermediate / Graduation (for advanced teacher profiles)."
  },
  {
    slug: "english-language",
    title: "English Language",
    urduTitle: "انگلش لینگویج",
    category: "Professional",
    detail: "Interactive communication program designed to improve reading, writing, listening, and public speaking confidence.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "MessageCircle",
    duration: "3 Months",
    certificate: "KIPS Language Proficiency Certificate",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Build sentence structures correctly using essential tenses.",
      "Enhance conversational fluency in general and professional topics.",
      "Develop listening comprehension through multimedia drills.",
      "Overcome stage fright during presentations and interviews."
    ],
    syllabus: [
      "Grammar Foundation (Tenses, Parts of Speech, Voice)",
      "Daily Conversation & Active Listening Drills",
      "Vocabulary Building & Accent Neutralization Basics",
      "Public Speaking, Group Discussions, and Interview Prep"
    ],
    prerequisites: "Basic literacy in English."
  },

  // Academic Category
  {
    slug: "b-ed",
    title: "B.Ed (1.5 / 2.5 Years)",
    urduTitle: "بی ایڈ",
    category: "Academic",
    detail: "Professional degree program for aspiring educators in secondary school, fully supported by our qualified tutors.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "UserCheck",
    duration: "1.5 or 2.5 Years",
    certificate: "University Accredited Pathway / AIOU Support",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Mirpur (AJ&K)"],
    learningOutcomes: [
      "Learn pedagogical frameworks and modern class instruction methods.",
      "Understand educational planning, curriculum development, and evaluation.",
      "Gain direct teaching practice under registered university mentors.",
      "Write thesis reports and design comprehensive semester assignments."
    ],
    syllabus: [
      "General Methods of Teaching & Pedagogy",
      "Educational Assessment, Evaluation, and Research",
      "Classroom Management & Educational Psychology",
      "Supervised School Practicum & Final Teaching Assignment"
    ],
    prerequisites: "MA / MSc / BS (4 years) for 1.5 Years pathway; BA / BSc for 2.5 Years pathway."
  },
  {
    slug: "ada",
    title: "ADA",
    urduTitle: "اے ڈی اے",
    category: "Academic",
    detail: "Associate Degree in Arts (equivalent to the old BA pathway), offering major courses in humanities and language.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "BookOpen",
    duration: "2 Years",
    certificate: "Affiliated University Examination Pathway",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Acquire deep knowledge in chosen humanities electives.",
      "Develop analytical reading and writing capacities for academic research.",
      "Prepare for state level competitive civil services examinations.",
      "Improve general reasoning, history knowledge, and literature understanding."
    ],
    syllabus: [
      "Compulsory Courses: English, Islamic Studies, Pakistan Studies",
      "Electives (Choose 2): Islamic History, Political Science, Arabic, Urdu, Sociology"
    ],
    prerequisites: "Intermediate (FA / FSc / ICS / ICom) or equivalent."
  },
  {
    slug: "ads",
    title: "ADS",
    urduTitle: "اے ڈی ایس",
    category: "Academic",
    detail: "Associate Degree in Science (equivalent to the old BSc pathway), highlighting physical, mathematical, or life sciences.",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Flask",
    duration: "2 Years",
    certificate: "Affiliated University Examination Pathway",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Mirpur (AJ&K)"],
    learningOutcomes: [
      "Understand scientific research methods and quantitative processes.",
      "Gain lab safety and experimental setup capabilities.",
      "Prepare for higher education pathways in standard science streams.",
      "Master advanced mathematics, computer architecture, or physical sciences."
    ],
    syllabus: [
      "Compulsory Courses: English, Islamiyat, Pakistan Studies",
      "Science Groups (Choose 1): Math-A & B + Physics; Math-A + Physics + Computer"
    ],
    prerequisites: "FSc (Pre-Engineering / Pre-Medical / ICS) or equivalent."
  },
  {
    slug: "fa-fsc",
    title: "FA / FSc",
    urduTitle: "ایف اے / ایف ایس سی",
    category: "Academic",
    detail: "Intermediate course counseling and test prep with certified faculty for board exams.",
    image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Book",
    duration: "2 Years",
    certificate: "BISE Board Exam Pathway Support",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Fulfill higher education entry criteria for professional BS pathways.",
      "Solve board standard board tests under exam environments.",
      "Analyze basic biological, chemical, mathematical, or humanitarian concepts.",
      "Develop strong English essay and Urdu writing capacities."
    ],
    syllabus: [
      "FSc Pre-Medical: Biology, Physics, Chemistry, English, Islamiyat, Pakistan Studies",
      "FSc Pre-Engineering: Mathematics, Physics, Chemistry, Urdu, English",
      "FA Humanities: Elective Humanities, Civic Sciences, Literature"
    ],
    prerequisites: "Matriculation (BISE Pakistan) or equivalent."
  },

  // Vocational Category
  {
    slug: "dress-designing",
    title: "Dress Designing",
    urduTitle: "ڈریس ڈیزائننگ",
    category: "Vocational",
    detail: "Practical garment cutting, stitching, styling, and tailoring skills for fashion entrepreneurship.",
    image: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Scissors",
    duration: "3 to 6 Months",
    certificate: "Trade Testing Board / MTES Certified",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Take custom body measurements and design patterns correctly.",
      "Operate professional sewing and overlock machinery safely.",
      "Stitch standard eastern wear, designer suits, and kidswear.",
      "Manage small-scale boutique operations and client accounts."
    ],
    syllabus: [
      "Measurement Systems, Tools & Fabric Selection",
      "Pattern Drafting and Cutting Practices",
      "Stitching Techniques (Lace, piping, neck layouts)",
      "Boutique Management and Client Delivery Projects"
    ],
    prerequisites: "Basic literacy."
  },
  {
    slug: "beautician",
    title: "Beautician",
    urduTitle: "بیوٹیشن",
    category: "Vocational",
    detail: "Comprehensive training in skincare, makeup, bridal packages, and hair care services.",
    image: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Sparkles",
    duration: "3 Months",
    certificate: "Trade Testing Board Peshawar Certified",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Perform correct skin analyses and execute facial treatments.",
      "Apply daily, party, and bridal cosmetics packages.",
      "Develop hygiene protocols and salon workstation management strategies.",
      "Handle hair styling, styling treatments, and product selections."
    ],
    syllabus: [
      "Skin Care Theories, Skin Types & Standard Facials",
      "Makeup Artistry (Base creation, contouring, eye styles)",
      "Hair Styling, Cutting, and Color Care Fundamentals",
      "Salon Ethics, Client Care, and Business Setup Tips"
    ],
    prerequisites: "Basic literacy."
  },
  {
    slug: "tuition",
    title: "Nursery to FSc Tuition",
    urduTitle: "نرسری تا ایف ایس سی ٹیوشن",
    category: "Vocational",
    detail: "Evening tutorial academy classes led by subject-matter experts for high GPA goals.",
    image: "https://images.pexels.com/photos/5905540/pexels-photo-5905540.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "PresentationChart",
    duration: "Monthly Subscription",
    certificate: "Progress Reports Generated Monthly",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Resolve daily school home assignments and academic blocks.",
      "Prepare for weekly, monthly class exams successfully.",
      "Learn logical concepts in mathematics and science topics.",
      "Improve general presentation skills for final board exams."
    ],
    syllabus: [
      "General Subjects (Maths, Science, English, Urdu)",
      "Periodic Assessment tests aligned with regional school schedules",
      "Special test prep classes during board examinations"
    ],
    prerequisites: "Enrolled in standard school or intermediate college."
  },

  // Psychology Category
  {
    slug: "educational-psychology",
    title: "Educational Psychology",
    urduTitle: "تعلیمی نفسیات",
    category: "Psychology & Parenting",
    detail: "Educational psychology study guiding learning development, memory, cognitive growth, and teaching theories.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Brain",
    duration: "3 Months",
    certificate: "KIPS Counseling & Seminar Certificate",
    campuses: ["Abbottabad", "Haripur", "Mansehra"],
    learningOutcomes: [
      "Analyze behavioral learning models and school instruction techniques.",
      "Determine cognitive development indicators in young children.",
      "Design school curriculum changes to facilitate special learners.",
      "Integrate positive reinforcers inside classroom environments."
    ],
    syllabus: [
      "Introduction to Cognitive & Constructivist Learning Theories",
      "Motivation, Student Diversity, and Special Needs Counseling",
      "Instructional Design and School Assessments",
      "Teacher Training and Behavioral Management Practices"
    ],
    prerequisites: "Bachelor's degree or teaching experience preferred."
  },
  {
    slug: "child-psychology",
    title: "Child Psychology",
    urduTitle: "بچوں کی نفسیات",
    category: "Psychology & Parenting",
    detail: "Course on early emotional, psychological, and mental development of child milestones.",
    image: "https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Heart",
    duration: "3 Months",
    certificate: "KIPS Counseling & Seminar Certificate",
    campuses: ["Abbottabad", "Haripur", "Mansehra"],
    learningOutcomes: [
      "Identify developmental abnormalities or motor skill issues early.",
      "Analyze the role of socio-cultural interactions in childhood.",
      "Implement play therapy approaches to guide distressed kids.",
      "Provide counseling support during adolescent transitions."
    ],
    syllabus: [
      "Infant Development and Early Attachment Models",
      "Cognitive Growth, Language Learning & Socialization",
      "Childhood Psychopathology and Identification of Learning Disabilities",
      "Child Therapy, School Play Therapy & Case Studies"
    ],
    prerequisites: "Open to parents, teachers, and student counselors."
  },
  {
    slug: "parenting",
    title: "Parenting",
    urduTitle: "پیرنٹنگ",
    category: "Psychology & Parenting",
    detail: "Practical seminars and workshops for healthy child raising, emotional intelligence, and positive parenting.",
    image: "https://images.pexels.com/photos/1620780/pexels-photo-1620780.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Users",
    duration: "1 to 2 Months",
    certificate: "Seminar Attendance Certificate",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Mirpur (AJ&K)"],
    learningOutcomes: [
      "Implement positive parenting boundaries without using physical force.",
      "Improve parent-child active listening habits.",
      "Manage academic screen hours and cyber exposures safely.",
      "Support emotional regulation during tantrums and developmental changes."
    ],
    syllabus: [
      "Parenting Styles (Authoritative, Permissive, Neglectful, Authoritarian)",
      "Communication Skills & Conflict Resolution at Home",
      "Managing Digital Screen Exposure & Mental Health",
      "Fostering Self-Esteem and Resilience in Children"
    ],
    prerequisites: "None. Open to parents, guardians, and social workers."
  },
  {
    slug: "educational-issues",
    title: "Educational Issues",
    urduTitle: "تعلیمی مسائل",
    category: "Psychology & Parenting",
    detail: "Identifying and resolving learning challenges, institutional blocks, exam fear, and peer stress.",
    image: "https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "AlertCircle",
    duration: "3 Months",
    certificate: "KIPS Counseling & Seminar Certificate",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Acknowledge early signs of school dropouts and low grades.",
      "Overcome math anxiety and general exam pressures.",
      "Resolve bullying issues and social isolation patterns inside schools.",
      "Understand teacher-student communication dynamics."
    ],
    syllabus: [
      "Modern Educational Systems & Infrastructure Challenges",
      "Exam Anxiety, Stress Management, and Peer Pressure Counselling",
      "Learning Disabilities (Dyslexia, ADHD) in Classroom Environments",
      "Collaborative Solutions: Parents, Teachers, and Management"
    ],
    prerequisites: "Open to educators, academic administrators, and parent-teacher leaders."
  },

  // Dr. Mudassar Seminars Category
  {
    slug: "test-preparations",
    title: "Test Preparations",
    urduTitle: "ٹیسٹ کی تیاری",
    category: "Dr. Mudassar Seminars",
    detail: "Coaching for ETEA, NTS, NAT, and competitive entry examinations under expert instruction.",
    image: "https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "FileText",
    duration: "2 Months",
    certificate: "Test Preparation Course Certificate",
    campuses: ["Abbottabad", "Haripur", "Mansehra"],
    learningOutcomes: [
      "Solve multiple choice queries using logical elimination techniques.",
      "Manage examination time constraints during actual board papers.",
      "Resolve mathematical and critical reasoning sections.",
      "Understand standard ETEA and NTS exam syllabus blueprints."
    ],
    syllabus: [
      "Quantitative Reasoning & Analytical Math",
      "English Reading Comprehension & Synonyms/Antonyms",
      "Subject-Specific MCQs (Chemistry, Physics, Biology, Computer)",
      "Mock Examinations & Time Management Simulation"
    ],
    prerequisites: "Matriculation or Intermediate."
  },
  {
    slug: "cadet-college-prep",
    title: "Cadet College Test Prep & Interviews",
    urduTitle: "کیریئر اور داخلے",
    category: "Dr. Mudassar Seminars",
    detail: "Mentoring and guidance for Cadet College entrance written papers and panel interview assessments.",
    image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Award",
    duration: "2 to 3 Months",
    certificate: "Mock Assessment Reports Generated",
    campuses: ["Abbottabad", "Haripur", "Mansehra"],
    learningOutcomes: [
      "Pass cadet college admission papers (Mathematics, English, General Science).",
      "Communicate with confidence during panel selection interviews.",
      "Improve general physical posture and grooming habits.",
      "Develop rapid critical response patterns to verbal intelligence tests."
    ],
    syllabus: [
      "Academic Test Preparation (Board Syllabus Coverage)",
      "Intelligence Tests (Verbal & Non-Verbal reasoning)",
      "Confidence Building, Body Language, and Grooming",
      "Mock Interviews & Psychological Testing Drills"
    ],
    prerequisites: "Eligible Class Age Criteria for Cadet College Admissions."
  },
  {
    slug: "english-grammar",
    title: "English Grammar",
    urduTitle: "انگلش گرامر",
    category: "Dr. Mudassar Seminars",
    detail: "Comprehensive study of advanced syntax, punctuation rules, essay writing, and sentence analysis.",
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800",
    iconName: "Type",
    duration: "2 Months",
    certificate: "KIPS Grammar Specialist Certification",
    campuses: ["Abbottabad", "Haripur", "Mansehra", "Shinkiari", "Baffa", "Mirpur (AJ&K)", "Garhi Habibullah"],
    learningOutcomes: [
      "Construct structurally sound compound and complex sentences.",
      "Write error-free essays and academic research paragraphs.",
      "Analyze syntax flaws, run-on sentences, and punctuation issues.",
      "Improve vocabulary use for general competitive examinations."
    ],
    syllabus: [
      "Syntactic Analysis: Active/Passive Voice, Direct/Indirect Narration",
      "Punctuation, Sentence Clause Structures, and Common Errors",
      "Paragraph Structure and Academic Essay Writing",
      "Vocabulary building, idioms, and usage in contextual frames"
    ],
    prerequisites: "Basic literacy in English."
  }
];
