import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from 'next/image'

export default async function Details({ params: { animeId } }) {
    const anime = await getAnimeResponse(`anime/${animeId}`)
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-4 my-4">
                <figure className="md:w-full"><img src={anime.data.images.webp.image_url} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title md:text-2xl">{anime.data.title} - {anime.data.year}</h2>
                    <div className="flex flex-row">
                        <div className="badge badge-success mx-1 py-2">Rank #{anime.data.rank}</div>
                        <div className="badge badge-warning mx-1 py-2">⭐ {anime.data.score}</div>
                        <div className="badge badge-error mx-1 py-2">{anime.data.rating}</div>
                    </div>
                    <p>{anime.data.synopsis}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </>
    )
}