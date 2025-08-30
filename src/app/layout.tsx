import type { Metadata } from "next";
import { DM_Sans, Orbitron } from "next/font/google";

import "./globals.css";

const inter = DM_Sans({
   subsets: ["latin"],
   variable: "--body-font",
   display: "swap",
});
const orbitron = Orbitron({
   subsets: ["latin"],
   variable: "--header-font",
   display: "swap",
});

export const metadata: Metadata = {
   title: {
      template: "%s - Keith's Automotive",
      default: "Keith's Automotive - Complete Car Care Since 1958 | Salt Lake City Auto Repair",
   },
   description: "ASE Certified Master Technicians providing complete car care since 1958. Fast emissions testing, engine repairs, brakes & diagnostics in Salt Lake City, UT.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.variable} ${orbitron.variable}`}>
            {children}
         </body>
      </html>
   );
}
