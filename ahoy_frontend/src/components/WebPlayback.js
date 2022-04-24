import React, { useState, useEffect, useRef} from 'react';
import {useRecoilState} from 'recoil'
import {deviceIdRecoil, recentlyPlayedRecoil} from '../recoilInfo'
import { DesktopOrTablet, Mobile } from '../MediaQuery';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faBackwardStep, faForwardStep} from '@fortawesome/free-solid-svg-icons'


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

const MusicPlayerCoverStyleForDesktopOrTablet = styled.div.attrs(props=>({
    className: props.skeleton
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

const MusicCoverStyleForMobile = styled.div`
    height: 80px;
    width: 80px;
    margin: var(--global-margin);
    background-image: url(${props=>props.imageUrl});
    background-size: cover;
    border-radius: var(--global-border-radius);
    padding: 0px;
    margin-bottom: 0px;
`

const BackStyle = styled.div`
    height: 60px;
    width: 60px;
    box-shadow: var(--global-box-shadow);
    background-image: url('/Users/rcmao/Desktop/ahoy/Ahoy/ahoy_frontend/src/assets/pause.png');
    background-size: contain;
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
                                <FontAwesomeIcon icon={faBackwardStep} color="#1bd760" size="lg"/>
                                <FontAwesomeIcon icon={faPlay} color="#1bd760" size="lg" onClick={recentlyPlayedStart} />
                                <FontAwesomeIcon icon={faForwardStep} color="#1bd760" size="lg" />
                            </PlaybackBarStyle>
                        </PlayerStyleForDesktopOrTablet>
                    </DesktopOrTablet>
                    <Mobile>
                        <PlayerStyleForMobile>
                            <FlexStyle>
                                <MusicCoverStyleForMobile imageUrl={recentlyPlayedState.album.images[0].url}/>
                                <FontAwesomeIcon icon={faBackwardStep} color="#1bd760" size="lg"/>
                                <FontAwesomeIcon icon={faPlay} color="#1bd760" size="lg" onClick={recentlyPlayedStart} />
                                <FontAwesomeIcon icon={faForwardStep} color="#1bd760" size="lg"/>
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
                            <MusicPlayerCoverStyleForDesktopOrTablet skeleton="ph-item"/>
                            <PlaybackBarStyle>
                                <FontAwesomeIcon icon={faBackwardStep} color="#1bd760" size="lg"/>
                                <FontAwesomeIcon icon={faPlay} color="#1bd760" size="lg"/>
                                <FontAwesomeIcon icon={faForwardStep} color="#1bd760" size="lg"/>
                            </PlaybackBarStyle>
                        </PlayerStyleForDesktopOrTablet>
                    </DesktopOrTablet>
                    <Mobile>
                        <PlayerStyleForMobile>
                            <FlexStyle>
                                <MusicCoverStyleForMobile class="ph-item"/>
                                <FontAwesomeIcon icon={faBackwardStep} color="#1bd760" size="lg"/>
                                <FontAwesomeIcon icon={faPlay} color="#1bd760" size="lg"/>
                                <FontAwesomeIcon icon={faForwardStep} color="#1bd760" size="lg"/>
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
                    <PlayerStyleForDesktopOrTablet>
                        <MusicPlayerCoverStyleForDesktopOrTablet imageUrl={current_track.album.images[0].url}/>
                        <PlaybackBarStyle>
                            <FontAwesomeIcon icon={faBackwardStep} color="#1bd760" size="lg" onClick={() => {player.previousTrack()}}/>
                            {
                                is_paused?<FontAwesomeIcon icon={faPlay} color="#1bd760" size="lg" onClick={() => {player.togglePlay()}}/>
                                :<FontAwesomeIcon icon={faPause} color="#1bd760" size="lg" onClick={() => {player.togglePlay()}}/>
                            }
                            <FontAwesomeIcon icon={faForwardStep}color="#1bd760" size="lg" onClick={() => {player.nextTrack()}}/>
                        </PlaybackBarStyle>
                    </PlayerStyleForDesktopOrTablet>
                </DesktopOrTablet>
                <Mobile>
                    <PlayerStyleForMobile>
                        <FlexStyle>
                            <MusicCoverStyleForMobile imageUrl={current_track.album.images[0].url}/>
                            <FontAwesomeIcon icon={faBackwardStep} color="#1bd760" size="lg" onClick={() => {player.previousTrack()}}/>
                            {
                                is_paused?<FontAwesomeIcon icon={faPlay} color="#1bd760" size="lg" onClick={() => {player.togglePlay()}}/>
                                :<FontAwesomeIcon icon={faPause} color="#1bd760" size="lg" onClick={() => {player.togglePlay()}}/>
                            }
                            <FontAwesomeIcon icon={faForwardStep} color="#1bd760" size="lg" onClick={() => {player.nextTrack()}}/>
                        </FlexStyle>
                    </PlayerStyleForMobile>
                </Mobile>
                
            </>
        );
    }
}

export default React.memo(WebPlayback)