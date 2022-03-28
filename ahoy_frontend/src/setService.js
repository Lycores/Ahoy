import App from './App'

const foldAnyContainer = (cardState ,setCardState, foldState, setFoldState, dictionary, property) => {
    var propertyStyle = property + "Style"
    var propertyCard2Ref = property + "Card2Ref"
    var propertyCard3Ref = property + "Card3Ref"
    var propertyFolded = property + "Folded"
    setCardState(
        {...cardState, [propertyStyle]: {...cardState[propertyStyle], marginLeft: "50px", marginRight:"50px"}}
      )
      
    dictionary[propertyCard2Ref].current.classList.remove("expandLeft")
    dictionary[propertyCard3Ref].current.classList.remove("expandRight")
    setFoldState({...foldState, [propertyFolded]: true}) 
}

export default foldAnyContainer