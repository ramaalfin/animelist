import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-lib";
import prisma from "@/libs/prisma";
import Link from "next/link";

export default async function Comment() {
  const user = await authUserSession();

  const comments = await prisma.comment.findMany({
    where: {
      user_email: user?.email,
    },
  });

  return (
    <section className="mt-4">
      <Header titleHeader="My Comments" />

      {comments.length === 0 && (
        <p className="mt-4 text-color-primary">No comments yet</p>
      )}

      {comments.map((data, index) => {
        return (
          <Link
            href={`/anime/${data.anime_mal_id}`}
            className="mt-4 grid grid-cols-1 gap-4 "
          >
            <div
              className="relative rounded bg-white p-2 text-color-dark"
              key={index}
            >
              <p className="text-base">Anime: {data.anime_title}</p>
              <p className="text-base">Comment: {data.comment}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
