import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class PlayDeck extends Component {

    state = {
        isFlipped: false,
        cards: shuffle(this.props.data.cards),
        currentCard: 0,
        question: null,
        answer: null,
        correct: 0
        
    }
    componentDidMount = () => {
        this.setDisplayCard(0);
    }

    setDisplayCard = (index) => {
        const card = this.state.cards[index];
        if (!card)
            return;
        this.setState({ question: card.question, answer: card.answer,currentCard: index,isFlipped:false });
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    nextQuestionClickHandler = (e) => {
        if(this.state.currentCard >= this.state.cards.length-1)
        return;

        else{
            this.setDisplayCard(this.state.currentCard +1 );
        }
    }
    rightAnswerHandler = () => {
        const correct = this.state.correct +1;
        this.setState({correct});
        this.nextQuestionClickHandler();
    }
    render() {

        return (
            <div className='PlayDeck' style={{ color: 'red' }}>
         

                <ReactCardFlip
                    className=""
                    isFlipped={this.state.isFlipped}
                    flipDirection="vertical"
                >
                    <div className="ui card ReactCardFlip " >
                    <h5>{this.state.currentCard+1}/{this.state.cards.length}</h5>
                        <h1>{this.state.question}</h1>
                        <div className="content">

                            <button onClick={this.handleClick}>Reveal The answer</button>
                            <button onClick={this.nextQuestionClickHandler}>Next Question</button>
                        </div>
                    </div>

                    <div className="ui card ReactCardFlip" >
                    <h5>{this.state.currentCard+1}/{this.state.cards.length}</h5>

                        <h1>{this.state.answer}</h1>
                        <div className="content">
                            <button onClick={this.rightAnswerHandler}>You were right</button>
                            <button onClick={this.nextQuestionClickHandler}>Next Question</button>

                        </div>
                    </div>
                </ReactCardFlip>
                <h4 style={{color:"green"}}>Right Answers: {`${this.state.correct}/${this.state.cards.length}`}</h4>
                <button onClick={this.props.reset}>Main Menu</button>
            </div>
        )
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export default PlayDeck;