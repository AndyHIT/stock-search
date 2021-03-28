import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import SearchResultList from './searchResultList';

const API_KEY = '3YROQALYDS8I7790';
const API_BASE_URL = 'https://www.alphavantage.co/query';

const SearchInput = ({selectedStock, seeStockDetail}) => {
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    const searchStock = () => {
      axios.get(`${API_BASE_URL}`,{
        params: {
          function: 'SYMBOL_SEARCH',
          keywords: searchKeyWord,
          apikey: API_KEY
        }
      })
      .then(json => {
        setResultList(json.data?.bestMatches);
      })
    }
    const timeOutId = setTimeout(() => {
      if (searchKeyWord) {
        searchStock();
      }
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    }
  }, [searchKeyWord])

  const handleSearchStock = (e) => {
    const stockSymbolValue = e.target.value;
    setSearchKeyWord(stockSymbolValue);
  }

  return (
    <div className='search-box-list-container'>
      <div className='search-box-container'>
        <div className='search-input-container'>
          <input 
            className='search-input' 
            id='search-input-box' 
            value={searchKeyWord} 
            placeholder='STOCK SYMBOL HERE'
            onChange={handleSearchStock} 
          />
          <button aria-label='Search' className='search-glass-btn' onClick={() => {seeStockDetail(searchKeyWord); setResultList(null)}}>
            <SearchIcon classes={{root: 'search-glass'}}/>
          </button>
        </div>
      </div>
      <SearchResultList 
        suggestionList={resultList} 
        seeStockDetail={seeStockDetail}
        typedStock={searchKeyWord}
      />
    </div>
  )
}

export default SearchInput;