import React , {useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import "./RhythmCards.css";
import database from "./firebase";

function RhythmCards(){
    const [people, setPeople]= useState([]);

    useEffect(() => {

      const unsubscribe = database.collection("people").onSnapshot(snapshot => setPeople(
            snapshot.docs.map(doc => doc.data())
        ));
        return () => {
            unsubscribe();
        };

    },[]);
    return(
        <div>
        <h1>Rhythm Cards</h1>
        <div className="cardContainer">
            
        
            {people.map(person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]}>
                    <div  style={{ backgroundImage: `url(${person.img_url})`}}   className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default RhythmCards;