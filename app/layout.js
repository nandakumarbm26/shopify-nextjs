import Link from "next/link";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToastContainer from "./components/Toast";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "STOre.",
  description:
    "Join our email list and stay in touch with all things Poketo. We'll send you a code for 10% off your first online purchase!",
  openGraph: {
    images: ["/icons/android-chrome-512x512.png"],
  },
  icons: {
    icon: "/icons/favicon-32x32.png",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icons/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html key="layoutkey" lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
