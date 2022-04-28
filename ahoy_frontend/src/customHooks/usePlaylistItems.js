import { useState, useRef } from "react";

const usePlaylistItems = (playlist, userProfile) => {
  let hasMorePlaylistItems = useRef(true);
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

  return [
    playlistTrackState,
    hasMorePlaylistItems.current,
    getPlaylistTracks,
    getMorePlaylistTracks,
  ];
};

export default usePlaylistItems;
