// src/pages/about.js
"use client";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <main className="stext-gray-900">
        <section className="relative py-28 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl text-primary md:text-5xl font-bold mb-4">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                We are a team of passionate individuals committed to making a
                difference.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Increase image height */}
              <div className="relative h-[500px] md:h-[600px] mb-8 md:mb-0">
                <Image
                  src="/images/about.jpg" // Ensure this path is correct
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Our Mission
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  At TESINT, we have established a steadfast company policy that
                  underpins our commitment to delivering top-notch fire
                  protection and prevention services. Safety, quality, and
                  integrity serve as the cornerstones of our approach. We
                  prioritize the safety of our clients, their personnel, and our
                  own team members. This unwavering commitment to safety forms
                  the bedrock of our company ethos.
                </p>
                <div className="mt-5">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Our Values
                  </h2>

                  <ul className="px-6 space-y-2">
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
                      Teamwork
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
                      Accountability
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
                      Safety & Quality
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
                      Integrity
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
                      Initiative
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Button className="text-white">Contact Us</Button>
                  {""}{" "}
                  <span> if you want to know more about our services.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
