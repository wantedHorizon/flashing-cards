import React from 'react';
const DeckItem = ({data,onClick,children}) => {
    return (
        

        <div className='DeckItem item' 
        style={{ border: '1px solid black', borderRadius: '10px', padding: '5px 10px', background: '#e5e5e5' }}
        onClick={onClick}
        >
            <div className="content">
                <div className="header"  >{data.name} </div>
                {children}
            </div>
        </div>
    )
}
export default DeckItem;