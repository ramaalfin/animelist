import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-color-primary text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="hover:text-color-accent text-color-primary text-sm underline transition-all md:text-xl"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
