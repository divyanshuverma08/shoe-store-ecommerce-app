import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Rubik, Open_Sans, Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";
import Providers from "@/providers/providers";

const rubik = Rubik({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const openSans = Open_Sans({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const inter = Inter({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Kicks Online Shop",
  description: "Shoes eCommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${openSans.variable} ${inter.variable}`}
      >
        <Toaster
          toastOptions={{
            style: {
              fontFamily: "'Rubik', sans-serif",
              fontWeight: "bold",
              fontSize: "16px",
            },
          }}
        />
        <Providers>
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
