import Header from "@/components/header";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Journally - Your Digital Journaling Companion",
  description:
    "A sleek and efficient journaling application to capture your thoughts, memories and reflections in a beautiful digital space.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://journally01.vercel.app",
    title: "Journally - Your Digital Journaling Companion",
    description:
      "A sleek and efficient journaling application to capture your thoughts, memories and reflections in a beautiful digital space.",
    siteName: "Journally",
    images: [
      {
        url: "https://journally01.vercel.app/Experiments.svg",
        inlineSize: 1200,
        blockSize: 630,
        alt: "Journally - Your Digital Journaling Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journally - Your Digital Journaling Companion",
    description:
      "A sleek and efficient journaling application to capture your thoughts, memories and reflections in a beautiful digital space.",
    creator: "@01shrvan",
    images: ["https://journally01.vercel.app/Experiments.svg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FBD38D",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${quicksand.className} text-orange-900`}>
          <div
            className="bg-[url('/bg.jpg')] fixed -z-10 inset-0"
            style={{ opacity: 0.2 }}
            en
          />
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-orange-200 py-6 bg-opacity-10 flex justify-between items-center px-4">
            <div className="text-left">
              <p>Capture your thoughts, one day at a time.</p>
            </div>
            <div className="text-right">
              Made with <span className="text-orange-900">&#10084;</span> by{" "}
              <a
                href="https://x.com/01shrvan"
                className="relative font-medium hover:text-orange-900 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange-900 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                rel="noopener noreferrer"
                aria-label="Creator's Twitter profile"
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
