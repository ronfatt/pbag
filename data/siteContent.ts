import {
  Baby,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  ChefHat,
  Church,
  Computer,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Languages,
  Mail,
  MapPin,
  Music,
  NotebookPen,
  Paintbrush,
  Phone,
  ShieldCheck,
  Shirt,
  Sparkles,
  Stethoscope,
  Users,
  Wrench
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Sponsor", href: "#sponsor" },
  { label: "Impact", href: "#impact" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: "728", label: "students reached in 2023" },
  { value: "70%", label: "growth in student numbers" },
  { value: "MOE", label: "registered with Malaysia Ministry of Education" },
  { value: "Tawau", label: "serving families in Sabah" }
];

export const whyCards = [
  {
    title: "Education Opens Doors",
    description:
      "Many children without proper documentation have limited access to formal education. PBAG gives them a structured learning environment and hope for the future.",
    icon: BookOpen
  },
  {
    title: "Skills Build Confidence",
    description:
      "Beyond academic subjects, students learn practical skills that help them become more independent, responsible, and employable.",
    icon: BriefcaseBusiness
  },
  {
    title: "Community Changes Lives",
    description:
      "When children are supported, families and communities benefit. Your giving helps build a stronger and more compassionate Tawau.",
    icon: Users
  }
];

export const programs = [
  { title: "Bahasa Malaysia", description: "National language foundations for daily learning.", icon: Languages },
  { title: "English", description: "Communication skills for wider opportunities.", icon: BookOpen },
  { title: "Chinese", description: "Language learning that reflects the local community.", icon: NotebookPen },
  { title: "Mathematics", description: "Practical numeracy and problem solving.", icon: Calculator },
  { title: "Science", description: "Curiosity, observation, and basic discovery.", icon: Sparkles },
  { title: "Computer Literacy", description: "Digital basics for a modern future.", icon: Computer },
  { title: "Life Skills", description: "Confidence, discipline, and everyday responsibility.", icon: HandHeart },
  { title: "Moral Education", description: "Values that shape responsible young people.", icon: Church },
  { title: "Music", description: "Creative expression and joyful participation.", icon: Music },
  { title: "Culinary Skills", description: "Hands-on baking and kitchen confidence.", icon: ChefHat },
  { title: "Electrical Works", description: "Foundational technical and repair skills.", icon: Wrench },
  { title: "Handicraft", description: "Creativity through practical handmade projects.", icon: Paintbrush },
  { title: "Sewing", description: "Useful craft skills for independence.", icon: Shirt },
  { title: "Health & Dental Support", description: "Care that helps students stay ready to learn.", icon: Stethoscope },
  { title: "Vaccination Support", description: "Community health access for children and families.", icon: HeartPulse }
];

export const sponsorships = [
  {
    title: "Primary Student Sponsorship",
    price: "RM700",
    period: "/ year",
    includes: ["Fees", "Books", "Uniform", "Learning support"],
    button: "Sponsor Primary Student"
  },
  {
    title: "Secondary Student Sponsorship",
    price: "RM1000",
    period: "/ year",
    includes: ["Fees", "Books", "Uniform", "Skills development support"],
    button: "Sponsor Secondary Student"
  }
];

export const givingOptions = [
  {
    title: "One-Off Donation",
    description: "Make a single donation of any amount.",
    icon: Banknote
  },
  {
    title: "Monthly Giving",
    description: "Give monthly to provide consistent support.",
    icon: HeartPulse
  },
  {
    title: "Sponsor A Student",
    description: "Support a primary or secondary student for one year.",
    icon: GraduationCap
  },
  {
    title: "Donate In Kind",
    description:
      "Donate school shoes, uniforms, stationery, sports equipment, furniture, exercise books, or other useful items.",
    icon: HandHeart
  }
];

export const updates = [
  {
    title: "SUHAKAM Visit To PBAG",
    date: "30 October 2025",
    description:
      "The Human Rights Commission of Malaysia visited PBAG to better understand the centre's mission, challenges, and the children it serves.",
    image: "/images/school-building.jpg"
  },
  {
    title: "Preschool Curriculum 2026 Workshop",
    date: "10-13 November 2025",
    description:
      "PBAG teachers joined the Preschool Curriculum 2026 workshop with district trainers in Tawau to strengthen early childhood education quality.",
    image: "/images/classroom-learning.jpg"
  },
  {
    title: "Medical Camp For The Community",
    date: "Community care",
    description:
      "Doctors, teachers, and volunteers provided medical services for parents, students, and adults in the community.",
    image: "/images/medical-camp.jpg"
  },
  {
    title: "Free Measles-Rubella Vaccination Program",
    date: "4 December 2025",
    description:
      "A free vaccination program for children aged 5 and above was held at PBAG with support from WHO and National Cancer Society Malaysia.",
    image: "/images/vaccination-program.jpg"
  }
];

export const testimonials = [
  {
    name: "Apple Margaret Teh",
    quote: "Thanks to you, I was able to participate in teaching the students. Thank you!"
  },
  {
    name: "Lung Pai Jun",
    quote: "Thanks! It was nice to help those in need. I believe that we are doing a great good deed!"
  },
  {
    name: "Chok Shu Hen",
    quote: "I am so glad to help teaching and coaching the students in baking skills."
  },
  {
    name: "Chin Kui Yin",
    quote: "I am beyond grateful that I'm able to share love and knowledge with all the students."
  }
];

export const donation = {
  chequePayableTo: "Pusat Bimbingan Alternatif Grace",
  bank: "Public Bank Berhad",
  accountNo: "3230 88 0516",
  accountName: "P. Bimbingan ALTF Grace",
  swift: "PBBEMYKL"
};

export const contact = {
  phoneLabel: "+6019-808 8281 (Madam Esther)",
  whatsapp: "https://wa.me/60198088281",
  website: "www.pbagtawau.com",
  email: "gtctawau@gmail.com",
  facebook: "gtctawau",
  address: "TB 14354-14356, Lot 8-10, Pekan Kinabutan, Mile 5 1/2, Jalan Apas, 91000 Tawau, Sabah, Malaysia.",
  poBox: "P.O.Box 60326, 91013 Tawau, Sabah, Malaysia.",
  contactCards: [
    { label: "Phone / WhatsApp", value: "+6019-808 8281 (Madam Esther)", icon: Phone },
    { label: "Email", value: "gtctawau@gmail.com", icon: Mail },
    { label: "Address", value: "Pekan Kinabutan, Mile 5 1/2, Jalan Apas, Tawau", icon: MapPin },
    { label: "Registration", value: "Malaysia Ministry of Education registered centre", icon: ShieldCheck }
  ]
};
