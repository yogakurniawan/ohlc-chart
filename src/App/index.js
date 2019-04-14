import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Flex from "styled-flex-component";
import { saveItem, loadItem } from "../utils";
import { SideMenu, Ohlc, Header, Footer, Spinner } from "../components";
import { SpinnerWrapper } from "./styles";

function requestData(symbol = "MSFT") {
  return axios({
    url: "https://www.alphavantage.co/query",
    method: "GET",
    params: {
      function: "TIME_SERIES_DAILY",
      symbol,
      outputsize: "compact",
      datatype: "json",
      apikey: "HQQDXOQ1BP7MXAJC"
    }
  });
}

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stockName, setStockName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await requestData(stockName);
      setIsLoading(false);
      setData(response.data['Time Series (Daily)']);
    };
    const stockName = loadItem("stockName");
    if (stockName) {
      setStockName(stockName);
    }
    fetchData();
  }, []);

  async function handleSelectStock(stockName) {
    setStockName(stockName);
    saveItem("stockName", stockName);
    setIsLoading(true);
    const response = await requestData(stockName);
    setIsLoading(false);
    setData(response.data['Time Series (Daily)']);
  }

  console.log(data);

  return (
    <Fragment>
      <Header />
      <Flex>
        <SideMenu selectedStock={stockName} onSelectStock={handleSelectStock} />
        {!isLoading && data && <Ohlc data={data} />}
        {isLoading && (
          <SpinnerWrapper>
            <Spinner color='#a9deb6' position="relative" />
          </SpinnerWrapper>
        )}
      </Flex>
      <Footer />
    </Fragment>
  );
}
