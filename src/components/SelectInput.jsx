import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const SelectInput = ({ HookForm, valueProps, labelProps, change,value, ...props }) => {

    const [prefix, setprefix] = React.useState(valueProps[0])

    return (
        <Box>
            {/* content */}
            <TextField
                fullWidth
                onChange={change}
                select
                label={labelProps}
                {...HookForm}
                value={value}
                variant="standard"
                color='success'
                sx={{
                    '& .MuiInputBase-root::before': {
                        borderBottom: '1px solid #2e7d32 !important'
                    }
                }}
            >
                {
                    valueProps.map((item) => {
                        return <MenuItem onClick={() => setprefix(item)} value={item}>{item}</MenuItem>
                    })
                }
            </TextField>

        </Box >
    )
}


export default SelectInput