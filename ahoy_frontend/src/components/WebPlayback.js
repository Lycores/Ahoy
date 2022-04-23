import React, { useState, useEffect, useRef} from 'react';
import { globalStyle } from '../stylesheets/globalStyle/globalStyleSheet';
import {backStyle, nextStyle, pauseStyle, startStyle, backStyleForMobile, nextStyleForMobile, pauseStyleForMobile, startStyleForMobile, playerStyleForMobile, playerStyleForDesktopOrTablet}  from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet';
import {playbackBarStyle, musicCoverStyle, musicCoverStyleForMobile}  from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
import {useRecoilState} from 'recoil'
import {deviceIdRecoil, recentlyPlayedRecoil} from '../recoilInfo'
import { DesktopOrTablet, Mobile } from '../MediaQuery';
import styled from 'styled-components'
const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

const PlayerStyleForDesktopOrTablet = styled.div`
    padding: var(--global-padding);
    width: 230px;
    box-shadow: var(--global-box-shadow);
    bottom: -10px;
    position: absolute;
    border-radius: var(--global-border-radius);
    left: var(--global-margin);
`
const PlayerStyleForMobile = styled.div`
    position: fixed;
    width: auto;
    height: 100px;
    bottom: 0px;
    background-color: white;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: var(--global-border-radius);
    z-index: 5;

`

const MusicPlayerCoverStyleForDesktopOrTablet = styled.div.attrs((props)=>({
    className: props.class
}))`
    height: 230px;
    width: 230px;
    box-shadow: var(--global-box-shadow);
    border-radius: var(--global-border-radius);
    background-image: url(${props=>props.imageUrl});
    background-size: cover;
    padding: 0px;
    margin-bottom: 0px;
`

const PlaybackBarStyle = styled.div`
    width: 230px;
    height: 50px;
    margin-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
`

const FlexStyle = styled.div`
    display: 'flex';
`

const PlaybackButtonStyle = styled.div`
    height: 40px;
    width: 40px;
    background-size: 90%;
    box-shadow: var(--global-box-shadow);
`

const MusicCoverStyleForMobile = styled.div`
    height: 80px;
    width: 80px;
    margin: var(--global-margin);
    background-image: url(${props=>props.imageUrl});
    background-size: cover;
    border-radius: var(--global-border-radius);
`

const BackStyle = styled(PlaybackButtonStyle)`
    background-image: url(${props=>props.imageUrl});
`

const StartStyle = styled(PlaybackButtonStyle)`
    background-image: url(${props=>props.imageUrl});
`

const NextStyle = styled(PlaybackButtonStyle)`
    background-image: url(${props=>props.imageUrl});
`

const PauseStyle = styled(PlaybackButtonStyle)`
    background-image: url(${props=>props.imageUrl});
`

function WebPlayback(props) {
    var {token} = props

    
    var [is_paused, setPaused] = useState(false)
    var [is_active, setActive] = useState(false)
    var [player, setPlayer] = useState(undefined)
    var [current_track, setTrack] = useState(track)
    var [isInitiated, setIsInitiated] = useState(true)
    var [recentlyPlayedLoaded, setRecentlyPlayedLoaded] = useState(false)

    const ToggleButtonRef = useRef(null)
    
    var [deviceIdState, setDevicedIdState] = useRecoilState(deviceIdRecoil)
    var [recentlyPlayedState, setRecentlyPlayedState] = useRecoilState(recentlyPlayedRecoil)

    const recentlyPlayedStart = ()=>{
        let albumId = recentlyPlayedState.album.id
        let positionInAlbum =  recentlyPlayedState.track_number - 1
        fetch(`/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}`)   
    }
    useEffect(() => {
        
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {

            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                    setDevicedIdState(device_id)
                    console.log('Ready with Device ID', device_id);
                
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }
                setTrack(state.track_window.current_track);
                
                setPaused(state.paused);

                player.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });

            }));

            player.connect();
        };
    },[token]);

    if (!is_active) { 
        if(recentlyPlayedState){
            return (
                <>
                    <DesktopOrTablet>
                        <PlayerStyleForDesktopOrTablet>
                            <MusicPlayerCoverStyleForDesktopOrTablet imageUrl={recentlyPlayedState.album.images[0].url}/>
                            <PlaybackBarStyle >
                                <BackStyle/>
                                <StartStyle onClick={recentlyPlayedStart} />
                                <NextStyle />
                            </PlaybackBarStyle>
                        </PlayerStyleForDesktopOrTablet>
                    </DesktopOrTablet>
                    <Mobile>
                        <PlayerStyleForMobile>
                            <FlexStyle>
                                <MusicCoverStyleForMobile imageUrl={recentlyPlayedState.album.images[0].url}/>
                                <BackStyle/>
                                <StartStyle onClick={recentlyPlayedStart} />
                                <NextStyle />
                            </FlexStyle>
                        </PlayerStyleForMobile>
                    </Mobile>
                </> 
                
            );
        }else{
            return (
                <>
                    <DesktopOrTablet>
                        <PlayerStyleForDesktopOrTablet>
                            <MusicPlayerCoverStyleForDesktopOrTablet class="ph-item"/>
                            <div style={playbackBarStyle} >
                                <div style={backStyle} />
                                <div style={startStyle} />
                                <div style={nextStyle} />
                            </div>
                        </PlayerStyleForDesktopOrTablet>
                    </DesktopOrTablet>
                    <Mobile>
                        <PlayerStyleForMobile>
                            <FlexStyle>
                                <div style={{...musicCoverStyleForMobile, padding:'0px', marginBottom: '0px'}} className="ph-item">
                                </div>
                                <div style={backStyleForMobile} />
                                <div style={startStyleForMobile} />
                                <div style={nextStyleForMobile} />
                            </FlexStyle>
                        </PlayerStyleForMobile>
                    </Mobile>
                    
                </>
            );
        }
    } else {
        return (
            <>  
                <DesktopOrTablet>
                    <div style={playerStyleForDesktopOrTablet}>
                        <div style={musicCoverStyle}>
                            <img src={current_track.album.images[0].url} style={{width: '100%', borderRadius: globalStyle.borderRadius, height: musicCoverStyle.height, width: musicCoverStyle.width, objectFit: 'cover'}}/>
                        </div>
                        <div style={playbackBarStyle}>
                            <div style={backStyle} onClick={() => {player.previousTrack()}}/>
                            {
                                is_paused?<div style={startStyle} onClick={() => {player.togglePlay()}}/>
                                :<div style={pauseStyle} onClick={() => {player.togglePlay()}}/>
                            }
                            <div style={nextStyle} onClick={() => {player.nextTrack()}}/>
                        </div>
                    </div>
                </DesktopOrTablet>
                <Mobile>
                    <div style={playerStyleForMobile}>
                        <div style={{display: 'flex'}}>
                            <div style={musicCoverStyleForMobile} >
                                <img src={current_track.album.images[0].url} style={{width: '100%', borderRadius: globalStyle.borderRadius, height: musicCoverStyleForMobile.height, width: musicCoverStyleForMobile.width, objectFit: 'cover'}}/>
                            </div>
                            <div style={backStyleForMobile} onClick={() => {player.previousTrack()}}/>
                            {
                                is_paused?<div style={startStyleForMobile} onClick={() => {player.togglePlay()}}/>
                                :<div style={pauseStyleForMobile} onClick={() => {player.togglePlay()}}/>
                            }
                            <div style={nextStyleForMobile} onClick={() => {player.nextTrack()}}/>
                        </div>
                    </div>
                </Mobile>
                
            </>
        );
    }
}

export default React.memo(WebPlayback)