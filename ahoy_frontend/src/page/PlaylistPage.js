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
import {tabToHomeStyle, searchButtonStyle, searchButtonMaxWidth} from '../stylesheets/floatElementStyle/floatStyleSheet.js'
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



function PlaylistPage(props) {
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

    const extendSearchBar = () => {
      setSearchButtonStyleState({
        ...searchButtonStyleState,
        width: searchButtonMaxWidth
      })
    }

    const withdrawSearchBar = () => {
      setSearchButtonStyleState({
        ...searchButtonStyleState,
        width: searchButtonStyle.width
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
    let [searchButtonStyleState, setSearchButtonStyleState] = useState(searchButtonStyle)
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
          <div style={leftAreaStyleState} >
            <div style={libraryStyle}>
              <div style={libraryEntryStyle } onClick={()=>navigate('/playlist')}>Albums</div>
              <div style={libraryEntryStyle}>Artists</div>
              <div style={libraryEntryStyle}>Playlists</div>
              <div style={libraryEntryStyle}></div>
            </div>
            <div style={albumListStyleState}></div>
            <div style={playerStyleState}>
                { (token === '') ? <></> : <WebPlayback token={token} musicCoverStyleState={musicCoverStyleState} playbackBarStyleState= {playbackBarStyleState} setDeviceId={setDeviceId}/> }
            </div>
          </div>
          <div style={rightAreaStyleState} >
            {(album == null) ? <RightAreaComponentForAll itemList={albumListState} type="album"/> :
            <RightAreaComponentForTracks album={album} deviceId={deviceId}/>}
          </div>
        </div>
        <div style={tabToHomeStyle} onClick={() => {navigate('/home')}} />
        <div style={searchButtonStyleState} onMouseOver={extendSearchBar}
        onMouseLeave={withdrawSearchBar}>
          <input style={{marginLeft: '20px', marginTop:'2px',height: '80%', width:'350px', backgroundColor:'white', outlineStyle: 'none', border: 0, fontSize: '24px', backgroundColor: 'transparent'}}></input>
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;
