import '../App.css';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import {musicStripStyle, homeButtonStyle, loginButtonStyle, musicStripDistanceLeft, musicStripDistanceRight, topBarStyle} from '../stylesheets/topBarStyleSheet.js'
import * as eh from '../eventHandler.js'
import {playbackBarStyle, playerStyle, leftAreaStyle, musicCoverStyle, albumListStyle} from '../stylesheets/leftAreaStyleSheet'
import rightAreaStyle from '../stylesheets/rightAreaStyleSheet'
import mainBodyStyle from '../stylesheets/mainBodyStyleSheet'
import WebPlayback from '../components/WebPlayback'
import {BrowserRouter, useNavigate, useLocation} from 'react-router-dom'
import UniversalCardComponent from '../components/UniversalCardComponent'
import RightAreaComponentForCards from '../components/RightAreaComponentForCards'
import RightAreaComponentForTracks from '../components/RightAreaComponentsForTracks'

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

const getUserSavedAlbum = () => {
  fetch(`album/getSavedAlbum`)
  .then((response) => {return response.json()})
  .then((json)=>{
    json.items.forEach((albumObj)=>{
      albumList.push(albumObj.album)
    })
  })
}

function PlaylistPage(props) {
    const {token} = props
    var {state} = useLocation()
    if(state){
      var album = state.album
    }

    var globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}

    const changeGlobalDim = () => {
        globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}
        setMusicStripWidthState({...musicStripStyleState, width: globalDim.globalWidth - musicStripDistanceLeft - musicStripDistanceRight})
    }

    let [musicStripStyleState, setMusicStripWidthState]  = useState(musicStripStyle)
    let [homeButtonStyleState, sethomeButtonStyleState] = useState(homeButtonStyle)
    let [loginButtonStyleState, setLoginButtonStyleState] = useState(loginButtonStyle)
    let [mainBodyStyleState, setMainBodyStyleState] = useState(mainBodyStyle)
    let [leftAreaStyleState, setplaylistAreaStyleState] = useState(leftAreaStyle)
    let [rightAreaStyleState, setMusicListStyleState] = useState(rightAreaStyle)
    let [playerStyleState, setPlayerStyleState] = useState(playerStyle)
    let [musicCoverStyleState, setMusicCoverStyleState] = useState(musicCoverStyle)
    let [playbackBarStyleState, setPlaybackBarStyleState] = useState(playbackBarStyle)
    let [albumListStyleState, setAlbumListStyleState] = useState(albumListStyle)
    const [deviceId, setDeviceId] = useState(null)

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
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"/>
      </Helmet>
      <div className="App-Container">
        <div style={topBarStyle}>
          <div style={homeButtonStyleState} onClick={eh.homeButtonClicked} />
          <div style={musicStripStyleState} onClick={() => {navigate('/home')}} />
            <a href="/auth/login">
              <div style={loginButtonStyleState}/>
            </a>
        </div>
        <div style={mainBodyStyleState}>
          <div style={leftAreaStyleState} >
            <div style={albumListStyleState}></div>
            <div style={playerStyleState}>
                { (token === '') ? <></> : <WebPlayback token={token} musicCoverStyleState={musicCoverStyleState} playbackBarStyleState= {playbackBarStyleState} setDeviceId={setDeviceId}/> }
            </div>
          </div>
          <div style={rightAreaStyleState} >
            {(album == null) ? <RightAreaComponentForCards albumList={albumList} /> :
            <RightAreaComponentForTracks album={album} deviceId={deviceId}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;
