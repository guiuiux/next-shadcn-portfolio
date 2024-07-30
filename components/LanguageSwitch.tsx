"use client";
import Icon from "@/components/Icon";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const LanguageSwitch = () => {
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // Replace the locale part of the path
    const newPath = segments.join("/");
    window.location.href = newPath; // Use window.location.href to navigate to the new path
  };

  return (
    <div className="flex flex-row items-center">
        <Button onClick={() => changeLanguage("pt")} variant="ghost">
      <Icon name="braflag" size={24} onClick={() => changeLanguage("pt")} />
      {/* Brazilian Flag Icon */}
      </Button>
      /

      
      <Button onClick={() => changeLanguage("en")} variant="ghost">
        <Icon name="usaflag" size={24} />
        {/* Brazilian Flag Icon */}
        {/* USA Flag Icon */}
      </Button>
    </div>
  );
};

export default LanguageSwitch;
