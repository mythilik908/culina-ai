import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material'
import "@fontsource/roboto/700.css"; // Specify weight


function SelectMenu(props) {
    const [open, setOpen] = useState(false);

    return (
        <FormControl
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            sx={{ fontSize: '15px', fontFamily: 'sans-serif' }}
        >

            <Select
                open={open}
                autoWidth
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                value={props.options[0]}
                sx={{
                    "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent"
                    }
                }}
            >
                {
                    props.options?.map((option, index) => (
                        <MenuItem key={index}
                            sx={{
                                fontFamily: 'Roboto',
                                color: index === 0 && open ? 'orange' : 'black'
                            }}
                            value={option}>{option}</MenuItem>
                    ))
                }

            </Select>
        </FormControl >
    );
}
export default SelectMenu