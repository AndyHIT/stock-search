import { useEffect, useState } from 'react';

const SearchResultList = ({suggestionList, seeStockDetail, typedStock}) => {
  const [list, setList] = useState(suggestionList);
  const [open, setOpen] = useState(false);

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
        onBlur={() => setList(null)}
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
      {/* <div className='stock-search-btn-container'>
        <button onClick={() => checkStockDetail(typedStock)}>Search</button>
      </div> */}
    </div>
  )
}

export default SearchResultList;