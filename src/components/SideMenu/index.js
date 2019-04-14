import React from "react";
import stockData from "../../constants/stock-data";
import { Container, Menu } from "./styles";

export default function SideMenu({ onSelectStock, selectedStock }) {
  function handleSelectStock(stockName) {
    onSelectStock(stockName);
  }

  return (
    <Container>
      {Object.keys(stockData).map(stockName => {
        return (
          <Menu
            key={stockName}
            active={selectedStock === stockName}
            onClick={handleSelectStock.bind(this, stockName)}
          >
            {stockName}
          </Menu>
        );
      })}
    </Container>
  );
}
