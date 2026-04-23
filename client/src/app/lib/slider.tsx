"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export interface HeroSlide {
  id: number | string;
  title: string;
  subtitle: string;
  buttons: {
    label: string;
    url?: string;
  }[];
  backgroundImage: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
}

const SimpleSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <div
            className="w-full h-[420px] flex items-center px-4 sm:px-10 lg:px-20 text-white relative"
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            <div className="relative z-10 max-w-[90%] sm:max-w-xl lg:max-w-2xl">
              <h1 className="font-extrabold drop-shadow-xl leading-tight mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words">
                {slide.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 break-words">{slide.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                {slide.buttons.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.url || "#"}
                    className={`px-4 py-2 sm:px-6 rounded-md font-semibold shadow-md text-sm sm:text-base ${
                      index === 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
