import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

export default async function DetailAnime({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <section className="body-font overflow-hidden text-color-primary">
      <div className="container mx-auto px-5 py-6 md:py-10">
        <div className="mx-auto grid lg:flex">
          <img
            alt="ecommerce"
            className="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
            src={anime.data.images?.webp.image_url}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 className="title-font text-sm tracking-widest text-color-primary">
              {anime.data.genres?.map((genre) => genre.name).join(", ")}
            </h2>
            <h1 className="title-font mb-1 text-3xl font-medium text-color-primary">
              {anime.data.title}
            </h1>
            <div className="mb-4 flex">
              <span className="flex items-center">
                <span className=" text-color-primary">
                  Score : {anime.data.score} of {anime.data.scored_by}
                </span>
              </span>
            </div>
            <div className="mb-4 flex">
              <span className="flex items-center">
                <span className=" text-color-primary">
                  Episode : {anime.data.episodes}
                </span>
              </span>
            </div>
            <div className="mb-4 flex">
              <span className="flex items-center">
                <span className=" text-color-primary">
                  Status : {anime.data.status}
                </span>
              </span>
            </div>
            <div className="mb-4 flex">
              <span className="flex items-center">
                <span className=" text-color-primary">
                  Published : {anime.data.year ? anime.data.year : "-"}
                </span>
              </span>
            </div>

            <div className="">
              <h3>Synopsis: </h3>
              <p className="leading-relaxed">{anime.data.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
      <VideoPlayer youtube_id={anime.data.trailer.youtube_id} />
    </section>
  );
}
