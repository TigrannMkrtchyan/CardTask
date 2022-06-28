import './header.css'

const Header = ({ handleAddCard, handleSortCards }) => {
    return (
        <header>
            <div className='buttonContainer'>
                <button onClick={handleAddCard}>add card</button>
                <button onClick={handleSortCards}>sort cards </button>
            </div>
        </header>
    )
}

export default Header
