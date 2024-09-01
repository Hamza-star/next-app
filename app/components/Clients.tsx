"use client";
import Head from "next/head";
import Image from "next/image";

const clients = [
  { name: "Client C", logo: "/images/c3.png" },
  { name: "Client A", logo: "/images/image.png" },
  { name: "Client B", logo: "/images/c4.jpg" },
  { name: "Client C", logo: "/images/c1.jpg" },
  { name: "Client C", logo: "/images/c2.png" },
  { name: "Client C", logo: "/images/c6.png" },
];

const OurClients = () => {
  return (
    <>
      <Head>
        <title>Brands</title>
        <meta
          name="description"
          content="Discover the clients we have worked with."
        />
      </Head>
      <main className="h-11/12">
        <section className="py-16 md:py-40">
          <div className="container mx-auto px-4">
            <div className="text-center text-black mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="bg-primary text-white">Brands</span>
              </h1>
              <p className="text-lg md:text-lg text-gray-900">
                We are proud to work with a diverse range of brands who trust us
                to deliver exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 ">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center  p-8"
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
