"use client";

import * as React from "react";

const sliderImages = [
  "/slider1.jpg", // Add your real images in /public
  "/slider2.jpg",
  "/slider3.jpg",
];

export default function Home() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Slider */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {sliderImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to SN College
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
            A place to inspire, learn, and grow together.
          </p>
          <a
            href="/apply"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg shadow-md transition"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            About SN College
          </h2>
          <p className="text-gray-700 mb-6">
            We are dedicated to fostering academic excellence, personal growth, and professional development. Our world-class faculty and state-of-the-art facilities prepare students to lead and innovate.
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Undergraduate</h3>
              <p className="text-gray-600 mb-4">
                Explore our diverse undergraduate programs that build strong foundations for your future.
              </p>
              <a
                href="/programs#undergraduate"
                className="text-blue-600 hover:underline font-medium"
              >
                Explore
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Postgraduate</h3>
              <p className="text-gray-600 mb-4">
                Advance your career with our industry-focused postgraduate courses.
              </p>
              <a
                href="/programs#postgraduate"
                className="text-blue-600 hover:underline font-medium"
              >
                Explore
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-gray-600 mb-4">
                Join our innovative research community and contribute to global knowledge.
              </p>
              <a
                href="/programs#research"
                className="text-blue-600 hover:underline font-medium"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
        <p className="mb-6">
          Join thousands of students who chose SN College for a brighter future.
        </p>
        <a
          href="/apply"
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Apply Now
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        © {new Date().getFullYear()} SN College. All rights reserved.
      </footer>
    </main>
  );
}
