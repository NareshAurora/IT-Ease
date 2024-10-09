// // pages/about.js
// import React from "react";
// import { Button } from "./../../components/ui/button";
// import RootLayout from "@/app/layout";

// const About = () => {
//   return (
//     <RootLayout>
//       <div className="max-w-7xl mx-auto p-6 space-y-12 pt-28">
//         {/* Welcome Section */}
//         <section>
//           <h1 className="text-4xl font-bold text-center mb-4">
//             Welcome to ITEasy: Your Partner in Network Solutions
//           </h1>
//           <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
//             At ITEasy, we believe that quality network hardware shouldn’t come
//             with a hefty price tag. Founded on the principles of integrity,
//             service, and excellence, we are dedicated to providing businesses
//             with high-quality refurbished equipment that meets their unique
//             needs.
//           </p>
//         </section>

//         {/* Our Mission Section */}
//         <section className="text-center">
//           <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             Our mission is to empower organizations with reliable networking
//             solutions that enhance performance and reduce costs. We are
//             committed to delivering exceptional value through our extensive
//             range of refurbished routers, switches, firewalls, VoIP systems,
//             enterprise servers, and more.
//           </p>
//         </section>

//         {/* Why We Stand Out Section */}
//         <section className="text-center">
//           <h2 className="text-3xl font-bold mb-4">Why We Stand Out</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             As a leader in the repair, service, sale, and rental of multiband
//             network hardware, ITEasy prides itself on our rigorous quality
//             assurance process. Each product is thoroughly inspected and tested,
//             ensuring it meets our high standards for reliability and
//             functionality. Our competitive pricing—ranging from 50% to 90% less
//             than original vendor prices—makes us a go-to source for savvy
//             businesses looking to maximize their budget.
//           </p>
//         </section>

//         {/* Our Values Section */}
//         <section>
//           <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-2">
//                 Customer Commitment
//               </h3>
//               <p className="text-gray-700">
//                 We prioritize our clients’ needs, offering personalized support
//                 and solutions tailored to their requirements.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
//               <p className="text-gray-700">
//                 As an ISO certified organization, we adhere to the highest
//                 standards of quality and performance.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-2">
//                 Expertise and Support
//               </h3>
//               <p className="text-gray-700">
//                 Our experienced team is here to provide technical assistance and
//                 guidance, ensuring you get the most out of your equipment.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Looking Ahead Section */}
//         <section className="text-center">
//           <h2 className="text-3xl font-bold mb-4">Looking Ahead</h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             As technology continues to evolve, so do we. We stay at the
//             forefront of industry trends, ensuring our offerings reflect the
//             latest advancements in network hardware. Our goal is not only to
//             meet your expectations but to exceed them, providing you with the
//             tools and support necessary for your success.
//           </p>
//           <Button className="mt-6 bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-lg">
//             Learn More About Our Services
//           </Button>
//         </section>
//       </div>
//     </RootLayout>
//   );
// };

// export default About;
// pages/about.js
// import React from "react";
// import { Button } from "./../../components/ui/button";
// import RootLayout from "@/app/layout";

// const About = () => {
//   return (
//     <RootLayout>
//       <div className="max-w-7xl mx-auto p-6 space-y-16 pt-28">
//         {/* Welcome Section */}
//         <section className="text-center">
//           <h1 className="text-5xl font-bold text-gray-800 mb-6">
//             Welcome to <span className="text-blue-600">ITEasy</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             At ITEasy, we believe that quality network hardware shouldn’t come
//             with a hefty price tag. Founded on the principles of integrity,
//             service, and excellence, we are dedicated to providing businesses
//             with high-quality refurbished equipment that meets their unique
//             needs.
//           </p>
//         </section>

//         {/* Our Mission Section */}
//         <section className="text-center bg-gray-50 py-12 rounded-lg shadow-md">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Our mission is to empower organizations with reliable networking
//             solutions that enhance performance and reduce costs. We are
//             committed to delivering exceptional value through our extensive
//             range of refurbished routers, switches, firewalls, VoIP systems,
//             enterprise servers, and more.
//           </p>
//         </section>

