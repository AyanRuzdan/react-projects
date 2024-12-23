import './App.css';
import Accordian from "./components/accordian/index"
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating />
    </div>
  );
}

export default App;
