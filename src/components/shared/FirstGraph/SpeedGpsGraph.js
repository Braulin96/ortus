import React from "react";
import {
  Chart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  ValueAxis,
  Grid,
  Crosshair,
  Export,
  Legend,
  Point,
  Label,
  Font,
  Title,
  Subtitle,
  Tooltip,
} from "devextreme-react/chart";
import { energySources, countriesInfo } from "./data.js";

const SpeedGpsGraph = () => {
  return (

    <Chart id="chart" dataSource={countriesInfo} className="h-72">
      <CommonSeriesSettings type="spline" argumentField="country">
        {/* <Point hoverMode="allArgumentPoints" /> */}
        <Point visible={false} />
      </CommonSeriesSettings>

      {energySources.map((item) => (
        <Series key={item.value} valueField={item.value} name={item.name} />
      ))}
      <ArgumentAxis
        valueMarginsEnabled={false}
        discreteAxisDivisionMode="crossLabels"
      >
        <Grid visible={false} />
      </ArgumentAxis>
      <ValueAxis>
        <Grid visible={false} />
      </ValueAxis>
      <Crosshair enabled={false} color="#949494" width={3} dashStyle="dot">
        <Label visible={false} backgroundColor="#949494">
          <Font color="#fff" size={12} />
        </Label>
      </Crosshair>
      <Legend
        verticalAlignment="left"
        horizontalAlignment="center"
        itemTextPosition="bottom"
      />

      <Title text="Energy Consumption in 2004">
        <Subtitle text="(Millions of Tons, Oil Equivalent)" />
      </Title>
      <Export
       verticalAlignment="left"
        horizontalAlignment="center"
        itemTextPosition="bottom"
       enabled={true} />
      <Tooltip enabled={true} />
    </Chart>

  );
};
export default SpeedGpsGraph;
