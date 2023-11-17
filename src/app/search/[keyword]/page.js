import AnimeList from "@/components/AnimeList";
import { HeaderList } from "@/components/HeaderList";

export default async function SearchPage({ params }) {
  const {keyword} = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const result = await response.json()
  const keywordTitle = keyword.replaceAll('%20', ' ')

  return (
    <div>
      <HeaderList title={`Pencarian untuk '${keywordTitle}'`} />
      <AnimeList api={result} />
    </div>
  )
}