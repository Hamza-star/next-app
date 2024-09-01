"use client";
import Image from "next/image";

const ReviewCards = () => {
  const reviews = [
    {
      review:
        "Amazing service! The team was highly professional and the project was delivered on time.",
      name: "Sultan Shawarma Lahore",
      imageSrc: "/images/p2.jpg",
    },
    {
      review:
        "We were impressed with the quality and dedication. The results exceeded our expectations.",
      name: "A.K Heights Lahore",
      imageSrc: "/images/p5.png",
    },
    {
      review:
        "A fantastic experience! Great communication and outstanding results. Exceeded our expectations.",
      name: "Silver Mark Islamabad",
      imageSrc: "/images/p4.jpg",
    },
    {
      review:
        "I was completely impressed with their professionalism and customer service.",
      name: "Naffco",
      imageSrc: "/images/image.png",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h6 className="text-3xl text-center text-zinc-950 font-extrabold mb-12">
          <span className="bg-primary text-white">Feedback</span> From Our
          Valued Clients
        </h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className=" p-6  flex flex-col items-center">
              <p className="text-lg text-gray-800 mb-4 text-center">
                {review.review}
              </p>

              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={review.imageSrc}
                  alt={review.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>

              <h2 className="text-xl font-semibold text-gray-950">
                {review.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;
