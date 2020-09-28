import React, { Component } from 'react';
import Select from 'react-select';
import flashingAPI from '../../../../../api/flashingAPI';
import NewCard from './new-card/NewCard';

class EditDeck extends Component {

    state = {
        cards: this.props.data.cards,
        currentCard: 0,
        question: '',
        answer: '',
        changed: false,
        selectedOption: 0,
        newAnswer: '',
        newQuestion: ''


    }
    componentDidMount = () => {
        this.setDisplayCard(0);

    }

    setDisplayCard = (index) => {
        const card = this.state.cards[index];
        if (!card)
            return;
        this.setState({ question: card.question, answer: card.answer, currentCard: index });
    }

    OnChangeSelectCard = (selectedOption) => {
        this.setState({ selectedOption, changed: false });
        this.setDisplayCard(selectedOption.value);
        console.log(`Option selected:`, selectedOption);
    }

    onChangeInput = (e) => {
        const form = e.target.parentElement.parentElement;

        this.setState({ question: form.question.value, answer: form.answer.value, changed: true });
    }

    onChangeNewCard = (e) => {
        const form = e.target.parentElement.parentElement;

        this.setState({ newQuestion: form.question.value, newAnswer: form.answer.value });
    }

    //async crod
    updateCard = async (e) => {
        try {
            this.state.changed = false;
            e.preventDefault();
            const { question, answer } = this.state;
            const data = {
                question: question,
                answer: answer
            }
            // console.log(data);
            const card = this.state.cards[this.state.currentCard];

            const res = await flashingAPI.put(`/deck/${card.deckId}/card/${card.id}`, data);
            if (Number(res.status) !== 200)
                return;

            this.state.cards[this.state.currentCard] = res.data;
        } catch (e) {
            console.log(e);
        }
    }
    addNewCard = async (e) => {
        try {
            this.state.changed = false;
            e.preventDefault();
            const { newQuestion, newAnswer } = this.state;
            const data = {
                question: newQuestion,
                answer: newAnswer
            }
            // console.log(data);
            const card = this.state.cards[this.state.currentCard];

            const res = await flashingAPI.post(`/deck/${card.deckId}/card/`, data);
            console.log(res);
            if (Number(res.status) !== 201)
                return;

          
                const newCards = this.state.cards.slice();
                newCards.push(res.data);
                console.log(newCards);
                this.setState({cards:newCards,newAnswer:'',newQuestion:''})

        } catch (e) {
            console.log(e);
        }
    }
    deleteCard = async (e) => {
        try {
            this.state.changed = false;
            e.preventDefault();

            // console.log(data);
            const card = this.state.cards[this.state.currentCard];

            const res = await flashingAPI.delete(`/deck/${card.deckId}/card/${card.id}`);
            console.log(res);
            if (Number(res.status) !== 200)
                return;

            const newArr = this.state.cards.filter(c => c.id !== card.id);
            this.setState({ cards: newArr, selectedOption: 0 });
            this.setDisplayCard(0);

        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const options = this.state.cards.map((card, index) => {
            return { value: index, label: `${index}-${card.question}` };
        })
        return (
            <div className='EditDeck' style={{ color: 'red',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div className="card ui" style={{display:'inline-block'}}>
                    <form action="" onSubmit={this.updateCard}>
                        <h2>Edit Card</h2>
                        <Select options={options} onChange={this.OnChangeSelectCard} value={this.state.selectedOption} />

                        <div className="field">
                            <label htmlFor="question">question</label>
                            <textarea name="question" id="" cols="30" rows="5" value={this.state.question} onChange={this.onChangeInput}
                            ></textarea>
                        </div>

                        <div className="field">
                            <label htmlFor="answer">answer</label>
                            <textarea
                                name="answer"
                                cols="30" rows="5"
                                value={this.state.answer}
                                onChange={this.onChangeInput}
                            ></textarea>
                        </div>
                        <button type="submit" disabled={!this.state.changed}>Update</button>
                        <button
                            onClick={this.deleteCard}
                            type="delete ui warning"
                            disabled={!this.state.cards.length > 0}
                        >Delete</button>
                    </form>
              
                </div>


                <NewCard answer={this.state.newAnswer}
                    question={this.state.newQuestion}
                    onChange={this.onChangeNewCard}
                    onSubmit = {this.addNewCard}
                   
                />
                <button onClick={this.props.reset}>Main Menu</button>
            </div>
        )
    }
}


export default EditDeck;