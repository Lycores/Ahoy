import '../App.css';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import RightAreaComponentForCardpresent from '../components/RightAreaComponentForCardPresent'
import { DesktopOrTablet, Mobile} from '../MediaQuery';
import {RightAreaStyleForDesktopOrTablet, RightAreaStyleForMobile} from '../components/ReusableStyleComponent'

function PlaylistPage() {
  let token = JSON.parse(localStorage.getItem('token'))

    var playlist = null
    var playlistList = []
    var {state} = useLocation()
    if(state){
      var playlist = state.playlist
    }


    const getMyPlaylist = () =>{
        fetch('/playlist/getMyPlaylists')
        .then((response)=>{
            return response.json()
        }).then((json)=>{
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
        <RightAreaStyleForDesktopOrTablet >
          {(!playlist) ? <RightAreaComponentForCardpresent itemList={playlistListState} type="playlist"/> :
            <></>}
        </RightAreaStyleForDesktopOrTablet>
      </DesktopOrTablet>
      <Mobile>
        <RightAreaStyleForMobile>
          {(!playlist) ? <RightAreaComponentForCardpresent itemList={playlistListState} type="playlist"/> :
            <></>}
        </RightAreaStyleForMobile>
      </Mobile>
    </>
      
    );
}

export default PlaylistPage
