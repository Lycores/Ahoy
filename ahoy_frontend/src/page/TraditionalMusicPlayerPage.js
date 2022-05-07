import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import WebPlayback from "../components/WebPlayback";
import { useNavigate, Outlet } from "react-router-dom";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import { recentlyPlayedRecoil } from "../recoilInfo";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import useSearch from "../customHooks/forSearch/useSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faList,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
const AppStyle = styled.div`
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const MainBodyStyle = styled.div`
  display: flex;
  height: calc(100% - 20px);
  flex-wrap: nowrap;
  align-items: stretch;
`;

const LeftAreaStyle = styled.div`
  height: 100%;
  position: relative;
`;

const NavAreaStyle = styled.div`
  margin: var(--global-margin);
  width: calc(var(--global-playlist-area-width) - 40px);
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  overflow: hidden;
  padding: 20px;
`;

const NavAreaEntryStyle = styled.div`
  padding: 5px;
  cursor: pointer;
  height: 30px;
`;

const LyricAreaStyle = styled.div`
  margin: var(--global-margin);
  width: var(--global-playlist-area-width);
  box-shadow: var(--global-box-shadow);
  height: calc(100% - 500px);
  border-radius: var(--global-border-radius);
`;

const PlayerStyleForDesktopOrTablet = styled.div`
  padding: var(--global-padding);
  width: 230px;
  box-shadow: var(--global-box-shadow);
  bottom: -10px;
  position: absolute;
  border-radius: var(--global-border-radius);
  left: var(--global-margin);
`;

const PlayerStyleForMobile = styled.div`
  position: fixed;
  width: auto;
  height: 100px;
  bottom: 0px;
  background-color: white;
  left: 10;
  right: 10;
  bottom: 10;
  border-radius: var(--global-border-radius);
  z-index: 5;
`;

const BackwardButton = styled.div`
  position: fixed;
  top: calc(50% - 50px);
  left: 0px;
  width: 50px;
  height: 100px;
  background-color: #d0dae6;
  z-index: 99;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  box-shadow: var(--global-box-shadow);
  opacity: 0.9;
`;

const ForwardButton = styled.div`
  position: fixed;
  top: calc(50% - 50px);
  right: 0px;
  width: 50px;
  height: 100px;
  background-color: #d0dae6;
  z-index: 99;
  border-radius: 50px 0 0 50px;
  cursor: pointer;
  box-shadow: var(--global-box-shadow);
  opacity: 0.9;
`;

const SearchBarStyleForDesktopOrTablet = styled.div`
  position: fixed;
  top: 30px;
  left: 290px;
  width: ${(props) => props.width}px;
  height: 50px;
  border-radius: 50px 50px 50px 50px;
  cursor: pointer;
  transition-duration: 500ms;
  box-shadow: inset 20px 20px 60px #bfc4cb, inset -20px -20px 60px #ffffff;
`;

const SearchBarStyleForMobile = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
  width: ${(props) => props.width}px;
  height: 50px;
  border-radius: 50px 50px 50px 50px;
  cursor: pointer;
  transition-duration: 500ms;
  box-shadow: inset 20px 20px 60px #bfc4cb, inset -20px -20px 60px #ffffff;
`;

const SearchBarInputStyle = styled.input`
  margin-left: 20px;
  margin-top: 2px;
  height: 80%;
  width: ${(props) => props.width - 30}px;
  outline-style: none;
  border: 0;
  font-size: 24px;
  background-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #66727c;
  font-size: 20px;
  font-weight: bold;
`;

function TraditionalMusicPlayerPage() {
  let token = JSON.parse(localStorage.getItem("token"));

  let [recentlyPlayedState, setRecentlyPlayedState] =
    useRecoilState(recentlyPlayedRecoil);

  let [
    searchBarWidth,
    searchBarInputRef,
    extendSearchBarForDesktopOrTablet,
    extendSearchBarForMobile,
    withdrawSearchBarForDesktopOrTablet,
    withdrawSearchBarForMobile,
    handleSearch,
  ] = useSearch();

  useEffect(() => {
    if (recentlyPlayedState == null) {
      fetch("/player/getRecentlyPlayed")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setRecentlyPlayedState(json.items[0].track);
        });
    }
  }, []);

  const stopDrag = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
        />
        <script
          src="https://kit.fontawesome.com/150bae60e3.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <AppStyle>
        <MainBodyStyle>
          <LeftAreaStyle>
            <DesktopOrTablet>
              <NavAreaStyle>
                <NavAreaEntryStyle
                  onClick={() => navigate("/traditional/album")}
                >
                  <FontAwesomeIcon icon={faCompactDisc} />
                  <span style={{ paddingLeft: "10px" }}>Album</span>
                </NavAreaEntryStyle>
                <NavAreaEntryStyle
                  onClick={() => navigate("/traditional/artists")}
                >
                  <FontAwesomeIcon icon={faPalette} />
                  <span style={{ paddingLeft: "10px" }}>Artists</span>
                </NavAreaEntryStyle>
                <NavAreaEntryStyle
                  onClick={() => navigate("/traditional/playlist")}
                >
                  <FontAwesomeIcon icon={faList} />
                  <span style={{ paddingLeft: "10px" }}>Playlist</span>
                </NavAreaEntryStyle>
              </NavAreaStyle>
              <LyricAreaStyle />
            </DesktopOrTablet>

            {!token ? (
              <>
                <DesktopOrTablet>
                  <PlayerStyleForDesktopOrTablet />
                </DesktopOrTablet>

                <Mobile>
                  <PlayerStyleForMobile />
                </Mobile>
              </>
            ) : (
              <WebPlayback />
            )}
          </LeftAreaStyle>

          <Outlet />
        </MainBodyStyle>
        <Mobile>
          <ForwardButton
            onClick={() => {
              navigate(1);
            }}
          />
          <BackwardButton
            onClick={() => {
              navigate(-1);
            }}
          />
        </Mobile>

        <DesktopOrTablet>
          <SearchBarStyleForDesktopOrTablet
            width={searchBarWidth}
            onMouseOver={extendSearchBarForDesktopOrTablet}
            onMouseLeave={withdrawSearchBarForDesktopOrTablet}
          >
            <SearchBarInputStyle
              width={searchBarWidth}
              ref={searchBarInputRef}
              onChange={handleSearch}
              onDragStart={stopDrag}
            />
          </SearchBarStyleForDesktopOrTablet>
        </DesktopOrTablet>

        <Mobile>
          <SearchBarStyleForMobile
            width={searchBarWidth}
            onMouseOver={extendSearchBarForMobile}
            onMouseLeave={withdrawSearchBarForMobile}
          >
            <SearchBarInputStyle
              width={searchBarWidth}
              ref={searchBarInputRef}
              onChange={handleSearch}
              onDragStart={stopDrag}
            />
          </SearchBarStyleForMobile>
        </Mobile>
      </AppStyle>
    </div>
  );
}

export default TraditionalMusicPlayerPage;
