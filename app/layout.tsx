import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import AuthProvider from "./_providers/auth";
import { Toaster } from "./_components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rogerio Barber",
  description:
    "Explore a variety of top-rated barbershops and book grooming services effortlessly. Browse barbershops with the most skilled personal and schedule your next service online. Elevate your grooming routine with our platform, connecting you with the best barbershops for a personalized and convenient experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className={`${inter.className} dark`}>
        <AuthProvider>
          <div className="flex-1">{children}</div>
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
