"use client";

import { BookmarkSimple } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CollectionButton = ({ mal_id, user_email, title_anime, img_src, isCollection }) => {
  const [isCollect, setIsCollect] = useState(isCollection);
  const router = useRouter()

  const addHandle = async (e) => {
    e.preventDefault();

    const data = { mal_id, user_email, title_anime, img_src };
    if (data.user_email == undefined) return alert("Anda harus Login terlebih dahulu!");

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response) {
      setIsCollect(true);
      router.refresh()
    }
    return alert('Berhasil menambahkan ke koleksi!')
  };

  const deleteHandle = async (e) => {
    e.preventDefault();

    const data = { mal_id, user_email };
    if (data.user_email == undefined) return alert("Anda harus Login terlebih dahulu!");

    const deleteCollection = await fetch("/api/v1/collection", {
      method: "DELETE",
      body: JSON.stringify(data),
    });

    if (deleteCollection) {
      setIsCollect(false);
      router.refresh()
    }

    return;
  };

  return (
    <div>
      {isCollect ? (
        <button onClick={deleteHandle} className="mx-2">
          <BookmarkSimple size={30} color="#e6c700" weight="fill" />
        </button>
      ) : (
        <button onClick={addHandle} className="mx-2">
          <BookmarkSimple size={30} color="#e6c700" weight="bold" />
        </button>
      )}
    </div>
  );
};

export default CollectionButton;
