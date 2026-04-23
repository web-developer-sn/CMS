import React from "react";
import Link from "next/link";

interface FooterProps {
  footer: {
    collegeInfo: {
      logo: string;
      name: string;
      tagline: string;
      description: string;
    };
    quickLinks: { href: string; title: string }[];
    studentResources: { href: string; title: string }[];
    contact: {
      address: string;
      phone: string;
      email: string;
      website: string;
    };
    social: { href: string; icon: string }[];
    legalLinks: { href: string; title: string }[];
  };
}

const Footer = ({ footer }: FooterProps) => {
  const {
    collegeInfo,
    quickLinks,
    studentResources,
    contact,
    social,
    legalLinks,
  } = footer;

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* College Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={collegeInfo.logo}
              alt="logo"
              className="h-12 w-12 rounded-xl"
            />
            <h2 className="text-xl font-bold">
              {collegeInfo.name}
            </h2>
          </div>

          <p className="text-blue-400 text-sm mb-3">
            {collegeInfo.tagline}
          </p>

          <p className="text-gray-400 text-sm">
            {collegeInfo.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Student Resources
          </h3>

          <ul className="space-y-2 text-gray-400">
            {studentResources.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>📍 {contact.address}</p>
            <p>📞 {contact.phone}</p>
            <p>✉️ {contact.email}</p>
            <p>🌐 {contact.website}</p>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            {social.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {collegeInfo.name}. All Rights Reserved.

        <div className="mt-2 flex justify-center gap-4">
          {legalLinks.map((item, idx) => (
            <Link key={idx} href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);