import React from "react";
import { Button } from "@/components/ui/button";
import RootLayout from "@/app/layout";
import { FaShoppingCart, FaTools, FaLaptop, FaLifeRing } from "react-icons/fa";

const services = [
  {
    title: "Sales",
    description:
      "Get top-quality refurbished network hardware at unbeatable prices.",
    icon: <FaShoppingCart size={48} className="text-blue-500" />,
    link: "/services/sales",
  },
  {
    title: "Rentals",
    description: "Flexible rental options for temporary or testing purposes.",
    icon: <FaLaptop size={48} className="text-green-500" />,
    link: "/services/rentals",
  },
  {
    title: "Repairs",
    description:
      "Extend the life of your equipment with expert repair services.",
    icon: <FaTools size={48} className="text-red-500" />,
    link: "/services/repairs",
  },
  {
    title: "Technical Support",
    description:
      "Round-the-clock technical assistance for any issues you encounter.",
    icon: <FaLifeRing size={48} className="text-purple-500" />,
    link: "/services/support",
  },
];

const Services = () => {
  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto p-6 pt-28">
        {/* Headline */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Solutions Tailored to Your Needs
          </h1>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* Learn More Button */}
              <Button
                className="bg-blue-500 text-white hover:bg-blue-600"
                as="a"
                href={service.link}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default Services;
