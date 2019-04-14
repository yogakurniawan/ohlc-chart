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
    const lineColor = close > open ? "green" : "red";
    const lineStart = (maxValue - parseFloat(low).toFixed(1)) * ratio;
    const lineEnd = (maxValue - parseFloat(high).toFixed(1)) * ratio;
    const openStart = (maxValue - parseFloat(open).toFixed(1)) * ratio;
    const closeStart = (maxValue - parseFloat(close).toFixed(1)) * ratio;
    return (
      <g key={formattedDate}>
        <line
          stroke={lineColor}
          x1={xScale}
          x2={xScale}
          y1={lineEnd}
          y2={lineStart}
        />
        <line
          stroke={lineColor}
          x1={xScale}
          x2={xScale + 5}
          y1={openStart}
          y2={openStart}
        />
        <line
          stroke={lineColor}
          x1={xScale - 5}
          x2={xScale}
          y1={closeStart}
          y2={closeStart}
        />
      </g>
    );
  });
}
