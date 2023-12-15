import Link from "next/link";
import Image from "next/image";
import CollectionHeader from "@/components/CollectionHeader";

export default function Collection() {
  return (
    <section className="w-full">
      <CollectionHeader />
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 m-3">
        <Link href="/" className="relative border-2 border-sky-900">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
            <h5 className="text-xl text-center text-white m-2">Judul</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-sky-900">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
            <h5 className="text-xl text-center text-white m-2">Judul</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-sky-900">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
            <h5 className="text-xl text-center text-white m-2">Judul</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-sky-900">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
            <h5 className="text-xl text-center text-white m-2">Judul</h5>
          </div>
        </Link>
      </div>
    </section>
  );
}
