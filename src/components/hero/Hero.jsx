import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner01 from "../../assets/images/hero01.jpeg";
import banner02 from "../../assets/images/hero02.jpeg";
import banner03 from "../../assets/images/hero03.jpeg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "Cross-Border Permits",
      description:
        "Seamless cross-border operations guaranteed. We handle all permit applications so your goods move freely across African borders without delays",
      image: banner02,
    },
    {
      id: 2,
      title: "Import & Export Licences",
      description:
        "Streamline your international trade with our expert licensing services. Fast, compliant, and hassle-free solutions for all your import/export needs.",
      image: banner01,
    },
    {
      id: 3,
      title: "Vehicle Registration & Plates",
      description:
        "One-stop solution for all vehicle documentation. From registration to number plates – we make road compliance quick and effortless.",
      image: banner03,
    },
  ];
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[full]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div id="hero-box-container">
                <div id="hero-banner">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Schedule an appointment
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
