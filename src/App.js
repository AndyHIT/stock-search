import { useEffect, useState } from 'react';
import './App.scss';
import SearchInput from './components/searchInputBox.js';
import StockDetail from './components/stockDetail';

const App = () => {
  const [stock, setStock] = useState('');

  useEffect(() => {
    seeStockDetail(stock);
  }, [stock]);

  const seeStockDetail = (symbol) => {
    setStock(symbol);
  }
  return (
    <div className="App">
      <SearchInput seeStockDetail={seeStockDetail} selectedStock={stock} />
      <StockDetail stockSymbol={stock} />
    </div>
  );
}

export default App;
