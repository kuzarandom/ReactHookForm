import { Box, Stack, Typography, Paper, Checkbox, Grid, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CheckboxInput from './CheckboxInput'
import { ContextFocus, ContextActiveStep, ContextRegisterForm } from '../App'
import { set, useForm, Controller } from 'react-hook-form';

const FieldShow = ({ keyProps, valueProps, ...props }) => {
    const { register, handleSubmit, control, getValues, watch } = useForm();
    const { boxes, setBoxes, FarmerCase, setFarmerCase, UserCase, setUserCase, businessman, setBusinessman } = useContext(ContextFocus)
    const { activeStep, setActiveStep } = useContext(ContextActiveStep)
    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)

    return (
        <Box >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Typography
                    variant='h6'
                >
                    {keyProps}
                </Typography>
                <Typography
                    variant='h6'
                >
                    {valueProps}
                </Typography>
            </Stack>
        </Box>
    )
}

export default FieldShow