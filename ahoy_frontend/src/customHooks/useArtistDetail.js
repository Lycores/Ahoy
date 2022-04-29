import { useState, useEffect, useRef } from "react";
const useArtistDetail = (artist) => {
  let userProfileState = JSON.parse(localStorage.getItem("userProfile"));
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
    if (hasMoreAlbumForArtist.current) {
      fetch(
        `/artists/getArtistAlbums?artistId=${artist.id}&limit=${limit.current}&offset=${offset.current}&market=${userProfileState.country}`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          offset.current += limit.current;
          if (offset.current < json.total) {
            hasMoreAlbumForArtist.current = true;
          } else {
            hasMoreAlbumForArtist.current = false;
          }
          setArtistAlbumsState((prevAlbums) => {
            return [...prevAlbums, ...json.items];
          });
        });
    }
  };

  let [artistTopTrackState, setArtistTopTrackState] = useState(null);
  let [artistAlbumsState, setArtistAlbumsState] = useState([]);
  let [coverBackgroundImageState, setCoverBackgroundImageState] = useState("");
  let [
    artistOverviewBackgroundImageState,
    setArtistOverviewBackgroundImageState,
  ] = useState("");

  let hasMoreAlbumForArtist = useRef(true);
  let offset = useRef(0);
  let limit = useRef(10);

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
    getArtistAlbums,
  ];
};

export default useArtistDetail;
