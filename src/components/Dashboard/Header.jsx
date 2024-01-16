"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({ titleHeader }) {
  const router = useRouter();

  const handleBackButton = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex items-center gap-2 text-color-primary">
      <span className="cursor-pointer font-light" onClick={handleBackButton}>
        Back
      </span>
      <span>/</span>
      <p className="text-base font-semibold text-color-primary">
        {titleHeader}
      </p>
    </div>
  );
}
