import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PlaceholderCardComp from "../../components/placeholderComp/PlaceholderCardComp";
const useArtistsPage = () => {
  let token = sessionStorage.getItem("token");

  let artist = null;
  let { state } = useLocation();
  if (state) {
    artist = state.artist;
  }

  let [artistsListState, setArtistsListState] = useState([]);
  let hasMoreArtist = useRef(true);
  let limit = useRef(8);
  let lastArtistIdInPrevReq = useRef(null);
  let [placeholderCardList, setPlaceholderCardList] = useState([]);

  const recordLastArtist = useCallback(
    (json) => {
      lastArtistIdInPrevReq.current =
        json.artists.items[json.artists.items.length - 1].id;
    },
    [lastArtistIdInPrevReq]
  );

  const generatePlaceHolder = () => {
    let list = [];
    list.push(<PlaceholderCardComp key={1} />);
    return list;
  };
  const getFollowedArtists = useCallback(() => {
    if (hasMoreArtist.current) {
      setPlaceholderCardList(generatePlaceHolder());
      let url = "";
      if (lastArtistIdInPrevReq.current) {
        url = `artists/getFollowedArtists?limit=${limit.current}&after=${lastArtistIdInPrevReq.current}&token=${token}`;
      } else {
        url = `artists/getFollowedArtists?limit=${limit.current}&token=${token}`;
      }
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          let numOfArtists = json.artists.items.length;
          if (numOfArtists < limit.current) {
            hasMoreArtist.current = false;
          } else {
            hasMoreArtist.current = true;
            recordLastArtist(json);
          }
          setPlaceholderCardList([]);
          setArtistsListState((prevArtistList) => {
            return [...prevArtistList, ...json.artists.items];
          });
        });
    }

    // if (hasMoreArtist.current) {
    //   setPlaceholderCardList(generatePlaceHolder());
    //   let url = "";
    //   if (lastArtistIdInPrevReq.current) {
    //     url = `artists/getFollowedArtists?limit=${limit.current}&after=${lastArtistIdInPrevReq.current}&token=${token}`;
    //   } else {
    //     url = `artists/getFollowedArtists?limit=${limit.current}&token=${token}`;
    //   }
    //   fetch(url)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((json) => {
    //       console.log(json);
    //       offset.current += limit.current;
    //       console.log(
    //         "offset is ",
    //         offset.current,
    //         "total is ",
    //         json.artists.total
    //       );
    //       if (offset.current < json.artists.total) {
    //         hasMoreArtist.current = true;
    //       } else {
    //         hasMoreArtist.current = false;
    //       }
    //       recordLastArtist(json);
    //       setPlaceholderCardList([]);
    //       setArtistsListState((prevArtistList) => {
    //         return [...prevArtistList, ...json.artists.items];
    //       });
    //     });
    // }
  }, [hasMoreArtist, lastArtistIdInPrevReq, token]);

  useEffect(() => {
    if (!artist) {
      getFollowedArtists();
    }
  }, [token]);

  return [artist, artistsListState, placeholderCardList, getFollowedArtists];
};

export default useArtistsPage;
