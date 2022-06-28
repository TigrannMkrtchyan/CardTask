import Home from './components/features/home';
import CardService from './utils/services/CardService';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardService>
          <Home />
        </CardService>
      </header>
    </div>
  );
}

export default App;
