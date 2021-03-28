import { useEffect, useState } from 'react';

const SearchResultList = ({suggestionList, seeStockDetail, typedStock}) => {
  const [list, setList] = useState(suggestionList);

  useEffect(() => {
    setList(suggestionList);
  }, [suggestionList])

  const checkStockDetail = (symbol) => {
    setList(null);
    seeStockDetail(symbol);
  }
  return (
    <div className='stock-list-container'>
      <ul 
        className='stock-list'
      >
        {
          list && list.map(item => 
            <li 
              key={item['1. symbol']} 
              className='stock-list-item'
              onClick={() => checkStockDetail(item['1. symbol'])}
            >{item['1. symbol']}</li>
          )
        }
      </ul>
    </div>
  )
}

export default SearchResultList;