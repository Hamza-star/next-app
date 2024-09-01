// src/pages/our-clients.js
"use client";
import Head from "next/head";
import Image from "next/image";

const clients = [
  { name: "Client A", logo: "/images/image.png" },
  { name: "Client B", logo: "/images/c4.jpg" },
  { name: "Client C", logo: "/images/c1.jpg" },
  { name: "Client C", logo: "/images/c2.png" },

  // Add more clients as needed
];

const OurClients = () => {
  return (
    <>
      <Head>
        <title>Our Clients</title>
        <meta
          name="description"
          content="Discover the clients we have worked with."
        />
      </Head>
      <main className="">
        <section className="py-16 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center text-black mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Clients
              </h1>
              <p className="text-lg md:text-lg text-gray-900">
                We are proud to work with a diverse range of clients who trust
                us to deliver exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center  bg-white  shadow-lg rounded-lg"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={150}
                    objectFit="contain"
                    className="w-40 h-auto "
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OurClients;
