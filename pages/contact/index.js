import React from "react";
import RootLayout from "@/app/layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto p-6 pt-28">
        <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
          <div className="max-w-3xl my-10">
            <h2 className="text-center text-4xl font-bold mb-4">Contact Us</h2>
            <div className="text-center mb-8 text-sm font-medium md:text-base lg:text-lg">
              Our team is here to help with any questions you may have. Simply
              fill out the form below, our team will reach you shortly!
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <Label className="block mb-1 font-medium" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    className="w-full border h-7 border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <Label className="block mb-1 font-medium" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    className="w-full border h-7 border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="block mb-1 font-medium" htmlFor="subject">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  className="w-full border h-7 border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              <div>
                <Label className="block mb-1 font-medium" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-lg p-2 h-12"
                  required
                ></Textarea>
              </div>
              <div className="w-full flex justify-center items-center">
                <Button
                  type="submit"
                  className="w-[20%] bg-blue-500 text-white py-1  rounded-lg hover:bg-blue-600"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Optional Map Section */}
        <div className="my-10">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.2820177309363!2d78.35035777557722!3d17.46177146401092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b232178073%3A0xabd8d26e223ef714!2sp%20370a%2C%20105%2C%20Sriram%20Nagar%20Rd%2C%20Sri%20Ram%20Nagar%2C%20Laxmi%20Nagar%2C%20Kondapur%2C%20Telangana%20500084!5e1!3m2!1sen!2sin!4v1728467265591!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex="0"
              className="w-full rounded-lg shadow-lg"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Contact;
