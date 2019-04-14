import React, { Fragment } from "react";
import { CHART_HEIGHT, INTERVAL } from "../../constants";

export default function YText({ maxValue, minValue }) {
  function getTexts() {
    const dataScaleUnit = (maxValue - minValue) / INTERVAL;
    const chartScaleUnit = CHART_HEIGHT / INTERVAL;
    const texts = [];
    for (let i = 0; i <= INTERVAL; i++) {
      texts.push({
        yPosition: CHART_HEIGHT - chartScaleUnit * i,
        text: minValue + dataScaleUnit * i
      });
    }
    return texts;
  }
  return (
    <g>
      {getTexts().map((textObj, i) => {
        const { text, yPosition } = textObj;
        return (
          <Fragment key={yPosition}>
            <line
              strokeWidth="2"
              stroke="black"
              x1="3"
              y1={yPosition}
              x2="-3"
              y2={yPosition}
            />
            <text
              x="-60"
              y={i === getTexts().length - 1 ? yPosition + 10 : yPosition}
              fontSize="10"
            >
              $ {parseFloat(text || 0).toFixed(1)}
            </text>
          </Fragment>
        );
      })}
    </g>
  );
}
