import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "My Next App",
  description: "Admin Panel Demo",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    <body className="styles.body">
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
