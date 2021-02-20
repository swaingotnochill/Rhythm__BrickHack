import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
function Header(){
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <h2>Rhythm</h2>
            <IconButton>
            <ForumIcon  className="header__icon" fontSize="large"/>
            </IconButton>


        </div>
    );
}

export default Header;