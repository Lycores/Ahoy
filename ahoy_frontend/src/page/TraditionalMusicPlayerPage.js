import '../App.css';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import {playerStyleForDesktopOrTablet, playerStyleForMobile, leftAreaStyle, albumListStyle, libraryStyle, libraryEntryStyle} from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
import mainBodyStyle from '../stylesheets/mainBodyStyle/mainBodyStyleSheet'
import WebPlayback from '../components/WebPlayback'
import {useNavigate, Outlet} from 'react-router-dom'
import {tabToHomeStyle, tabToExpandNavBarStyle, searchBarStyleForDesktopOrTablet,searchBarStyleForMobile, searchBarMaxWidth, searchBarInputStyle} from '../stylesheets/floatElementStyle/floatStyleSheet.js'
import {DesktopOrTablet, Mobile} from '../MediaQuery'
import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import {recentlyPlayedRecoil} from '../recoilInfo'
import {useRecoilState} from 'recoil'



function TraditionalMusicPlayerPage(props){
    const {token} = props

    // var globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}

    // const changeGlobalDim = () => {
    //     globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}
    // }

    const extendSearchBarForDesktopOrTablet = () => {
        setSearchBarStyleStateForDesktopOrTablet({
          ...searchBarStyleStateForDesktopOrTablet,
          width: searchBarMaxWidth
        })
    }

    const extendSearchBarForMobile = () => {
      setSearchBarStyleStateForMobile({
        ...searchBarStyleStateForMobile,
        width: window.innerWidth - 2*(3*globalStyle.margin)
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
    let [searchBarStyleStateForDesktopOrTablet, setSearchBarStyleStateForDesktopOrTablet] = useState(searchBarStyleForDesktopOrTablet)
    let [searchBarStyleStateForMobile, setSearchBarStyleStateForMobile] = useState(searchBarStyleForMobile)
    let [recentlyPlayedState, setRecentlyPlayedState] =  useRecoilState(recentlyPlayedRecoil)
    
    useEffect(()=>{
      if(recentlyPlayedState == null){
        fetch('/player/getRecentlyPlayed')
        .then((response)=>{
          return response.json()
        }).then((json)=>{
          setRecentlyPlayedState(json.items[0].track)
        })
      }
    }, [])

    const searchBarInputRef = useRef(null)

    const navigate = useNavigate()
    return (
        <div >
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"/>
        </Helmet>

      <div className="App-Container"> 
        <div style={mainBodyStyleState}>
          
            <div style={leftAreaStyleState} >
              <DesktopOrTablet>
                <div style={libraryStyle}>
                  <div style={libraryEntryStyle } onClick={()=>navigate('/traditional/album')}>Albums</div>
                  <div style={libraryEntryStyle} onClick={()=>navigate('/traditional/artists')}>Artists</div>
                  <div style={libraryEntryStyle}>Playlists</div>
                  <div style={libraryEntryStyle}></div>
                </div>
                <div style={albumListStyleState}/>
              </DesktopOrTablet>

              <DesktopOrTablet>
                <div style={playerStyleForDesktopOrTablet}>
                    { (!token) ? <></> : <WebPlayback token={token}/> }
                </div>
              </DesktopOrTablet>
              
              <Mobile>
                <div style={playerStyleForMobile}>
                    { (!token) ? <></> : <WebPlayback token={token}/> }
                </div>
              </Mobile>
            </div>

          <Outlet/>

        </div>
        <Mobile>
        <div style={tabToHomeStyle} onClick={() => {navigate(1)}} />
        <div style={tabToExpandNavBarStyle} onClick={()=>{navigate(-1)}}/>
        </Mobile>

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