import logo from './logo.svg';
import './App.css';
import ProductCard from './Components/ProductCard';

function App() {
  return (
    <>
      <ProductCard name="IPhone" price={9.99} quantity={10} imageUrl="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png" />
    </>
  );
}

export default App;
