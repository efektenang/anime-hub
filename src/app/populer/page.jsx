'use client'

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";

export default function Populer() {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const result = await response.json()
    setTopAnime(result)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div>
      <HeaderMenu title={`Anime Terpopuler #${page}`}/>
      <AnimeList api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </div>
  )
}
