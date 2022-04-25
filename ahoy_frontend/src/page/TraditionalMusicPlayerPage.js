import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import WebPlayback from "../components/WebPlayback";
import { useNavigate, Outlet } from "react-router-dom";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import { recentlyPlayedRecoil } from "../recoilInfo";
import { useRecoilState } from "recoil";
import styled from "styled-components";

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
  width: var(--global-playlist-area-width);
  box-shadow: var(--global-box-shadow);
  height: 180px;
  border-radius: var(--global-border-radius);
  overflow: hidden;
`;

const NavAreaEntryStyle = styled.div`
  height: 18%;
  margin: 10px;
  background-color: white;
  cursor: pointer;
`;

const LyricAreaStyle = styled.div`
  margin: var(--global-margin);
  width: var(--global-playlist-area-width);
  box-shadow: var(--global-box-shadow);
  height: calc(100% - 520px);
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
  background-color: var(--global-background-color);
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
  background-color: var(--global-background-color);
  z-index: 99;
  border-radius: 50px 0 0 50px;
  cursor: pointer;
  box-shadow: var(--global-box-shadow);
  opacity: 0.9;
`;

const searchBarMaxWidth = 400;
const searchBarStyleForDesktopOrTablet = {
  position: "fixed",
  top: 30,
  left: 290,
  width: 150,
  height: 50,
  borderRadius: "50px 50px 50px 50px",
  cursor: "pointer",
  transitionDuration: "500ms",
  boxShadow: "inset 20px 20px 60px #bfc4cb, inset -20px -20px 60px #ffffff",
};

const searchBarStyleForMobile = {
  position: "fixed",
  top: 30,
  left: 40,
  width: 150,
  height: 50,
  borderRadius: "50px 50px 50px 50px",
  cursor: "pointer",
  transitionDuration: "500ms",
  boxShadow: "inset 20px 20px 60px #bfc4cb, inset -20px -20px 60px #ffffff",
};

const SearchBarInputStyle = styled.input`
  margin-left: 20px;
  margin-top: 2px;
  height: 80%;
  width: 80%;
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

  const extendSearchBarForDesktopOrTablet = () => {
    setSearchBarStyleStateForDesktopOrTablet({
      ...searchBarStyleStateForDesktopOrTablet,
      width: searchBarMaxWidth,
    });
  };

  const extendSearchBarForMobile = () => {
    setSearchBarStyleStateForMobile({
      ...searchBarStyleStateForMobile,
      width: window.innerWidth - 2 * 30,
    });
  };

  const withdrawSearchBarForDesktopOrTablet = () => {
    setSearchBarStyleStateForDesktopOrTablet({
      ...searchBarStyleStateForDesktopOrTablet,
      width: searchBarStyleForDesktopOrTablet.width,
    });
    searchBarInputRef.current.blur();
  };

  const withdrawSearchBarForMobile = () => {
    setSearchBarStyleStateForMobile({
      ...searchBarStyleStateForMobile,
      width: searchBarStyleForMobile.width,
    });
    searchBarInputRef.current.blur();
  };

  let [
    searchBarStyleStateForDesktopOrTablet,
    setSearchBarStyleStateForDesktopOrTablet,
  ] = useState(searchBarStyleForDesktopOrTablet);
  let [searchBarStyleStateForMobile, setSearchBarStyleStateForMobile] =
    useState(searchBarStyleForMobile);
  let [recentlyPlayedState, setRecentlyPlayedState] =
    useRecoilState(recentlyPlayedRecoil);

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

  const searchBarInputRef = useRef(null);

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
                  Albums
                </NavAreaEntryStyle>
                <NavAreaEntryStyle
                  onClick={() => navigate("/traditional/artists")}
                >
                  Artists
                </NavAreaEntryStyle>
                <NavAreaEntryStyle
                  onClick={() => navigate("/traditional/playlist")}
                >
                  Playlist
                </NavAreaEntryStyle>
                <NavAreaEntryStyle></NavAreaEntryStyle>
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
          <div
            style={searchBarStyleStateForDesktopOrTablet}
            onMouseOver={extendSearchBarForDesktopOrTablet}
            onMouseLeave={withdrawSearchBarForDesktopOrTablet}
          >
            <SearchBarInputStyle ref={searchBarInputRef} />
          </div>
        </DesktopOrTablet>

        <Mobile>
          <div
            style={searchBarStyleStateForMobile}
            onMouseOver={extendSearchBarForMobile}
            onMouseLeave={withdrawSearchBarForMobile}
          >
            <SearchBarInputStyle ref={searchBarInputRef} />
          </div>
        </Mobile>
      </AppStyle>
    </div>
  );
}

export default TraditionalMusicPlayerPage;
