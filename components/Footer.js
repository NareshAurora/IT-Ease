import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <div className="flex">
            <ul className="space-y-2 w-[50%]">
              <li>
                <Link href="/" className="hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-100">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-100">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-100">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-100">
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="space-y-2 w-[50%]">
              <li>
                <Link href="/" className="hover:text-gray-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gray-100">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-100">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-100">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-100">
                  XML
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-100">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Additional Information or Contact */}
        <div>
          <div className="md:text-left w-full">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <p className="text-gray-400">
              1234 Network Solutions Rd, Tech City, TC 12345
            </p>
            <p className="text-gray-400 mt-2">Email: info@iteasy.com</p>
            <p className="text-gray-400 mt-2">Phone: +1 (123) 456-7890</p>
          </div>
          <div className="md:text-left w-full mt-3">
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="hover:text-gray-100">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-100">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-100">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        {/* Social Media Links */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <Link href="#" className="hover:text-gray-100">
              <FaFacebook size={24} />
            </Link>
            <Link href="#" className="hover:text-gray-100">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="hover:text-gray-100">
              <FaLinkedin size={24} />
            </Link>
          </div>

          <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="hover:text-gray-100">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-100">
                Terms of Service
              </a>
            </li>
          </ul>
        </div> */}
        {/* Newsletter Signup */}
        <div className="w-full">
          <h3 className="text-lg font-semibold mb-4 text-white">Signup</h3>
          <p className="mb-4 text-gray-400">
            Stay updated with the latest in network solutions. Sign up for our
            newsletter!
          </p>
          <form className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-10"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © 2024 ITEasy. All rights reserved.
      </div>
    </footer>
  );
}
