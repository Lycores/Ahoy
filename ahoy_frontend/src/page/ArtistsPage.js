import '../App.css';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import * as eh from '../eventHandler.js'
import {playbackBarStyle, playerStyle, leftAreaStyle, musicCoverStyle, albumListStyle,libraryStyle, libraryEntryStyle} from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
import rightAreaStyle from '../stylesheets/mainBodyStyle/rightAreaStyle/rightAreaStyleSheet'
import mainBodyStyle from '../stylesheets/mainBodyStyle/mainBodyStyleSheet'
import WebPlayback from '../components/WebPlayback'
import {BrowserRouter, useNavigate, useLocation} from 'react-router-dom'
import UniversalCardComponent from '../components/UniversalCardComponent'
import RightAreaComponentForAll from '../components/RightAreaComponentForAll'
import RightAreaComponentForTracks from '../components/RightAreaComponentsForTracks'
import RightAreaComponentForArtistDetail from '../components/RightAreaComponentForArtistDetail'
import {tabToHomeStyle, searchBarStyleForDesktopOrTablet, searchBarMaxWidth} from '../stylesheets/floatElementStyle/floatStyleSheet.js'

var artistsList = []

function ArtistsPage(props) {
    const {token, userProfile} = props
    var {state} = useLocation()
    if(state){
      var artist = state.artist
    }

    var globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}

    const changeGlobalDim = () => {
        globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}
    }

    const getFollowedArtists = () => {
      fetch(`artists/getFollowedArtists`)
      .then((response) => {
        return response.json()})
      .then((json)=>{
        setArtistsListState(json.artists.items)
       
      })
    }

    const extendSearchBar = () => {
      setSearchBarStyleState({
        ...searchBarStyleState,
        width: searchBarMaxWidth
      })
    }

    const withdrawSearchBar = () => {
      setSearchBarStyleState({
        ...searchBarStyleState,
        width: searchBarStyleForDesktopOrTablet.width
      })
    }

    let [mainBodyStyleState, setMainBodyStyleState] = useState(mainBodyStyle)
    let [leftAreaStyleState, setplaylistAreaStyleState] = useState(leftAreaStyle)
    let [rightAreaStyleState, setMusicListStyleState] = useState(rightAreaStyle)
    let [playerStyleState, setPlayerStyleState] = useState(playerStyle)
    let [musicCoverStyleState, setMusicCoverStyleState] = useState(musicCoverStyle)
    let [playbackBarStyleState, setPlaybackBarStyleState] = useState(playbackBarStyle)
    let [albumListStyleState, setAlbumListStyleState] = useState(albumListStyle)
    let [deviceId, setDeviceId] = useState(null)
    var [artistsListState, setArtistsListState] = useState(artistsList)
    let [searchBarStyleState, setSearchBarStyleState] = useState(searchBarStyleForDesktopOrTablet)
  useEffect(() => { 
    window.addEventListener('resize', changeGlobalDim)
    if(!artist){
      getFollowedArtists()
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
          <div style={rightAreaStyleState} >
            {(artist == null) ? <RightAreaComponentForAll itemList={artistsListState} type="artists"/>:
             <RightAreaComponentForArtistDetail artist={artist} userProfile={userProfile}/>}
          </div>
        </div>
        <div style={tabToHomeStyle} onClick={() => {navigate('/home')}} />
        <div style={searchBarStyleState} onMouseOver={extendSearchBar}
        onMouseLeave={withdrawSearchBar}>
          <input style={{marginLeft: '20px', marginTop:'2px',height: '80%', width:'350px', backgroundColor:'white', outlineStyle: 'none', border: 0, fontSize: '24px', backgroundColor: 'transparent'}}></input>
        </div>
      </div>
    </div>
  );
}

export default ArtistsPage;
