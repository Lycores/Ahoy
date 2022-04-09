const tabToHomeHeight = 100
const tabToHomeWidth = 50
const tabToHome = {
    position:'fixed', 
    top:`calc(50% - ${tabToHomeHeight/2}px`, 
    right:'0px', 
    width: tabToHomeWidth,
    height: tabToHomeHeight,
    backgroundColor:'white',
    ZIndex:99,
    borderRadius: '50px 0 0 50px',
    cursor: 'pointer'
}
export default tabToHome