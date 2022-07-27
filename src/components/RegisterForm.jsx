import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm, SubmitHandler } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/OutlinedInput';
import StepLabel from '@mui/material/StepLabel';
import { StepButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import { styled } from '@mui/material/styles';
import AccoutForm from './AcountFormNew'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { ContextRegisterForm, ContextActiveStep } from '../App'
import PersonalForm from './PersonalFormNew'
import RoleForm from './RoleFormNew'
import Stack from '@mui/material/Stack'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PersonIcon from '@mui/icons-material/Person';
import SourceIcon from '@mui/icons-material/Source';
import LockIcon from '@mui/icons-material/Lock';

const steps = ['ข้อมูลผู้ใช้งาน', 'ข้อมูลส่วนตัว', 'สิทธิ์การใช้งาน'];

const RegisterForm = () => {
  const [completed, setCompleted] = React.useState({});
  const { activeStep, setActiveStep } = useContext(ContextActiveStep)
  const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)

  // เปลี่ยน step 
  function handleNextCheck(index) {
    if (oneAccoutForm) {
      if (index === 0) {
        setActiveStep(index)
      } else if (index === 1) {
        if (oneAccoutForm.username)
          setActiveStep(index)
      } else if (index === 2) {
        if (oneAccoutForm.name) {
          setActiveStep(index)
        }
      }
    }
  }

  // เนื้อหาแต่ละฟอร์ม
  function FormChange(Step) {
    switch (Step) {
      case 0:
        return (
          <>
            <AccoutForm />
            {/* <ShowInfo /> */}
            {/* <PersonalForm /> */}
          </>
        );
      case 1:
        return (
          <>
            <PersonalForm />
          </>
        );
      case 2:
        return (
          <>
            <RoleForm />
          </>
        )
      default:
        return (
          console.log(oneAccoutForm)
        )
    }
  }

  // สีเส้นเชื่อม stepper 
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 35,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        // backgroundImage:'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        backgroundColor: '#164966'
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        // backgroundImage:'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        backgroundColor: '#164966'
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));

  // สีไอคอน stepper
  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 70,
    height: 70,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: '#164966',
      border: '2px solid #164966'
    }),
    ...(ownerState.completed && {
      backgroundColor: '#fff',
      border: '2px solid #164966',
      color: '#164966'
    }),
  }));

  // icon stepper 
  const ColorlibStepIcon = (props) => {
    const { active, completed, className } = props;

    const icons = {
      1: <PersonIcon sx={{ fontSize: 40 }} />,
      2: <SourceIcon sx={{ fontSize: 40 }} />,
      3: <LockIcon sx={{ fontSize: 40 }} />,
    };

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  return (
    <div class="BoxHidden">

      {/* Header right content */}
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2} >

        {/* Login title content*/}
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2, ":hover": { cursor: 'pointer' }, }}>

          {/* Icon login */}
          <ChevronLeftIcon sx={{ fontSize: 60, color: '#164966' }} />

          {/* Title login */}
          <Typography sx={{ color: '#9e9e9e' }}>
            เข้าสู่ระบบ
          </Typography>

        </Stack>

        {/* Register title content */}
        <Stack sx={{ pl: 2 }}>
          <Typography sx={{ ":hover": { cursor: 'pointer' }, fontSize: 30, color: "#164966", mt: -3 }} >
            สมัครสมาชิก<br></br>
            <Typography sx={{ mt: -1, color: '#9e9e9e' }}>
              ยกระดับประสิทธิภาพการเกษตรของคุณให้เป็น Smart Farming
            </Typography>
          </Typography>
        </Stack>

      </Stack>

      {/* From content */}
      <Box sx={{ width: '90%', mt: 5, mx: 'auto' }}>

        {/* stepper  */}
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={() => (handleNextCheck(index), console.log(index))} >
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>

        {/* form content  */}
        <div>
          <Box sx={{ mt: 5 }}>
            <form>
              {FormChange(activeStep)}
            </form>
          </Box>
        </div>

      </Box>

    </div>
  );
}

export default RegisterForm