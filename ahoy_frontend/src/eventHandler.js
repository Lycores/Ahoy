import App from './App.js' 

const DisplayNoneAllCard = (allState, setFunc) => {
    setFunc({
        umbrellaStyle: {...allState.umbrellaStyle, display:'none'},
        downCoatStyle: {...allState.downCoatStyle, display:'none'},
        sweaterStyle: {...allState.sweaterStyle, display:'none'},
        snowBootStyle: {...allState.snowBootStyle, display:'none'},
        rainBootStyle: {...allState.rainBootStyle, display:'none'},
        maskStyle: {...allState.maskStyle, display:'none'},
    })
}

const RemoveDisplayNonePlayList = (allState, setFunc) => {
    console.log(allState)
    console.log(setFunc)
    setFunc({...allState, display:'block'})
}

const RemoveDisplayNoneAlbumList = (allState, setFunc) => {
    console.log(allState)
    console.log(setFunc)
    setFunc({...allState, display:'block'})
}

const RemoveDisplayNoneMainBody = (allState, setFunc) => {
    console.log(allState)
    console.log(setFunc)
    setFunc({...allState, display:'flex'})
}

export const homeButtonClicked = () => {
    console.log("111")
}

export const musicStripClicked = (allCardState, setCardFunc, playlistState, setPlaylistFunc, albumListState, setAlbumListFunc, mainBodyState, setMainBodyFunc) => {
    return () => {
        DisplayNoneAllCard(allCardState, setCardFunc)
        RemoveDisplayNoneMainBody(mainBodyState, setMainBodyFunc)
        RemoveDisplayNonePlayList(playlistState, setPlaylistFunc)
        RemoveDisplayNoneAlbumList(albumListState, setAlbumListFunc)
    }
}

export const loginButtonClicked = () => {
    console.log("333")
}