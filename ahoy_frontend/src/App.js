import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumPage from "./page/AlbumPage";
import WelcomePage from "./page/WelcomePage";
import ArtistsPage from "./page/ArtistsPage";
import PlaylistPage from "./page/PlaylistPage";
import TraditionalMusicPlayerPage from "./page/TraditionalMusicPlayerPage";
import RouteProtector from "./RouteProtector";
import SearchPage from "./page/SearchPage";
function App() {
  var [forceUpdate, setForceUpdate] = useState(null);
  // var [userProfileState, setUserProfileState] = useRecoilState(userProfileRecoil)
  // var [deviceId, setDeviceId] = useState(null)

  async function getToken() {
    fetch("/auth/token")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        sessionStorage.setItem("token", json.access_token);
        setForceUpdate(0);
        // setToken(json.access_token)
      });
  }

  async function getUserProfile() {
    fetch("/user/getUserProfile")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // setUserProfileState(json)
        sessionStorage.setItem("userProfile", JSON.stringify(json));
      });
  }

  useEffect(() => {
    getToken();
    getUserProfile();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* <Route element={<RouteProtector />}> */}
        <Route path="/traditional" element={<TraditionalMusicPlayerPage />}>
          <Route exact path="album" element={<AlbumPage />} />
          <Route exact path="artists" element={<ArtistsPage />} />
          <Route exact path="playlist" element={<PlaylistPage />} />
          <Route exact path="search" element={<SearchPage />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
