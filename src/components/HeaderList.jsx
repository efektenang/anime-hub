import Link from "next/link"

export const HeaderList = ({title, linkTitle, link}) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="font-bold text-xl p-6">{title}</h1>
      {
        linkTitle && link ? 
        <Link href={link} className="md:text-md text-sm underline hover:text-indigo-400">{linkTitle}</Link>
        : null
      }
    </div>
  )
}
