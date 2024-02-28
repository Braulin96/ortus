import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { DatePicker } from '@mui/x-date-pickers'
//import { createTheme, ThemeProvider } from '@mui/material/styles'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'

const DataLog = () => {
  return (
    <div
      className="w-100 flex flex-col gap-y-4 mx-auto py-10 "
      style={{ width: "100%", maxWidth: "1700px" }}
    >
      <div className="flex gap-x-8">
        <div className="flex gap-x-2">
          <p>From:</p>
          <input type="number" className="border border-gray-500" />
        </div>

        <div className="flex gap-x-2">
          <p>To:</p>
          <input type="number" className="border border-gray-500" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="flex gap-x-2">
          <p>Start:</p>
          <input type="number" className="border border-gray-500" />
        </div>

        <div className="flex gap-x-2">
          <p>End:</p>
          <input type="number" className="border border-gray-500" />
        </div>
      </div>
    </div>
  );
};
export default DataLog;
