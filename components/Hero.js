import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/images/HeroBackground.jpeg')] h-screen flex items-center justify-center text-center pt-16">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white space-y-6 px-4">
        <h1 className="text-4xl font-bold">
          ITEasy - Quality Network Hardware, Unmatched Savings
        </h1>
        <p className="text-xl">
          Top-quality refurbished network equipment at up to 90% off vendor
          prices.
        </p>
        <Link href="/products" passHref>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-1 rounded-lg mt-4">
            Browse Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
