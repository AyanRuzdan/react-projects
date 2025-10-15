import './App.css';
import Accordian from "./components/accordian/index"
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QrCodeGenerator from './components/qr-code-gen';
function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      {/* <LoadMoreData /> */}
      <QrCodeGenerator />
    </div>
  );
}

export default App;
