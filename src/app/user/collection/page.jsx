"use client";

import Link from "next/link";
import Image from "next/image";
import CollectionHeader from "@/components/CollectionHeader";
import { useEffect, useState } from "react";
import { getCollect } from "@/libs/api-libs";

export default function Collection() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    const response = await getCollect("/api/v1/collection");
    setCollection(response.result);
  };

  return (
    <section className="w-full">
      <CollectionHeader />
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 m-3">
        {collection?.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/populer/${collect.mal_id}`}
              className="relative border-2 border-sky-900">
              <Image
                src={collect.img_src}
                alt={collect.title_anime}
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
                <h5 className="text-xl text-center text-white m-2">
                  {collect.title_anime}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
