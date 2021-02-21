import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons(){
    return(
        <div className="swipeButtons">
            <IconButton>
            <ReplayIcon className="swipeButtons__replay" fontsize="large"/>
            </IconButton>
            <IconButton>
            <HighlightOffIcon  className="swipeButtons__off" fontsize="large"/>
            </IconButton>
            <IconButton>
            <StarRateIcon className="swipeButtons__star" fontsize="large"/>
            </IconButton>
            <IconButton>
            <FavoriteIcon className="swipeButtons__favorite" fontsize="large"/>
            </IconButton>
            <IconButton>
            <FlashOnIcon className="swipeButtons__flash"  fontsize="large"/>
            </IconButton>
        </div>
    );
}

export default SwipeButtons;