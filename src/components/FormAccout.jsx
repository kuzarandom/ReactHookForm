import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { TextField, Button, Box, FormControl, Radio, FormGroup, Paper, Stack, Typography, Select, MenuItem } from '@mui/material'
import { useForm } from 'react-hook-form';
import { ContextRegisterForm, ContextActiveStep } from '../App'
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from '@mui/material/InputAdornment';
import { ErrorMessage } from '@hookform/error-message';
import KeyIcon from '@mui/icons-material/Key';
import IconButton from '@mui/material/IconButton';
// import { useFormControl } from '@mui/material/FormControl';
import _ from "lodash/fp";
import Key from '@mui/icons-material/Key';
export default function AccoutForm() {
    const { register, handleSubmit, formState: { errors, isDirty, isValid, touchedFields, dirtyFields }, getValues, getFieldState } = useForm({ criteriaMode: "all", mode: "onChange" });
    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)
    const { activeStep, setActiveStep } = useContext(ContextActiveStep)
    async function onSubmit(data) {
        // console.log(data)
        setOneAccoutForm({
            username: data.username,
            password: data.password,
            prefix: oneAccoutForm.prefix ? oneAccoutForm.prefix : null,
            name: oneAccoutForm.name ? oneAccoutForm.name : null,
            lastname: oneAccoutForm.lastname ? oneAccoutForm.lastname : null,
            idCard: oneAccoutForm.idCard ? oneAccoutForm.idCard : null,
            dateIssue: oneAccoutForm.dateIssue ? oneAccoutForm.dateIssue : null,
            dateExpiry: oneAccoutForm.dateExpiry ? oneAccoutForm.dateExpiry : null,
            nameEn: oneAccoutForm.nameEn ? oneAccoutForm.nameEn : null,
            lastnameEn: oneAccoutForm.lastnameEn ? oneAccoutForm.lastnameEn : null,
            Email: oneAccoutForm.Email ? oneAccoutForm.Email : null,
            dateOfBirth: oneAccoutForm.dateOfBirth ? oneAccoutForm.dateOfBirth : null,
            address: oneAccoutForm.address ? oneAccoutForm.address : null,
            nameOther: oneAccoutForm.nameOther ? oneAccoutForm.nameOther : null,
            lastnameOther: oneAccoutForm.lastnameOther ? oneAccoutForm.lastnameOther : null,
            addressOther: oneAccoutForm.addressOther ? oneAccoutForm.addressOther : null,
            tel: data.tel ? data.tel : null,
            role: oneAccoutForm.role ? oneAccoutForm.role : null,
        })
        setActiveStep(activeStep + 1)
    }
    const [focusS, setFocusS] = useState('')
    

    const [selectedValue, setSelectedValue] = React.useState('Member');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                borderBottom: '2px solid #164966'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#164966',
                                    fontSize: '24px'
                                }}
                            >
                                ข้อมูลผู้ใช้
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper
                            elevation={3}
                            onClick={() => setSelectedValue('Member')}
                            sx={{
                                padding: 5,
                                ':hover': {
                                    cursor: 'pointer'
                                },
                                boxShadow: selectedValue === 'Member' ? '0px 0px 8px 1px rgba(0, 123, 255, 1)' : '',
                                border: selectedValue === 'Member' ? '1px solid rgba(0,0,0,0.7)' : ''
                            }}
                        >
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                            >
                                <Stack>
                                    <Radio
                                        checked={selectedValue === 'Member'}
                                        onChange={handleChange}
                                        value="Member"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'Member' }}
                                    />
                                    <Typography>
                                        เป็นสมาชิก
                                    </Typography>
                                </Stack>
                                <img
                                    src='https://agrts.co.th/management/img/oneplatform.e84660da.png'
                                    width={100}
                                ></img>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper
                            elevation={3}
                            onClick={() => setSelectedValue('NonMember')}
                            sx={{
                                padding: 5,
                                ':hover': {
                                    cursor: 'pointer'
                                },
                                boxShadow: selectedValue === 'NonMember' ? '0px 0px 8px 1px rgba(0, 123, 255, 1)' : '',
                                border: selectedValue === 'NonMember' ? '1px solid rgba(0,0,0,0.7)' : ''
                            }}
                        >
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                            >
                                <Stack>
                                    <Radio
                                        checked={selectedValue === 'NonMember'}
                                        onChange={handleChange}
                                        value="NonMember"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'NonMember' }}
                                    />
                                    <Typography>
                                        ไม่เป็นสมาชิก
                                    </Typography>
                                </Stack>
                                <img
                                    src='https://agrts.co.th/management/img/oneplatform.e84660da.png'
                                    width={100}
                                ></img>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            onFocus={() => setFocusS('username')}
                            onBlur={() => setFocusS('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'center'
                            }}
                        >
                            <AccountCircle
                                color={errors.username ? 'error' : getFieldState("username").isDirty ? 'success' : focusS === 'username' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1
                                }}
                            />
                            <TextField
                                fullWidth
                                helperText={errors.username ? "กรุณากรอกข้อมูล" : ""}
                                error={errors.username}
                                className="fieldUser"
                                label="ชื่อผู้ใช้*"
                                color={errors.username ? 'error' : getValues("username") ? 'success' : 'primary'}
                                autoComplete="off"
                                sx={{
                                    '& .MuiFormHelperText-root': {
                                        color: 'red',
                                    },
                                }}
                                {...register("username", {
                                    required: "· กรุณากรอกข้อมูล",
                                    pattern: {
                                        value: /(?=.*[a-z])+/gm,
                                    },
                                    minLength: {
                                        value: 6,
                                    },
                                    maxLength: {
                                        value: 100,
                                    },
                                    value: oneAccoutForm ? oneAccoutForm.username : ''
                                })}
                                variant="standard"
                            ></TextField>
                        </Box>
                        <Box
                            sx={{
                                display: selectedValue === 'Member' ? 'none' : 'flex'
                            }}
                        >

                            <Box
                                sx={{
                                    display: focusS === 'username' ? 'flex' : 'none',
                                    bgcolor: '#ebebeb',
                                    padding: 1,
                                    ml: 5,
                                    mt: 2,
                                    borderRadius: 2,
                                    color: errors.username ? 'red' : getFieldState("username").isDirty ? 'green' : focusS === 'username' ? 'gray' : 'gray'
                                }}
                            >
                                <Stack>
                                    <Box>· ตัวอักษรภาษาอังกฤษตัวพิมพ์เล็กอย่างน้อย 1 ตัว</Box>
                                    <Box>· ความยาว 6 ถึง 100 ตัวอักษร</Box>
                                    <Box>· ห้ามใส่อักขระพิเศษ</Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={selectedValue === 'Member' ? 12 : 6}>
                        <Box
                            onFocus={() => setFocusS('password')}
                            onBlur={() => setFocusS('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <KeyIcon
                                //color={!focusS === 'password' ? 'action' : errors.password ? 'error' : getFieldState("password").isDirty ? 'success' : 'primary'}
                                color={errors.password ? 'error' : getFieldState("password").isDirty ? 'success' : focusS === 'password' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1

                                }}
                            />
                            <TextField
                                fullWidth
                                label="รหัสผ่าน*"
                                type="password"
                                hintText="Password"
                                helperText={errors.password ? "กรุณากรอกข้อมูล" : ""}
                                error={errors.password}
                                color={errors.password ? 'error' : getValues("password") ? 'success' : 'primary'}
                                floatingLabelText="Password"
                                {...register("password", {
                                    required: 'Required',
                                    value: oneAccoutForm ? oneAccoutForm.password : '',
                                    minLength: {
                                        value: 8,
                                    },
                                })} variant="standard"
                            ></TextField>

                        </Box>
                        <Box
                            sx={{
                                display: selectedValue === 'Member' ? 'none' : 'flex'
                            }}
                        >
                            <Box
                                sx={{
                                    display: focusS === 'password' ? 'flex' : 'none',
                                    bgcolor: '#ebebeb',
                                    padding: 2,
                                    ml: 5,
                                    mt: 2,
                                    borderRadius: 2,
                                    color: errors.password ? 'red' : getFieldState("password").isDirty ? 'green' : focusS === 'password' ? 'gray' : 'gray'
                                }}
                            >
                                <Stack>
                                    <Box>· ใส่อย่างน้อย 1 ตัวอักษร</Box>
                                    <Box>· ความยาวมากกว่า 8 ตัวอักษร</Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}
                        sx={{
                            display: selectedValue === 'Member' ? 'none' : 'block'
                        }}
                    >
                        <Box
                            onFocus={() => setFocusS('ConfirmPassword')}
                            onBlur={() => setFocusS('')}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                        >
                            <KeyIcon
                                //color={!focusS === 'password' ? 'action' : errors.password ? 'error' : getFieldState("password").isDirty ? 'success' : 'primary'}
                                color={errors.ConfirmPassword ? 'error' : getFieldState("ConfirmPassword").isDirty ? 'success' : focusS === 'ConfirmPassword' ? 'primary' : 'action'}
                                fontSize="large"
                                sx={{
                                    pt: 1.5,
                                    pr: 1

                                }}
                            />
                            <TextField
                                fullWidth
                                label="ยืนยันรหัสผ่าน*"
                                type="password"
                                helperText={errors.ConfirmPassword ? "กรุณากรอกข้อมูลให้ตรงกัน" : ""}
                                error={errors.ConfirmPassword}
                                hintText="ConfirmPassword"
                                color={errors.ConfirmPassword ? 'error' : getValues("ConfirmPassword") ? 'success' : 'primary'}
                                floatingLabelText="ConfirmPassword"
                                {...register("ConfirmPassword", {
                                    required: selectedValue === 'Member' ? false : true,
                                    value: oneAccoutForm ? oneAccoutForm.ConfirmPassword : '',
                                    validate: selectedValue === 'Member' ? '' : {
                                        MatchPassword: v => v === getValues("password"),
                                    },
                                    minLength: selectedValue === 'Member' ? 0 : 8
                                })} variant="standard"
                            ></TextField>

                        </Box>
                        <Box
                            sx={{
                                display: focusS === 'ConfirmPassword' ? 'flex' : 'none',
                                bgcolor: '#ebebeb',
                                padding: 2,
                                ml: 5,
                                mt: 2,
                                borderRadius: 2,
                                color: errors.password ? 'red' : getFieldState("ConfirmPassword").isDirty ? 'green' : focusS === 'ConfirmPassword' ? 'gray' : 'gray'
                            }}
                        >
                            <Stack>
                                <Box>· ใส่อย่างน้อย 1 ตัวอักษร</Box>
                                <Box>· ความยาวมากกว่า 8 ตัวอักษร</Box>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                display: selectedValue === 'Member' ? 'none' : 'flex'
                            }}
                        >
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={'+66'}
                                label="Age"
                                variant="standard"
                                sx={{
                                    borderRadius: '0px'
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
                                    required: selectedValue === 'Member' ? false : true,
                                    value: oneAccoutForm ? oneAccoutForm.tel : '',
                                })}

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
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            {/* <Button disabled >Back</Button> */}
                            <Button
                                sx={{
                                    // border: '1px solid red',
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    bgcolor: '#164966',
                                    ":hover": {
                                        bgcolor: '#164966'
                                    }
                                }}
                                onClick={handleSubmit(onSubmit)}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#fff'
                                    }}
                                >ถัดไป</Typography> </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </div >
    )
}

