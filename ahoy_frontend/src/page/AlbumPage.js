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

// const requestUserProfile = async () => {
//   fetch('user/getUserProfile')
//   .then((response) => {return response.json()})
//   .then((userProfile) => {
//     setUserId(userProfile.id)
//   })
// }

function AlbumPage(props) {
    var {token, deviceId} = props
    var albumList = []
    var album = null
    var {state} = useLocation()
    if(state){
      album = state.album
    }

    const getUserSavedAlbum = () => {
      fetch('album/getSavedAlbum')
      .then((response) => {
        return response.json()
      })
      .then((json)=>{
        json.items.forEach((albumObj)=>{
          albumList.push(albumObj.album)
        })
        setAlbumListState(albumList)
      })
    }

    var [rightAreaStyleState, setRightAreaStyleState] = useState(rightAreaStyle)
    var [albumListState, setAlbumListState] = useState(albumList)

    useEffect(() => { 
      console.log("album is", album)
      if(!album){
        getUserSavedAlbum()
      }
    }, [album, deviceId, token])

  return (     
      <div style={rightAreaStyleState} >
        {(!album) ? <RightAreaComponentForAll itemList={albumListState} type="album"/> :
        <RightAreaComponentForTracks album={album} deviceId={deviceId}/>}
      </div>
  );
}

export default AlbumPage;
