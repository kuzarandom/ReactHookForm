import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import { Grid, Stack, TextField, Paper, Radio, Icon } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from "react-hook-form";
import FieldInput from './FieldInput';
import _ from "lodash/fp";
import { useSelector, useDispatch } from 'react-redux'
import { onchangeValue } from '../features/counter/counterSlice'
import { ContextRegisterForm, ContextActiveStep, ContextFocus } from '../App'

const MyComponent = ({ onFocus, onBlur, iconColor, helperText, error, textColor, registerHookFrom, ...props }) => {
    console.log({ props })
    return (
        <Box
            onFocus={onFocus}
            onBlur={onBlur}
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center'
            }}
        >
            <Icon
                color={iconColor}
                fontSize="large"
                sx={{
                    pt: 1.5,
                    pr: 1
                }}
            >account_circle</Icon>
            <TextField
                fullWidth
                helperText={error ? `${helperText || "กรุณากรอกข้อมูล"}` : ""}
                error={error}
                className="fieldUser"
                label="ชื่อผู้ใช้*"
                color={textColor}
                autoComplete="off"
                sx={{
                    '& .MuiFormHelperText-root': {
                        color: 'red',
                    },
                }}
                {...registerHookFrom}
                variant="standard"
            ></TextField>
        </Box>
    )
}

export default function App() {
    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)
    const { activeStep, setActiveStep } = useContext(ContextActiveStep)
    const { focus, setFocus } = useContext(ContextFocus)
    const defaultValues = {
        username: oneAccoutForm.username,
        password: oneAccoutForm.password,
    };
    const { register, control, handleSubmit,
        formState: {
            errors,
            isDirty,
            isValid,
            touchedFields,
            dirtyFields
        },
        getValues, getFieldState } = useForm({
            criteriaMode: "all",
            mode: "onChange",
            defaultValues
        });
    const [selectedValue, setSelectedValue] = useState('Member');

    const Value  = useSelector((state) => ({ ...state }))
    // console.log(Value.value.Account)

    const dispatch = useDispatch()
    // submit form btn 
    const onSubmit = (data) => {
        console.log(Value.value.Account);
        const x = Value.value.Account.concat(data)
        console.log(x);
        // setActiveStep(activeStep + 1)
        dispatch(onchangeValue(x))

    }

    // member value change
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Box sx={{ width: '90%', mt: 5, mx: 'auto' }}>

            <form>

                {/* content  */}
                <Grid container spacing={2}>

                    {/* title */}
                    <Grid item xs={12}>
                        <Box sx={{ borderBottom: '2px solid #164966' }}>
                            <Typography sx={{ color: '#164966', fontSize: '24px' }}>
                                ข้อมูลผู้ใช้
                            </Typography>
                        </Box>
                    </Grid>

                    {/* member button */}
                    <Grid item xs={6}>
                        <Paper elevation={3} onClick={() => setSelectedValue('Member')} sx={{ padding: 5, ':hover': { cursor: 'pointer' }, boxShadow: selectedValue === 'Member' ? '0px 0px 8px 1px rgba(0, 123, 255, 1)' : '', border: selectedValue === 'Member' ? '1px solid rgba(0,0,0,0.7)' : '' }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
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
                                <img src='https://agrts.co.th/management/img/oneplatform.e84660da.png' width={100}></img>
                            </Stack>
                        </Paper>
                    </Grid>

                    {/* non member button */}
                    <Grid item xs={6}>
                        <Paper elevation={3} onClick={() => setSelectedValue('NonMember')} sx={{ padding: 5, ':hover': { cursor: 'pointer' }, boxShadow: selectedValue === 'NonMember' ? '0px 0px 8px 1px rgba(0, 123, 255, 1)' : '', border: selectedValue === 'NonMember' ? '1px solid rgba(0,0,0,0.7)' : '' }} >
                            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
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

                    {/* username btn */}
                    <Grid item xs={12}>
                        <Controller
                            name="username"
                            control={control}
                            rules={{
                                required: true,
                                pattern: {
                                    value: /(?=.*[a-z])+/gm,
                                },
                                minLength: {
                                    value: 6,
                                },
                                maxLength: {
                                    value: 100,
                                },
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"account_circle"}
                                    value={field.value}
                                    errorProps={errors.username}
                                    labelprops={"ชื่อผู้ใช้*"}
                                    errorMessage={'กรุณากรอกชื่อผู้ใช้'}
                                />

                            }}
                        />

                        {/* คำแนะนำ */}
                        <Box sx={{ display: selectedValue === 'Member' ? 'none' : 'block' }}>
                            <Box
                                sx={{
                                    display: focus === 'username' ? 'block' : 'none',
                                    bgcolor: '#ebebeb',
                                    padding: 1,
                                    ml: 5,
                                    mt: 2,
                                    borderRadius: 2,
                                    color: errors.username ? 'red' : getFieldState("username").isDirty ? 'green' : focus === 'username' ? 'gray' : 'gray'
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

                    {/* password btn */}
                    <Grid item xs={selectedValue === 'Member' ? 12 : 6}>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"key"}
                                    value={field.value}
                                    errorProps={errors.password}
                                    labelprops={"รหัสผ่าน*"}
                                    typeprops={"password"}
                                />
                            }}
                        />
                    </Grid>

                    {/* confirm password btn */}
                    <Grid item xs={selectedValue === 'Member' ? 0 : 6} sx={{ display: selectedValue === 'Member' ? 'none' : 'block' }}>
                        <Controller
                            name="ConfirmPassword"
                            control={control}
                            rules={{
                                validate: selectedValue === 'Member' ? '' : {
                                    MatchPassword: v => v === getValues("password"),
                                },
                                minLength: selectedValue === 'Member' ? 0 : 8
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    valuetest={field.onBlur}
                                    fieldname={field.name}
                                    iconname={"key"}
                                    value={field.value}
                                    fillvalue={oneAccoutForm.password && oneAccoutForm.password}
                                    errorProps={errors.ConfirmPassword}
                                    labelprops={"รหัสผ่าน*"}
                                    typeprops={"password"}
                                    errorMessage={'กรุณากรอกชื่อผู้ใช้'}
                                />

                            }}
                        />

                        {/* <FieldInput
                            fieldname={"ConfirmPassword"}
                            iconname={"key"}
                            value={getValues("ConfirmPassword")}
                            errorProps={errors.ConfirmPassword}
                            labelprops={"ยืนยันรหัสผ่าน*"}
                            typeprops={"password"}
                            HookForm={
                                register("ConfirmPassword", {
                                    required: selectedValue === 'Member' ? false : true,
                                    value: oneAccoutForm ? oneAccoutForm.ConfirmPassword : '',
                                    validate: selectedValue === 'Member' ? '' : {
                                        MatchPassword: v => v === getValues("password"),
                                    },
                                    minLength: selectedValue === 'Member' ? 0 : 8
                                })}
                        /> */}
                    </Grid>

                </Grid>

                {/* ปุ่ม ถัดไป */}
                <Grid container sx={{ mt: '30px' }}>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>

                            <Button sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: '#164966', ":hover": { bgcolor: '#164966' } }} onClick={handleSubmit(onSubmit)}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                    ถัดไป
                                </Typography>
                            </Button>
                            {Value.value.Text}
                        </Stack>
                    </Grid>
                </Grid>

            </form>

        </Box >
    )
}