import localFont from "next/font/local";
import "./globals.css";
import Header from "./../components/Header";
import Footer from "@/components/Footer";

const poppins = localFont({
  src: "./../public/fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const poppinsMedium = localFont({
  src: "./../public/fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-medium",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div
        className={`${poppins.variable}  ${poppinsMedium.variable} antialiased`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
