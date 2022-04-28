import { useState, useRef, useEffect } from "react";

const usePlaylist = (playlist) => {
  let userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const getPlaylistTracks = () => {
    let country = userProfile.country;
    fetch(
      `/playlist/getPlaylistItems?playlistId=${playlist.id}&market=${country}&limit=${limit.current}&offset=${offset.current}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        offset.current += limit.current;
        if (offset.current < json.total) {
          hasMorePlaylistItems.current = true;
        } else {
          hasMorePlaylistItems.current = false;
        }
        setPlaylistTrackState(json.items);
      });
  };

  const getMorePlaylistTracks = () => {
    console.log("getMorePlaylistTracks reached");
    if (hasMorePlaylistItems.current) {
      let country = userProfile.country;
      fetch(
        `/playlist/getPlaylistItems?playlistId=${playlist.id}&market=${country}&limit=${limit.current}&offset=${offset.current}`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          offset.current += limit.current;
          if (offset.current < json.total) {
            hasMorePlaylistItems.current = true;
          } else {
            hasMorePlaylistItems.current = false;
          }
          setPlaylistTrackState((prevTracks) => {
            return [...prevTracks, ...json.items];
          });
        });
    }
  };

  let hasMorePlaylistItems = useRef(true);
  let offset = useRef(0);
  let limit = useRef(40);
  let [coverBackgroundImageState, setCoverBackgroundImageState] = useState("");
  let [
    playlistOverviewBackgroundImageState,
    setPlaylistOverviewBackgroundImageState,
  ] = useState("");
  let [playlistTrackState, setPlaylistTrackState] = useState(null);

  useEffect(() => {
    setCoverBackgroundImageState(playlist.images[0].url);
    setPlaylistOverviewBackgroundImageState(playlist.images[0].url);
  }, [playlist]);

  return [
    coverBackgroundImageState,
    playlistOverviewBackgroundImageState,
    playlistTrackState,
    hasMorePlaylistItems.current,
    getPlaylistTracks,
    getMorePlaylistTracks,
  ];
};

export default usePlaylist;