import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ api }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {api.data?.map((anime) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-color-primary transition-all hover:text-color-accent"
            key={anime.mal_id}
          >
            <Image
              src={anime.images.webp.image_url}
              width={350}
              height={350}
              alt="anime"
              className="max-h-64 w-full object-cover"
            ></Image>
            <p className="text-md px-2 py-4 font-bold md:text-xl">
              {anime.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
