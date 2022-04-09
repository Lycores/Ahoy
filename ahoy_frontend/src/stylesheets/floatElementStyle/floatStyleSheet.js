const tabToHomeHeight = 100
const tabToHomeWidth = 50
const tabToPlaylistHeight = 100
const tabToPlaylistWidth = 50

export const tabToHome = {
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

export const tabToPlaylist = {
    position:'fixed', 
    top:`calc(50% - ${tabToPlaylistHeight/2}px`, 
    left:'0px', 
    width: tabToPlaylistWidth,
    height: tabToPlaylistHeight,
    backgroundColor:'white',
    ZIndex:99,
    borderRadius: '0 50px 50px 0',
    cursor: 'pointer'
}