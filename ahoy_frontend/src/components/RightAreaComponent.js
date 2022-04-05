import 'bootstrap/dist/css/bootstrap-grid.css';
import UniversalCardComponent  from './UniversalCardComponent'
function RightAreaComponent(props) {
    var {albumList} = props
    console.log(albumList)
    
    return(
        <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
            <div className="row justify-content-start">
                {
                    albumList.map((album, index)=>{
                        return(
                            <UniversalCardComponent key={index} artists={album.artists} images={album.images}
                             albumName={album.name} tracks={album.tracks}/>
                        )
                    })
                }            
            </div>
        </div>
        
    )
    
}

export default RightAreaComponent