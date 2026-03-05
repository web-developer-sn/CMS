import React from "react";
import { FooterLink, FooterSection } from "../home";
interface IFooter{
    footer:FooterSection
}
 const Footer=( props:IFooter)=> {
 
  const { collegeInfo, quickLinks, contact, social } = props?.footer;

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* College Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <img src={collegeInfo?.logo} alt="Logo"  className="h-10 w-10" /> */}
            <h2 className="text-xl font-bold">{collegeInfo?.name}</h2>
          </div>
          <p className="text-gray-300">{collegeInfo?.description}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {quickLinks?.map((link:FooterLink, idx:number) => (
              <li key={idx}>
                <a href={link?.href} className="hover:text-white transition">
                  {link?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 mb-2">{contact?.address}</p>
          <p className="text-gray-400 mb-2">{contact?.phone}</p>
          <p className="text-gray-400">{contact?.email}</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col gap-2 text-gray-400">
            {social?.map((item, idx) => (
              <a
                key={idx}
                href={item?.href}
                className="hover:text-white transition flex items-center gap-2"
              >
                <i className={item?.icon}></i> {item?.platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {collegeInfo?.name}. All rights reserved.
      </div>
    </footer>
  );
}
export default React.memo(Footer)