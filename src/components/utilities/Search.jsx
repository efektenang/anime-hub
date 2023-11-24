'use client'

import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function Search() {
  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (e) => {
    const keyword = searchRef.current.value

    if (!keyword) return

    if (e.key === "Enter" || e.type === 'click') {
      e.preventDefault()
      router.push(`/search/${keyword}`)
    }
  }

  return (
      <>
        <div className="join">
            <input className="input md:input-md input-sm input-bordered join-item w-[125px]" ref={searchRef} placeholder="Search" onKeyDown={handleSearch} />
            <button onClick={handleSearch} className="btn md:btn-md btn-sm join-item"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
        </div>
      </>
  )
}