import React from 'react';
import DeckItem from './deck-item/DeckItem';
const DecksList = props => {
    const createCards = (arr) => {
        return arr.map(deck => {
            return (
            <DeckItem key={deck.id} onClick={() => props.updateSelected(deck.id)} data={deck} >
                {props.remove && <button onClick={(e)=>props.remove(e,deck.id)}>Remove</button>}
                    </DeckItem>)
        })
    }
    return (
        <div className='DecksList ui items'>

            <h1>{props.title}</h1>
            {createCards(props.data)}
        </div>
    )
}
export default DecksList;