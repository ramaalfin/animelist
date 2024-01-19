import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-lib";
import prisma from "@/libs/prisma";

export default async function Collection() {
  const user = await authUserSession();

  const collections = await prisma.collection.findMany({
    where: {
      user_email: user?.email,
    },
  });

  return (
    <section className="mt-4">
      <Header titleHeader="My Collection" />

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {collections.length === 0 && (
          <p className="text-color-primary">No collection yet</p>
        )}
        {collections.map((anime, index) => {
          return (
            <Link
              href={`/anime/${anime.anime_mal_id}`}
              key={index}
              className="relative border-2 border-color-accent"
            >
              <Image
                className="w-full"
                alt="..."
                width={350}
                height={350}
                src={anime.anime_image}
              />
              <div className="absolute bottom-0 flex h-12 w-full items-center justify-center bg-color-accent">
                <h5 className="text-center text-base">{anime.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
