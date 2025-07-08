// app/layout.tsx
import Loading from "@/components/menu/shared/Loading";
import Script from "next/script";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>OrioNN QR Menu</title>
        <link rel="shortcut icon" href="/assets/images/orionn_dev_logo.jpg" />
        <link rel="stylesheet" href="/assets/css/libs.min.css" />
        <link rel="stylesheet" href="/assets/css/nairobi.css?v=1.0.0" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </head>
      <body className=" ">
        <LanguageProvider>
          <Loading />
          {children}
        </LanguageProvider>
        {/* Scriptler */}
        <Script src="/assets/js/libs.min.js" strategy="beforeInteractive" />
        <Script
          src="/assets/js/charts/widgetcharts.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/charts/dashboard.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/fslightbox.js" strategy="afterInteractive" />
        <Script src="/assets/js/app.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/charts/apexcharts.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/countdown.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
