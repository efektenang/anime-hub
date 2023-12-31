import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/context/Provider";
import Navbar from "@/components/utilities/Navbar";
import Footer from "@/components/utilities/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Hub App",
  description: "Website streaming nonton anime gratis!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <Provider>
        <body className={inter.className}>
          <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <div className="mb-auto">{children}</div>
            <Footer />
          </div>
        </body>
      </Provider>
    </html>
  );
}
