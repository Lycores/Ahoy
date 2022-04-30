import { useCallback, useEffect, useRef, useState } from "react";

const useSearch = () => {
  let userProfileState = JSON.parse(localStorage.getItem("userProfile"));
  let [searchBarWidth, setSearchBarWidth] = useState(150);
  let query = useRef(null);
  let offset = useRef(0);
  let limit = useRef(20);

  const searchBarInputRef = useRef(null);

  const extendSearchBarForDesktopOrTablet = useCallback(() => {
    setSearchBarWidth(400);
  }, []);

  const extendSearchBarForMobile = useCallback(() => {
    setSearchBarWidth(window.innerWidth - 2 * 30);
  }, []);

  const withdrawSearchBarForDesktopOrTablet = useCallback(() => {
    setSearchBarWidth(150);
    searchBarInputRef.current.blur();
  }, []);

  const withdrawSearchBarForMobile = useCallback(() => {
    setSearchBarWidth(150);
    searchBarInputRef.current.blur();
  }, []);

  const handleSearch = (e) => {
    query.current = e.target.value;
    fetch(
      `/search/search?query=${query.current}&type=track,artist&market=${userProfileState.country}&offset=${offset.current}&limit=${limit.current}`
    );
  };

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
