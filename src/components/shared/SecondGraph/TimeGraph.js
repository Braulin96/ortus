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
    time: "0",
    nine: 60.2,
    bodyBlues: 110.7,
    grilleWing: 90.5,
    RearBlues: 78.9,
    nuclear: 103.7,
  },
  {
    time: "10:00",
    nine: 10.8,
    bodyBlues: 80.5,
    grilleWing: 5,
    RearBlues: 110,
    nuclear: 10.8,
  },
  {
    time: "11:00",
    nine: 38.5,
    bodyBlues: 110.2,
    grilleWing: 49.5,
    RearBlues: 97.2,
    nuclear: 10.5,
  },
  {
    time: "12:00",
    nine: 23.8,
    bodyBlues: 70.4,
    grilleWing: 43.2,
    RearBlues: 78.6,
    nuclear: 59.7,
  },
  {
    time: "13:00",
    nine: 18.7,
    bodyBlues: 40.7,
    grilleWing: 30.6,
    RearBlues: 10,
    nuclear: 3.5,
  },
  {
    time: "14:00",
    nine: 6.7,
    bodyBlues: 118.5,
    grilleWing: 0,
    RearBlues: 62.6,
    nuclear: 35.7,
  },
];

const label = { inputProps: { "aria-label": "Switch demo" } };
const TimeGraph = () => {
  const [switchNine, setSwitchNine] = useState(true);
  const [switchBodyBlues, setSwitchBodyBlues] = useState(true);
  const [switchGrile, setSwitchGrile] = useState(true);
  const [switchRearBlues, setSwitchRearBlues] = useState(true);

  const handleSwitchNineChange = () => {
    setSwitchNine((prevState) => !prevState);
  };

  const handleSwitchbodyBluesChange = () => {
    setSwitchBodyBlues((prevState) => !prevState);
  };

  const energySources = [
    switchNine ? { value: "nine", name: "999" } : "",
    switchBodyBlues ? { value: "bodyBlues", name: "Body Blues" } : "",
    switchGrile ? { value: "grilleWing", name: "Grille Wing" } : "",
    switchRearBlues ? { value: "RearBlues", name: "Rear Blues" } : "",
  ];

  const filteredEnergySources = energySources.filter((item) => !!item);

  return (
    <div className="flex md:flex-row flex-col w-full border-2 border-gray-100 rounded-2xl shadow-lg px-2 sm:py-0 py-4">
      <div className="p-4 md:w-3/4 w-full">
        <Chart id="chart" dataSource={countriesInfo} className="h-72">
          <CommonSeriesSettings type="spline" argumentField="time">
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

          <Title text="Ambulance C Data">
            {/* <Subtitle text="(Millions of Tons, bodyBlues Equivalent)" /> */}
          </Title>
          <Export
            verticalAlignment="left"
            horizontalAlignment="center"
            itemTextPosition="bottom"
            enabled={true}
          />
          <Tooltip enabled={true} />
        </Chart>
      </div>

      <div className="px-8 my-auto py-4 md:flex flex-col w-1/4 hidden border border-gray-100 rounded-2xl shadow-sm">
        <h3 className="text-center mb-4">Select Data</h3>
        <div className="flex flex-col gap-y-2 mx-auto">
          <div className="flex gap-x-1">
            <Switch
              size="small"
              {...label}
              checked={switchNine}
              onChange={handleSwitchNineChange}
              //color="default"
            />
            <p className="my-auto text-sm">999</p>
          </div>
          <div className="flex gap-x-1">
            <Switch
              size="small"
              {...label}
              checked={switchBodyBlues}
              onChange={handleSwitchbodyBluesChange}
            />
            <p className="my-auto text-sm">Body Blues</p>
          </div>
          <div className="flex gap-x-1">
            <Switch
              size="small"
              {...label}
              checked={switchGrile}
              onChange={() => setSwitchGrile((prevState) => !prevState)}
            />
            <p className="my-auto text-sm">Grile Wing</p>
          </div>
          <div className="flex gap-x-1">
            <Switch
              size="small"
              {...label}
              checked={switchRearBlues}
              onChange={() => setSwitchRearBlues((prevState) => !prevState)}
            />
            <p className="my-auto text-sm">Rear Blues</p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col py-4">
        <h3 className="text-center mb-4">Select Data</h3>
        <div className="flex justify-around w-full">
          <div>
            <div className="flex gap-x-1">
              <Switch
                size="small"
                {...label}
                checked={switchNine}
                onChange={handleSwitchNineChange}
                //color="default"
              />
              <p className="my-auto text-sm">999</p>
            </div>
            <div className="flex gap-x-1">
              <Switch
                size="small"
                {...label}
                checked={switchBodyBlues}
                onChange={handleSwitchbodyBluesChange}
                //color="default"
              />
              <p className="my-auto text-sm">Body Blues</p>
            </div>
          </div>
          <div>
            <div className="flex gap-x-1">
              <Switch
                size="small"
                {...label}
                checked={switchGrile}
                onChange={() => setSwitchGrile((prevState) => !prevState)}
                //color="default"
              />
              <p className="my-auto text-sm">Grile Wings</p>
            </div>
            <div className="flex gap-x-1">
              <Switch
                size="small"
                {...label}
                checked={switchRearBlues}
                onChange={() => setSwitchRearBlues((prevState) => !prevState)}
                //color="default"
              />
              <p className="my-auto text-sm">Rear Blues</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeGraph;
