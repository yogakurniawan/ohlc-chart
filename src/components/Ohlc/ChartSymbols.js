import React from "react";
import format from "date-fns/format";
import { CHART_HEIGHT, INTERVAL } from "../../constants";

export default function ChartSymbols({
  data,
  dates,
  minValue,
  maxValue,
  xScaleUnit
}) {
  const dataScaleUnit = (maxValue - minValue) / INTERVAL;
  const chartScaleUnit = CHART_HEIGHT / INTERVAL;
  const ratio = chartScaleUnit / dataScaleUnit;
  return dates.map((date, i) => {
    const formattedDate = format(date, "YYYY-MM-DD");
    const xScale = (i + 1) * xScaleUnit;
    const {
      "1. open": open,
      "2. high": high,
      "3. low": low,
      "4. close": close
    } = data[formattedDate];
    const color = close > open ? "green" : "red";
    const lowPosition = (maxValue - parseFloat(low).toFixed(1)) * ratio;
    const highPosition = (maxValue - parseFloat(high).toFixed(1)) * ratio;
    const openPosition = (maxValue - parseFloat(open).toFixed(1)) * ratio;
    const closePosition = (maxValue - parseFloat(close).toFixed(1)) * ratio;
    return (
      <g key={formattedDate}>
        <line
          stroke={color}
          x1={xScale}
          x2={xScale}
          y1={highPosition}
          y2={lowPosition}
        />
        <line
          stroke={color}
          x1={xScale}
          x2={xScale + 5}
          y1={openPosition}
          y2={openPosition}
        />
        <line
          stroke={color}
          x1={xScale - 5}
          x2={xScale}
          y1={closePosition}
          y2={closePosition}
        />
      </g>
    );
  });
}
