import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journally",
  description: "A sleek and efficient journaling application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} text-orange-900`}>
          <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-orange-200 py-6 bg-opacity-10 flex justify-between items-center px-4">
            <div className="text-left">
              <p>
                Capture your thoughts, one day at a time.
              </p>
            </div>
            <div className="text-right">
              Made with <span className="text-orange-900">&#10084;</span> by{" "}
              <a
                href="https://x.com/01shrvan"
                className="relative font-medium hover:text-orange-900 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-900 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                shrvan
              </a>
              !
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
