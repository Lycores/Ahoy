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

export const changeSizeOfMusicStrip = (allState, setFunc)=> {
    return () => {      
        let widthOfWindow = window.innerWidth
        console.log(widthOfWindow)
        let widthOfMusicStrip = widthOfWindow - 200
        setFunc({...allState, width: widthOfMusicStrip})
    }
    
}

export const homeButtonClicked = () => {
    console.log("111")
}

export const musicStripClicked = (allState, setFunc) => {
    return () => {
        DisplayNoneAllCard(allState, setFunc)
    }
    
}

export const loginButtonClicked = () => {
    console.log("333")
}