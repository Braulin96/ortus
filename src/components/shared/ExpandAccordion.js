import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// Note: images/icons
import { IoIosArrowDown } from "react-icons/io";

const ExpandAccordion = ({
  description,
  gps,
  vehicle,
  time,
}) => {
  return (
    <div className="flex flex-grow ">
      <Accordion className="w-full px-1">
        <AccordionSummary
          expandIcon={<IoIosArrowDown color="black" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="">
            <h2 className="mb-2 text-lg">Current Status</h2>
            <p> {time}</p>
            <p> {gps}</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="-mt-4">
          <Typography className="flex flex-col gap-y-2">
            
            <p> {vehicle}</p>
            <p> {description} </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default ExpandAccordion;
