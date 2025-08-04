import Footer from '@/components/partials/footer';
import Header from '@/components/partials/header';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-brand-dark text-brand-text font-sans antialiased flex flex-col">
        <Header />

        <main className="flex-1">
          <Main />
        </main>

        <Footer />

        <NextScript />
      </body>
    </Html>
  );
}
