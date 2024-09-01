"use client";
import Image from "next/image";
import Link from "next/link";
import { TextEffect } from "./TextEffect";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen ">
      {/* Background color for the image and content area */}
      <div className="absolute inset-0 w-full md:w-2/3  -z-10" />

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-16 py-8 relative z-10">
        {/* Left Side Image */}
        <div className="relative w-full md:w-1/2 h-60 md:h-auto flex items-center">
          <img
            src="/hero.jpg" // Replace with the correct path
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 py-8 md:mb-96">
          {/* Heading visible on all screens */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">
            Welcome to Our Site
          </h1>

          <div className="text-base sm:text-lg text-gray-800 mb-6">
            <TextEffect per="char" preset="fade">
              In an era where safety is crucial, TYCO Engineering Services
              (Int.) is a leader in providing comprehensive safety solutions,
              including fire safety systems, elevators, and escalators. With a
              solid foundation of five years in the industry, we have
              established ourselves as a trusted fire safety and engineering
              services. At TESINT, we are more than just a service provider; we
              are your partner in safety. We are committed to excellence and
              innovation in:
            </TextEffect>
          </div>

          <ul className="pl-8 space-y-2">
            <li className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Fire Fighting Solutions
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Fire Alarm Systems
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Elevators
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Escalators
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Customized Safety Solutions
            </li>
            <li className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Regular Maintenance and Support Provider
            </li>
          </ul>
          <Link href="/services">
            <button className="bg-zinc-950 text-white px-6 py-3 mt-12 rounded-md hover:bg-primary-dark transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
