import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid gap-4 text-center">
        <h1 className="text-color-primary text-4xl font-bold">404 Not Found</h1>
        <Link
          href="/"
          className="text-color-primary hover:text-color-accent underline transition-all md:text-xl"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
