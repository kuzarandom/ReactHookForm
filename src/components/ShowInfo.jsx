import { Box, Stack, Typography, Paper, Checkbox, Grid, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CheckboxInput from './CheckboxInput'
import { ContextFocus, ContextActiveStep, ContextRegisterForm } from '../App'
import { set, useForm, Controller } from 'react-hook-form';
import FieldShow from './FieldShow'


const ShoInfo = () => {
    const { register, handleSubmit, control, getValues, watch } = useForm();
    const { boxes, setBoxes, FarmerCase, setFarmerCase, UserCase, setUserCase, businessman, setBusinessman } = useContext(ContextFocus)
    const { activeStep, setActiveStep } = useContext(ContextActiveStep)
    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)

    useEffect(() => {
        setOneAccoutForm({
            username: "wonderweiss",
            password: "123zxcop9103",
            prefix: "นาย",
            name: "สอง",
            lastname: "สาม",
            idCard: 2511152222354,
            dateIssue: "01/05/2565",
            dateExpiry: "09/05/2565",
            nameEn: "song",
            lastnameEn: "sam",
            Email: "songsam@gmail.com",
            dateOfBirth: "09/07/2565",
            address: "146/5",
            nameOther: "see",
            lastnameOther: "ha",
            addressOther: "6265asdasd",
            tel: '0978254835',
            role: {
                ผู้ประกอบการ: "ผู้ประกอบการ",
                ผู้จัดการ: undefined
            }
        })
    }, [])



    return (
        <Box sx={{ width: '90%', mt: 5, mx: 'auto' }}>
            <Grid container spacing={1}>

                <Grid item xs={12}>
                    <Button onClick={() => console.log(oneAccoutForm)}>Click me</Button>
                </Grid>
                <Grid item xs={12}>
                    <FieldShow keyProps={"ชื่อผู้ใช้ : "} valueProps={oneAccoutForm.username}/>
                </Grid>

            </Grid >
        </Box>
    )
}

export default ShoInfo