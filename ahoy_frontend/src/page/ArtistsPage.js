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



function ArtistsPage(props) {
    var {token, userProfile, deviceId} = props
    console.log(userProfile)
    console.log(props)
    var artistsList = []
    var artist = null
    var {state} = useLocation()
    if(state){
      console.log(555)
      console.log(deviceId)
      
      var artist = state.artist
    }

    const getFollowedArtists = () => {
      console.log("get followed art")
      fetch('artists/getFollowedArtists')
      .then((response) => {
        return response.json()
      })
      .then((json)=>{
        console.log(444,json)
        setArtistsListState(json.artists.items)
      })
    }

    var [rightAreaStyleState, setRightAreaStyleState] = useState(rightAreaStyle)
    var [artistsListState, setArtistsListState] = useState(artistsList)
  useEffect(() => { 
    if(!artist){
      getFollowedArtists()
    }

  }, [artist, deviceId, token])

  return (
    <div style={rightAreaStyleState} >
      {(artist == null) ? <RightAreaComponentForAll itemList={artistsListState} type="artists"/>:
        <RightAreaComponentForArtistDetail artist={artist} userProfile={userProfile} deviceId={deviceId}/>}
    </div>
  );
}

export default ArtistsPage;
