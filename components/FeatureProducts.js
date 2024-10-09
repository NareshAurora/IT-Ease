import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productCategories = [
  {
    title: "Routers",
    description: "High-performance routers to keep your network connected.",
    image: "/images/routers.jpg", // Replace with actual image paths
    link: "/shop/routers",
  },
  {
    title: "Switches",
    description:
      "Reliable switches for efficient data transfer and connectivity.",
    image: "/images/switches.jpg", // Replace with actual image paths
    link: "/shop/switches",
  },
  {
    title: "Firewalls",
    description: "Top-grade firewalls to ensure your network's security.",
    image: "/images/firewalls.jpg", // Replace with actual image paths
    link: "/shop/firewalls",
  },
  {
    title: "Enterprise Servers",
    description:
      "Powerful servers designed to handle the most demanding workloads.",
    image: "/images/servers.jpg", // Replace with actual image paths
    link: "/shop/servers",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Products</h2>
      {/* Carousel for product categories */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {productCategories.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-3">
                <Card>
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription className="h-7">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button
                      as="a"
                      href={product.link}
                      className="w-full bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Shop Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default FeaturedProducts;
