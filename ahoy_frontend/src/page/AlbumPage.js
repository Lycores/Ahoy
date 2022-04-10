import '../App.css';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import * as eh from '../eventHandler.js'
import {playbackBarStyle, playerStyle, leftAreaStyle, musicCoverStyle, albumListStyle, libraryStyle, libraryEntryStyle} from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
import rightAreaStyle from '../stylesheets/mainBodyStyle/rightAreaStyle/rightAreaStyleSheet'
import mainBodyStyle from '../stylesheets/mainBodyStyle/mainBodyStyleSheet'
import WebPlayback from '../components/WebPlayback'
import {BrowserRouter, useNavigate, useLocation} from 'react-router-dom'
import UniversalCardComponent from '../components/UniversalCardComponent'
import RightAreaComponentForAll from '../components/RightAreaComponentForAll'
import RightAreaComponentForTracks from '../components/RightAreaComponentsForTracks'
import {tabToHomeStyle, searchBarStyleForDesktopOrTablet,searchBarStyleForMobile, searchBarMaxWidth, searchBarInputStyle} from '../stylesheets/floatElementStyle/floatStyleSheet.js'
import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import {DesktopOrTablet, Mobile} from '../MediaQuery'
var userId = ''
var albumList = []
const setUserId = (id) => {
  userId = id
}

const requestUserProfile = async () => {
  fetch('user/getUserProfile')
  .then((response) => {return response.json()})
  .then((userProfile) => {
    setUserId(userProfile.id)
  })
}

function AlbumPage(props) {
    const {token} = props
    var {state} = useLocation()
    if(state){
      var album = state.album
    }

    var globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}

    const changeGlobalDim = () => {
        globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}
    }

    const getUserSavedAlbum = () => {
      fetch(`album/getSavedAlbum`)
      .then((response) => {return response.json()})
      .then((json)=>{
        json.items.forEach((albumObj)=>{
          albumList.push(albumObj.album)
        })
        setAlbumListState(albumList)
      })
    }

    const extendSearchBarForDesktopOrTablet = () => {
        setSearchBarStyleStateForDesktopOrTablet({
          ...searchBarStyleStateForDesktopOrTablet,
          width: searchBarMaxWidth
        })
    }

    const extendSearchBarForMobile = () => {
      setSearchBarStyleStateForMobile({
        ...searchBarStyleStateForMobile,
        width: searchBarMaxWidth
      })
    }

    const withdrawSearchBarForDesktopOrTablet = () => {
      setSearchBarStyleStateForDesktopOrTablet({
        ...searchBarStyleStateForDesktopOrTablet,
        width: searchBarStyleForDesktopOrTablet.width
      })
    }

    const withdrawSearchBarForMobile = () => {
      setSearchBarStyleStateForMobile({
        ...searchBarStyleStateForMobile,
        width: searchBarStyleForMobile.width
      })
    }


    let [mainBodyStyleState, setMainBodyStyleState] = useState(mainBodyStyle)
    let [leftAreaStyleState, setplaylistAreaStyleState] = useState(leftAreaStyle)
    let [rightAreaStyleState, setMusicListStyleState] = useState(rightAreaStyle)
    let [playerStyleState, setPlayerStyleState] = useState(playerStyle)
    let [musicCoverStyleState, setMusicCoverStyleState] = useState(musicCoverStyle)
    let [playbackBarStyleState, setPlaybackBarStyleState] = useState(playbackBarStyle)
    let [albumListStyleState, setAlbumListStyleState] = useState(albumListStyle)
    const [deviceId, setDeviceId] = useState(null)
    var [albumListState, setAlbumListState] = useState(albumList)
    let [searchBarStyleStateForDesktopOrTablet, setSearchBarStyleStateForDesktopOrTablet] = useState(searchBarStyleForDesktopOrTablet)
    let [searchBarStyleStateForMobile, setSearchBarStyleStateForMobile] = useState(searchBarStyleForMobile)
    useEffect(() => { 
      window.addEventListener('resize', changeGlobalDim)
      if(userId === ''){
        requestUserProfile()
      }
      if(!album){
        getUserSavedAlbum()
      }
      
    }, [])

  const navigate = useNavigate()
  return (
    <div >
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"/>
      </Helmet>

      <div className="App-Container"> 
        <div style={mainBodyStyleState}>
          <DesktopOrTablet>
            <div style={leftAreaStyleState} >
              <div style={libraryStyle}>
                <div style={libraryEntryStyle } onClick={()=>navigate('/album')}>Albums</div>
                <div style={libraryEntryStyle} onClick={()=>navigate('/artists')}>Artists</div>
                <div style={libraryEntryStyle}>Playlists</div>
                <div style={libraryEntryStyle}></div>
              </div>
              <div style={albumListStyleState}></div>
              <div style={playerStyleState}>
                  { (token === '') ? <></> : <WebPlayback token={token} musicCoverStyleState={musicCoverStyleState} playbackBarStyleState= {playbackBarStyleState} setDeviceId={setDeviceId}/> }
              </div>
            </div>
          </DesktopOrTablet>
          
          <div style={rightAreaStyleState} >
            {(album == null) ? <RightAreaComponentForAll itemList={albumListState} type="album"/> :
            <RightAreaComponentForTracks album={album} deviceId={deviceId}/>}
          </div>
        </div>
        <div style={tabToHomeStyle} onClick={() => {navigate('/home')}} />

        <DesktopOrTablet>
          <div style={searchBarStyleStateForDesktopOrTablet} onMouseOver={extendSearchBarForDesktopOrTablet}
          onMouseLeave={withdrawSearchBarForDesktopOrTablet}>
            <input style={searchBarInputStyle}></input>
          </div>
        </DesktopOrTablet>
        
        <Mobile>
          <div style={searchBarStyleStateForMobile} onMouseOver={extendSearchBarForMobile}
          onMouseLeave={withdrawSearchBarForMobile}>
            <input style={searchBarInputStyle}></input>
          </div>
        </Mobile>
      </div>
    </div>
  );
}

export default AlbumPage;
