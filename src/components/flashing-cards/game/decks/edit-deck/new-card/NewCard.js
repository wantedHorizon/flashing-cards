import React from 'react';
const NewCard = props => {
    return (
        <div className='NewCard ui card'  style={{display:'inline-block'}}>
            <h2>Add New Card</h2>
            <form action="" onSubmit={props.onSubmit}>

                <div className="field">
                    <label htmlFor="question">question</label>
                    <textarea name="question" id="" cols="30" rows="5" value={props.question} onChange={props.onChange}
                    ></textarea>
                </div>

                <div className="field">
                    <label htmlFor="answer">answer</label>
                    <textarea
                        name="answer"
                        cols="30" rows="5"
                        value={props.answer}
                        onChange={props.onChange}
                    ></textarea>
                </div>
                <button type="submit" disabled={!(props.question.length > 0 && props.answer.length > 0)}>Add Card</button>
            </form>
        </div>
    )
}
export default NewCard;