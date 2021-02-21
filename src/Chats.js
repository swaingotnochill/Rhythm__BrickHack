import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats(){
    return(
        <div className="chats">
            <Chat 
            name="Roshan"
            message="Hey!Do you think we will complete our BrickHack Project?"
            timestamp = "5 minutes ago"
            profilePic = "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWNhbCUyMGluc3RydW1lbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            />
            <Chat 
            name="Joseph"
            message="Dude, We will WIN !!!"
            timestamp = "7 minutes ago"
            profilePic = "https://images.unsplash.com/photo-1598233845720-008543fa485c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWNhbCUyMGluc3RydW1lbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            />
            <Chat 
            name="BrickHacks"
            message="No you are not gonna win."
            timestamp = "9 minutes ago"
            profilePic = "https://images.unsplash.com/photo-1560010954-0ea652c47dff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fG11c2ljYWwlMjBpbnN0cnVtZW50c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            />
            <Chat 
            name="RandomPersonName"
            message="Amateurs"
            timestamp = "10 minutes ago"
            profilePic = "https://images.unsplash.com/photo-1588161543631-89e74f5b2c42?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fG11c2ljYWwlMjBpbnN0cnVtZW50c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            />

        </div>
    );
}

export default Chats;