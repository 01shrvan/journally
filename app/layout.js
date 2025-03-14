import Header from "@/components/header";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Journally - Your Digital Journaling Companion",
  description:
    "A sleek and efficient journaling application to capture your thoughts, memories, and reflections in a beautiful digital space.",
  keywords:
    "journal, diary, daily journal, digital journal, writing, reflection, personal growth, mindfulness",
  authors: [{ name: "shrvan", url: "https://x.com/01shrvan" }],
  creator: "shrvan",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#e8a87c" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://journally.app",
    title: "Journally - Your Digital Journaling Companion",
    description:
      "A sleek and efficient journaling application to capture your thoughts, memories, and reflections in a beautiful digital space.",
    siteName: "Journally",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Journally - Your Digital Journaling Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journally - Your Digital Journaling Companion",
    description:
      "A sleek and efficient journaling application to capture your thoughts, memories, and reflections in a beautiful digital space.",
    creator: "@01shrvan",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FBD38D", 
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${quicksand.className} text-orange-900`}>
          <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0" />

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
                className="relative font-medium hover:text-orange-900 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-900 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
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
