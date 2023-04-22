/** @format */

import "./globals.css";

import "bootstrap/dist/css/bootstrap.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SIakAd</title>
        <meta
          name="description"
          content="ini adalah Sistem Informasi Akademik"
        />
      </head>
      <body>
        {children}
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
        <script
          async
          src="https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js"
        ></script>
      </body>
    </html>
  );
}
