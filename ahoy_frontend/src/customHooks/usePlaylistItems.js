import { useState, useRef } from "react";

const usePlaylistItems = (playlist, userProfile) => {
  let hasMorePlaylistItems = useRef(true);
  let isLoading = useRef(false);
  let offset = useRef(0);
  let limit = useRef(40);
  var [playlistTrackState, setPlaylistTrackState] = useState(null);
  const getPlaylistTracks = () => {
    let country = userProfile.country;
    fetch(
      `/playlist/getPlaylistItems?playlistId=${playlist.id}&market=${country}&limit=${limit.current}&offset=${offset.current}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (offset.current + 1 + limit.current < json.total) {
          hasMorePlaylistItems.current = true;
        } else {
          hasMorePlaylistItems.current = false;
        }
        setPlaylistTrackState(json.items);
        console.log(json);
      });
  };

  const getMorePlaylistTracks = () => {
    console.log("getMorePlaylistTracks reached");
    if (hasMorePlaylistItems.current) {
      offset.current = limit.current;
      let country = userProfile.country;
      fetch(
        `/playlist/getPlaylistItems?playlistId=${playlist.id}&market=${country}&limit=${limit.current}&offset=${offset.current}`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          if ((offset.current + 1) * limit.current < json.total) {
            hasMorePlaylistItems.current = true;
          } else {
            hasMorePlaylistItems.current = false;
          }
          setPlaylistTrackState((prevTracks) => {
            console.log(json);
            return [...prevTracks, ...json.items];
          });
          console.log(json);
        });
    }
  };

  return [
    playlistTrackState,
    hasMorePlaylistItems.current,
    isLoading.current,
    getPlaylistTracks,
    getMorePlaylistTracks,
  ];
};

export default usePlaylistItems;
