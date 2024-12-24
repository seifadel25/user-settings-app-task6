import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import "../globals.css";
import { getLangDir } from "rtl-detect";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}
export default async function RootLayout(props: LayoutProps) {
  const { children, params } = props;

  const { locale } = await params;
  const direction = getLangDir(locale);

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const messages = await getMessages({ locale });
  return (
    <html lang={locale} dir={direction}>
      <body className=" font-tajawal">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
