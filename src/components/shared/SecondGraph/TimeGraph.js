import React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";
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

const countriesInfo = [
  {
    country: "USA",
    hydro: 60.2,
    oil: 974.7,
    gas: 550.5,
    coal: 568.9,
    nuclear: 203.7,
  },
  {
    country: "China",
    hydro: 77.8,
    oil: 304.5,
    gas: 35,
    coal: 899,
    nuclear: 10.8,
  },
  {
    country: "Russia",
    hydro: 38.5,
    oil: 127.2,
    gas: 349.5,
    coal: 97.2,
    nuclear: 30.5,
  },
  {
    country: "Japan",
    hydro: 23.8,
    oil: 227.4,
    gas: 63.2,
    coal: 118.6,
    nuclear: 59.7,
  },
  {
    country: "India",
    hydro: 18.7,
    oil: 115.7,
    gas: 30.6,
    coal: 187,
    nuclear: 3.5,
  },
  {
    country: "Germany",
    hydro: 6.7,
    oil: 120.5,
    gas: 83.4,
    coal: 86.6,
    nuclear: 35.7,
  },
];

const label = { inputProps: { "aria-label": "Switch demo" } };
const TimeGraph = () => {
  const [switchHydro, setSwitchHydro] = useState(true);
  const [switchOil, setSwitchOil] = useState(true);
  const [switchGas, setSwitchGas] = useState(true);
  const [switchCoal, setSwitchCoal] = useState(true);

  const handleSwitchHydroChange = () => {
    setSwitchHydro((prevState) => !prevState);
  };

  const handleSwitchOilChange = () => {
    setSwitchOil((prevState) => !prevState);
  };

  const energySources = [
    switchHydro ? { value: "hydro", name: "Hydro-electric" } : "",
    switchOil ? { value: "oil", name: "Oil" } : "",
    switchGas ? { value: "gas", name: "Natural gas" } : "",
    switchCoal ? { value: "coal", name: "Coal" } : "",
  ];

  const filteredEnergySources = energySources.filter((item) => !!item);

  return (
    <div>
      <Chart id="chart" dataSource={countriesInfo} className=" h-72">
        <CommonSeriesSettings type="spline" argumentField="country">
          {/* <Point hoversMode="allArgumentPoints" /> */}
          <Point visible={false} />
        </CommonSeriesSettings>

        {filteredEnergySources.map((item) => (
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
          enabled={true}
        />
        <Tooltip enabled={true} />
      </Chart>

      <div>
        <div className="flex">
          <Switch
            {...label}
            checked={switchHydro}
            onChange={handleSwitchHydroChange}
          />
          <p className="my-auto">999</p>
        </div>
        <div className="flex">
          <Switch
            {...label}
            checked={switchOil}
            onChange={handleSwitchOilChange}
          />
          <p className="my-auto">Body Blues</p>
        </div>
        <div className="flex">
          <Switch
            {...label}
            checked={switchGas}
            onChange={() => setSwitchGas((prevState) => !prevState)}
          />
          <p className="my-auto">Grile Wing</p>
        </div>
        <div className="flex">
          <Switch
            {...label}
            checked={switchCoal}
            onChange={() => setSwitchCoal((prevState) => !prevState)}
          />
          <p className="my-auto">Rear Blues</p>
        </div>
      </div>
    </div>
  );
};
export default TimeGraph;
