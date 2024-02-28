import React, { useState } from "react";
import {
  CircularGauge,
  Scale,
  Label,
  RangeContainer,
  Range,
  Tooltip,
  Title,
  Font,
} from "devextreme-react/circular-gauge";

function customizeText({ valueText }) {
  //return `${valueText} mph`
  return `${valueText} `
}

const SpeedDisplayGraph = () => {
  const [gaugeValue, setGaugeValue] = useState(20);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setGaugeValue(newValue);
  };

  return (
    <div id="gauge-demo">
      <div className="relative">
        <CircularGauge id="gauge" value={gaugeValue}>
          <Scale startValue={10} endValue={160} tickInterval={20}>
            <Label customizeText={customizeText} />
          </Scale>
          <RangeContainer>
            <Range startValue={0} endValue={20} color="#0077BE" />
            <Range startValue={20} endValue={40} color="#E6E200" />
            <Range startValue={40} endValue={60} color="#77DD77" />
            <Range startValue={60} endValue={80} color="#0077BE" />
            <Range startValue={80} endValue={100} color="#0077BE" />
            <Range startValue={100} endValue={120} color="#0077BE" />
            <Range startValue={120} endValue={140} color="#0077BE" />
            <Range startValue={140} endValue={160} color="#0077BE" />
          </RangeContainer>
          <Tooltip enabled={true} />
          {/* <Title text="Temperature in the Greenhouse">
            <Font size={28} />
          </Title> */}
        </CircularGauge>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <input
          min={0}
          max={160}
            type="number"
            placeholder="mph"
            className="border-2 border-gray-400 p-2 h-8 w-20 rounded-full "
            value={gaugeValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SpeedDisplayGraph;
