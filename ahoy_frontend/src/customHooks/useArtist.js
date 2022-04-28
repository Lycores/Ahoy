import { useState, useEffect } from "react";
const useArtist = (artist) => {
  const userProfileState = JSON.parse(localStorage.getItem("userProfile"));
  const getArtistTopTrack = () => {
    fetch(
      `/artists/getArtistTopTrack?artistId=${artist.id}&market=${userProfileState.country}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setArtistTopTrackState(json);
      });
  };

  const getArtistAlbums = async () => {
    fetch(
      `/artists/getArtistAlbums?artistId=${artist.id}&market=${userProfileState.country}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setArtistAlbumsState(json);
      });
  };

  var [artistTopTrackState, setArtistTopTrackState] = useState(null);
  var [artistAlbumsState, setArtistAlbumsState] = useState(null);
  var [coverBackgroundImageState, setCoverBackgroundImageState] = useState("");
  var [
    artistOverviewBackgroundImageState,
    setArtistOverviewBackgroundImageState,
  ] = useState("");

  useEffect(() => {
    setCoverBackgroundImageState(artist.images[1].url);
    setArtistOverviewBackgroundImageState(artist.images[0].url);
    getArtistTopTrack();
    getArtistAlbums();
  }, [artist]);

  return [
    artistTopTrackState,
    artistAlbumsState,
    coverBackgroundImageState,
    artistOverviewBackgroundImageState,
  ];
};

export default useArtist;
