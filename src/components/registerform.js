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
import AccoutForm from './formAccout'
import { ContextRegisterForm, ContextActiveStep } from '../App'
const steps = ['ข้อมูลผู้ใช้งาน', 'ข้อมูลส่วนตัว', 'สิทธิ์การใช้งาน'];

export default function App() {
  const [completed, setCompleted] = React.useState({});
  const { activeStep, setActiveStep } = useContext(ContextActiveStep)
  const { oneAccoutForm, setOneAccoutForm } = useContext(ContextRegisterForm)

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ?
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step)

  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  function FormChange(Step) {
    switch (Step) {
      case 0:
        return (
          <>
            <AccoutForm />
          </>
        );
      case 1:
        return (
          <>

          </>
        );
      case 2:
        return (
          <>

          </>
        )
      default:
        return (
          <div>Test</div>
        )
    }
  }


  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
    };

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const onSubmit = data => {
    console.log(data)
  };
  const { register, handleSubmit } = useForm();
  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box
              sx={{
                mt: 5
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                {FormChange(activeStep)}
              </form>
            </Box>



            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

              {/* ปุ่มกลับ */}
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              {/*  */}
              <Box sx={{ flex: '1 1 auto' }} />
              <Button sx={{ border: '1px solid red' }} onClick={() => console.log(oneAccoutForm)}>Console.log</Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
