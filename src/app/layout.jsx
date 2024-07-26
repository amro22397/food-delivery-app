import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
      </head>
      <body className={inter.className}>
        <main className="max-w-6xl mx-auto p-4">

        <Header />

        {children}

        <footer className="border-t p-8 text-center text-gray-500
      mt-16">
        &copy; {new Date().getFullYear()} All rights reserved
      </footer>

        </main>
        </body>
    </html>
  );
}
