import Link from "next/link";
import { authUserSession } from "@/libs/auth-lib";

export default async function UserActionButton() {
  const user = await authUserSession();
  const buttonLabel = user ? "Sign Out" : "Sign In";
  const buttonLink = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-4">
      {user && <Link href="user/dashboard">Dashboard</Link>}
      <Link href={`${buttonLink}`}>{buttonLabel}</Link>
    </div>
  );
}
