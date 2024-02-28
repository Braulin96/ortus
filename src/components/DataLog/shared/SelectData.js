import Select from "react-select";
import makeAnimated from 'react-select/animated';

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const animatedComponents = makeAnimated();

const SelectData = () => {
  return <Select
  closeMenuOnSelect={false}
  components={animatedComponents}
  //defaultValue={[options[1], options[1]]}
  isMulti
  options={options}
/>;
};
export default SelectData;
