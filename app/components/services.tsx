// src/components/Services.js

import { Button } from "@/components/ui/button";
import Image from "next/image"; // Use Next.js Image component if preferred
import Link from "next/link";

const services = [
  {
    title: "Elevators System",
    description: "Description of Service 1",
    image: "/images/elevator.jpg",
  },
  {
    title: "Escalators System",
    description: "Description of Service 2",
    image: "/images/e2.jpg",
  },
  {
    title: "Fire Fighting Pumps",
    description: "Description of Service 3",
    image: "/images/s2.jpg",
  },

  {
    title: "Fire Alarm System",
    description: "Description of Service 3",
    image: "/images/s1.jpg",
  },
];

const Services = () => {
  return (
    <section className="relative mt-24 py-16 bg-zinc-950 text-white mb-24">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-8 ">
          <h2 className="text-4xl font-bold leading-tight mb-4 relative inline-block">
            <span className="absolute inset-x-0 bottom-0 h-1  rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Discover the wide range of services we offer to meet your needs and
            exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-lg transition-transform transform  hover:shadow-2xl cursor-pointer"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="inline-flex items-center px-6 py-6  text-white font-semibold rounded-lg  transition-colors duration-300 group">
              More Detail
              <svg
                className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
