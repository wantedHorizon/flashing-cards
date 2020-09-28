import React, { Component } from 'react';
import flashingAPI from '../../api/flashingAPI';
import DecksList from './game/decks/DecksList';
import EditDeck from './game/decks/edit-deck/EditDeck';

class Management extends Component {
    state = {
        decks: [],
        selected: null
    }
    componentDidMount = () => {
       this.fetchAllDecks();
        
    }

    fetchAllDecks = async () => {
        try {
            const response = await flashingAPI.get('/deck');
            if (response.status !== 200)
                throw response.statusText;

            this.setState({ decks: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    updateSelected = (id) => {
        const deck = this.state.decks.find(deck => deck.id === id);
        if(deck){
            this.setState({selected: deck});

        }
    }

    deleteDeck = async(e,id) => {
        e.preventDefault();
        e.stopPropagation();
        try{
            const res= await flashingAPI.delete(`/deck/${id}`);
            console.log(res);
            this.fetchAllDecks();
        }catch(e) {

        }
    }

    resetSelected = () => {this.setState({selected:null}) };
    render() {

        let display ;
        if(this.state.selected){
            display = <EditDeck data={this.state.selected} reset={this.resetSelected} />
        } else {
            
            display = <DecksList updateSelected={this.updateSelected} remove={this.deleteDeck} data={this.state.decks} title="Please Selected Deck to Edit"/>;
        }
        return (
            <div className='game ui container'>
                {display}
            </div>
        );
    }
}

export default Management;