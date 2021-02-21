import React, {Component, useState} from "react";
import TinderCard from 'react-tinder-card'
import Player from "./Player";
import ReactAudioPlayer from 'react-audio-player';

const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
}

class Card extends Component{
    render(){
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                            preventSwipe={['right', 'left']}><Player /> </TinderCard>
            </div>
        );
    }
}

export default Card;