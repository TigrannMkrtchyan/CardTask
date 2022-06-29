import Card from '../../shared/card';
import { HomeProps } from './types';

import './home.css';

const Home = ({ cardData, handleDelete }: HomeProps): JSX.Element => {
    return (
        <div>
            <div className='cardsContainer'>
                {cardData.map((value: number) => (<Card number={value} key={value} deleteCard={handleDelete} />))}
            </div>
        </div>
    )
};

export default Home;
