import { useEffect, useState} from "react"
import {artistOverviewStyle, backgroundFilterStyle, artistDescriptionStyle, coverStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/artistOverviewStyleSheet'
function RightAreaComponentForArtistDetail(props){
    let {artist, userProfile} = props
    console.log(artist)

    const getArtistTopTrack = async() => {
        let topTrack = await fetch(`/artists/getArtistTopTrack?artistId=${artist.id}&market=${userProfile.country}`)
        .then((response)=>{
            let json = response.json()
            return json
        })
        console.log(topTrack)
        return topTrack
    }

    const getArtistAlbums = async () => {
        let artistAlbums = await fetch(`/artists/getArtistAlbums?artistId=${artist.id}&market=${userProfile.country}`)
        .then((response)=>{
            let json = response.json()
            return json
        })
        return artistAlbums
    }

    useEffect(()=>{
        setCoverStyleState({
            ...coverStyleState,
            backgroundImage: `url(${artist.images[1].url})`,
        })
        setArtistOverviewStyleState({
            ...artistOverviewStyleState,
            backgroundImage: `url(${artist.images[0].url})`,
        })
        let artistTopTrack = getArtistTopTrack().tracks
        setArtistTopTrackState(artistTopTrack)
        let artistAlbums = getArtistAlbums().items
        setArtistAlbumsState(artistAlbums)
        
    },[artist, userProfile])

    var [artistTopTrackState, setArtistTopTrackState] = useState('')
    var [artistAlbumsState, setArtistAlbumsState] = useState('')
    var [artistOverviewStyleState, setArtistOverviewStyleState] = useState(artistOverviewStyle)
    var [coverStyleState, setCoverStyleState] = useState(coverStyle)

    return (
        <div style={{height: '100%', overflow: 'scroll' }}>
            <div style={artistOverviewStyleState}>
                <div style={backgroundFilterStyle}>
                    <div style={artistDescriptionStyle}></div>
                    <div style={coverStyleState}></div>

                </div>
            </div>
        </div>
    )
}

export default RightAreaComponentForArtistDetail