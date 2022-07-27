import React, { useContext, useState } from 'react'
import Grid from '@mui/material/Grid'
import { TextField, Button, InputLabel, Box, Typography, Stack, Divider } from '@mui/material'
import { set, useForm, Controller } from 'react-hook-form'
import { ContextRegisterForm, ContextActiveStep } from '../App'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { date } from 'yup'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import BadgeIcon from '@mui/icons-material/Badge';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import EmailIcon from '@mui/icons-material/Email';
import Cake from '@mui/icons-material/Cake'
import RoomIcon from '@mui/icons-material/Room';
export default function AccoutForm() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid, touchedFields, dirtyFields }, getValues, getFieldState } = useForm({ criteriaMode: "all", mode: "onChange" })
    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)
    const { activeStep, setActiveStep } = useContext(ContextActiveStep)
    const onSubmit = (data) => {
        if (data.name) {
            setOneAccoutForm({
                username: oneAccoutForm.username,
                password: oneAccoutForm.password,
                name: data.name,
                lastname: data.lastname,
                cardType: data.cardType,
                idCard: data.idCard,
                dateIssue: data.dateIssue,
                dateExpiry: data.dateExpiry,
                prefix: data.prefix,
                prefixEn: data.prefix === 'นาย' ? 'Mr.' : data.prefix === 'นาง' ? 'Mrs.' : data.prefix === 'นางสาว' ? 'Miss' : '',
                nameEn: data.nameEn,
                lastnameEn: data.lastnameEn,
                Email: data.Email,
                dateOfBirth: data.dateOfBirth,
                address: data.address,
                nameOther: data.nameOther,
                lastnameOther: data.lastnameOther,
                addressOther: data.addressOther,
                tel: oneAccoutForm.tel ? oneAccoutForm.tel : data.tel,
            })
        }
        // console.log(data)
        setActiveStep(activeStep + 1)
    }

    const [prefix, setprefix] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const handleChange = (event) => {
        setprefix(event.target.value);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const [dateIssueValue, setDateIssueValue] = React.useState(null);
    const [dateExpiryValue, setDateExpiryValue] = React.useState(null);
    const [dateOfBirthValue, setDateOfBirthValue] = React.useState(null);
    const [focusField, setFocusField] = useState('')
    return (
        <div
        >
            <form>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Stack
                            spacing={2}
                        >
                            <Typography
                                sx={{
                                    display: 'flex',
                                    color: '#164966',
                                    fontSize: 24,
                                    borderBottom: '2px solid #164966'
                                }}>
                                ข้อมูลส่วนตัว
                            </Typography>

                        </Stack>

                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                bgcolor: '#f4f4f4'
                            }}
                        >
                            <Typography
                                sx={{
                                    margin: '0px 0px 15px',
                                    textAlign: 'left',
                                    padding: '15px',
                                    color: 'rgba(182,57,57)'
                                }}
                            >
                                ** ข้อมูลส่วนนี้ไม่สามารถแก้ไขในภายหลังได้ กรุณาเช็คความถูกต้อง ก่อนเข้าสู่ในขั้นตอนถัดไป **
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            select
                            label="คำนำหน้า*"
                            {...register('prefix', {
                                required: true,
                            })}
                            variant="standard"
                            color='success'
                        >
                            <MenuItem onClick={() => setprefix('นาย')} value={'นาย'}>นาย</MenuItem>
                            <MenuItem onClick={() => setprefix('นาง')} value={'นาง'}>นาง</MenuItem>
                            <MenuItem onClick={() => setprefix('นางสาว')} value={'นางสาว'}>นางสาว</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            onFocus={() => setFocusField('name')}
                            onBlur={() => setFocusField('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <BadgeIcon
                                color={errors.name ? 'error' : getFieldState("name").isDirty ? 'success' : focusField === 'name' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <TextField
                                fullWidth
                                color={errors.name ? 'error' : getValues("name") ? 'success' : 'primary'}
                                label="ชื่อ*"
                                helperText={errors.name ? "กรุณากรอกข้อมูล" : ""}
                                error={errors.name}
                                autoComplete="off"
                                // focused={getValues("name") !== ''}
                                {...register('name', {
                                    required: 'error message',
                                    minLength: 1,
                                    value: oneAccoutForm.name ? oneAccoutForm.name : '',
                                })}
                                variant="standard"
                                sx={{
                                    '& .MuiFormHelperText-root': {
                                        color: 'rgba(255, 0, 0, 0.6)',
                                    },
                                }}
                            ></TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            color={errors.lastname ? 'error' : getValues("lastname") ? 'success' : 'primary'}
                            error={errors.lastname}
                            helperText={errors.lastname ? "กรุณากรอกข้อมูล" : ""}
                            label="นามสกุล*"
                            {...register('lastname', {
                                required: 'error message',
                                value: oneAccoutForm.lastname ? oneAccoutForm.lastname : '',
                            })}
                            variant="standard"
                        ></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <Box
                            onFocus={() => setFocusField('idCard')}
                            onBlur={() => setFocusField('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <CreditCardIcon
                                color={errors.idCard ? 'error' : getFieldState("idCard").isDirty ? 'success' : focusField === 'idCard' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <TextField
                                fullWidth
                                label="รหัสบัตรประชาชน"
                                color={errors.idCard ? 'error' : getValues("idCard") ? 'success' : 'primary'}
                                helperText={errors.idCard ? "กรุณากรอกข้อมูล" : ""}
                                error={errors.idCard}
                                {...register('idCard', {
                                    required: true,
                                    value: oneAccoutForm.idCard ? oneAccoutForm.idCard : '',
                                    pattern: /[0-9]{13}/,
                                })}
                                variant="standard"
                            ></TextField>
                        </Box>
                    </Grid>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>

                        <Grid item xs={6}>
                            <Box
                                onFocus={() => setFocusField('dateIssue')}
                                onBlur={() => setFocusField('')}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <ChromeReaderModeIcon
                                    color='action'
                                    fontSize="large"
                                    sx={{
                                        pt: 1.5,
                                        pr: 1
                                    }}
                                />
                                <MobileDatePicker
                                    label="วันที่ออกบัตร"
                                    value={dateIssueValue}
                                    onChange={(newValue) => {
                                        setDateIssueValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params}
                                        variant="standard"
                                        fullWidth
                                        {...register('dateIssue', {
                                            // required: 'error message',
                                            value: oneAccoutForm.dateIssue ? oneAccoutForm.dateIssue : '',
                                        })}
                                    />}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                onFocus={() => setFocusField('dateIssue')}
                                onBlur={() => setFocusField('')}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <ChromeReaderModeIcon
                                    color='action'
                                    fontSize="large"
                                    sx={{
                                        pt: 1.5,
                                        pr: 1
                                    }}
                                />
                                <MobileDatePicker
                                    label="วันที่บัตรหมดอายุ"
                                    value={dateExpiryValue}
                                    onChange={(newValue) => {
                                        setDateExpiryValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params}
                                        variant="standard"
                                        fullWidth
                                        {...register('dateExpiry', {
                                            // required: 'error message',
                                            value: oneAccoutForm.dateExpiry ? oneAccoutForm.dateExpiry : '',
                                        })}
                                    />}
                                />
                            </Box>
                        </Grid>
                    </LocalizationProvider>
                    <Grid item xs={12}>
                        <Stack spacing={2}>
                            <Typography sx={{ display: 'flex', fontSize: 24, color: '#164966', borderBottom: '2px solid #164966' }}>
                                ข้อมูลเพิ่มเติม (สามารถข้ามการกรอกข้อมูลในส่วนนี้ได้)
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} >
                        <TextField
                            fullWidth
                            disabled
                            label="คำนำหน้า(ภาษาอังกฤษ)*"
                            value={prefix === 'นาย' ? 'Mr.' : prefix === 'นาง' ? 'Mrs.' : prefix === 'นางสาว' ? 'Miss' : ''}
                            {...register('prefixEn', {
                                // required: true,
                                value: prefix === 'นาย' ? 'Mr.' : prefix === 'นาง' ? 'Mrs.' : prefix === 'นางสาว' ? 'Miss' : ''
                            })}
                            variant="standard"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={6} >
                        <Box
                            onFocus={() => setFocusField('nameEn')}
                            onBlur={() => setFocusField('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <BadgeIcon
                                color={errors.nameEn ? 'error' : getFieldState("nameEn").isDirty ? 'success' : focusField === 'nameEn' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <TextField
                                fullWidth
                                color={errors.nameEn ? 'error' : getValues("nameEn") ? 'success' : 'primary'}
                                helperText={errors.nameEn ? "กรุณากรอกข้อมูลให้ถูกต้อง" : ""}
                                error={errors.nameEn}
                                label="ชื่อ (ภาษาอังกฤษ)*"
                                {...register('nameEn', {
                                    // maxLength: 20,
                                    minLength: 1,
                                    value: oneAccoutForm.nameEn ? oneAccoutForm.nameEn : '',
                                    pattern: /\w[a-zA-Z]+$/
                                })}
                                variant="standard"
                            ></TextField>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            color={errors.lastnameEn ? 'error' : getValues("lastnameEn") ? 'success' : 'primary'}
                            helperText={errors.lastnameEn ? "กรุณากรอกข้อมูล" : ""}
                            error={errors.lastnameEn}
                            label="นามสกุล (ภาษาอังกฤษ)"
                            {...register('lastnameEn', {
                                value: oneAccoutForm.lastnameEn ? oneAccoutForm.lastnameEn : '',
                                minLength: 1,
                                pattern: /\w[a-zA-Z]+$/
                            })}
                            variant="standard"
                        ></TextField>
                    </Grid>


                    <Grid item xs={12}>
                        <Box
                            onFocus={() => setFocusField('Email')}
                            onBlur={() => setFocusField('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <EmailIcon
                                color={errors.Email ? 'error' : getFieldState("Email").isDirty ? 'success' : focusField === 'Email' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <TextField
                                fullWidth
                                color={errors.Email ? 'error' : getValues("Email") ? 'success' : 'primary'}
                                helperText={errors.Email ? "กรุณากรอกข้อมูล" : ""}
                                error={errors.Email}
                                label="อีเมลล์"
                                {...register('Email', {
                                    value: oneAccoutForm.Email ? oneAccoutForm.Email : '',
                                })}
                                variant="standard"
                            ></TextField>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box
                            onFocus={() => setFocusField('dateOfBirth')}
                            onBlur={() => setFocusField('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Cake
                                color='action'
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <MobileDatePicker
                                    label="วันเกิด"
                                    value={dateOfBirthValue}
                                    onChange={(newValue) => {
                                        setDateOfBirthValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params}
                                        variant="standard"
                                        fullWidth
                                        {...register('dateOfBirth', {
                                            value: oneAccoutForm.dateOfBirth ? oneAccoutForm.dateOfBirth : '',
                                        })}
                                    />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box
                            onFocus={() => setFocusField('address')}
                            onBlur={() => setFocusField('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <RoomIcon
                                color={errors.address ? 'error' : getFieldState("address").isDirty ? 'success' : focusField === 'address' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <TextField
                                fullWidth
                                helperText={errors.address ? "กรุณากรอกข้อมูลให้ถูกต้อง" : ""}
                                error={errors.address}
                                // color={errors.address ? 'error' : getValues("address") ? 'success' : 'address'}
                                color={errors.address ? 'error' : getValues("address") ? 'success' : 'primary'}
                                label="ที่อยู่"
                                multiline
                                rows={3}
                                {...register('address', {
                                    // maxLength: 60,
                                    // value: oneAccoutForm.nameEn ? oneAccoutForm.nameEn : '',
                                })}
                                variant="standard"
                            ></TextField>
                        </Box>

                    </Grid>
                    <Grid item xs={12}>
                        <Stack
                            spacing={2}
                        >
                            <Typography
                                sx={{
                                    display: 'flex',
                                    fontSize: 24,
                                    color: '#164966',
                                    borderBottom: '2px solid #164966'
                                }}
                            >
                                ข้อมูลของบุคคลที่สามารถติดต่อ (สามารถข้ามการกรอกข้อมูลในส่วนนี้ได้)
                            </Typography>

                        </Stack>

                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            onFocus={() => setFocusField('nameOther')}
                            onBlur={() => setFocusField('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <BadgeIcon
                                color={errors.nameOther ? 'error' : getFieldState("nameOther").isDirty ? 'success' : focusField === 'nameOther' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <TextField
                                fullWidth
                                color={errors.nameOther ? 'error' : getValues("nameOther") ? 'success' : 'primary'}
                                label="ชื่อ"
                                helperText={errors.nameOther ? "กรุณากรอกข้อมูล" : ""}
                                error={errors.nameOther}
                                {...register('nameOther', {
                                    value: oneAccoutForm.nameOther ? oneAccoutForm.nameOther : '',
                                })}
                                variant="standard"
                            ></TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="นามสกุล"
                            {...register('lastnameOther', {
                                value: oneAccoutForm.lastnameOther ? oneAccoutForm.lastnameOther : '',
                            })}
                            variant="standard"
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            onFocus={() => setFocusField('addressOther')}
                            onBlur={() => setFocusField('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <RoomIcon
                                color={errors.addressOther ? 'error' : getFieldState("addressOther").isDirty ? 'success' : focusField === 'addressOther' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <TextField
                                fullWidth
                                label="ที่อยู่"
                                helperText={errors.addressOther ? "กรุณากรอกข้อมูลให้ถูกต้อง" : ""}
                                error={errors.addressOther}
                                multiline
                                color={errors.addressOther ? 'error' : getValues("addressOther") ? 'success' : 'primary'}
                                rows={3}
                                {...register('addressOther', {
                                    maxLength: 20,
                                    value: oneAccoutForm.addressOther ? oneAccoutForm.addressOther : '',
                                })}
                                variant="standard"
                            ></TextField>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={'+66'}
                                label="Age"
                                variant="standard"
                                sx={{
                                    borderRadius: '0px',
                                    mt: 5
                                }}
                            >
                                <MenuItem value={'+66'}>
                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItem="center"
                                        spacing={3}
                                    >
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/e/e4/%E0%B8%98%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B9%84%E0%B8%97%E0%B8%A2.png' width="30" height="20"></img> +66
                                    </Stack>
                                </MenuItem>
                            </Select>

                            <TextField
                                fullWidth
                                variant="standard"
                                {...register("tel", {
                                    value: oneAccoutForm ? oneAccoutForm.tel : '',
                                })}
                                sx={{
                                    mt: 5
                                }}
                            ></TextField>
                        </Stack>
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
                                    // border: '1px solid red',
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
