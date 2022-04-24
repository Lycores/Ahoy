import '../App.css';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import RightAreaComponentForCardpresent from '../components/RightAreaComponentForCardPresent'
import RightAreaComponentForAlbum from '../components/RightAreaComponentsForAlbum'
import { DesktopOrTablet, Mobile} from '../MediaQuery';
import {RightAreaStyleForDesktopOrTablet, RightAreaStyleForMobile} from '../components/ReusableStyleComponent'

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
        <RightAreaStyleForDesktopOrTablet>
          {(!album) ? <RightAreaComponentForCardpresent itemList={albumListState} type="album"/> :
            <RightAreaComponentForAlbum album={album}/>}
        </RightAreaStyleForDesktopOrTablet>
      </DesktopOrTablet>
      <Mobile>
        <RightAreaStyleForMobile>
          {(!album) ? <RightAreaComponentForCardpresent itemList={albumListState} type="album"/> :
            <RightAreaComponentForAlbum album={album}/>}
        </RightAreaStyleForMobile>
      </Mobile>
    </>
      
  );
}

export default AlbumPage
