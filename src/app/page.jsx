import AnimeList from "@/components/AnimeList";
import { HeaderList } from "@/components/HeaderList";
import { getAnimeResponse } from "./libs/api-libs";

export default async function Home() {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8')
  return (
    <div>
      <HeaderList title='Paling Populer' link='/populer' linkTitle='Lihat semua' />
      <AnimeList api={topAnime} />
    </div>
  )
}
