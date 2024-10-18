import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaRegCommentDots } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import RootLayout from "@/app/layout";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'To reset your password, click on "Forgot password" on the login page and follow the instructions.',
  },
  {
    question: "What is the warranty period for my product?",
    answer:
      "The warranty period for most products is 1 year from the date of purchase. Please check your warranty card for more details.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact customer support via the technical support form below, email, or our live chat feature.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, you can return or exchange a product within 30 days of purchase as long as it is in its original condition and packaging. Please refer to our return policy for more details.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days, depending on your location. Expedited shipping options are available at checkout.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to selected countries. Shipping fees and delivery times vary based on location.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with a tracking number and instructions on how to track your package.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, PayPal, and other digital payment options like Apple Pay and Google Pay.",
  },
  {
    question: "Can I change or cancel my order after placing it?",
    answer:
      "Once an order is placed, you have a limited window to change or cancel it before it is processed. Contact our support team as soon as possible for assistance.",
  },
];

const Support = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto p-6 pt-28">
        <div className="flex flex-col md:flex-row md:space-x-8 justify-between">
          {/* FAQ Section */}
          <div className="lg:w-[65%] w-full">
            <section className="mb-12">
              <h1 className="text-3xl font-bold mb-4">
                Have questions? We&apos;ve got answers!
              </h1>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item mb-4 border border-gray-400 rounded-lg"
                >
                  <div
                    className={`faq-question flex items-center p-4 ${
                      openIndex === index
                        ? "bg-[#01416F] text-[#F5F5F5] rounded-t-lg"
                        : "bg-white text-[#4E4E4E] rounded-lg"
                    }`}
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") toggleFAQ(index);
                    }}
                    tabIndex="0"
                    role="button"
                  >
                    <div className="cursor-pointer question-text md:text-lg text-base font-medium flex-1">
                      <h3>{faq.question}</h3>
                    </div>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 30 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`collapse-icon ${
                        openIndex === index ? "open transform rotate-180" : ""
                      } ml-4 transition-transform duration-300`}
                    >
                      <path
                        d="M14.9997 17.8495L0.394012 3.24387L3.11639 0.521484L14.9997 12.4048L26.8831 0.521484L29.6054 3.24387L14.9997 17.8495Z"
                        fill={openIndex === index ? "#F5F5F5" : "#013357"}
                      />
                    </svg>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer p-4 md:text-base text-sm text-[#4E4E4E] font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </section>
          </div>
          {/* Technical Support Form */}
          <div className="lg:w-[35%] w-full mt-12">
            <section className="mb-12">
              <div className="border border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Need assistance ?</h2>
                <form className="space-y-4">
                  <div>
                    <Label className="font-medium" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="w-[95%] border h-7 border-gray-300 rounded-lg p-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="font-medium" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="name"
                      className="w-[95%] border h-7 border-gray-300 rounded-lg p-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="font-medium" htmlFor="Product">
                      Product
                    </Label>
                    <Input
                      type="text"
                      id="Product"
                      className="w-[95%] border h-7 border-gray-300 rounded-lg p-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="font-medium" htmlFor="Issue">
                      Issue
                    </Label>
                    <Input
                      type="text"
                      id="Issue"
                      className="w-[95%] border h-7 border-gray-300 rounded-lg p-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="font-medium" htmlFor="name">
                      Message
                    </Label>
                    <Textarea
                      type="text"
                      id="Message"
                      className="w-[95%] border h-7 border-gray-300 rounded-lg p-2"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-[95%] bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </section>
          </div>
        </div>

        {/* Live Chat Feature */}
        <div>
          <Button
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            onClick={() => setIsChatOpen(true)}
          >
            <FaRegCommentDots size={24} />
          </Button>
          {isChatOpen && (
            <div className="fixed bottom-16 right-4 w-80 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-bold">Live Chat</h4>
                <Button
                  variant="ghost"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => setIsChatOpen(false)}
                >
                  &times;
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Chat is currently offline. Please leave a message.
              </p>
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  );
};

export default Support;
