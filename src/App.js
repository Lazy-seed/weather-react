import './App.css';
import { getData } from './api/Api';
import './assets/personal.scss';
import Navbar from './components/Navbar';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
    <Navbar/>


    <Home/>
    </div>
  );
}

export default App;
