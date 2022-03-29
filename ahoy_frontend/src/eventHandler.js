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

export const homeButtonClicked = () => {
    console.log("111")
}

export const musicStripClicked = (allCardState, setCardFunc, allPlaylistState, setPlaylistFunc) => {
    return () => {
        DisplayNoneAllCard(allCardState, setCardFunc)
        RemoveDisplayNonePlayList(allPlaylistState, setPlaylistFunc)
    }
    
}

export const loginButtonClicked = () => {
    console.log("333")
}