import './App.css';
import Connexion from './connexion/connexion';
import Test from './testProps/test';

function App() {
  const bonjour = <Test name = "John" age = "11" adresse = "12 rue de nawak" date = "12/04/11" />
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
        {/* <Connexion />: */}
        {bonjour}
      </header>
    </div>
  );
}

export default App;
