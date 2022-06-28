import './header.css'

const Header = ({handleAddCard,handleSortCards}) => {
    return (
        <div className='buttonContainer'>
            <button onClick={handleAddCard}>add card</button>
            <button onClick={handleSortCards}>sort cards </button>
        </div>
    )
}

export default Header