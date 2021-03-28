import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = '3YROQALYDS8I7790';
const API_BASE_URL = 'https://www.alphavantage.co/query';

const StockDetail = ({stockSymbol}) => {
  const [stockDetail, setStockDetail] = useState(null);
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const viewStockDetail = () => {
      axios.get(`${API_BASE_URL}`, {
        params: {
          function: 'OVERVIEW',
          symbol: stockSymbol,
          apikey: API_KEY
        }
      }).then(json => {
        setStock(stockSymbol);
        setStockDetail(json.data);
      })
    }
    if (stockSymbol && stockSymbol !== stock) {
      viewStockDetail();
    }    
  }, [stockSymbol, stockDetail, stock]);
  
  return (
    (stockDetail?.hasOwnProperty('Description')) ? (
      <div className='stock-detail-container'>
        <div>{stockSymbol.toUpperCase()} ({stockDetail.Exchange})</div>
        <div>{stockDetail.Sector} | {stockDetail.Industry} | {stockDetail.Country}</div>
        <p>{stockDetail && stockDetail.Description}</p>
        <div className='stock-detail-table'>
          <label>Key stats</label>
          <div>Market Cap: {stockDetail.MarketCapitalization}</div>
          <div>EBITDA: {stockDetail.EBITDA}</div>
          <div>P/E: {stockDetail.PERatio}</div>
          <div>EPS: {stockDetail.EPS}</div>
          <div>Dividend: {stockDetail.DividendPerShare}</div>
          <div>Shs Outstand: {stockDetail.SharesOutstanding}</div>
          <div>Shs Float: {stockDetail.SharesFloat}</div>
          <div>52 Wk High: {stockDetail['52WeekHigh']}</div>
          <div>52 Wk Low: {stockDetail['52WeekLow']}</div>
        </div>
      </div>
    )
    : (stockSymbol && (
      <p className='errorTxt'>This is awkward... Please change a search keyword or try again later.</p>
    ))
  )
}

export default StockDetail;