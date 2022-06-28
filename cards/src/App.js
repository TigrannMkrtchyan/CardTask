import { useState, useContext, useEffect } from 'react';
import Header from './components/features/header';
import Home from './components/features/home';
import { randomNumber } from './utils/helpers';
import { CardServiceContext } from './utils/services/CardService';


function App() {

  const hop = useContext(CardServiceContext)
  const [cardData, setCardData] = useState([]);

  const getAllCards = async () => {
    const cards = await hop.getCards()
    if (cards.success) {
      setCardData(cards.data)
    }
  }
  console.log(cardData)
  useEffect(() => { getAllCards() }, [])

  const handleAddCard = async () => {
    const number = randomNumber(10000)
    const card = await hop.addCards(number)
    if (card.success) {
      setCardData([...cardData, card.data])
    }
  };

  const handleSortCards = async () => {
    setCardData([...cardData.sort((a, b) => a - b)])
  };

  const handleDelete = async (number) => {
    const cards = await hop.deleteCards(number)
    if (cards.success) {
      setCardData(cards.data)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header
          handleAddCard={handleAddCard}
          handleSortCards={handleSortCards}
        />
      </header>
      <Home
        handleDelete={handleDelete}
        cardData={cardData}
      />
    </div>
  );
}

export default App;
