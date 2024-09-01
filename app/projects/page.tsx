"use client";
import Head from "next/head";
import Image from "next/image";

const Projects = () => {
  const projectData = [
    {
      imageSrc: "/images/p2.jpg",
      title: "Sultan Shawarma Lahore",
      description: "Supply and Installation of Fire Fighting system",
    },
    {
      imageSrc: "/images/p1.jpg",
      title: "Rizvi Plaza",
      title2: "Supply and Installation of Fire Alarm system",
      description: "Supply and Installation of Fire Fighting system",
    },
    {
      imageSrc: "/images/p3.png",
      title: "Heaven Tower, Multan",
      title2: "...",
      description: "Supply and Installation of 1000 KG 4 Stops Elevator",
    },
    {
      imageSrc: "/images/p4.jpg",
      title: "Silver Mark, Islamabad",
      title2:
        "Supply and Installation of Fire Fighting System for Complete Building",
      description:
        "Supply and Installation of  1600  KG Cargo 10 Stop Elevator",
    },
    {
      imageSrc: "/images/p5.png",
      title: "A.K Heights, Lahore",
      title2:
        "Supply and Installation of complete Fire Fighting System and Fire Alarm System",
      description: "Supply and Installation of 630  KG Cargo 7 Stop Elevator",
    },

    {
      imageSrc: "/images/p6.png",
      title: "Hotel One, Top City, Islamabad",
      title2: " Complete with Sprinklers system and Fire Hose Reel",
      description:
        "Supply and Installation of  Fire Fighting system for 5 floors of Hotel One",
    },

    {
      imageSrc: "/images/p7.jpg",
      title: "Gasco, Satiana Road, Faisalabad",
      title2: "Fire Fighting Project",
      description: "Supply and Installation of Fire Fighting System",
    },

    {
      imageSrc: "/images/p9.png",
      title: "Eco Petroleum, Sheikhupura",
      title2: "Fire Fighting Project",
      description: "Supply and Installation of Fire Fighting System",
    },
  ];

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <main className="text-gray-900">
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg md:text-xl mt-8 text-primary font-bold">
              A Showcase of Our Finest Work
            </p>
          </div>
        </section>

        <section className="relative  md:py-0">
          <div className="container mx-auto px-4">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
              >
                <div className="flex justify-center items-center">
                  <div className="relative w-[80%] md:w-[60%] h-[300px] md:h-[400px]">
                    <Image
                      src={project.imageSrc}
                      alt="project"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mt-5">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                      {project.title}
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
                        {project.description}
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
                        {project.title2}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
