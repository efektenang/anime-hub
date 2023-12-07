import { getAnimeResponse } from "@/libs/api-libs";
import { Card } from "@/components/utilities/Card";

export default async function Details({ params: { animeId } }) {
  const anime = await getAnimeResponse(`anime/${animeId}`);
  return (
    <>
      <Card api={anime} />
    </>
  );
}
