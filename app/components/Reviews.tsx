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
        "A fantastic experience! Great communication and outstanding results.Exceeded our expectations.",
      name: "Silver Mark Islamabad",
      imageSrc: "/images/p4.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h6 className="text-3xl text-center text-zinc-950 font-bold mb-12">
          Feedback From Our Valued Clients
        </h6>

        {/* Grid layout for reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-primary bg-opacity-20 bg-blur-3xl p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              {/* Review Text */}
              <p className="text-lg text-gray-100 mb-4 text-center italic">
                "{review.review}"
              </p>
              {/* Client Image */}
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={review.imageSrc}
                  alt={review.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              {/* Client Name */}
              <h2 className="text-xl font-semibold text-gray-200">
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
