import { useState, useEffect } from "react";

const useAlbumDetail = (album) => {
  const userProfileState = JSON.parse(localStorage.getItem("userProfile"));

  let [coverBackgroundImageState, setCoverBackgroundImageState] = useState("");
  let [
    albumOverviewBackgroundImageState,
    setAlbumOverviewBackgroundImageState,
  ] = useState("");
  let [trackListState, setTrackListState] = useState([]);

  useEffect(() => {
    let tracks = [];
    try {
      tracks = album.tracks.items;
      setTrackListState(tracks);
    } catch {
      fetch(
        `/album/getAlbum?albumId=${album.id}&market=${userProfileState.country}`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setTrackListState(json.tracks.items);
        });
    }
    setCoverBackgroundImageState(album.images[1].url);
    setAlbumOverviewBackgroundImageState(album.images[0].url);
  }, [album]);

  return [
    trackListState,
    album.id,
    coverBackgroundImageState,
    albumOverviewBackgroundImageState,
  ];
};

export default useAlbumDetail;
