import React, { useState, useContext } from 'react'
import { Grid, Box, TextField, Button } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Icon from '@mui/material/Icon';

const InputDate = ({ labelprops, HookForm, IconProps, valueProps, change, disabledStyle, ...props }) => {

    // console.log(change);
    // create style
    const createSX = () => {
        let color = date ? '#2e7d32' : 'rgba(0,0,0,0.54)'
        let sx = {}

        sx[`&.${labelprops}-target-style > label`] = {
            color: `${color} !important`
        }

        sx[`&.${labelprops}-target-style .MuiInput-root::before`] = {
            borderBottomWidth: "0.5px",
            borderBottomStyle: "solid",
            borderBottomColor: date ? '#2e7d32' : 'rgba(0,0,0,0.54)',
        }

        sx[`&.${labelprops}-target-style > .Mui-disabled > .Mui-disabled `] = {
            // color: `cyan !important`,
            "-webkit-text-fill-color": date ? `#2e7d32 !important` : 'rgba(0,0,0,0.54) !important',
        }

        return sx
    }
    const [date, setDate] = React.useState(null); 

    return (
        <Box>

            {/* content */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', }}>

                    {/* ไอคอน */}
                    {
                        !!IconProps &&
                        <Icon
                            color={!!!disabledStyle && date ? 'success' : 'action'}
                            fontSize="large"
                            sx={{ pt: 1.5, pr: 1 }}>
                            {IconProps}
                        </Icon>
                    }

                    {/* data picker */}
                    <MobileDatePicker
                        label={labelprops}
                        value={date}
                        onChange={(e) => {
                            setDate(e)
                            change && change(e.toString())
                        }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                label={labelprops}
                                className={!!!disabledStyle && `${labelprops}-target-style`}
                                variant="standard"
                                disabled
                                fullWidth
                                sx={!!!disabledStyle && createSX()}
                                {...HookForm}
                            ></TextField>
                        }
                    />
                </Box>
            </LocalizationProvider>

        </Box >
    )
}


export default InputDate