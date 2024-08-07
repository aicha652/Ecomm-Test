import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Recommended from './Components/Recommended';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Nav />
      <Recommended />
      <Card />
    </div>
  );
}

export default App;
