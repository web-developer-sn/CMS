"use client";

import * as React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios";
import { HeaderData } from "../home";
import Loader from "@/app/lib/loader";

const sliderImages = ["slider1.jpg", "slider2.jpg", "slider3.jpg"];

export default function Home() {
  const [current, setCurrent] = React.useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % sliderImages.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  const [headerData, setHeaderData] = React.useState<HeaderData>({
    home: {},
    header: {},
    footer: {
      collegeInfo: {
        name: "",
        logo: "",
        description: "",
      },
      quickLinks: [],
      contact: {
        address: "",
        phone: "",
        email: "",
      },
      social: [],
    },
  });
  const [isLoading, setLoading] = React.useState(true);
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const fetchHeader = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/header`);

      if (JSON.stringify(res.data)) {
        setLoading(false);
        setHeaderData((x) => ({
          ...x,
          header: res.data,
        }));
      }
    } catch (error) {}
  };
  const fetchHome = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/home`);
      if (res.data) {
        setLoading(false);
        setHeaderData((x) => ({
          ...x,

          home: res.data,
        }));
      }
    } catch (error) {}
  };
  const fetchFooter = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/footer`);
      if (JSON.stringify(res.data)) {
        setLoading(false);
        setHeaderData((x) => ({
          ...x,
          footer: res.data,
        }));
      }
    } catch (error) {}
  };
  React.useEffect(() => {
    fetchHeader();
    fetchHome();
    fetchFooter();
  }, [url]);
  if(isLoading){
  //    return (
  //   <div className="flex items-center justify-center h-screen bg-gray-900">
  //     <div className="relative w-24 h-24">
  //       {/* Circular Spinner */}
  //       <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-b-transparent border-l-transparent border-r-blue-500 animate-spin"></div>

  //       {/* Center Text */}
  //       <div className="absolute inset-0 flex items-center justify-center">
  //         <span className="text-white text-sm font-semibold animate-pulse">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // )

  //  return (
  //   <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
  //     <div className="relative w-28 h-28">
  //       {/* Glowing Animated Border */}
  //       <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-border [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]"></div>

  //       {/* Circle Inner Background */}
  //       <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
  //         <span className="text-white font-semibold text-sm animate-pulse tracking-wide">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // )
  //  return (
  //   <div className="flex items-center justify-center h-screen bg-black">
  //     <div className="relative w-32 h-32">
  //       {/* Outer Glowing Ring */}
  //       <div className="absolute inset-0 rounded-full border-[6px] border-t-transparent border-b-transparent border-l-cyan-400 border-r-purple-500 animate-spin blur-sm shadow-2xl"></div>

  //       {/* Inner Glow Ring (slow spin) */}
  //       <div className="absolute inset-2 rounded-full border-[6px] border-t-transparent border-b-transparent border-l-pink-400 border-r-blue-500 animate-spin-slow blur-[2px] opacity-70"></div>

  //       {/* Center Circle */}
  //       <div className="absolute inset-[10px] rounded-full bg-gradient-to-br from-gray-900 to-black shadow-inner flex items-center justify-center">
  //         <span className="text-cyan-400 text-sm font-semibold animate-pulse tracking-wide">
  //           Loading...
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <Loader/>
  )
  }
 return (
    <main className="min-h-screen flex flex-col">
     
      <Header header={headerData?.header} />
      {/* Hero Slider */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {sliderImages.map((src, idx) => (
          <img
            key={idx}
            src={src ?? ""}
            alt={`Slide ${idx + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {headerData?.home?.hero?.title}
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
            {headerData?.home?.hero?.subtitle}
          </p>
          <a
            href={headerData?.home?.hero?.ctaLink}
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg shadow-md transition"
          >
            {headerData?.home?.hero?.ctaText}
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {headerData?.home?.about?.title ?? ""}
          </h2>
          <p className="text-gray-700 mb-6">
            {headerData?.home?.about?.description}
          </p>
          <a
            href={headerData?.home?.about?.ctaLink}
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            {headerData?.home?.about?.ctaText}
          </a>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
            {headerData?.home?.programs?.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {headerData?.home?.programs?.items?.map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">{program?.title}</h3>
                <p className="text-gray-600 mb-4">{program?.description}</p>
                <a
                  href={program?.href}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {program?.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">
          {headerData?.home?.ctaBanner?.title}
        </h3>
        <p className="mb-6">{headerData?.home?.ctaBanner?.subtitle}</p>
        <a
          href={headerData?.home?.ctaBanner?.buttonLink}
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          {headerData?.home?.ctaBanner?.buttonText}
        </a>
      </section>

      <Footer footer={headerData?.footer} />
    </main>
  );
}
