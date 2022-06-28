import { useContext, useEffect, useState } from 'react';
import Card from '../../shared/card';
import { randomNumber } from '../../../utils/helpers';
import { CardServiceContetx } from '../../../utils/services/CardService';

import './home.css';

const Home = () => {

    const { getCards, addCards, sortCards, deleteCards } = useContext(CardServiceContetx)
    const [cardData, setCardData] = useState([]);

    const getAllCards = async () => {
        const cards = await getCards()
        if (cards.success) {
            setCardData(cards.data)
        }
    }

    useEffect(() => { getAllCards() }, [])

    const handleAddCard = async () => {
        const number = randomNumber(10000)
        const cards = await addCards(number)
        if (cards.success) {
            setCardData(cards.data)
        }
    };

    const handleSortCards = async () => {
        const cards = await sortCards()
        if (cards.success) {
            setCardData(cards.data)
        }

    };

    const handleDelete = async (number) => {
        const cards = await deleteCards(number)
        if (cards.success) {
            setCardData(cards.data)
        }
    };

    return (
        <div>
            <div className='buttonContainer'>
                <button onClick={handleAddCard}>add card</button>
                <button onClick={handleSortCards}>sort cards </button>
            </div>
            <div className='cardsContainer'>
                {cardData.map((value) => (<Card number={value} key={value} deleteCard={handleDelete}> </Card>))}
            </div>
        </div>
    )
};

export default Home;
