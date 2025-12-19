import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import profileData from "@/src/data/profile.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourportfolio.com";

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} - ${profileData.role}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.tagline,
  keywords: [
    ...profileData.skills,
    "portfolio",
    "developer",
    "software engineer",
    profileData.role,
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.tagline,
    siteName: profileData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


