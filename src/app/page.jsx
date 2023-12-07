import AnimeList from "@/components/AnimeList";
import { HeaderList } from "@/components/HeaderList";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

export default async function Home() {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 8)
  
  return (
    <div>
      <section>
        <HeaderList
          title="Paling Populer"
          link="/populer"
          linkTitle="Lihat semua"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <HeaderList
          title="Rekomendasi"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </div>
  );
}
