import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { DatePicker } from '@mui/x-date-pickers'
//import { createTheme, ThemeProvider } from '@mui/material/styles'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const DataLog = () => {
  return (
    <>
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

    <LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer
				sx={{
					'& input': {
						padding: 0,
						color: '#495057',
						fontFamily: 'inherit',
						fontSize: '1rem',
						borderColor: '#ced4da'
					},
					'input::placeholder': {
						opacity: '0.8 !important'
					},
					//forrm-control styles
					'& .MuiInputBase-root': {
						backgroundClip: 'padding-box',
						fontFamily: 'inherit',
						height: 'calc(1.5em + 0.75rem + 2px)',
						padding: '0.375rem 0.75rem',
						fontSize: '1rem',
						fontWeight: '400',
						lineHeight: '1.5'
					},

					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: '1px solid #ced4da',
							transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
						},

						'&:hover fieldset': {
							border: '1px solid #ced4da'
						},
						'&.Mui-focused fieldset': {
							color: '#495057',
							//backgroundColor: '#fff',
							borderColor: '#80bdff',
							outline: 0,
							boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
						}
					},
					// Remove validation-related styles
					'.Mui-error': {
						color: 'inherit !important'
					},
					'.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: '#e5e7eb',
						borderColor: 'inherit !important',
						opacity: 'inherit !important',
						outline: 'inherit !important'
					}

				}}
				components={['DatePicker']}
			>
				<DemoItem>
					<DatePicker
						className="form-control"
						//onChange={onChange}
						//value={value}
						format="DD/MM/YYYY"
						//autoFocus={autoFocus}
					/>
				</DemoItem>
			</DemoContainer>
		</LocalizationProvider>

    
    
    </>
  );
};
export default DataLog;
