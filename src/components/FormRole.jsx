import React, { useContext, useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { TextField, Button, Typography, Box, Paper, Stack, Checkbox } from '@mui/material'
import { set, useForm, Controller } from 'react-hook-form';
import { ContextRegisterForm, ContextActiveStep, ContextRegisterForm } from '../App'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function AccoutForm() {
    const { register, handleSubmit, control, getValues, watch } = useForm();

    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)
    const { activeStep, setActiveStep } = useContext(ContextActiveStep)
    function onSubmit(data) {
        // console.log(data)
        setOneAccoutForm({
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
            role: data
        })
        console.log(oneAccoutForm)
        // setActiveStep(activeStep + 1)
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const [selectedValue, setSelectedValue] = React.useState('');

    const handleUser = (event) => {
        if (event.target.checked === true) {
            setUserCase(true)
        } else {
            setUserCase(false)
        }
    };
    const handleFarmer = (event) => {
        if (event.target.checked === true) {
            setFarmerCase(true)
        } else {
            setFarmerCase(false)
        }
    };
    
    const [FarmerCase, setFarmerCase] = useState(false)
    const [UserCase, setUserCase] = useState(false)

    useEffect(() => {
        if (FarmerCase === true || UserCase === true) {
            setBusinessman(true)
        } else {
            setBusinessman(false)
        }

    }, [FarmerCase, UserCase])
    const [disable, setdisable] = useState()
    const [ChooseCheck, setChooseCheck] = useState('')
    const [businessman, setBusinessman] = useState(false)
    const [boxes, setBoxes] = useState({});
    function handleChange(e) {
        const {
            target: { id, checked }
        } = e;
        setBoxes({ ...boxes, [id]: checked });

    }

    function isDisabled() {
        const { length } = Object.values(boxes).filter(Boolean);
        return length === 1;
    }
    return (
        <div>
            <form>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                borderBottom: '2px solid #164966'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#164966',
                                    fontSize: '24px',
                                    mt: -3
                                }}
                            >
                                สิทธิ์การใช้งาน
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="เกษตรกร"
                            control={control}
                            render={({ field }) => (
                                <Paper
                                    elevation={3}
                                    value="เกษตรกร"
                                    inputProps={{ 'aria-label': 'เกษตรกร' }}
                                    sx={{
                                        padding: 2,
                                        mt: -3,
                                        ":active": {
                                            border: "1px solid blue"
                                        },
                                        bgcolor: isDisabled() ? '#eee' : '#fff'
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <Box>
                                            <Checkbox
                                                value="เกษตรกร"
                                                disabled={isDisabled()}
                                                checked={field.value}
                                                onClick={(e) => handleFarmer(e)}
                                                aria-label="an appropriate label"
                                                onChange={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined))}
                                            />
                                            <Typography>
                                                เกษตรกร
                                            </Typography>
                                        </Box>
                                        <img
                                            src={`https://agrts.co.th/management/img/farmer.6c85882d.svg`}
                                            loading="lazy"
                                            width="80px"
                                        />
                                    </Stack>
                                </Paper>
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="ผู้ให้บริการ"
                            control={control}
                            render={({ field }) => (
                                <Paper
                                    elevation={3}

                                    // checked={selectedValue === 'ผู้ให้บริการ'}
                                    // onClick={() => selectedValue === 'ผู้ให้บริการ' ? setSelectedValue('') : setSelectedValue('ผู้ให้บริการ')}
                                    value="ผู้ให้บริการ"
                                    inputProps={{ 'aria-label': 'ผู้ให้บริการ' }}
                                    sx={{
                                        padding: 2,
                                        mt: -3,
                                        ":active": {
                                            border: "1px solid blue"
                                        },
                                        bgcolor: isDisabled() ? '#eee' : '#fff'
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <Box>
                                            <Checkbox
                                                value="ผู้ให้บริการ"
                                                disabled={isDisabled()}
                                                onChange={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined))}
                                                onClick={(e) => handleUser(e)}
                                                checked={field.value}
                                            />
                                            <Typography>
                                                ผู้ให้บริการ
                                            </Typography>
                                        </Box>
                                        <img
                                            src={`https://agrts.co.th/management/img/business.2476b52d.svg`}
                                            loading="lazy"
                                            width="80px"
                                        />
                                    </Stack>
                                </Paper>
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name="ผู้ประกอบการ"
                            control={control}
                            render={({ field }) => (
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: 2,
                                        mt: -3,
                                        ":active": {
                                            border: "1px solid blue"
                                        },
                                        bgcolor: businessman ? '#eee' : watch('ผู้จัดการ') !== undefined ? '#eee' : watch('จัดการเซ็นเซอร์') !== undefined ? '#eee' : '#fff'
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <Box>
                                            <Checkbox
                                                disabled={businessman === true || watch('ผู้จัดการ') !== undefined || watch('จัดการเซ็นเซอร์') !== undefined}
                                                checked={field.value || selectedValue === field.value}
                                                onClick={(e) => handleChange(e)}
                                                onChange={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined))}
                                                value="ผู้ประกอบการ"
                                            />
                                            <Typography>
                                                ผู้ประกอบการ
                                            </Typography>
                                        </Box>
                                        <img
                                            src={`https://agrts.co.th/management/img/booking.fd140495.svg`}
                                            loading="lazy"
                                            width="80px"
                                        />
                                    </Stack>
                                </Paper>
                            )}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Controller
                            name="ผู้จัดการ"
                            control={control}
                            render={({ field }) => (
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: 2,
                                        mt: -3,
                                        bgcolor: businessman ? '#eee' : watch('ผู้ประกอบการ') !== undefined ? '#eee' : watch('จัดการเซ็นเซอร์') !== undefined ? '#eee' : '#fff',
                                        ":active": { border: "1px solid blue" },
                                    }}
                                >
                                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                                        <Box>
                                            <Checkbox
                                                checked={field.value}
                                                onClick={(e) => handleChange(e)}
                                                onChange={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined), console.log(field.value))}
                                                value="ผู้จัดการ"
                                                disabled={businessman === true || watch('ผู้ประกอบการ') !== undefined || watch('จัดการเซ็นเซอร์') !== undefined}
                                            />
                                            <Typography>
                                                ผู้จัดการ
                                            </Typography>
                                        </Box>
                                        <img src={`https://agrts.co.th/management/img/manager.8f766cc2.png`} loading="lazy" width="80px" />
                                    </Stack>
                                </Paper>
                            )}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Controller
                            name="จัดการเซ็นเซอร์"
                            control={control}
                            render={({ field }) => (
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: 2,
                                        mt: -3,
                                        bgcolor: businessman ? '#eee' : watch('ผู้ประกอบการ') !== undefined ? '#eee' : watch('ผู้จัดการ') !== undefined ? '#eee' : '#fff',
                                        ":active": {
                                            border: "1px solid blue"
                                        },
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <Box>
                                            <Checkbox
                                                checked={field.value}
                                                onClick={(e) => handleChange(e)}
                                                onChange={(e) => (field.onChange(e.target.checked === true ? e.target.value : undefined))}
                                                value="จัดการเซ็นเซอร์"
                                                disabled={businessman === true || watch('ผู้ประกอบการ') !== undefined || watch('ผู้จัดการ') !== undefined}
                                            />
                                            <Typography>
                                                จัดการเซ็นเซอร์
                                            </Typography>
                                        </Box>
                                        <img
                                            src={`https://agrts.co.th/management/img/manager.8f766cc2.png`}
                                            loading="lazy"
                                            width="80px"
                                        />
                                    </Stack>
                                </Paper>
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

                </Grid>
                <Grid container
                    sx={{ mt: '30px' }}
                >
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button
                                onClick={handleBack}
                                sx={{
                                    width: 65,
                                    height: 65,
                                    maxWidth: 65,
                                    maxheight: 65,
                                    borderRadius: '100%',
                                    bgcolor: '#164966',
                                    ":hover": {
                                        bgcolor: '#164966'
                                    }
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        boxSizing: 'border-box',
                                        fontSize: 12,
                                    }}
                                >ย้อนกลับ</Typography> </Button>
                            <Button
                                sx={{
                                    width: 65,
                                    height: 65,
                                    maxWidth: 65,
                                    maxheight: 65,
                                    borderRadius: '100%',
                                    bgcolor: '#164966',
                                    ":hover": {
                                        bgcolor: '#164966'
                                    }
                                }}
                                onClick={handleSubmit(onSubmit)}
                            >
                                <Typography
                                    // variant="subtitle2"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        fontSize: 12,
                                    }}
                                >ยืนยัน</Typography> </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </div >
    )
}

