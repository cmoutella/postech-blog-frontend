import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/ui/components/navbar";
import { AllProviders } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Blog",
  description: "Blog educativo para estudantes de desenvolvimento de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-screen h-screen ${GeistSans.className} bg-gray-100`}>
        <div className="w-full">
          <AllProviders>
            <div className="w-full">{children}</div>
          </AllProviders>
        </div>
      </body>
    </html>
  );
}
