import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Drummonds International - Professional Auditing & VAT Services in Bahrain",
  description:
    "Expert auditing, accounting, and VAT services in Bahrain. Chartered Accountants and Business Advisors helping businesses grow and comply.",
  icons: {
    icon: "/favicon_1.png"}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              
              // Scroll to top on page load
              window.addEventListener('load', () => {
                window.scrollTo(0, 0);
              });
              
              // Scroll to top on navigation (for Next.js routing)
              let lastUrl = location.href;
              new MutationObserver(() => {
                const url = location.href;
                if (url !== lastUrl) {
                  lastUrl = url;
                  window.scrollTo(0, 0);
                }
              }).observe(document, { subtree: true, childList: true });
              
              // Fallback for beforeunload
              window.addEventListener('beforeunload', () => {
                window.scrollTo(0, 0);
              });
              
              // Additional fallback for popstate (browser back/forward)
              window.addEventListener('popstate', () => {
                setTimeout(() => window.scrollTo(0, 0), 0);
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
