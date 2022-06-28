import Card from '../../shared/card';

import './home.css';

const Home = ({ cardData, handleDelete }) => {
    return (
        <div>
            <div className='cardsContainer'>
                {cardData.map((value) => (<Card number={value} key={value} deleteCard={handleDelete} />))}
            </div>
        </div>
    )
};

export default Home;
