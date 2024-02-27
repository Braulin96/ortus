import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// Note: images/icons
import { IoIosArrowDown } from "react-icons/io";

const ExpandAccordion = ({ question, answer }) => {
  return (
    <div className="flex flex-grow text-[#00284F]">
      <Accordion className="w-full">
        <AccordionSummary
          expandIcon={<IoIosArrowDown color="#00284F" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-[#00284F]">{question}, text</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-[#00284F]">
            {answer} answer test
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default ExpandAccordion;
