import React, { useState, useEffect, useRef} from 'react';
import { globalStyle } from '../stylesheets/globalStyle/globalStyleSheet';
import {backStyle, nextStyle, pauseStyle, startStyle, backStyleForMobile, nextStyleForMobile, pauseStyleForMobile, startStyleForMobile, playerStyleForMobile, playerStyleForDesktopOrTablet}  from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet';
import {playbackBarStyle, musicCoverStyle, musicCoverStyleForMobile}  from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
import {useRecoilState} from 'recoil'
import {deviceIdRecoil, recentlyPlayedRecoil} from '../recoilInfo'
import { DesktopOrTablet, Mobile } from '../MediaQuery';
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
                        <div style={playerStyleForDesktopOrTablet}>
                            <div style={musicCoverStyle}>
                                <img src={recentlyPlayedState.album.images[0].url} style={{width: '100%', borderRadius: globalStyle.borderRadius, height: musicCoverStyle.height, width: musicCoverStyle.width, objectFit: 'cover'}}/>
                            </div>
                            <div style={playbackBarStyle} >
                                <div style={backStyle} />
                                <div style={startStyle} onClick={recentlyPlayedStart} />
                                <div style={nextStyle} />
                            </div>
                        </div>
                    </DesktopOrTablet>
                    <Mobile>
                        <div style={playerStyleForMobile}>
                            <div style={{display: 'flex'}}>
                                <div style={musicCoverStyleForMobile} >
                                    <img src={recentlyPlayedState.album.images[0].url} style={{width: '100%', borderRadius: '10px', height: musicCoverStyleForMobile.height, width: musicCoverStyleForMobile.width, objectFit: 'cover'}}/>
                                </div>
                                <div style={backStyleForMobile} />
                                <div style={startStyleForMobile} onClick={recentlyPlayedStart}/>
                                <div style={nextStyleForMobile} />
                            </div>
                        </div>
                    </Mobile>
                </> 
                
            );
        }else{
            return (
                <>
                    <DesktopOrTablet>
                        <div style={playerStyleForDesktopOrTablet}>
                            <div style={{...musicCoverStyle, padding:'0px', marginBottom: '0px'}} className="ph-item">
                            </div>
                            <div style={playbackBarStyle} >
                                <div style={backStyle} />
                                <div style={startStyle} />
                                <div style={nextStyle} />
                            </div>
                        </div>
                    </DesktopOrTablet>
                    <Mobile>
                        <div style={playerStyleForMobile}>
                            <div style={{display: 'flex'}}>
                                <div style={{...musicCoverStyleForMobile, padding:'0px', marginBottom: '0px'}} className="ph-item">
                                </div>
                                <div style={backStyleForMobile} />
                                <div style={startStyleForMobile} />
                                <div style={nextStyleForMobile} />
                            </div>
                        </div>
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