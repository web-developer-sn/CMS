import axios from "axios";
import * as React from "react";
import { HeaderSection } from "../home";

interface IProps{
    header:HeaderSection
}
export default function Header(props:IProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
 
  const headerContent = {
    logo: {
      src: "/logo.png",
      alt: "Logo",
      name: "Hamara College",
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
  };
  const { logo, navLinks, applyButton } = props?.header;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo?.src} alt="Logo"  className="h-10 w-10" />
          <span className="text-xl md:text-2xl font-bold text-blue-800">
            {logo?.name}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="hover:text-blue-600 transition"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* Apply Now Button */}
        <div className="hidden md:block">
          <a
            href={applyButton?.href}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {applyButton?.label}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col px-4 py-2 text-gray-700 font-medium space-y-2">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="hover:text-blue-600 transition"
              >
                {link?.label}
              </a>
            ))}
            <a
              href={applyButton?.href}
              className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {applyButton?.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
