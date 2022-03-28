import App from './App'

const foldAnyContainer = (cardState ,setCardState, foldState, setFoldState, dictionary, property, foldUnfold) => {
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

export default foldAnyContainer