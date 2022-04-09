import 'bootstrap/dist/css/bootstrap-grid.css';
import UniversalCardComponent  from './UniversalCardComponent'
import TrackListComponent from './TrackListComponent'
import PlaceholderCardComponent from './PlaceholderCardComponent'

function RightAreaComponentForAll(props) {
    var {itemList, type} = props
    if(itemList.length == 0){
        return(
            <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
                <div className="row justify-content-start">
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    <PlaceholderCardComponent/>
                    
                </div>
            </div>   
        )
    }else{
        return(
            <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
                <div className="row justify-content-start">
                    {
                        itemList.map((album, index)=>{
                            return(
                                // <UniversalCardComponent key={index} artists={album.artists} images={album.images}
                                //  albumName={album.name} tracks={album.tracks}/>
                                <UniversalCardComponent key={index} item={album} type={type}/>
                            )
                        })
                    }            
                </div>
            </div>      
        )
    }   
}

export default RightAreaComponentForAll