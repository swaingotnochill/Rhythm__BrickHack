import React, {useState} from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen(){

   const [input, setInput] = useState(''); 
    const [messages, setMessages] = useState([
        {
            name:"Roshan",
            image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWNhbCUyMGluc3RydW1lbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            message: "Yo! What's up?"
        },
        {
            name:"Roshan",
            image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWNhbCUyMGluc3RydW1lbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            message: "How's going?"
        },
        {
            
            message: "Pretty Bad! Can't figure it out"
        },
    ]);
     const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput(""); 

    }; 
    return(
        <div className="chatscreen">
            <p className="chatscreen__timestamp">You Matched on 21/02/2021</p>

            {messages.map((message) => (
                message.name ? ( <div className = "chatscreen__message">
                <Avatar className="chatscreen__image" alt = {message.name} src={message.image} />
                <p className="chatscreen__text"> {message.message}</p>

            </div>)
            :(
                <div className="chatscreen__message">
                    <p className="chatscreen__textuser">{message.message}</p>
                </div>
                
            )

            ))}
         
                <form className="chatscreen__input">
                    <input value={input} OnChange ={(e) => setInput(e.target.value)}className="chatscreen__textinput" placeholder="Type a Message..." type="text" ></input>
                        <button onClick={handleSend} type="submit" className="chatscreen__inputButton">SEND</button>
                   
                </form>
         


        </div>
    );
}

export default ChatScreen;