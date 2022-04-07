import 'bootstrap/dist/css/bootstrap-grid.css';
import UniversalCardComponent  from './UniversalCardComponent'
import TrackListComponent from './TrackListComponent'
import PlaceHolder from './PlaceHolder'

function RightAreaComponentForCards(props) {
    var {albumList} = props

    if(albumList.length == 0){
        return(
            <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
                <div className="row justify-content-start">
                    <PlaceHolder/>
                </div>
            </div>   
        )
    }else{
        return(
            <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
                <div className="row justify-content-start">
                    {
                        albumList.map((album, index)=>{
                            return(
                                // <UniversalCardComponent key={index} artists={album.artists} images={album.images}
                                //  albumName={album.name} tracks={album.tracks}/>
                                <UniversalCardComponent key={index} album={album}/>
                            )
                        })
                    }            
                </div>
            </div>      
        )
    }   
}

export default RightAreaComponentForCards