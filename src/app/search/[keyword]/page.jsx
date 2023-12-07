import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import { HeaderList } from "@/components/HeaderList";

export default async function SearchPage({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const result = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <div>
      <HeaderList title={`Pencarian untuk '${decodedKeyword}'`} />
      <AnimeList api={result} />
    </div>
  );
}
