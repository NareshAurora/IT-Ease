// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const getNavItemClass = (path) => {
//     return router.pathname === path
//       ? "font-bold text-gray-900"
//       : "hover:text-gray-900";
//   };

//   const isHomePage = router.pathname === "/";

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isHomePage
//           ? isScrolled
//             ? "bg-white shadow-md"
//             : "bg-transparent"
//           : "bg-white shadow-md"
//       }`}
//     >
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <Link href="/" passHref>
//           <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-5 h-5 text-white p-2 bg-blue-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">IT Ease</span>
//           </span>
//         </Link>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden ml-auto"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//         <nav
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } md:flex flex-col md:flex-row md:ml-auto w-full md:w-auto mt-4 md:mt-0`}
//         >
//           <Link href="/" passHref>
//             <span className={`mr-5 mb-2 md:mb-0 ${getNavItemClass("/")}`}>
//               Home
//             </span>
//           </Link>
//           <Link href="/products" passHref>
//             <span
//               className={`mr-5 mb-2 md:mb-0 ${getNavItemClass("/products")}`}
//             >
//               Products
//             </span>
//           </Link>
//           <Link href="/services" passHref>
//             <span
//               className={`mr-5 mb-2 md:mb-0 ${getNavItemClass("/services")}`}
//             >
//               Services
//             </span>
//           </Link>
//           <Link href="/about" passHref>
//             <span className={`mr-5 mb-2 md:mb-0 ${getNavItemClass("/about")}`}>
//               About
//             </span>
//           </Link>
//           <Link href="/support" passHref>
//             <span
//               className={`mr-5 mb-2 md:mb-0 ${getNavItemClass("/support")}`}
//             >
//               Support
//             </span>
//           </Link>
//           <Link href="/contact" passHref>
//             <span
//               className={`mr-5 mb-2 md:mb-0 ${getNavItemClass("/contact")}`}
//             >
//               Contact
//             </span>
//           </Link>
//         </nav>
//         <Link href="/login" passHref>
//           <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//             Login
//           </button>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Support", path: "/support" },
  { label: "Contact", path: "/contact" },
];

const NavItem = ({ item }) => {
  const router = useRouter();
  const isActive = router.pathname === item.path;
  return (
    <span className={`${isActive ? "font-bold" : ""}`}>
      <Link href={item.path}>
        <span className="hover:text-gray-900">{item.label}</span>
      </Link>
    </span>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = router.pathname === "/";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto p-6 flex items-center justify-between">
        <Link href="/">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold text-gray-900">
              IT Ease
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/login">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">
                Login
              </button>
            </Link>
          </div>
        </div>

        <button
          className="md:hidden"
          onClick={toggleSideNav}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-64 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-center h-16 border-b">
          <Link href="/">
            <span className="text-xl font-bold text-gray-900">IT Ease</span>
          </Link>
        </div>
        <nav className="mt-8">
          {navItems.map((item) => (
            <Link key={item.label} href={item.path}>
              <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {item.label}
              </span>
            </Link>
          ))}
          <Link href="/login">
            <span className="block px-4 py-2 mt-4 text-sm text-gray-700 hover:bg-gray-100">
              Login
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
