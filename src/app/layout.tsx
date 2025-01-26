import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Reel Pop",
  description: "Mini TikTok Clone",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
