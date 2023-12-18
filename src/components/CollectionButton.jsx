"use client";

import { BookmarkSimple } from "@phosphor-icons/react";
import { useState } from "react";

const CollectionButton = ({ mal_id, user_email, isCollection }) => {
  const [isCollect, setIsCollect] = useState(isCollection);

  const addHandle = async (e) => {
    e.preventDefault();

    const data = { mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response) {
      setIsCollect(true);
    }
    return;
  };

  const deleteHandle = async (e) => {
    e.preventDefault();
    
    const data = { mal_id, user_email };

    const deleteCollection = await fetch("/api/v1/delete-collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
      
      if (deleteCollection) {
        setIsCollect(false)
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
