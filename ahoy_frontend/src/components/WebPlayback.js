import React, { useState, useEffect, useRef} from 'react';
import { globalStyle } from '../stylesheets/globalStyle/globalStyleSheet';
import  {backStyle, nextStyle, pauseStyle, startStyle}  from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet';
import {playbackBarStyle, musicCoverStyle}  from '../stylesheets/mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
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
    const {token, deviceId, setDeviceId} = props


    const [is_paused, setPaused] = useState(false)
    const [is_active, setActive] = useState(false)
    const [player, setPlayer] = useState(undefined)
    const [current_track, setTrack] = useState(track)
    const ToggleButtonRef = useRef(null)

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
                if(device_id != deviceId){
                    setDeviceId(device_id)
                    console.log('Ready with Device ID', device_id);
                }
                
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
    }, []);

    if (!is_active) { 
        return (
            <>
                <div style={musicCoverStyle}/>
                <div style={playbackBarStyle}>
                    <div style={backStyle} />
                    <div style={startStyle} />
                    <div style={nextStyle} />
                </div>
            </>
        );
    } else {
        
        return (
            <>
                <div style={musicCoverStyle}>
                    <img src={current_track.album.images[0].url} style={{width: '100%', borderRadius: globalStyle.borderRadius, height: musicCoverStyle.height, width: musicCoverStyle.width, objectFit: 'cover'}} />
                </div>
                <div style={playbackBarStyle}>
                    <div style={backStyle} onClick={() => {player.previousTrack()}}/>
                    {is_paused?<div style={startStyle} onClick={() => {player.togglePlay()}}/>:<div style={pauseStyle} onClick={() => {player.togglePlay()}}/>}
                    <div style={nextStyle} onClick={() => {player.nextTrack()}}/>
                </div>
            </>
        );
    }
}

export default WebPlayback