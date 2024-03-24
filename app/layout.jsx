import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Keith | Developer",
  description: "Keith's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-slate-100">
      <body className={urbanist.className}>
        <Navbar />
       {children}
        <Footer />
      </body>
    </html>
  );
}
