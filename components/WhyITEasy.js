// import React from "react";
// import {
//   Card,
//   CardTitle,
//   CardDescription,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "./ui/card";

// // Benefits data array
// const benefits = [
//   {
//     title: "Premium Quality",
//     description:
//       "We ensure that every product meets the highest quality standards.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="w-12 h-12 text-blue-500"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 1.5l3.196 6.482 7.154.634-5.175 4.965 1.527 7.114L12 17.857l-6.702 3.838 1.527-7.114L1.65 8.616l7.154-.634L12 1.5z"
//         />
//       </svg>
//     ),
//     image: "/images/quality.jpg", // Replace with actual image path
//   },
//   {
//     title: "Unbeatable Savings",
//     description:
//       "Get the best prices on top-quality IT products without breaking the bank.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="w-12 h-12 text-green-500"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 9v3.75m0 0h3.75m-3.75 0H8.25m3.75-7.5v1.5m6.364 9.364A9 9 0 113.636 8.136a9 9 0 0116.728 7.728z"
//         />
//       </svg>
//     ),
//     image: "/images/savings.jpg",
//   },
//   {
//     title: "Comprehensive Warranty",
//     description:
//       "Our products come with warranties to ensure long-term peace of mind.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="w-12 h-12 text-red-500"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 2.25c2.003 1.334 4.003 2.001 6 2 1.005-.001 1.998-.334 3-.999v9.5c0 4.57-3.718 8.292-8.35 9.235-.428.086-.872.086-1.3 0C6.718 20.793 3 17.071 3 12.5V3.25c1.002.666 1.995.999 3 .999 1.997.001 3.997-.666 6-2z"
//         />
//       </svg>
//     ),
//     image: "/images/warranty.jpg",
//   },
//   {
//     title: "Lifetime Support",
//     description:
//       "We're here to help, anytime you need support with your IT products.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="w-12 h-12 text-blue-400"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 13.5V8.25a6.75 6.75 0 0113.5 0v5.25m-13.5 0a4.5 4.5 0 009 0m-9 0h9m-4.5 0v6m-9-6H9m9 0h1.5m-1.5 0h-9m-4.5 0h-1.5"
//         />
//       </svg>
//     ),
//     image: "/images/support.jpg",
//   },
//   {
//     title: "Expert Technical Help",
//     description:
//       "Our team of experts is available to assist you with all your technical needs.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="w-12 h-12 text-yellow-500"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M8.25 15.75v1.5a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25v-1.5M9 12.75h6m-6-3h6M12 1.5c6.627 0 12 5.373 12 12S18.627 25.5 12 25.5 0 20.127 0 13.5 5.373 1.5 12 1.5z"
//         />
//       </svg>
//     ),
//     image: "/images/technical-help.jpg",
//   },
//   {
//     title: "Customer Satisfaction",
//     description:
//       "We prioritize your satisfaction with every purchase and service.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="w-12 h-12 text-purple-500"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M10.25 9.75a2.25 2.25 0 114.5 0m-4.5 0a2.25 2.25 0 104.5 0m-6 3.75c0 .553.046 1.091.136 1.612.09.521.276 1.03.553 1.505.545.946 1.494 1.683 2.611 2.093 1.117.41 2.386.41 3.503 0 1.117-.41 2.066-1.147 2.611-2.093.276-.475.462-.984.553-1.505.09-.521.136-1.059.136-1.612v-.375c0-1.008-.411-1.977-1.143-2.697-.732-.721-1.703-1.128-2.707-1.128h-.375c-.684 0-1.344-.324-1.75-.868-.406-.544-.566-1.28-.4-2.003a8.978 8.978 0 00-6.293 8.27v.375z"
//         />
//       </svg>
//     ),
//     image: "/images/satisfaction.jpg",
//   },
//   {
//     title: "ISO Certified",
//     description:
//       "We adhere to international quality standards with our ISO certification.",
//     icon: "/images/ISO.svg",
//     image: "/images/certification.jpg",
//   },
// ];

// const WhyITEasy = () => {
//   return (
//     <section className="max-w-7xl mx-auto py-12">
//       <h2 className="text-4xl font-bold text-center mb-12">Why ITEasy?</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {benefits.map((benefit, index) => (
//           <Card
//             key={index}
//             className="flex flex-col relative overflow-hidden"
//             style={{
//               backgroundImage: `url(${benefit.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//             <div className="relative z-10 flex flex-col h-full">
//               <CardHeader>
//                 <div className="flex items-center justify-center mb-4">
//                   {typeof benefit.icon === "string" ? (
//                     <img
//                       src={benefit.icon}
//                       alt={benefit.title}
//                       className="w-12 h-12"
//                     />
//                   ) : (
//                     benefit.icon
//                   )}
//                 </div>
//                 <CardTitle className="text-xl font-semibold text-center text-white">
//                   {benefit.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="flex-grow">
//                 <CardDescription className="text-center text-white">
//                   {benefit.description}
//                 </CardDescription>
//               </CardContent>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyITEasy;

