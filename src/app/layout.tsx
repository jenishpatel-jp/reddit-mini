import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reddit Mini",
  description: "Reddit mini app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="h-screen overflow-y-scroll bg-slate-200" >
            <main> {children} </main>
          </div>
        </NextAuthProvider>
      </body>
    </html>
    </>
  );
}
