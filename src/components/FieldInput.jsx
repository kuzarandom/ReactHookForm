import React, { useState, useContext, useEffect } from 'react'
import { Grid, Box, TextField } from '@mui/material'
import { ContextFocus } from '../App'
import Icon from '@mui/material/Icon';
import { ThemeProvider, createTheme } from '@mui/material/styles'
const FieldInput = ({ fieldname, disabledComponent, fieldColor, valuetest, fillvalue, value, iconname, errorProps, Click, labelprops, typeprops, HookForm, fieldState, valueProps, multiRow, errorMessage, variant, change, ...props }) => {
    const [colorIcon, setColorIcon] = useState('action')
    const [statusIcon, setStatusIcon] = useState('blur')
    const { focus, setFocus } = useContext(ContextFocus)
    // console.log(disabledComponent);
    // setting color primary color
    const theme = createTheme({
        palette: {
            primary: {
                main: fieldColor ? fieldColor : '#1976d2',
            },
        },
    });

    // create style
    const createSX = () => {
        let color = errorProps ? '#d32f2f' : !!value ? '#2e7d32' : 'rgba(0,0,0,0.54)'
        let sx = {
            '& .MuiFormHelperText-root': {
                color: 'error',
            },
        }
        sx[`& .MuiInput-input[name="${fieldname}"]`] = {
            color: color
        }

        sx[`&.${fieldname}-targer-style > label`] = {
            color: `${color} !important`
        }

        sx[`&.${fieldname}-targer-style .MuiInput-root::before`] = {
            borderBottomWidth: "0.5px",
            borderBottomStyle: "solid",
            borderBottomColor: color,
            color: color,
        }


        return sx
    }

    return (
        <ThemeProvider theme={theme}>

            {/* content */}
            <Grid item xs={12}>

                <Box
                    onFocus={() => (setFocus(fieldname), setStatusIcon('focus'))}
                    onBlur={() => (setFocus(''), setStatusIcon('blur'))}
                    onClick={Click && Click}
                    sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
                >
                    {/* icon  */}
                    {
                        !!iconname &&
                        <Icon
                            fontSize="large"
                            sx={{
                                pt: labelprops && 1.5,
                                pr: 1,
                                height: 'auto',
                                color: !fieldColor ? (errorProps ? '#d32f2f' : !!value ? '#2e7d32' : statusIcon === 'focus' ? '#1976d2' : statusIcon === 'blur' ? 'rgba(0,0,0,0.54)' : '') : fieldColor
                            }}
                        >
                            {iconname}
                        </Icon>
                    }

                    {/* field input  */}
                    <TextField
                        fullWidth
                        disabled={!!disabledComponent}
                        onChange={change}
                        onKeyUp={() => setStatusIcon('success')}
                        helperText={errorProps ? (errorMessage ? errorMessage : "กรุณากรอกข้อมูล") : ""}
                        error={errorProps}
                        className={`${fieldname}-targer-style`}
                        label={labelprops}
                        value={value}
                        type={typeprops ? typeprops : 'text'}
                        multiline={!!multiRow}
                        rows={multiRow ? multiRow : false}
                        // color={errorProps ? (errorProps ? 'error' : !!value ? 'success' : statusIcon === 'focus' ? 'primary' : 'success') : 'primary'}
                        color={!fieldColor ? (errorProps ? 'error' : !!value ? 'success' : 'primary') : 'primary'}
                        autoComplete="off"
                        sx={createSX()}
                        {...HookForm}

                        variant={variant ? variant : "standard"}
                    ></TextField>

                </Box>
            </Grid >

        </ThemeProvider >
    )
}


export default FieldInput