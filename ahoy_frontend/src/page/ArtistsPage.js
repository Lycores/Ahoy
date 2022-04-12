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
import {tabToHomeStyle, searchBarStyleForDesktopOrTablet, searchBarMaxWidth, searchBarStyleForMobile, searchBarInputStyle} from '../stylesheets/floatElementStyle/floatStyleSheet.js'
import {DesktopOrTablet, Mobile} from '../MediaQuery'

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
      searchBarInputRef.current.blur()
    }

    const withdrawSearchBarForMobile = () => {
      setSearchBarStyleStateForMobile({
        ...searchBarStyleStateForMobile,
        width: searchBarStyleForMobile.width
      })
      searchBarInputRef.current.blur()
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
    let [searchBarStyleStateForDesktopOrTablet, setSearchBarStyleStateForDesktopOrTablet] = useState(searchBarStyleForDesktopOrTablet)
    let [searchBarStyleStateForMobile, setSearchBarStyleStateForMobile] = useState(searchBarStyleForMobile)

    const searchBarInputRef = useRef(null)
  useEffect(() => { 
    window.addEventListener('resize', changeGlobalDim)
    if(!artist){
      getFollowedArtists()
    }
  }, [])

  

  const navigate = useNavigate()
  return (
    <div style={rightAreaStyleState} >
      {(artist == null) ? <RightAreaComponentForAll itemList={artistsListState} type="artists"/>:
        <RightAreaComponentForArtistDetail artist={artist} userProfile={userProfile} deviceId={deviceId}/>}
    </div>
  );
}

export default ArtistsPage;
