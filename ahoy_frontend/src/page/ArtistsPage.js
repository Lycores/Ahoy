import '../App.css';
import {useEffect, useState} from 'react';
import {rightAreaStyleForDesktopOrTablet,  rightAreaStyleForMobile } from '../stylesheets/mainBodyStyle/rightAreaStyle/rightAreaStyleSheet'
import {useLocation} from 'react-router-dom'
import RightAreaComponentForCardPresent from '../components/RightAreaComponentForCardPresent'
import RightAreaComponentForArtistDetail from '../components/RightAreaComponentForArtistDetail'
import { DesktopOrTablet, Mobile} from '../MediaQuery';

function ArtistsPage(props) {
    var {token} = props

    var artistsList = []
    var artist = null
    var {state} = useLocation()
    if(state){
      var artist = state.artist
    }

    const getFollowedArtists = () => {
      console.log("get followed art")
      fetch('artists/getFollowedArtists')
      .then((response) => {
        return response.json()
      })
      .then((json)=>{
        setArtistsListState(json.artists.items)
      })
    }


    var [artistsListState, setArtistsListState] = useState(artistsList)
  useEffect(() => { 
    if(!artist){
      getFollowedArtists()
    }

  }, [token])

  return (
    <>
    <DesktopOrTablet>
      <div style={rightAreaStyleForDesktopOrTablet} >
      {(!artist) ? <RightAreaComponentForCardPresent itemList={artistsListState} type="artists"/>:
        <RightAreaComponentForArtistDetail artist={artist}/>}
      </div>
    </DesktopOrTablet>
    <Mobile>
    <div style={rightAreaStyleForMobile} >
      {(!artist) ? <RightAreaComponentForCardPresent itemList={artistsListState} type="artists"/>:
        <RightAreaComponentForArtistDetail artist={artist}/>}
      </div>
    </Mobile>
  </>
  );
}

export default ArtistsPage;
