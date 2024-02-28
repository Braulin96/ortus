import Select from "react-select";
import makeAnimated from 'react-select/animated';

const options = [
  { value: "acelerator", label: "Acelerator" },
  { value: "brake", label: "Brake" },
  { value: "handBrake", label: "HandBrake" },
  { value: "speed", label: "Speed" },
  { value: "speed Limiter", label: "Speed Limiter" },
];

const animatedComponents = makeAnimated();

const SelectData = () => {
  return <Select
  closeMenuOnSelect={false}
  components={animatedComponents}
  defaultValue={[options[1], options[1]]}
  isMulti
  options={options}
/>;
};
export default SelectData;
