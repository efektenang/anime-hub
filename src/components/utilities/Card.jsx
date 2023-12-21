"use client";

import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import CollectionButton from "../CollectionButton";

export const Card = ({ animeId, api, user_email, collection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const videoHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mx-4 my-4">
        <figure className="w-full">
          <img src={api.data.images.webp.image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title md:text-2xl">
            {api.data.title} - {api.data.year}
          </h2>
          <div className="flex md:flex-row flex-col">
            <div className="badge badge-success m-1 py-2">
              Rank #{api.data.rank}
            </div>
            <div className="badge badge-warning m-1 py-2">
              ⭐ {api.data.score}
            </div>
            <div className="badge badge-error m-1 py-2">{api.data.rating}</div>
            <CollectionButton
              mal_id={animeId}
              user_email={user_email}
              title_anime={api.data.title}
              img_src={api.data.images.webp.image_url}
              isCollection={ collection && user_email ? true : false}
            />
          </div>
          <p>{api.data.synopsis}</p>
          <div className="card-actions justify-end">
            <button onClick={videoHandler} className="btn btn-primary">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div>
          <VideoPlayer youtubeId={api.data.trailer.youtube_id} />
        </div>
      ) : null}
    </>
  );
};
