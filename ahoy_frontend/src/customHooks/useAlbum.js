import { useState, useEffect } from "react";

const useAlbum = (album) => {
  let [coverBackgroundImageState, setCoverBackgroundImageState] = useState("");
  let [
    albumOverviewBackgroundImageState,
    setAlbumOverviewBackgroundImageState,
  ] = useState("");

  useEffect(() => {
    setCoverBackgroundImageState(album.images[1].url);
    setAlbumOverviewBackgroundImageState(album.images[0].url);
  }, [album]);

  return [
    album.tracks.items,
    album.id,
    coverBackgroundImageState,
    albumOverviewBackgroundImageState,
  ];
};

export default useAlbum;
