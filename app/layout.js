import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jose's Portfolio",
  description: "Jose Nunez's Portfolio Check it out!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <header className="header button custom-font w-full flex justify-between items-center p-4 bg-neutral-800">
      <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />      
        <div className="flex-1">
        <button className="text-white hover:text-blue-500 text-xl">
          Jose Nunez</button>
          </div>
          <nav className="flex gap-6 justify-center">
            <button className="text-white hover:text-blue-500 text-xl">
              Resume</button>

            <button className="text-white hover:text-blue-500 text-xl">
              Home</button>

            <button className="text-white hover:text-blue-500 text-xl">
              Socials</button>

          </nav>
          <div className="flex-1 flex justify-end">
            <button className="text-white hover:text-blue-500 text-xl">
              Projects</button>
          </div>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
