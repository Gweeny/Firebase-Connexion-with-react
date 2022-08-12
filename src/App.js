import './App.css';
import Connexion from './connexion/connexion';
import Test from './testProps/test';

function App() {
  const bonjour = <Test name = "John" age = "11" adresse = "12 rue de nawak" date = "12/04/11x" />
  return (
    <div className="App">
      <header className="App-header">
        <h1>Connexion firebase</h1>
        <Connexion />
      </header>
    </div>
  );
}

export default App;
