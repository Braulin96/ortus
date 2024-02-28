//import TimePicker from 'react-time-picker'
import { TextField } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

function PickTime( {style}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
			<TimePicker
				ampm={false}
				//onChange={onChange}
				//readOnly={readOnly}
				//value={value === null ? null : value ? dayjs(value, 'HH:mm') : ''}
				className="form-control"
				error={false}
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
						//height: 'calc(1.5em + 0.75rem + 2px)',
						padding: '0.375rem 0.75rem',
						fontSize: '1rem',
						fontWeight: '400',
						lineHeight: '1.5',
						...style
					},

					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: '1px solid #ced4da',
							transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
						},

						'&:hover fieldset': {
							border: '1px solid #ced4da'
						},

						//form-control:focus
						'&.Mui-focused fieldset': {
							//border: '1px solid #167b91',
							//boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'

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
			>
				<TextField
				/>
			</TimePicker>
		</LocalizationProvider>
  )
}

export default PickTime