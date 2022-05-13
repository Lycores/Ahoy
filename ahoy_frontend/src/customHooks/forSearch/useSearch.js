import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../utilHooks/useDebounce";

const searchBarDefaultWidth = 220;
const useSearch = () => {
  let userProfileState = JSON.parse(sessionStorage.getItem("userProfile"));
  let [searchBarWidth, setSearchBarWidth] = useState(searchBarDefaultWidth);
  let searchResult = useRef(null);
  let [query, setQuery] = useState(null);

  let offset = useRef(0);
  let limit = useRef(5);
  let abortController = useRef(null);
  let navigate = useNavigate();

  const searchBarInputRef = useRef(null);
  let token = sessionStorage.getItem("token");

  const extendSearchBarForDesktopOrTablet = useCallback(() => {
    setSearchBarWidth(400);
  }, []);

  const extendSearchBarForMobile = useCallback(() => {
    setSearchBarWidth(window.innerWidth - 2 * 30);
  }, []);

  const withdrawSearchBarForDesktopOrTablet = useCallback(() => {
    setSearchBarWidth(searchBarDefaultWidth);
  }, []);

  const withdrawSearchBarForMobile = useCallback(() => {
    setSearchBarWidth(searchBarDefaultWidth);
  }, []);

  const cancelRequest = () => {
    if (abortController.current) {
      abortController.current.abort();
    }
  };

  const goToSearchPage = useCallback(() => {
    navigate("/traditional/search", {
      state: {
        result: searchResult.current,
        query: query,
      },
    });
  }, [searchResult.current, query]);

  const handleSearch = (e) => {
    cancelRequest();
    setQuery(e.target.value);
  };

  useDebounce(
    () => {
      abortController.current = new AbortController();
      let signal = abortController.current.signal;
      fetch(
        `/search/search?query=${query}&type=track,artist&market=${userProfileState.country}&offset=${offset.current}&limit=${limit.current}&token=${token}`,
        { signal }
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          searchResult.current = json;
          goToSearchPage();
        });
    },
    300,
    [query]
  );

  return [
    searchBarWidth,
    searchBarInputRef,
    extendSearchBarForDesktopOrTablet,
    extendSearchBarForMobile,
    withdrawSearchBarForDesktopOrTablet,
    withdrawSearchBarForMobile,
    handleSearch,
  ];
};

export default useSearch;
