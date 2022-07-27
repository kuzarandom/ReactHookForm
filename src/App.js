import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import { Link, Route } from 'react-router-dom'
import FormRegister from './components/RegisterForm'
import React from 'react'
import LeftSide from './components/LeftSide'
import { Hidden } from '@mui/material';
import AcountFormNew from './components/AcountFormNew'
import PersonalFormNew from './components/PersonalFormNew'

const ContextRegisterForm = React.createContext();
const ContextActiveStep = React.createContext();
const ContextFocus = React.createContext();
const App = () => {

  const [oneAccoutForm, setOneAccoutForm] = React.useState({
    username: null,
    password: null,
    prefix: null,
    prefixEn: null,
    name: null,
    lastname: null,
    cardType: null,
    idCard: null,
    dateIssue: null,
    dateExpiry: null,
    nameEn: null,
    lastnameEn: null,
    Email: null,
    dateOfBirth: null,
    address: null,
    nameOther: null,
    lastnameOther: null,
    addressOther: null,
    tel: null,
    role: null
  })
  const [activeStep, setActiveStep] = React.useState(0);
  const [focus, setFocus] = React.useState('')
  const [businessman, setBusinessman] = React.useState(false)
  const [boxes, setBoxes] = React.useState({});
  const [FarmerCase, setFarmerCase] = React.useState(false)
  const [UserCase, setUserCase] = React.useState(false)
  return (
    <ContextFocus.Provider value={{ focus, setFocus, businessman, setBusinessman, boxes, setBoxes, FarmerCase, setFarmerCase, UserCase, setUserCase }}>
      <ContextRegisterForm.Provider value={{ oneAccoutForm, setOneAccoutForm }}>
        <ContextActiveStep.Provider value={{ activeStep, setActiveStep }}>
          <div className="AppBox" >
            <Grid container>
              <Grid item md={6}>
                <Hidden mdDown>
                  <Box sx={{ height: '100vh' }}>
                    {/* <LeftSide/> */}
                  </Box>
                </Hidden>
              </Grid>
              <Grid className='boxContainer' item xs={12} md={6}>
                <Box sx={{ height: '100vh', }}>
                  <FormRegister />
                  {/* <AcountFormNew /> */}
                  {/* <PersonalFormNew /> */}
                </Box>
              </Grid>
            </Grid>
          </div>
        </ContextActiveStep.Provider>
      </ContextRegisterForm.Provider >
    </ContextFocus.Provider>
  );
}
export { ContextRegisterForm, ContextActiveStep, ContextFocus };
export default App;
