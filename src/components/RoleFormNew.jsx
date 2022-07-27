import { Box, Stack, Typography, Paper, Checkbox, Grid, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CheckboxInput from './CheckboxInput'
import { ContextFocus, ContextActiveStep, ContextRegisterForm } from '../App'
import { set, useForm, Controller } from 'react-hook-form';
import { pickBy, identity } from 'lodash'
const RoleForm = (...props) => {
    const { register, handleSubmit, control, getValues, watch } = useForm();
    const { boxes, setBoxes, FarmerCase, setFarmerCase, UserCase, setUserCase, businessman, setBusinessman } = useContext(ContextFocus)
    const { activeStep, setActiveStep } = useContext(ContextActiveStep)
    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)
    const [cleanObj, setCleanObj] = useState(true)
    // back func
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        // setReq()
    };

    // submit form
    const onSubmit = async (data) => {
        const cleanedObject = pickBy(data, identity)
        console.log(data)
        await setOneAccoutForm({
            username: oneAccoutForm.username,
            password: oneAccoutForm.password,
            prefix: oneAccoutForm.prefix ? oneAccoutForm.prefix : '',
            name: oneAccoutForm.name ? oneAccoutForm.name : '',
            lastname: oneAccoutForm.lastname ? oneAccoutForm.lastname : '',
            idCard: oneAccoutForm.idCard ? oneAccoutForm.idCard : '',
            dateIssue: oneAccoutForm.dateIssue ? oneAccoutForm.dateIssue : '',
            dateExpiry: oneAccoutForm.dateExpiry ? oneAccoutForm.dateExpiry : '',
            nameEn: oneAccoutForm.nameEn ? oneAccoutForm.nameEn : '',
            lastnameEn: oneAccoutForm.lastnameEn ? oneAccoutForm.lastnameEn : '',
            Email: oneAccoutForm.Email ? oneAccoutForm.Email : '',
            dateOfBirth: oneAccoutForm.dateOfBirth ? oneAccoutForm.dateOfBirth : '',
            address: oneAccoutForm.address ? oneAccoutForm.address : '',
            nameOther: oneAccoutForm.nameOther ? oneAccoutForm.nameOther : '',
            lastnameOther: oneAccoutForm.lastnameOther ? oneAccoutForm.lastnameOther : '',
            addressOther: oneAccoutForm.addressOther ? oneAccoutForm.addressOther : '',
            tel: oneAccoutForm.tel ? oneAccoutForm.tel : '',
            role: cleanedObject
        })
        setActiveStep(activeStep + 1)
    }


    //set checked boxes
    const handleChange = (e) => {
        const {
            target: { id, checked }
        } = e;
        setBoxes({ ...boxes, [id]: checked });
        setReq()
    }

    // set required check box
    const setReq = () => {
        if (!!!cleanObj) {
            setCleanObj(true)
            console.log(cleanObj);
        } else if (!!cleanObj) {
            setCleanObj(false)
            console.log(cleanObj);
        }
    }

    //disabled catagory business
    const handleFarmer = (event) => {
        if (event.target.checked === true) {
            // setFarmerCase(true)
            setBusinessman(true)
            setReq()
        } else {
            // setFarmerCase(false)
            setBusinessman(false)
            setReq()
        }
    };

    //disabled catagory ag
    const isDisabled = () => {
        const { length } = Object.values(boxes).filter(Boolean);
        return length === 1;
    }

    return (
        <div>
            {/* content  */}
            <Grid container spacing={6}>

                {/* title */}
                <Grid item xs={12}>
                    <Box sx={{ borderBottom: '2px solid #164966' }} >
                        <Typography sx={{ color: '#164966', fontSize: '24px', mt: -3 }}>
                            สิทธิ์การใช้งาน
                        </Typography>
                    </Box>
                </Grid>

                {/* checkbox เกษตร */}
                <Grid item xs={6}>
                    <Controller
                        name="เกษตรกร"
                        control={control}
                        rules={{ required: cleanObj }}
                        render={({ field }) => (
                            <CheckboxInput
                                values={field.name}
                                // ClickFunc={(e) => (handleFarmer(e))}
                                onDisabled={isDisabled()}
                                ChangeFunc={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined), handleFarmer(e))}
                                imgProps={'https://agrts.co.th/management/img/farmer.6c85882d.svg'} />
                        )}
                    />
                </Grid>

                {/* checkbox ผู้ให้บริการ */}
                <Grid item xs={6}>
                    <Controller
                        name="ผู้ให้บริการ"
                        control={control}
                        rules={{ required: !!cleanObj && true }}
                        render={({ field }) => (
                            <CheckboxInput
                                values={field.name}
                                onDisabled={isDisabled()}
                                ChangeFunc={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined), handleFarmer(e))}
                                imgProps={'https://agrts.co.th/management/img/business.2476b52d.svg'} />
                        )}
                    />
                </Grid>

                {/* checkbox ผู้ประกอบการ */}
                <Grid item xs={6}>
                    <Controller
                        name="ผู้ประกอบการ"
                        control={control}
                        render={({ field }) => (
                            <CheckboxInput
                                imgProps={'https://agrts.co.th/management/img/booking.fd140495.svg'}
                                values={field.name}
                                ClickFunc={(e) => handleChange(e)}
                                onDisabled={businessman === true || watch('ผู้จัดการ') !== undefined || watch('จัดการเซ็นเซอร์') !== undefined}
                                ChangeFunc={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined), handleChange(e))}
                            />
                        )}
                    />
                </Grid>

                {/* checkbox ผู้จัดการ */}
                <Grid item xs={6}>
                    <Controller
                        name="ผู้จัดการ"
                        control={control}
                        render={({ field }) => (
                            <CheckboxInput
                                values={field.name}
                                // ClickFunc={(e) => handleChange(e)}
                                ChangeFunc={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined), handleChange(e))}
                                imgProps={'https://agrts.co.th/management/img/manager.8f766cc2.png'}
                                onDisabled={!!businessman || !!watch('ผู้ประกอบการ') || !!watch('จัดการเซ็นเซอร์')}
                            />
                        )}
                    />
                </Grid>

                {/* checkbox จัดการเซ็นเซอร์ */}
                <Grid item xs={6}>
                    <Controller
                        name="จัดการเซ็นเซอร์"
                        control={control}
                        render={({ field }) => (
                            <CheckboxInput
                                values={field.name}
                                // ClickFunc={(e) => handleChange(e)}
                                ChangeFunc={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined), handleChange(e))}
                                imgProps={'https://agrts.co.th/management/img/sensor.2b451243.png'}
                                onDisabled={businessman === true || watch('ผู้ประกอบการ') !== undefined || watch('ผู้จัดการ') !== undefined}
                            />
                        )}
                    />
                </Grid>

                {/* tltle หมายเหตุ */}
                <Grid item xs={12}>
                    <Box>
                        <Typography sx={{ color: '#818181', fontSize: '14px', fontWeight: 100, mt: -3, }}>
                            หมายเหตุ : กรณีสมัครสมาชิกประเภทผู้ประกอบการจะไม่สามารถสมัครร่วมกับประเภทอื่นได้
                        </Typography>
                    </Box>
                </Grid>
            </Grid >

            {/* btn back and next */}
            <Grid container sx={{ mt: '30px' }}>

                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>

                        {/* back btn  */}
                        <Button onClick={handleBack} sx={{ width: 65, height: 65, maxWidth: 65, maxheight: 65, borderRadius: '100%', bgcolor: '#164966', ":hover": { bgcolor: '#164966' } }}>
                            <Typography sx={{ fontWeight: 'bold', color: '#fff', boxSizing: 'border-box', fontSize: 12, }}>
                                ย้อนกลับ
                            </Typography>
                        </Button>

                        {/* confirm btn */}
                        <Button sx={{ width: 65, height: 65, maxWidth: 65, maxheight: 65, borderRadius: '100%', bgcolor: '#164966', ":hover": { bgcolor: '#164966' } }} onClick={handleSubmit(onSubmit)}>
                            <Typography sx={{ fontWeight: 'bold', color: '#fff', fontSize: 12, }}>
                                ยืนยัน
                            </Typography>
                        </Button>

                    </Stack>
                </Grid>

            </Grid>

        </div>
    )
}

export default RoleForm