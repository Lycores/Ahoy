import '../App.css';
import {useEffect, useState} from 'react';
import {rightAreaStyleForDesktopOrTablet, rightAreaStyleForMobile} from '../stylesheets/mainBodyStyle/rightAreaStyle/rightAreaStyleSheet'
import {useLocation} from 'react-router-dom'
import RightAreaComponentForCardpresent from '../components/RightAreaComponentForCardPresent'
import RightAreaComponentForTracks from '../components/RightAreaComponentsForTracks'
import { DesktopOrTablet, Mobile} from '../MediaQuery';

function PlaylistPage(props) {
    var {token} = props

    var playlist = null
    var playlistList = []
    const getMyPlaylist = () =>{
        fetch('/playlist/getMyPlaylists')
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            console.log(json)
            setPlaylistListState(json.items)
        })
    }

    var [playlistListState, setPlaylistListState] = useState(playlistList)

    useEffect(() => { 
        if(!playlist){
            getMyPlaylist()
        }
    },[token])
  return (
    <>
      <DesktopOrTablet>
        <div style={rightAreaStyleForDesktopOrTablet} >
          {(!playlist) ? <RightAreaComponentForCardpresent itemList={playlistListState} type="playlist"/> :
            <RightAreaComponentForTracks playlist={playlist}/>}
        </div>
      </DesktopOrTablet>
      <Mobile>
        <div style={rightAreaStyleForMobile} >
          {(!playlist) ? <RightAreaComponentForCardpresent itemList={playlistListState} type="playlist"/> :
            <RightAreaComponentForTracks playlist={playlist}/>}
        </div>
      </Mobile>
    </>
      
    );
}

export default PlaylistPage