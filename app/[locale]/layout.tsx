import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import ThemeProvider from '@/components/ThemeProvider';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "g ui/ux",
  description: "UI / UX Designer Portfolio",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await import(`../../messages/${locale}.json`).then((module) => module.default);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <Analytics />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
