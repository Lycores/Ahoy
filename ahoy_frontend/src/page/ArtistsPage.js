import '../App.css';
import {useEffect, useState} from 'react';
import rightAreaStyle from '../stylesheets/mainBodyStyle/rightAreaStyle/rightAreaStyleSheet'
import {useLocation} from 'react-router-dom'
import RightAreaComponentForCardPresent from '../components/RightAreaComponentForCardPresent'
import RightAreaComponentForArtistDetail from '../components/RightAreaComponentForArtistDetail'

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

    var [rightAreaStyleState, setRightAreaStyleState] = useState(rightAreaStyle)
    var [artistsListState, setArtistsListState] = useState(artistsList)
  useEffect(() => { 
    if(!artist){
      getFollowedArtists()
    }

  }, [token])

  return (
    <div style={rightAreaStyleState} >
      {(!artist) ? <RightAreaComponentForCardPresent itemList={artistsListState} type="artists"/>:
        <RightAreaComponentForArtistDetail artist={artist}/>}
    </div>
  );
}

export default ArtistsPage;
