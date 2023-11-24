import AnimeList from "@/components/AnimeList";
import { HeaderList } from "@/components/HeaderList";

export default async function Populer() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
    const result = await response.json()
    return (
      <div>
          <HeaderList title='Semua yang terpopuler' />
          <AnimeList api={result} />
      </div>
  )
}
