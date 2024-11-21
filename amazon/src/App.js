import "./App.css";
import Header from "./components/Header/Header";
import CarouselEffect from "./components/Carousel/CarouselSlider";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
}

export default App;
