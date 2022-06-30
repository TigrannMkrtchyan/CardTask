import { useState, useContext, useEffect } from 'react';
import Header from './components/features/header';
import Home from './components/features/home';
import { randomNumber } from './utils/helpers';
import { CardServiceContext } from './utils/services/CardService';

function App(): JSX.Element {
  const { getCards, addCards, deleteCards } = useContext(CardServiceContext)
  const [cardData, setCardData] = useState<number[] | []>([]);

  const getAllCards = async (): Promise<void> => {
    const cards = await getCards()
    if (cards.success) {
      setCardData(cards.data)
    }
  }

  const handleAddCard = async (): Promise<void> => {
    const cardNumber: number = randomNumber(10000)
    const card = await addCards(cardNumber)
    if (card.success) {
      setCardData([...cardData, card.data])
    }
  };

  const handleSortCards = (): void => {
    setCardData([...cardData.sort((a: number, b: number): number => a - b)])
  };

  const handleDelete = async (cardNumber: number): Promise<void> => {
    const cards = await deleteCards(cardNumber)
    if (cards.success) {
      const result = cardData.filter((value) => value !== cardNumber);
      setCardData(result)
    }
  };

  useEffect((): void => { getAllCards() }, [])

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
