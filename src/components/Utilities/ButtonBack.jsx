"use client";

import { useRouter } from "next/navigation";

export default function ButtonBack() {
  const router = useRouter();

  const handleBackButton = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <button
      className="text-color-primary underline transition-all hover:text-color-accent md:text-xl"
      onClick={handleBackButton}
    >
      Kembali
    </button>
  );
}
