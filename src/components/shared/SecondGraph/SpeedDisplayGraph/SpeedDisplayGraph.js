import React, { useCallback, useState } from "react";
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
  return `${valueText} mph`;
}
const SpeedDisplayGraph = () => {
  //const [value, setValue] = useState(dataSource[0].mean);

  return (
    <div id="gauge-demo">
      <CircularGauge id="gauge" value={20}>
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
        <Title text="Temperature in the Greenhouse">
          <Font size={28} />
        </Title>
      </CircularGauge>
     
    </div>
  );
};
export default SpeedDisplayGraph;
