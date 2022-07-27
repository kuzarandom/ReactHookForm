import React, { useState, useContext, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Grid, Stack, TextField, MenuItem, Radio, Icon, Select } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import FieldInput from './FieldInput';
import { ContextRegisterForm, ContextActiveStep, ContextFocus } from '../App'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import Cake from '@mui/icons-material/Cake';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import InputDate from './InputDate'
import SelectInput from './SelectInput'
import { onchangeValue } from '../features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
    const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)
    const { activeStep, setActiveStep } = useContext(ContextActiveStep)
    const { focus, setFocus } = useContext(ContextFocus)
    const [selectedValue, setSelectedValue] = useState('Member');
    const [subCard, setSubCard] = useState('เลขบัตรประชาชน')
    const [dateIssueValue, setDateIssueValue] = React.useState(null);
    const [dateExpiryValue, setDateExpiryValue] = React.useState(null);
    const [dateOfBirthValue, setDateOfBirthValue] = React.useState(null);
    const [prefix, setprefix] = React.useState('นาย')
    const count = useSelector((state) => state.counter.Account)
    console.log(count)
    const { register, control, watch, handleSubmit, formState: {
        errors,
        isDirty,
        isValid,
        touchedFields,
        dirtyFields
    },
        getValues,
        getFieldState
    } = useForm({
        criteriaMode: "all",
        mode: "onChange",
        // defaultValues
    });
    const dispatch = useDispatch()
    // const defaultValues = {
    //     name: oneAccoutForm.username,
    //     lastname: oneAccoutForm.password,
    //     idCard: oneAccoutForm.idCard,
    //     dateIssue: oneAccoutForm.dateIssue,
    //     dateExpiry: oneAccoutForm.dateExpiry,
    //     prefix: oneAccoutForm.prefix,
    //     prefixEn: oneAccoutForm.prefixEn,
    //     nameEn: oneAccoutForm.nameEn,
    //     lastnameEn: oneAccoutForm.lastnameEn,
    //     Email: oneAccoutForm.Email,
    //     dateOfBirth: oneAccoutForm.dateOfBirth,
    //     address: oneAccoutForm.address,
    //     nameOther: oneAccoutForm.nameOther,
    //     lastnameOther: oneAccoutForm.lastnameOther,
    //     addressOther: oneAccoutForm.addressOther,
    // };

    // func submid form 
    const onSubmit = (data) => {
        dispatch(onchangeValue(data))


        // console.log(data)
        // setOneAccoutForm({
        //     username: oneAccoutForm.username,
        //     password: oneAccoutForm.password,
        //     name: data.name,
        //     lastname: data.lastname,
        //     cardType: data.cardType,
        //     idCard: data.idCard,
        //     dateIssue: data.dateIssue,
        //     dateExpiry: data.dateExpiry,
        //     prefix: data.prefix,
        //     prefixEn: data.prefix === 'นาย' ? 'Mr.' : data.prefix === 'นาง' ? 'Mrs.' : data.prefix === 'นางสาว' ? 'Miss' : '',
        //     nameEn: data.nameEn,
        //     lastnameEn: data.lastnameEn,
        //     Email: data.Email,
        //     dateOfBirth: data.dateOfBirth,
        //     address: data.address,
        //     nameOther: data.nameOther,
        //     lastnameOther: data.lastnameOther,
        //     addressOther: data.addressOther,
        //     tel: oneAccoutForm.tel ? oneAccoutForm.tel : data.tel,
        // })
        // setActiveStep(activeStep + 1)
    }

    // back step func
    const handleBack = () => {
        // setActiveStep((prevActiveStep) => prevActiveStep - 1);
        console.log(oneAccoutForm);
    };
    return (
        <Box sx={{ width: '90%', mt: 5, mx: 'auto' }}>

            <form>

                {/* content */}
                <Grid container spacing={2}>

                    {/* title */}
                    <Grid item xs={12}>
                        <Box sx={{ borderBottom: '2px solid #164966', mt: -4 }}>
                            <Typography sx={{ color: '#164966', fontSize: '24px' }}>
                                ข้อมูลผู้ใช้
                            </Typography>
                        </Box>
                    </Grid>

                    {/* warning title */}
                    <Grid item xs={12}>
                        <Box sx={{ borderRadius: '8px', bgcolor: '#f4f4f4' }}>
                            <Typography sx={{ margin: '0px 0px 15px', textAlign: 'left', padding: '15px', color: 'rgba(182,57,57)' }}>
                                ** ข้อมูลส่วนนี้ไม่สามารถแก้ไขในภายหลังได้ กรุณาเช็คความถูกต้อง ก่อนเข้าสู่ในขั้นตอนถัดไป **
                            </Typography>
                        </Box>
                    </Grid>

                    {/* คำนำหน้าชื่อ feild */}
                    <Grid item xs={12} sx={{ mt: -3 }}>
                        <Controller
                            name="prefix"
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field }) => {
                                return <SelectInput
                                    labelProps={"คำนำหน้า*"}
                                    valueProps={['นาย', 'นาง', 'นางสาว']}
                                    value={field.value}
                                    change={field.onChange}
                                />

                            }}
                        />
                        {/* <SelectInput
                            labelProps={"คำนำหน้า*"}
                            valueProps={['นาย', 'นาง', 'นางสาว']}
                            HookForm={register('prefix', {
                                required: true,
                            })}
                        /> */}
                    </Grid>

                    {/* name feild */}
                    <Grid item xs={6}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^[ก-๏\s]+$/gm
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"badge_icon"}
                                    value={field.value}
                                    errorProps={errors.name}
                                    labelprops={"ชื่อ*"}
                                />
                            }}
                        />

                    </Grid>

                    {/* lastname feild */}
                    <Grid item xs={6}>
                        {/* <Controller
                            name="lastname"
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^[ก-๏\s]+$/gm
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    value={field.value}
                                    errorProps={errors.lastname}
                                    labelprops={"นามสกุล*"}
                                ></FieldInput>
                            }}
                        /> */}
                        {/* <FieldInput
                        labelprops={"นามสกุล*"}
                        ></FieldInput> */}
                        <FieldInput
                            fieldname={"lastname"}
                            value={watch("lastname")}
                            errorProps={errors.lastname}
                            labelprops={"นามสกุล*"}
                            HookForm={
                                register("lastname", {
                                    value: oneAccoutForm.lastname ? oneAccoutForm.lastname : '',
                                    pattern: /^[ก-๏\s]+$/gm
                                })}
                        />
                    </Grid>

                    {/* cardType feild */}
                    <Grid item xs={12}>
                        <Controller
                            name="cardType"
                            control={control}
                            render={({ field }) => {
                                return <SelectInput
                                    change={field.onChange}
                                    labelProps={"ชนิดบัตร*"}
                                    valueProps={['เลขบัตรประชาชน', 'หนังสือเดินทาง']}
                                    value={field.value}
                                    errorProps={errors.name}
                                    labelprops={"ชื่อ*"}
                                />

                            }}
                        />
                        {/* <SelectInput
                            labelProps={"ชนิดบัตร*"}
                            valueProps={['เลขบัตรประชาชน', 'หนังสือเดินทาง']}
                            HookForm={register('cardType')}
                        /> */}
                    </Grid>

                    {/* id card feild */}
                    <Grid item xs={12}>
                        <Controller
                            name="idCard"
                            control={control}
                            rules={{
                                required: true,
                                pattern: /[0-9]{13}/
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"badge_icon"}
                                    value={field.value}
                                    errorProps={errors.idCard}
                                    labelprops={watch('cardType') === "เลขบัตรประชาชน" ? "เลขบัตรประชาชน*" : "หนังสือเดินทาง*"}
                                />
                            }}
                        />
                    </Grid>

                    {/* dateIssue feild */}
                    <Grid item xs={6}>
                        <Controller
                            name="dateIssue"
                            control={control}
                            render={({ field }) => {
                                return <InputDate
                                    labelprops={"วันที่ออกบัตร"}
                                    valueProps={field.value}
                                    change={field.onChange}
                                    IconProps={"chrome_reader_mode_icon"}
                                />
                            }}
                        />
                    </Grid>

                    {/* dateExpiry feild */}
                    <Grid item xs={6}>
                        <Controller
                            name="dateExpiry"
                            control={control}
                            render={({ field }) => {
                                return <InputDate
                                    labelprops={"วันที่บัตรหมดอายุ"}
                                    valueProps={field.value}
                                    change={field.onChange}
                                    IconProps={"chrome_reader_mode_icon"}
                                />
                            }}
                        />
                    </Grid>

                    {/* title more info */}
                    <Grid item xs={12}>
                        <Stack spacing={2}>
                            <Typography sx={{ display: 'flex', fontSize: 24, color: '#164966', borderBottom: '2px solid #164966' }}>
                                ข้อมูลเพิ่มเติม (สามารถข้ามการกรอกข้อมูลในส่วนนี้ได้)
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* คำนำหน้าชื่อEN feild */}
                    <Grid item xs={12} >
                        <Controller
                            name="prefixEn"
                            control={control}
                            render={({ field }) => {
                                return <FieldInput
                                    disabledComponent={true}
                                    fieldname={field.name}
                                    value={watch('prefix') === 'นาย' ? 'Mr.' : watch('prefix') === 'นาง' ? 'Mrs.' : watch('prefix') === 'นางสาว' ? 'Miss' : ''}
                                    labelprops={"คำนำหน้า(ภาษาอังกฤษ)*"}
                                />
                            }}
                        />
                    </Grid>

                    {/* Name EN feild */}
                    <Grid item xs={6}>
                        <Controller
                            name="nameEn"
                            control={control}
                            rules={{
                                minLength: 1,
                                pattern: /\w[a-zA-Z]+$/
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"badge_icon"}
                                    value={field.value}
                                    errorProps={errors.nameEn}
                                    labelprops={"ชื่อ(ภาษาอังกฤษ)*"}
                                />
                            }}
                        />
                    </Grid>

                    {/* Lastname EN feild */}
                    <Grid item xs={6}>
                        <Controller
                            name="lastnameEn"
                            control={control}
                            rules={{
                                minLength: 1,
                                pattern: /\w[a-zA-Z]+$/
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"badge_icon"}
                                    value={field.value}
                                    errorProps={errors.lastnameEn}
                                    labelprops={"นามสกุล(ภาษาอังกฤษ)*"}
                                />
                            }}
                        />
                    </Grid>

                    {/* Email feild */}
                    <Grid item xs={12}>
                        <Controller
                            name="Email"
                            control={control}
                            rules={{
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                            }}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"email_icon"}
                                    value={field.value}
                                    errorProps={errors.Email}
                                    labelprops={"อีเมลล์"}
                                />
                            }}
                        />
                    </Grid>

                    {/* date of birth feild  */}
                    <Grid item xs={12}>
                        {/* <InputDate
                            labelprops={"วันเกิด"}
                            valueProps={watch('dateOfBirth')}
                            HookForm={register('dateOfBirth', { value: oneAccoutForm.dateOfBirth ? oneAccoutForm.dateOfBirth : '', })}
                            IconProps={"cake"}
                        /> */}
                        <Controller
                            name="dateOfBirth"
                            control={control}
                            render={({ field }) => {
                                return <InputDate
                                    labelprops={"วันเกิด"}
                                    valueProps={field.value}
                                    change={field.onChange}
                                    IconProps={"cake"}
                                />
                            }}
                        />
                    </Grid>

                    {/* Address feild */}
                    <Grid item xs={12}>
                        {/* <FieldInput
                            fieldname={"address"}
                            iconname={"room_icon"}
                            value={getValues("address")}
                            errorProps={errors.address}
                            labelprops={"ที่อยู่"}
                            multiRow={3}
                            HookForm={
                                register("address", {
                                    value: oneAccoutForm.address ? oneAccoutForm.address : '',
                                })}
                        /> */}
                        <Controller
                            name="address"
                            control={control}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"room_icon"}
                                    value={field.value}
                                    multiRow={3}
                                    errorProps={errors.address}
                                    labelprops={"ที่อยู่"}
                                />
                            }}
                        />
                    </Grid>

                    {/* title บุคคลที่สามารถติดต่อได้ */}
                    <Grid item xs={12}>
                        <Stack spacing={2}>
                            <Typography sx={{ display: 'flex', fontSize: 24, color: '#164966', borderBottom: '2px solid #164966' }}>
                                ข้อมูลของบุคคลที่สามารถติดต่อ (สามารถข้ามการกรอกข้อมูลในส่วนนี้ได้)
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* name other feild */}
                    <Grid item xs={6}>
                        {/* <FieldInput
                            fieldname={"nameOther"}
                            iconname={"badge_icon"}
                            value={getValues("nameOther")}
                            errorProps={errors.nameOther}
                            labelprops={"ชื่อ"}
                            HookForm={
                                register("nameOther", {
                                    value: oneAccoutForm.nameOther ? oneAccoutForm.nameOther : '',
                                })}
                        /> */}
                        <Controller
                            name="nameOther"
                            control={control}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"badge_icon"}
                                    value={field.value}
                                    errorProps={errors.nameOther}
                                    labelprops={"ชื่อ"}
                                />
                            }}
                        />
                    </Grid>

                    {/* lastname other feild */}
                    <Grid item xs={6}>
                        {/* <FieldInput
                            fieldname={"lastnameOther"}
                            value={getValues("lastnameOther")}
                            errorProps={errors.lastnameOther}
                            labelprops={"นามสกุล"}
                            HookForm={
                                register("lastnameOther", {
                                    value: oneAccoutForm.lastnameOther ? oneAccoutForm.lastnameOther : '',
                                })}
                        /> */}
                        <Controller
                            name="lastnameOther"
                            control={control}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    value={field.value}
                                    errorProps={errors.lastnameOther}
                                    labelprops={"นามสกุล"}
                                />
                            }}
                        />
                    </Grid>

                    {/* Address Other feild */}
                    <Grid item xs={12}>
                        {/* <FieldInput
                            fieldname={"addressOther"}
                            iconname={"room_icon"}
                            value={getValues("addressOther")}
                            errorProps={errors.addressOther}
                            labelprops={"ที่อยู่"}
                            multiRow={3}
                            HookForm={
                                register("addressOther", {
                                    value: oneAccoutForm.addressOther ? oneAccoutForm.addressOther : '',
                                })}
                        /> */}
                        <Controller
                            name="addressOther"
                            control={control}
                            render={({ field }) => {
                                return <FieldInput
                                    change={field.onChange}
                                    fieldname={field.name}
                                    iconname={"room_icon"}
                                    value={field.value}
                                    multiRow={3}
                                    errorProps={errors.addressOther}
                                    labelprops={"ที่อยู่"}
                                />
                            }}
                        />
                    </Grid>

                    {/* tel feild */}
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="center" alignItems="center">

                            {/* code phone */}
                            <TextField select value={'+66'} variant="standard" color='success'
                                sx={{
                                    '& .MuiInputBase-root::before': { borderBottom: errors.tel ? '2px solid #d32f2f !important' : (!!watch('tel') && '1px solid #2e7d32 !important') }, mt: !!!errors.tel ? 2 : -0.9
                                }}
                            >
                                <MenuItem value={'+66'}>
                                    <Stack direction="row" justifyContent="center" alignItem="center" spacing={1} >
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/e/e4/%E0%B8%98%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B9%84%E0%B8%97%E0%B8%A2.png' width="30" height="20" ></img>
                                        <Box> +66</Box>
                                    </Stack>
                                </MenuItem>
                            </TextField>

                            {/* input tel */}
                            {/* <FieldInput
                                fieldname={"tel"}
                                value={getValues("tel")}
                                errorProps={errors.tel}
                                labelprops={"เบอร์โทร"}
                                HookForm={
                                    register("tel", {
                                        value: oneAccoutForm.tel ? oneAccoutForm.tel : '',
                                        pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm
                                    })}
                            /> */}
                            <Controller
                                name="tel"
                                control={control}
                                rules={{
                                    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm
                                }}
                                render={({ field }) => {
                                    return <FieldInput
                                        change={field.onChange}
                                        fieldname={field.name}
                                        value={field.value}
                                        errorProps={errors.tel}
                                        labelprops={"เบอร์โทร"}
                                    />
                                }}
                            />
                        </Stack>
                    </Grid>

                </Grid>

                {/* ปุ่ม กลับและถัดไป */}
                <Grid container sx={{ mt: '30px' }}>

                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>

                            <Button sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: '#164966', ":hover": { bgcolor: '#164966' } }}
                                onClick={handleBack}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                    กลับ
                                </Typography>
                            </Button>

                            <Button sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: '#164966', ":hover": { bgcolor: '#164966' } }}
                                onClick={handleSubmit(onSubmit)}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                    ถัดไป
                                </Typography>
                            </Button>

                        </Stack>
                    </Grid>

                </Grid>

            </form>

        </Box >
    )
}