//         {/* Why We Stand Out Section */}
//         <section className="text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">
//             Why We Stand Out
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             As a leader in the repair, service, sale, and rental of multiband
//             network hardware, ITEasy prides itself on our rigorous quality
//             assurance process. Each product is thoroughly inspected and tested,
//             ensuring it meets our high standards for reliability and
//             functionality. Our competitive pricing—ranging from 50% to 90% less
//             than original vendor prices—makes us a go-to source for savvy
//             businesses looking to maximize their budget.
//           </p>
//         </section>

//         {/* Our Values Section */}
//         <section>
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
//             Our Values
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Customer Commitment
//               </h3>
//               <p className="text-gray-600">
//                 We prioritize our clients’ needs, offering personalized support
//                 and solutions tailored to their requirements.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Quality Assurance
//               </h3>
//               <p className="text-gray-600">
//                 As an ISO-certified organization, we adhere to the highest
//                 standards of quality and performance.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <h3 className="text-2xl font-semibold text-blue-600 mb-4">
//                 Expertise and Support
//               </h3>
//               <p className="text-gray-600">
//                 Our experienced team is here to provide technical assistance and
//                 guidance, ensuring you get the most out of your equipment.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Looking Ahead Section */}
//         <section className="text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">
//             Looking Ahead
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             As technology continues to evolve, so do we. We stay at the
//             forefront of industry trends, ensuring our offerings reflect the
//             latest advancements in network hardware. Our goal is not only to
//             meet your expectations but to exceed them, providing you with the
//             tools and support necessary for your success.
//           </p>
//           <Button className="mt-8 bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
//             Learn More About Our Services
//           </Button>
//         </section>
//       </div>
//     </RootLayout>
//   );
// };

// export default About;

// pages/about.js
import React from "react";
import { Button } from "./../../components/ui/button";
import RootLayout from "@/app/layout";
import {
  FaHandsHelping,
  FaCheckCircle,
  FaHeadset,
  FaForward,
} from "react-icons/fa"; // Importing icons

const About = () => {
  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto p-6 space-y-16 pt-28">
        {/* Welcome Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">ITEasy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At ITEasy, we believe that quality network hardware shouldn’t come
            with a hefty price tag. Founded on the principles of integrity,
            service, and excellence, we are dedicated to providing businesses
            with high-quality refurbished equipment that meets their unique
            needs.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="text-center bg-gray-50 py-12 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex justify-center items-center">
            <FaHandsHelping className="mr-3 text-blue-600" /> Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to empower organizations with reliable networking
            solutions that enhance performance and reduce costs. We are
            committed to delivering exceptional value through our extensive
            range of refurbished routers, switches, firewalls, VoIP systems,
            enterprise servers, and more.
          </p>
        </section>

        {/* Why We Stand Out Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex justify-center items-center">
            <FaCheckCircle className="mr-3 text-blue-600" /> Why We Stand Out
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a leader in the repair, service, sale, and rental of multiband
            network hardware, ITEasy prides itself on our rigorous quality
            assurance process. Each product is thoroughly inspected and tested,
            ensuring it meets our high standards for reliability and
            functionality. Our competitive pricing—ranging from 50% to 90% less
            than original vendor prices—makes us a go-to source for savvy
            businesses looking to maximize their budget.
          </p>
        </section>

        {/* Our Values Section */}
        <section>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex justify-center items-center">
                <FaHandsHelping className="mr-2" /> Customer Commitment
              </h3>
              <p className="text-gray-600">
                We prioritize our clients’ needs, offering personalized support
                and solutions tailored to their requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex justify-center items-center">
                <FaCheckCircle className="mr-2" /> Quality Assurance
              </h3>
              <p className="text-gray-600">
                As an ISO-certified organization, we adhere to the highest
                standards of quality and performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex justify-center items-center">
                <FaHeadset className="mr-2" /> Expertise and Support
              </h3>
              <p className="text-gray-600">
                Our experienced team is here to provide technical assistance and
                guidance, ensuring you get the most out of your equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Looking Ahead Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex justify-center items-center">
            <FaForward className="mr-3 text-blue-600" /> Looking Ahead
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As technology continues to evolve, so do we. We stay at the
            forefront of industry trends, ensuring our offerings reflect the
            latest advancements in network hardware. Our goal is not only to
            meet your expectations but to exceed them, providing you with the
            tools and support necessary for your success.
          </p>
          <Button className="mt-8 bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Learn More About Our Services
          </Button>
        </section>
      </div>
    </RootLayout>
  );
};

export default About;
