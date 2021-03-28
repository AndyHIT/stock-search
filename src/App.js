import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import SearchInput from './components/searchInputBox.js';
import StockDetail from './components/stockDetail';

const API_KEY = '3YROQALYDS8I7790';
const API_BASE_URL = 'https://www.alphavantage.co/query';

const App = () => {
  const [stock, setStock] = useState('');
  const [searchedStock, setSearchedStock] = useState('');

  useEffect(() => {
    seeStockDetail(stock);
  }, [stock]);

  const seeStockDetail = (symbol) => {
    setStock(symbol);
  }
  return (
    <div className="App">
      <SearchInput seeStockDetail={seeStockDetail} />
      <StockDetail stockSymbol={stock} />
    </div>
  );
}

export default App;
