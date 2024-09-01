"use client";
import Image from "next/image";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Engr. Irfan Ahmad",
      role: "CEO TYCO Engineering Services",
      imageSrc: "/images/t1.jpg",
      large: true, // CEO's image will be larger
    },
    {
      name: "Mr. Mushtaq Ahmad",
      role: "Regional Manager (Lahore)",
      imageSrc: "/images/t4.jpg",
    },
    {
      name: "Mr. Khurshid Alvi",
      role: "Head of Department (Procurement)",
      imageSrc: "/images/t8.jpg",
    },

    {
      name: "Mr. Tahir Nadeem",
      role: "Regional Manager (Multan)",
      imageSrc: "/images/t5.jpg",
    },
    {
      name: "Engr. Usman Waheed",
      role: "Regional Manager (Islamabad)",
      imageSrc: "/images/t6.jpg",
    },
    {
      name: "Muhammad Salman Zafar",
      role: "Head of Department (Fire Protection)",
      imageSrc: "/images/t7.png",
    },
    {
      name: "Mr Sammar Abbas",
      role: "Marketing Manager",
      imageSrc: "/images/t3.jpg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl text-center text-primary font-bold mb-12">
          Team Members
        </h1>
        {/* CEO Image Centered */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative rounded-full overflow-hidden mb-4 w-48 h-48 md:w-64 md:h-64">
              <Image
                src={teamMembers[0].imageSrc}
                alt={teamMembers[0].name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl font-semibold">{teamMembers[0].name}</h2>
            <p className="text-gray-600">{teamMembers[0].role}</p>
          </div>
        </div>
        {/* Other Team Members in 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative rounded-full overflow-hidden mb-4 w-24 h-24 md:w-32 md:h-32">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
