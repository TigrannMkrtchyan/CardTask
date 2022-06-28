import './card.css'

const Card = ({ number, deleteCard }) => {
    return (
        <div className='mainContainer'>
            <p>{number}</p>
            <span className='closeButton' onClick={() => deleteCard(number)}>X</span>
        </div>
    )
};

export default Card;
