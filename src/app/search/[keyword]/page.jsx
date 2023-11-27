import AnimeList from "@/components/AnimeList";
import { HeaderList } from "@/components/HeaderList";

export default async function SearchPage({ params }) {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  const result = await response.json()

  return (
    <div>
      <HeaderList title={`Pencarian untuk '${decodedKeyword}'`} />
      <AnimeList api={result} />
    </div>
  )
}