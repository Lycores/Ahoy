import '../App.css';
import {useEffect, useState} from 'react';
import rightAreaStyle from '../stylesheets/mainBodyStyle/rightAreaStyle/rightAreaStyleSheet'
import {useLocation} from 'react-router-dom'
import RightAreaComponentForAll from '../components/RightAreaComponentForAll'
import RightAreaComponentForArtistDetail from '../components/RightAreaComponentForArtistDetail'

function ArtistsPage(props) {
    var {token, userProfile, deviceId} = props

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
      {(!artist) ? <RightAreaComponentForAll itemList={artistsListState} type="artists"/>:
        <RightAreaComponentForArtistDetail artist={artist} userProfile={userProfile} deviceId={deviceId}/>}
    </div>
  );
}

export default ArtistsPage;
