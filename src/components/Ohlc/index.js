import React from "react";
import compareAsc from "date-fns/compare_asc";
import DateLine from "./DateLine";
import YText from "./YText";
import XYLine from "./XYLine";
import ChartSymbols from "./ChartSymbols";
import { Container } from "./styles";

export default function Ohlc({ data }) {
  const dates = Object.keys(data);
  const parsedDates = dates.map(date => new Date(date));
  const sortedDates = parsedDates.sort(compareAsc);
  const xScaleUnit = 800 / dates.length;
  const { maxValue, minValue } = dates.reduce(
    (accumulator, currentValue, i) => {
      const { "2. high": high, "3. low": low } = data[currentValue];
      const { maxValue, minValue } = accumulator;
      return {
        ...accumulator,
        maxValue: i > 0 ? Math.max(high, maxValue) : high,
        minValue: i > 0 ? Math.min(low, minValue) : low
      };
    },
    {}
  );
  return (
    <Container>
      <svg width="100%" height="60vh" viewBox="0 0 800 400">
        <XYLine />
        <ChartSymbols
          dates={sortedDates}
          xScaleUnit={xScaleUnit}
          maxValue={maxValue}
          minValue={minValue}
          data={data}
        />
        <YText maxValue={maxValue} minValue={minValue} />
        <DateLine dates={sortedDates} unit={xScaleUnit} />
      </svg>
    </Container>
  );
}
