// src/pages/about.js
"use client";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      {/* Elevators System  */}
      <Head>
        <title>Elevators</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <main className="text-gray-900">
        <section className="relative py-24 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Increase image height */}
              <div className="relative h-[500px] md:h-[600px] mb-8 md:mb-0">
                <Image
                  src="/images/elevator.jpg" // Ensure this path is correct
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg mt-2"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Elevators System
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  TESINT specializes in providing comprehensive supply and
                  installation services for elevator systems to enhance building
                  accessibility, efficiency, and safety. Our approach starts
                  with analyzing the building structure and understanding
                  specific vertical transportation needs. We ensure compliance
                  with local safety standards and regulations.
                </p>
                <p className="text-base mt-4 md:text-lg text-gray-700">
                  We offer tailored elevator solutions, including passenger,
                  service, and freight elevators, suited to the building
                  requirements. Our expert technicians handle the precise
                  installation of each system, ensuring optimal placement,
                  secure fittings, and seamless integration.
                </p>
                <p className="text-base mt-4 md:text-lg text-gray-700">
                  TESINT delivers a full-service package, from initial
                  consultation and equipment selection to expert installation,
                  all aimed at improving your building elevator functionality
                  and safety.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Escalators service  */}
      <Head>
        <title>Escalators</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <main className=" text-gray-900">
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Increase image height */}
              <div className="relative h-[500px] md:h-[600px] mb-8 md:mb-0">
                <Image
                  src="/images/e2.jpg" // Ensure this path is correct
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Escalators System
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  TESINT provides comprehensive escalator systems to improve
                  traffic flow within buildings, focusing on safety and
                  reliability. We start with a thorough evaluation of the
                  building layout and traffic needs, ensuring compliance with
                  escalator safety standards and local codes.
                </p>
                <p className="text-base mt-4 md:text-lg text-gray-700">
                  We recommend and supply escalators suited for various
                  settings, including commercial complexes and public transport
                  stations, with designs that optimize space, efficiency, and
                  aesthetics. Our skilled technicians handle precise
                  installation, ensuring alignment, secure anchoring, and
                  seamless integration with the building architecture.
                </p>
                <p className="text-base mt-4 md:text-lg text-gray-700">
                  TESINT offers a full-service package from consultation and
                  system selection to professional installation, aimed at
                  enhancing the efficiency and safety of your escalator systems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fire Cabinets service  */}
      <Head>
        <title>Fire Cabinets</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <main className=" text-gray-900">
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Increase image height */}
              <div className="relative h-[500px] md:h-[600px] mb-8 md:mb-0">
                <Image
                  src="/images/s4.png" // Ensure this path is correct
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Fire Cabinets
                </h2>

                <div className="p-4">
                  <p className="text-base md:text-lg text-gray-700">
                    At TESINT, we offer these types of fire cabinet systems:
                  </p>
                  <ul className="p-2 px-8 space-y-2">
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
                      Single Door Hose Rack Enclosure
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
                      Single Door Hydrant Enclosure
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
                      Single Door Rubber Hose Enclosure
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
                      Vertical Double Door Enclosure
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
                      Single Door Synthetic Hose Enclosure
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
                      Horizontal Double Door Synthetic Hose Enclosure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fifth service  */}
      <Head>
        <title>Fire Fighting Pumps</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <main className=" text-gray-900">
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Increase image height */}
              <div className="relative h-[500px] md:h-[600px] mb-8 md:mb-0">
                <Image
                  src="/images/s2.jpg" // Ensure this path is correct
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Fire Fighting Pumps
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  Fire Pump System Electric Diesel Jockey Pump with
                  ControllerFire Fighting
                </p>

                <ul className="p-6 pl-8 space-y-2">
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
                    Range of Suction Pipe: 50-400 mm (2 -16)
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
                    Range of Discharging Pipe: 32-350 mm (1.5 -14)
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
                    Flow Capacity Range: 50-5000 GPM
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
                    Head/Pressure Range: 4-14 Bar
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
                    Power Range: 4-325 Kw
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
                    Standard: NFPA 20
                  </li>
                </ul>

                <p className="text-base md:text-lg text-gray-700">
                  The main pump can be an end suction pump, multistage pump,
                  split case pump, or vertical turbine pump with stainless
                  steel, cast iron, and bronze material in standard
                  configurations. Every package is mounted on a steel fabricated
                  base with a motor, engine, and pump coupled and wired to the
                  controller. The automatic air relief valve, gate valves, check
                  valves, flexible joints, pressure switches, and pressure
                  gauges are mounted on their respective pipes. If required,
                  additional piping, pressure tanks, valves, and sensing lines
                  are available as well.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fire Alarm System service  */}
      <Head>
        <title>Fire Alarm System</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <main className=" text-gray-900">
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Increase image height */}
              <div className="relative h-[500px] md:h-[600px] mb-8 md:mb-0">
                <Image
                  src="/images/s1.jpg" // Ensure this path is correct
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Fire Alarm System
                </h2>
                <p className="text-base mt-2 md:text-lg text-gray-700">
                  TESINT offers comprehensive supply and installation services
                  for fire alarm systems to ensure building and occupant safety.
                  Our process includes assessing the building’s needs and local
                  fire safety codes, selecting the right system, and
                  strategically positioning detectors and devices.
                </p>
                <p className="text-base mt-2 md:text-lg text-gray-700">
                  We handle wiring and integrate the control panel as the
                  central hub, along with installing notification devices like
                  horns and strobes. We provide both Conventional and
                  Addressable Fire Alarm Systems for residential and commercial
                  projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sixth service  */}
      <Head>
        <title>Fire Fighting System</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <main className=" text-gray-900">
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Increase image height */}
              <div className="relative h-[500px] md:h-[600px] mb-8 md:mb-0">
                <Image
                  src="/images/s3.jpg" // Ensure this path is correct
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Fire Fighting System
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  TESINT provides complete supply and installation services for
                  firefighting systems to safeguard buildings and occupants. We
                  start by assessing the facility needs and reviewing local
                  firefighting regulations. We then recommend and supply
                  appropriate equipment, including fire extinguishers, hoses,
                  sprinklers, pumps, and hydrants.
                </p>
                <p className="text-base mt-4 md:text-lg text-gray-700">
                  Our skilled technicians ensure professional installation,
                  positioning, and connectivity of these systems. TESINT offers
                  end-to-end service, from consultation and equipment supply to
                  installation, enhancing fire safety and emergency response
                  capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
