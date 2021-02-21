import React, {Component} from "react";
import ReactPlayer from 'react-player'

class Player extends Component{
    render(){
        return(
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            ><ReactPlayer
            url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'/>
            </div>
        )
     }

}

export default Player