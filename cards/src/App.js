import { useState, useContext, useEffect } from 'react';
import Header from './components/features/header';
import Home from './components/features/home';
import { randomNumber } from './utils/helpers';
import { CardServiceContext } from './utils/services/CardService';

function App() {
  const { getCards, addCards, deleteCards } = useContext(CardServiceContext)
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
    const card = await addCards(number)
    if (card.success) {
      setCardData([...cardData, card.data])
    }
  };

  const handleSortCards = async () => {
    setCardData([...cardData.sort((a, b) => a - b)])
  };

  const handleDelete = async (number) => {
    const cards = await deleteCards(number)
    if (cards.success) {
      setCardData(cards.data)
    }
  };

  return (
    <div className="App">
      <Header
        handleAddCard={handleAddCard}
        handleSortCards={handleSortCards}
      />
      <Home
        handleDelete={handleDelete}
        cardData={cardData}
      />
    </div>
  );
}

export default App;
