"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full md:w-2/3 -z-10" />

      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-16 py-8 relative z-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 py-8 md:mb-96">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8">
            Welcome to Our Site
          </h1>

          <div className="text-base sm:text-lg text-gray-800 mb-6">
            In an era where safety is crucial,{" "}
            <span className="bg-primary text-white">
              TYCO Engineering Services (Int.)
            </span>
            is a leader in providing comprehensive safety solutions, including
            fire safety systems, elevators, and escalators. With a solid
            foundation of five years in the industry, we have established
            ourselves as a trusted fire safety and engineering services. At
            TESINT, we are more than just a service provider; we are your
            partner in safety. We are committed to excellence and innovation in:
          </div>

          <ul className="pl-8 space-y-2 mt-4">
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
        </div>
        <div className="relative w-full md:w-1/2 h-60 md:h-[600px] md:mb-96 flex items-center">
          <div className="relative w-full h-full mt-9">
            {" "}
            <Image
              src="/hero.jpg"
              alt="Hero Image"
              fill
              style={{ objectFit: "cover" }}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
