"use client";
import Link from "next/link";
import Loader from "@/app/lib/loader";
import * as React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { HeaderData } from "../home";
import Image from "next/image";
import SimpleSlider from "@/app/lib/slider";

export default function Home() {
 

  const [headerData] = React.useState<HeaderData>({
    home: {},
    header: {
      logo: {
        src: "/cms.png",
        alt: "Logo",
        name: " ",
      },
      navLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Academics", href: "/academics" },
        { label: "Admissions", href: "/admissions" },
        { label: "Departments", href: "/departments" },
        { label: "Contact", href: "/contact" },
      ],
      applyButton: {
        label: "Apply Now",
        href: "/apply",
      },
    },
    footer: {
      collegeInfo: {
        name: "Hamara College",
        logo: "/cms.png",
        description:
          "A center of excellence for learning, innovation, and leadership.",
      },
      quickLinks: [
        { title: "Home", href: "/" },
        { title: "About Us", href: "/about" },
        { title: "Admissions", href: "/admissions" },
        { title: "Departments", href: "/departments" },
        { title: "Contact", href: "/contact" },
      ],
      contact: {
        address: "📍 123 College Road, Patna, Bihar",
        phone: "📞 +91 9876500000",
        email: "✉️ info@hamaracollege.ac.in",
      },
      social: [
        { platform: "Facebook", icon: "fab fa-facebook-f", href: "#" },
        { platform: "Twitter", icon: "fab fa-twitter", href: "#" },
        { platform: "Instagram", icon: "fab fa-instagram", href: "#" },
      ],
    },
  });

 const footerData = {
  collegeInfo: {
    name: "SN Institute of Technology & Management",
    logo: "/cms.png",
    tagline: "Empowering Future Leaders Through Innovation & Excellence",
    description:
      "Established in 2005, sn Institute of Technology & Management offers world-class education, modern infrastructure, experienced faculty, and strong placement opportunities for students across India.",
  },

  quickLinks: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Programs", href: "/programs" },
    { title: "Admissions", href: "/admissions" },
    { title: "Placements", href: "/placements" },
    { title: "Contact Us", href: "/contact" },
  ],

  studentResources: [
    { title: "Student Portal", href: "/student-portal" },
    { title: "Library", href: "/library" },
    { title: "Examinations", href: "/examinations" },
    { title: "Scholarships", href: "/scholarships" },
  ],

  contact: {
    address:
      "SN Institute of Technology & Management, Sector 15, Noida, Uttar Pradesh, India",
    phone: "+91 98765 43210",
    email: "admissions@snuniversity.edu.in",
    website: "www.snuniversity.edu.in",
  },

  social: [
    {
      platform: "Facebook",
      icon: "fab fa-facebook-f",
      href: "https://facebook.com",
    },
    {
      platform: "LinkedIn",
      icon: "fab fa-linkedin-in",
      href: "https://linkedin.com",
    },
    {
      platform: "Instagram",
      icon: "fab fa-instagram",
      href: "https://instagram.com",
    },
    {
      platform: "YouTube",
      icon: "fab fa-youtube",
      href: "https://youtube.com",
    },
  ],

  legalLinks: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Conditions", href: "/terms" },
  ],
};
  const collegeInfo = {
  name: "SN Institute of Technology & Management",
  tagline: "Shaping Future Leaders Through Quality Education",
  description:
    "Established in 2005, sn Institute of Technology & Management is committed to academic excellence, innovation, and holistic student development. With modern infrastructure, experienced faculty, advanced laboratories, digital classrooms, and strong placement support, we prepare students for successful careers in engineering, management, and applied sciences.",
  students: "12,000+",
  faculty: "350+",
  courses: "45+",
  placements: "95%",
  image:
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=800&fit=crop",
};
  const [isLoading] = React.useState(false);
 
