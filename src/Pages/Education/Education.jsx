import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "animate.css";

const Education = () => {
  // Education Data
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
      institution: "Green University of Bangladesh",
      description:
        "A comprehensive program that equipped me with both theoretical and practical knowledge in computer science, covering subjects such as algorithms, data structures, database management, and software engineering.",
      year: "2019-2023",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Nawab Siraj-Ud-Dowla Govt. College",
      description:
        "Studied science with a focus on mathematics, physics, and ICT, which laid the foundation for my further studies in the tech field.",
      year: "2017-2018",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Tentulia D.B High School",
      description:
        "Completed my secondary education with a strong foundation in science background.",
      year: "2016",
    },
  ];

  return (
    <div className="max-w-4xl my-10 mx-auto px-6 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 animate__animated animate__fadeInDown">
        Educational Qualification
      </h2>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} // Enables navigation dots
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {educationData.map((edu, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full bg-white shadow-lg rounded-lg p-6 h-full hover:shadow-2xl transition duration-500">
              <h3 className="text-xl font-semibold text-gray-700">{edu.degree}</h3>
              <p className="text-blue-500 font-medium">{edu.institution}</p>
              <p className="text-gray-500 mt-2">{edu.description}</p>
              <p className="text-gray-600 font-semibold mt-2">Year: {edu.year}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Education;
