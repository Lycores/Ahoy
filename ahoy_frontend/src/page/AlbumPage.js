import '../App.css';
import {useEffect, useState} from 'react';
import {rightAreaStyleForDesktopOrTablet, rightAreaStyleForMobile} from '../stylesheets/mainBodyStyle/rightAreaStyle/rightAreaStyleSheet'
import {useLocation} from 'react-router-dom'
import RightAreaComponentForCardpresent from '../components/RightAreaComponentForCardPresent'
import RightAreaComponentForTracks from '../components/RightAreaComponentsForTracks'
import { DesktopOrTablet, Mobile} from '../MediaQuery';

// const requestUserProfile = async () => {
//   fetch('user/getUserProfile')
//   .then((response) => {return response.json()})
//   .then((userProfile) => {
//     setUserId(userProfile.id)
//   })
// }

function AlbumPage(props) {
    var {token} = props
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
        setAlbumListState([...albumList])
      })
    }

    var [albumListState, setAlbumListState] = useState(albumList)

    useEffect(() => { 
      if(!album){
        getUserSavedAlbum()
      }
    }, [token])

  return (
    <>
      <DesktopOrTablet>
        <div style={rightAreaStyleForDesktopOrTablet} >
          {(!album) ? <RightAreaComponentForCardpresent itemList={albumListState} type="album"/> :
            <RightAreaComponentForTracks album={album}/>}
        </div>
      </DesktopOrTablet>
      <Mobile>
        <div style={rightAreaStyleForMobile} >
          {(!album) ? <RightAreaComponentForCardpresent itemList={albumListState} type="album"/> :
            <RightAreaComponentForTracks album={album}/>}
        </div>
      </Mobile>
    </>
      
  );
}

export default AlbumPage
