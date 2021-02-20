import React , {useState} from "react";
import TinderCard from "react-tinder-card";
import "./RhythmCards.css";

function RhythmCards(){
    const [people, setPeople]= useState([
        {
            name:'Roshan Swain',
            url: 'https://images.unsplash.com/photo-1610713818311-4078be4c6936?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1573&q=80'
        },
        {
            name:'Joseph',
            url:'https://images.unsplash.com/photo-1598233845720-008543fa485c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWNhbCUyMGluc3RydW1lbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ]);
    return(
        <div>
        <h1>Rhythm Cards</h1>
        <div className="cardContainer">
            
        
            {people.map(person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]}>
                    <div  style={{ backgroundImage: `url(${person.url})`}}   className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default RhythmCards;