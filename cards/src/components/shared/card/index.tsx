import { CardProps } from './types';

import './card.css'

const Card = ({ number, deleteCard }: CardProps): JSX.Element => {
    return (
        <div className='mainContainer'>
            <p>{number}</p>
            <span className='closeButton' onClick={(): void => deleteCard(number)}>X</span>
        </div>
    )
};

export default Card;
