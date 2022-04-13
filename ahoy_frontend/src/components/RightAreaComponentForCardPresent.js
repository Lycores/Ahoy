import 'bootstrap/dist/css/bootstrap-grid.css';
import UniversalCardComponent  from './UniversalCardComponent'
import TrackEntryComponent from './TrackEntryComponent'
import PlaceholderCardComponent from './PlaceholderCardComponent'
import React from 'react'
function RightAreaComponentForCardPresent(props) {
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

export default React.memo(RightAreaComponentForCardPresent)