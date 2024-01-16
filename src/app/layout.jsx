import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"], weights: [400, 700] });

export const metadata = {
  title: "My Anime List",
  description: "website anime list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
