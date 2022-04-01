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
    setFunc({...allState, display:'block'})
}

const RemoveDisplayNoneMusicList = (allState, setFunc) => {

    setFunc({...allState, display:'block'})
}

const RemoveDisplayNoneMainBody = (allState, setFunc) => {

    setFunc({...allState, display:'flex'})
}

export const homeButtonClicked = () => {

}

export const musicStripClicked = (allCardState, setCardFunc, playlistState, setPlaylistFunc, musicListState, setMusicListFunc, mainBodyState, setMainBodyFunc) => {
    return () => {
        DisplayNoneAllCard(allCardState, setCardFunc)
        RemoveDisplayNoneMainBody(mainBodyState, setMainBodyFunc)
        RemoveDisplayNonePlayList(playlistState, setPlaylistFunc)
        RemoveDisplayNoneMusicList(musicListState, setMusicListFunc)
    }
}

export const loginButtonClicked = () => {
    console.log("333")
}

export const foldAnyContainer = (cardState ,setCardState, foldState, setFoldState, dictionary, property, foldUnfold) => {
    var propertyStyle = property + "Style"
    var propertyCard2Ref = property + "Card2Ref"
    var propertyCard3Ref = property + "Card3Ref"
    var propertyFolded = property + "Folded"
    if(foldUnfold == "fold"){
        setCardState(
            {...cardState, [propertyStyle]: {...cardState[propertyStyle], marginLeft: "50px", marginRight:"50px"}}
            )
    
        dictionary[propertyCard2Ref].current.classList.remove("expandLeft")
        dictionary[propertyCard3Ref].current.classList.remove("expandRight")
        setFoldState({...foldState, [propertyFolded]: true}) 
    }else{
        setCardState(
            {...cardState, [propertyStyle]: {...cardState[propertyStyle], marginLeft: "250px", marginRight:"300px"}}
        )
        dictionary[propertyCard2Ref].current.classList.add("expandLeft")
        dictionary[propertyCard3Ref].current.classList.add("expandRight")
        setFoldState({...foldState, [propertyFolded]: false}) 
    }
}