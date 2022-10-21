import "./App.css";
// import ProductCarousel from "./components/carousel/Carousel";
// import { render } from 'react-dom';
import ProductCarousel from "./ProductCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {

  return (
    <div className="App flex justify-center">
      <div className="flex flex-wrap justify-center bg-yellow-200 carousel-holder">
          <ProductCarousel className='' />
      </div>
    </div>
  );
}

export default App;
