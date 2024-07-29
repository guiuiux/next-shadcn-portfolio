// components/SocialProof.tsx
import Image from "next/image";

const logos = [
  { id: 1, src: "/placeholder.png", alt: "Company Logo 1" },
  { id: 2, src: "/placeholder.png", alt: "Company Logo 2" },
  { id: 3, src: "/placeholder.png", alt: "Company Logo 3" },
];

export function SocialProof() {
  return (
    <div className="flex space-x-4">
      {logos.map((logo) => (
        <Image
          key={logo.id}
          src={logo.src}
          alt={logo.alt}
          width={56}
          height={56}
          className="object-contain"
        />
      ))}
    </div>
  );
}
