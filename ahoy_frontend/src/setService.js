import App from './App'

const foldAnyContainer = (cardState ,setCardState, foldState, setFoldState, dictionary, property) => {
    const propertyStyle = property + "Style"
    const propertyCard2Ref = property + "Card2Ref"
    const propertyCard3Ref = property + "Card3Ref"
    const propertyFolded = property + "Folded"
    setCardState(
        {...cardState, [propertyStyle]: {...cardState[propertyStyle], marginLeft: "50px", marginRight:"50px"}}
      )
      
    dictionary[propertyCard2Ref].current.classList.remove("expandLeft")
    dictionary[propertyCard3Ref].current.classList.remove("expandRight")
    setFoldState({...foldState, [propertyFolded]: true}) 
}

export default foldAnyContainer