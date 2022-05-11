import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumPage from "./page/AlbumPage";
import WelcomePage from "./page/WelcomePage";
import ArtistsPage from "./page/ArtistsPage";
import PlaylistPage from "./page/PlaylistPage";
import TraditionalMusicPlayerPage from "./page/TraditionalMusicPlayerPage";
import RouteProtector from "./RouteProtector";
import SearchPage from "./page/SearchPage";
import AuthPage from "./page/AuthPage";
import NotFound from "./page/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/authenticated" element={<AuthPage />} />
        <Route element={<RouteProtector />}>
          <Route path="/traditional" element={<TraditionalMusicPlayerPage />}>
            <Route exact path="album" element={<AlbumPage />} />
            <Route exact path="artists" element={<ArtistsPage />} />
            <Route exact path="playlist" element={<PlaylistPage />} />
            <Route exact path="search" element={<SearchPage />} />
          </Route>
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
