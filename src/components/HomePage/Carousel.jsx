import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const slides = [
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
  "https://images.unsplash.com/photo-1601266289415-e7339a97d19b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[600px] lg:h-screen overflow-hidden">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          } bg-cover bg-center  `}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="w-full h-full bg-black/30 flex items-center">
            <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-10 lg:px-40">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold leading-tight lg:leading-normal text-white">
                Discover Your Next Adventure
              </h2>
              <p className="text-white text-lg">
                Discover and share talents with people around you! Our app is an
                interactive skill-exchange platform that connects individuals
                who want to learn, teach, or trade skills locally. Whether
                you’re offering guitar lessons, looking for language practice,
                seeking coding help, or joining a yoga session, you can easily
                browse nearby listings, connect with others, and grow your
                abilities together. Users can create profiles, post or search
                for skills, chat securely, and rate their experiences — building
                a trusted community of lifelong learners and creators.
              </p>
              <Link to="/">
                <button className="btn lg:w-[200px]  custom-bg-color-primary  text-white">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