import React from "react";
import {
  FaUsers,
  FaTools,
  FaDollarSign,
  FaRocket,
  FaHandshake,
  FaCheckCircle,
  FaExchangeAlt,
  FaMicrochip,
} from "react-icons/fa";

// Benefits data array
const benefits = [
  {
    title: "Expert Technicians",
    description:
      "Our skilled team has extensive experience across various technologies, ensuring reliable and efficient service.",
    icon: <FaUsers size={48} className="text-blue-500" />,
    image: "/images/expert-technicians.avif", // Replace with actual image path
  },
  {
    title: "Comprehensive Solutions",
    description:
      "We offer a full suite of services tailored to meet your specific networking needs, whether for temporary rentals or long-term installations.",
    icon: <FaTools size={48} className="text-green-500" />,
    image: "/images/comprehensive-solutions.jpg", // Replace with actual image path
  },
  {
    title: "Competitive Pricing",
    description:
      "Our cost-effective solutions help you maximize your budget without compromising on quality.",
    icon: <FaDollarSign size={48} className="text-red-500" />,
    image: "/images/competitive-pricing.png", // Replace with actual image path
  },
  {
    title: "Fast Turnaround",
    description:
      "We understand the urgency of network issues. Our quick response times minimize downtime for your business, ensuring smooth operations.",
    icon: <FaRocket size={48} className="text-blue-400" />,
    image: "/images/fast-turnaround.webp", // Replace with actual image path
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We work closely with our clients to understand their unique requirements, providing personalized support for the best results.",
    icon: <FaHandshake size={48} className="text-yellow-500" />,
    image: "/images/customer-centric.jpg", // Replace with actual image path
  },
  {
    title: "Quality Assurance",
    description:
      "We adhere to rigorous quality standards, ensuring that all equipment meets the highest performance benchmarks.",
    icon: <FaCheckCircle size={48} className="text-purple-500" />,
    image: "/images/quality-assurance.png", // Replace with actual image path
  },
  {
    title: "Flexible Options",
    description:
      "From sales to rentals, we offer flexible solutions that adapt to your business's ever-changing needs.",
    icon: <FaExchangeAlt size={48} className="text-gray-500" />,
    image: "/images/flexible-options.png", // Replace with actual image path
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We stay at the forefront of industry developments, ensuring that you have access to the latest networking technologies.",
    icon: <FaMicrochip size={48} className="text-blue-600" />,
    image: "/images/cutting-edge.jpg", // Replace with actual image path
  },
  {
    title: "Premium Quality",
    description:
      "We ensure that every product meets the highest quality standards.",
    // icon: <FaBadge size={48} className="text-blue-500" />,
    image: "/images/premium-quality.jpg", // Replace with actual image path
  },
  {
    title: "Unbeatable Savings",
    description:
      "Get the best prices on top-quality IT products without breaking the bank.",
    // icon: <FaDollarSign size={48} className="text-green-500" />,
    image: "/images/savings.jpg", // Replace with actual image path
  },
  {
    title: "Comprehensive Warranty",
    description:
      "Our products come with warranties to ensure long-term peace of mind.",
    // icon: <FaShieldAlt size={48} className="text-red-500" />,
    image: "/images/warranty.webp", // Replace with actual image path
  },
  {
    title: "Lifetime Support",
    description:
      "We're here to help, anytime you need support with your IT products.",
    // icon: <FaLifeRing size={48} className="text-blue-400" />,
    image: "/images/support.jpg", // Replace with actual image path
  },
  {
    title: "Expert Technical Help",
    description:
      "Our team of experts is available to assist you with all your technical needs.",
    // icon: <FaWrench size={48} className="text-yellow-500" />,
    image: "/images/technical-help.jpg", // Replace with actual image path
  },
  {
    title: "Customer Satisfaction",
    description:
      "We prioritize your satisfaction with every purchase and service.",
    // icon: <FaThumbsUp size={48} className="text-purple-500" />,
    image: "/images/satisfaction.jpg", // Replace with actual image path
  },
  {
    title: "ISO Certified",
    description:
      "We adhere to international quality standards with our ISO certification.",
    // icon: <FaCertificate size={48} className="text-gray-500" />,
    image: "/images/certification.jpg", // Replace with actual image path
  },
];

const WhyITEasy = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose ITEasy?
      </h2>
      <div className="space-y-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text and Icon Section */}
            <div className="lg:w-1/2 p-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyITEasy;
