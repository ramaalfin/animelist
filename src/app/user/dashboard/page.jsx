import { authUserSession } from "@/libs/auth-lib";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard() {
  const user = await authUserSession();

  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <p className="text-color-primary">Welcome {user.name}</p>
      <Image src={user.image} alt="..." width={300} height={200}></Image>
      <div className="mt-4 flex flex-wrap gap-4">
        <Link
          href="dashboard/collection"
          className="rounded bg-color-accent px-4 py-2"
        >
          Collection
        </Link>
        <Link
          href="dashboard/comment"
          className="rounded bg-color-accent px-4 py-2"
        >
          Comment
        </Link>
      </div>
    </div>
  );
}
