export default function Pagination({ page, lastPage, setPage }) {
  const autoScroll = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    autoScroll()
  }
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    autoScroll()
  }
  return (
    <div className="flex justify-center py-3">
      <div className="join">
        <button onClick={handlePrevPage} className="join-item btn">«</button>
        <button className="join-item btn">{page} of {lastPage}</button>
        <button onClick={handleNextPage} className="join-item btn">»</button>
      </div>
    </div>
  )
}