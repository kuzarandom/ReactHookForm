import { Box, Stack, Typography, Paper, Checkbox } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ContextFocus } from '../App'

const CheckboxInput = ({ imgProps, values, ChangeFunc, ClickFunc, onDisabled, ...props }) => {

    return (
        <Box>
            <Paper elevation={3}
                sx={{
                    padding: 2, mt: -3,
                    ":active": { border: "1px solid #1976d2" },
                    bgcolor: !!onDisabled ? '#eee' : '#fff' 
                }} >
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>

                    {/* content */}
                    <Box>
                        <Checkbox
                            // value={fieldProps.name}
                            value={values}
                            // disabled={type === "AG" ? isDisabled() : disabledProps}
                            disabled={onDisabled}
                            // onClick={type === 'AG' ? (e) => (handleFarmer(e)) : (e) => (handleChange(e))}
                            onClick={ClickFunc}
                            // onChange={(e) => (fieldProps.onChange(e.target.checked === true ? e.target.value : undefined))}
                            onChange={ChangeFunc}
                        />
                        <Typography>
                            {values}
                        </Typography>
                    </Box>

                    {/* imgage */}
                    <img
                        src={imgProps}
                        loading="lazy"
                        width="80px"
                    />
                </Stack>
            </Paper>
        </Box >
    )
}

export default CheckboxInput