import AnimeList from "@/components/AnimeList";
import { HeaderList } from "@/components/HeaderList";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  return (
    <div>
      <HeaderList title='Paling Populer' link='/populer' linkTitle='Lihat semua' />
      <AnimeList api={topAnime} />
    </div>
  )
}
