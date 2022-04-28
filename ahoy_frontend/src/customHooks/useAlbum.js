import { useState, useEffect } from "react";

const useAlbum = (album) => {
  var [coverBackgroundImageState, setCoverBackgroundImageState] = useState("");
  var [
    albumOverviewBackgroundImageState,
    setAlbumOverviewBackgroundImageState,
  ] = useState("");

  useEffect(() => {
    setCoverBackgroundImageState(album.images[1].url);
    setAlbumOverviewBackgroundImageState(album.images[0].url);
  }, [album]);

  return [album, coverBackgroundImageState, albumOverviewBackgroundImageState];
};

export default useAlbum;
