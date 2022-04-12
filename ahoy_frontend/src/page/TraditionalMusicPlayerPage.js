import '../App.css';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import * as eh from '../eventHandler.js'
import {playbackBarStyle, playerStyle, leftAreaStyle, musicCoverStyle, albumListStyle, libraryStyle, libraryEntryStyle} from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
import rightAreaStyle from '../stylesheets/mainBodyStyle/rightAreaStyle/rightAreaStyleSheet'
import mainBodyStyle from '../stylesheets/mainBodyStyle/mainBodyStyleSheet'
import WebPlayback from '../components/WebPlayback'
import {BrowserRouter, useNavigate, useLocation, Routes, Route, Outlet} from 'react-router-dom'
import UniversalCardComponent from '../components/UniversalCardComponent'
import RightAreaComponentForAll from '../components/RightAreaComponentForAll'
import RightAreaComponentForTracks from '../components/RightAreaComponentsForTracks'
import {tabToHomeStyle, searchBarStyleForDesktopOrTablet,searchBarStyleForMobile, searchBarMaxWidth, searchBarInputStyle} from '../stylesheets/floatElementStyle/floatStyleSheet.js'
import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import {DesktopOrTablet, Mobile} from '../MediaQuery'
import AlbumPage from './AlbumPage'

function TraditionalMusicPlayerPage(props){
    const {token, deviceId, setDeviceId} = props
    console.log(token)
    console.log(deviceId)
    console.log(setDeviceId)

    var globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}

    const changeGlobalDim = () => {
        globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}
    }

    const extendSearchBarForDesktopOrTablet = () => {
        setSearchBarStyleStateForDesktopOrTablet({
          ...searchBarStyleStateForDesktopOrTablet,
          width: searchBarMaxWidth
        })
    }

    const extendSearchBarForMobile = () => {
      setSearchBarStyleStateForMobile({
        ...searchBarStyleStateForMobile,
        width: searchBarMaxWidth
      })
    }

    const withdrawSearchBarForDesktopOrTablet = () => {
      setSearchBarStyleStateForDesktopOrTablet({
        ...searchBarStyleStateForDesktopOrTablet,
        width: searchBarStyleForDesktopOrTablet.width
      })
      searchBarInputRef.current.blur()
    }

    const withdrawSearchBarForMobile = () => {
      setSearchBarStyleStateForMobile({
        ...searchBarStyleStateForMobile,
        width: searchBarStyleForMobile.width
      })
      searchBarInputRef.current.blur()
    }

    
    

    let [mainBodyStyleState, setMainBodyStyleState] = useState(mainBodyStyle)
    let [leftAreaStyleState, setplaylistAreaStyleState] = useState(leftAreaStyle)
    let [albumListStyleState, setAlbumListStyleState] = useState(albumListStyle)
    let [playerStyleState, setPlayerStyleState] = useState(playerStyle)
    let [searchBarStyleStateForDesktopOrTablet, setSearchBarStyleStateForDesktopOrTablet] = useState(searchBarStyleForDesktopOrTablet)
    let [searchBarStyleStateForMobile, setSearchBarStyleStateForMobile] = useState(searchBarStyleForMobile)
   

    const searchBarInputRef = useRef(null)

    useEffect(() => { 
        window.addEventListener('resize', changeGlobalDim)
        // if(!userId){
        //   requestUserProfile()
        // }
        // console.log(userId)
      }, [])


    const navigate = useNavigate()
    return (
        <div >
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"/>
        </Helmet>

      <div className="App-Container"> 
        <div style={mainBodyStyleState}>
          <DesktopOrTablet>
            <div style={leftAreaStyleState} >
              <div style={libraryStyle}>
                <div style={libraryEntryStyle } onClick={()=>navigate('/traditional/album')}>Albums</div>
                <div style={libraryEntryStyle} onClick={()=>navigate('/traditional/artists')}>Artists</div>
                <div style={libraryEntryStyle}>Playlists</div>
                <div style={libraryEntryStyle}></div>
              </div>
              <div style={albumListStyleState}></div>
              <div style={playerStyleState}>
                  { (token === '') ? <></> : <WebPlayback token={token} setDeviceId={setDeviceId} /> }
              </div>
            </div>
          </DesktopOrTablet>

          {/* <Routes>
            <Route path="/traditional/album" element={<AlbumPage token={token} deviceId={deviceId}/>}/>
            <Route path="/artists" element={<ArtistsPage token={token} userProfile={userProfile}/> }/>
          </Routes> */}
          <Outlet/>

        </div>
        <div style={tabToHomeStyle} onClick={() => {navigate('traditional/home')}} />

        <DesktopOrTablet>
          <div style={searchBarStyleStateForDesktopOrTablet} onMouseOver={extendSearchBarForDesktopOrTablet}
          onMouseLeave={withdrawSearchBarForDesktopOrTablet}>
            <input ref={searchBarInputRef} style={searchBarInputStyle}></input>
          </div>
        </DesktopOrTablet>
        
        <Mobile>
          <div style={searchBarStyleStateForMobile} onMouseOver={extendSearchBarForMobile}
          onMouseLeave={withdrawSearchBarForMobile}>
            <input ref={searchBarInputRef} style={searchBarInputStyle}></input>
          </div>
        </Mobile>
      </div>
    </div>
    )
}

export default TraditionalMusicPlayerPage;