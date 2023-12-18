import { getAnimeResponse } from "@/libs/api-libs";
import { Card } from "@/components/utilities/Card";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

export default async function Details({ params: { animeId } }) {
  const anime = await getAnimeResponse(`anime/${animeId}`)
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({
    where: { mal_id: animeId }
  })
  
  return (
    <>
      <Card api={anime} animeId={animeId} user_email={user?.email} collection={collection}  />
    </>
  );
}
