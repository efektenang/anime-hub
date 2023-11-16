import AnimeList from "./components/AnimeList";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
  return (
    <div>
      <h1 className="font-bold text-xl p-6">Paling Populer</h1>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {anime.data.map(data => {
        return (
          <div key={data.mal_id} className="shadow-xl">
            <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
          </div>
        )
      })}
      </div>
    </div>
  )
}
