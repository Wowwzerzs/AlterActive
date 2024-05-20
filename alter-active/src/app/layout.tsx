"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider>
            <main>
          {children}
          </main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