const heroSlides = [
 {
  id: 1,
  title: "Smart College Management System",
  subtitle:
    "Manage admissions, student records, attendance, fees, academics, and placements from one centralized platform.",

  backgroundImage:
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",

  buttons: [
    {
      label: "Explore Features",
      url: "/features",
    },
    {
      label: "Book Demo",
      url: "/demo",
    },
  ],
},

  {
    id: 2,
    title: "Online Admission Management",
    subtitle:
      "Simplify student admissions with online registration, document verification, and merit list automation.",
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=500&fit=crop",
    buttons: [
      { label: "Apply Now", url: "/admission" },
      { label: "Learn More", url: "/features" },
    ],
  },

  {
    id: 3,
    title: "Student Attendance & Performance Tracking",
    subtitle:
      "Track attendance, academic performance, assignments, and progress reports in real time.",
    backgroundImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=500&fit=crop",
    buttons: [
      { label: "View Dashboard", url: "/dashboard" },
      { label: "Get Started", url: "/register" },
    ],
  },

  {
    id: 4,
    title: "Faculty & Staff Management",
    subtitle:
      "Manage teachers, staff payroll, schedules, leave requests, and department operations easily.",
    backgroundImage:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=500&fit=crop",
    buttons: [
      { label: "Our Services", url: "/services" },
      { label: "Contact Us", url: "/contact" },
    ],
  },

  {
    id: 5,
    title: "Library Management System",
    subtitle:
      "Digitize book tracking, issue-return processes, fines, and student library access.",
    backgroundImage:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=500&fit=crop",
    buttons: [
      { label: "Explore Library Module", url: "/library" },
      { label: "Learn More", url: "/features" },
    ],
  },

  {
    id: 6,
    title: "Examination & Result Management",
    subtitle:
      "Automate exams, grading, report cards, and result publishing with complete transparency.",
    backgroundImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop",
    buttons: [
      { label: "View Modules", url: "/modules" },
      { label: "Book Demo", url: "/demo" },
    ],
  },
];
const programsData = {
  heading: "Academic Programs",
  subHeading:
    "Discover industry-relevant courses designed to prepare students for successful careers and higher education opportunities.",

  programs: [
    {
      id: 1,
      title: "Undergraduate Programs",
      duration: "3-4 Years",
      courses: "B.Tech, BCA, BBA, B.Com, BA",
      description:
        "Build strong academic foundations with career-oriented undergraduate programs led by experienced faculty.",
      icon: "🎓",
      link: "/programs/undergraduate",
    },
    {
      id: 2,
      title: "Postgraduate Programs",
      duration: "2 Years",
      courses: "MBA, MCA, M.Tech, M.Com",
      description:
        "Advance your professional journey with specialized postgraduate programs focused on industry demands.",
      icon: "📚",
      link: "/programs/postgraduate",
    },
    {
      id: 3,
      title: "Research & Innovation",
      duration: "Flexible",
      courses: "PhD, Research Labs, Innovation Centers",
      description:
        "Join cutting-edge research initiatives and work on innovative solutions with expert mentors.",
      icon: "🔬",
      link: "/programs/research",
    },
  ],
};
const admissionCTA = {
  badge: "Admissions Open 2026",
  title: "Start Your Journey Toward a Successful Career",
  description:
    "Join thousands of students building their future through world-class education, expert faculty, modern infrastructure, and excellent placement opportunities.",
  stats: [
    { id: 1, value: "12,000+", label: "Students Enrolled" },
    { id: 2, value: "95%", label: "Placement Rate" },
    { id: 3, value: "50+", label: "Programs Offered" },
  ],
  primaryButton: {
    text: "Apply Now",
    link: "/apply",
  },
  secondaryButton: {
    text: "Book Campus Tour",
    link: "/campus-tour",
  },
};
  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className="min-h-screen flex flex-col">
      <Header header={headerData?.header} />
      {/* Hero Slider */}
       <SimpleSlider slides={heroSlides} />
      

      {/* About Section */}
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Image */}
    <div>
      <img
        src={collegeInfo.image}
        alt={collegeInfo.name}
        className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
      />
    </div>

    {/* Right Content */}
    <div>
      <span className="text-blue-600 font-semibold uppercase tracking-wide">
        About Our Institution
      </span>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
        {collegeInfo.name}
      </h2>

      <p className="text-xl text-blue-700 font-medium mb-4">
        {collegeInfo.tagline}
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        {collegeInfo.description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-bold text-blue-600">
            {collegeInfo.students}
          </h3>
          <p className="text-gray-500 text-sm">Students</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-bold text-blue-600">
            {collegeInfo.faculty}
          </h3>
          <p className="text-gray-500 text-sm">Faculty</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-bold text-blue-600">
            {collegeInfo.courses}
          </h3>
          <p className="text-gray-500 text-sm">Courses</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-bold text-blue-600">
            {collegeInfo.placements}
          </h3>
          <p className="text-gray-500 text-sm">Placements</p>
        </div>
      </div>

      <a
        href="/about"
        className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Explore More
      </a>
    </div>
  </div>
</section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto text-center">
    
    <span className="text-blue-600 font-semibold uppercase tracking-wider">
      Academics
    </span>

    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
      {programsData.heading}
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
      {programsData.subHeading}
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {programsData.programs.map((program) => (
        <div
          key={program.id}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >
          <div className="text-5xl mb-4">{program.icon}</div>

          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {program.title}
          </h3>

          <p className="text-blue-600 font-medium mb-2">
            Duration: {program.duration}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            {program.courses}
          </p>

          <p className="text-gray-600 mb-6">
            {program.description}
          </p>

          <Link
            href={program.link}
            className="inline-block text-blue-600 font-semibold hover:text-blue-800"
          >
            Explore Program →
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

  <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white">
  <div className="max-w-6xl mx-auto text-center">

    <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
      {admissionCTA.badge}
    </span>

    <h2 className="text-3xl md:text-5xl font-bold mb-4">
      {admissionCTA.title}
    </h2>

    <p className="max-w-3xl mx-auto text-lg text-blue-100 mb-10">
      {admissionCTA.description}
    </p>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {admissionCTA.stats.map((item) => (
        <div
          key={item.id}
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl"
        >
          <h3 className="text-3xl font-bold">{item.value}</h3>
          <p className="text-blue-100">{item.label}</p>
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link
        href={admissionCTA.primaryButton.link}
        className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        {admissionCTA.primaryButton.text}
      </Link>

      <Link
        href={admissionCTA.secondaryButton.link}
        className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition"
      >
        {admissionCTA.secondaryButton.text}
      </Link>
    </div>
  </div>
</section>

      <Footer footer={footerData} />
    </main>
  );
}
