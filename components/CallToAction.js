import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // For conditional styling

const CallToAction = () => {
  return (
    <section className="bg-blue-400 py-12 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Ready to upgrade your network?
        </h2>
        <p className="text-lg mb-8">
          Contact us today for personalized recommendations.
        </p>
        <Button
          className={cn(
            "bg-white text-blue-500 hover:bg-gray-100 font-semibold py-1 px-8 rounded-lg"
          )}
          as="a"
          href="/contact"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
