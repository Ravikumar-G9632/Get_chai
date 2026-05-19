import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Components/provider.js";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a chai ",
  description: "app create for showcase the skills and get some funds ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="max-w-screen overflow-x-hidden text-white flex flex-col bg-slate-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
