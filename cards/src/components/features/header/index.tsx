import { HeaderProps } from './types';

import './header.css';

const Header = ({ handleAddCard, handleSortCards }: HeaderProps): JSX.Element => {
    return (
        <header>
            <div className='buttonContainer'>
                <button onClick={handleAddCard}>add card</button>
                <button onClick={handleSortCards}>sort cards </button>
            </div>
        </header>
    )
};

export default Header;
