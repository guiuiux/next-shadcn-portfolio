"use client";

import { useTranslations } from 'next-intl';
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <LanguageSwitch />
      <ThemeToggle />
      <h1>{t('title')}</h1>
    </div>
  );
}
