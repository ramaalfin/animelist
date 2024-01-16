import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

export default async function Page() {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry",
  );
  recommendedAnime = reproduce(recommendedAnime, 8);

  return (
    <>
      <section>
        <Header
          title="Paling Popular"
          linkTitle="Lihat semua"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi Anime" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}
