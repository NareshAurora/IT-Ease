import React from "react";
import { Card } from "./ui/card";
import { CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

// Example testimonials data (replace with real data)
const testimonials = [
  {
    quote:
      "ITEasy's routers and switches helped us scale our network efficiently. Their customer service is exceptional!",
    customer: "John Doe, CTO of Tech Solutions",
    image: "",
  },
  {
    quote:
      "Thanks to ITEasy, we were able to cut costs and increase network performance with their refurbished hardware.",
    customer: "Jane Smith, IT Manager at GlobalCorp",
    image: "",
  },
  {
    quote:
      "The support and products provided by ITEasy are top-notch. I highly recommend them for all networking needs.",
    customer: "Mark Johnson, Network Engineer at SecureNet",
    image: "",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 my-6 sm:my-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        What Our Clients Say
      </h2>
      <div className="relative max-w-7xl mx-auto">
        <Carousel className="mx-1 sm:mx-4 lg:mx-12">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-6 w-full"
              >
                <Image
                  src={testimonial.image || "/images/avatar.png"}
                  alt={testimonial.customer}
                  width={100}
                  height={100}
                  className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover mb-3 sm:mb-4 shadow-lg"
                />
                <blockquote className="text-lg sm:text-xl italic mb-3 sm:mb-4 w-[70%] md:w-[100%]">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-bold text-base sm:text-lg">
                  {testimonial.customer}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
