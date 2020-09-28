import React, { Component } from 'react';
import flashingAPI from '../../../api/flashingAPI';
import DecksList from './decks/DecksList';
import PlayDeck from './decks/play-deck/PlayDeck';


class Game extends Component {
    state = {
        decks: [],
        selected: null,
        

    }
    componentDidMount = () => {
       this.fetchAllDecks();
        
    }
    updateSelected = (id) => {
        const deck = this.state.decks.find(deck => deck.id === id);
        if(deck){
            this.setState({selected: deck});

        }
    }
    fetchAllDecks = async() =>{
        try {
            const response = await flashingAPI.get('/deck');
            if(response.status !== 200)
                throw response.statusText;

                this.setState({decks: response.data});
            } catch(error) {
            console.log(error);
        }

    }
    resetSelected = () => {
        this.setState({selected:null});
    }

  
    render() {
        let display ;
        if(this.state.selected){
            display = <PlayDeck data={this.state.selected} reset={this.resetSelected} />
        } else {
            
            display = <DecksList updateSelected={this.updateSelected} data={this.state.decks} title="Please Selected Deck to Edit"/>;
        }
        return (
            <div className='game ui container'>
                {display}
            </div>
        );
    }
}
export default Game;