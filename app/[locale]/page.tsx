"use client";

import { useTranslations } from 'next-intl';
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className='flex justify-center'>
    <div className='flex flex-col px-2 md:px-14 max-w-container w-full'>
      <LanguageSwitch />
      <ThemeToggle />
      <h1>{t('title')}</h1>
    </div>
    </main>
  );
}
