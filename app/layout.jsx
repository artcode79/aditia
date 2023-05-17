/** @format */

import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

const Meta = {
  title: "Next.js Starter Kit",
  description: "Next.js Starter Kit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SiAkAD</title>
        <meta name="author" content="Mateusz Kowalski" />
        <meta name="robots" content="follow, index" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-light">
        <main>{children}</main>

        <script
          async
          src="https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js"
          crossOrigin="anonymous"
        ></script>

        <script
          async
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
          integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
          integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/js/tabler.min.js"
        ></script>
      </body>
    </html>
  );
}
