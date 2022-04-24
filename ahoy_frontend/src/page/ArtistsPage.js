import '../App.css';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import RightAreaComponentForCardPresent from '../components/RightAreaComponentForCardPresent'
import RightAreaComponentForArtistDetail from '../components/RightAreaComponentForArtistDetail'
import { DesktopOrTablet, Mobile} from '../MediaQuery';
import {RightAreaStyleForDesktopOrTablet, RightAreaStyleForMobile} from '../components/ReusableStyleComponent'
import RightAreaComponent from '../components/RightAreaComponent';
function ArtistsPage(props) {
    var {token} = props

    var artistsList = []
    var artist = null
    var {state} = useLocation()
    if(state){
      var artist = state.artist 
    }

    const getFollowedArtists = () => {
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
      <RightAreaStyleForDesktopOrTablet >
      {(!artist) ? <RightAreaComponentForCardPresent itemList={artistsListState} type="artists"/>:
        <RightAreaComponent artist={artist}/>}
      </RightAreaStyleForDesktopOrTablet>
    </DesktopOrTablet>
    <Mobile>
    <RightAreaStyleForMobile>
      {(!artist) ? <RightAreaComponentForCardPresent itemList={artistsListState} type="artists"/>:
        <RightAreaComponent artist={artist}/>}
      </RightAreaStyleForMobile>
    </Mobile>
  </>
  );
}

export default ArtistsPage;
