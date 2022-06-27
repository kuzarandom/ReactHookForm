import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, Route } from 'react-router-dom'
import FormRegister from './components/registerform.js'
import React from 'react'


const ContextRegisterForm = React.createContext();
const ContextActiveStep = React.createContext();
function App() {

  const [oneAccoutForm, setOneAccoutForm] = React.useState(null)
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <ContextRegisterForm.Provider value={{ oneAccoutForm, setOneAccoutForm }}>
      <ContextActiveStep.Provider value={{ activeStep, setActiveStep }}>
        <div className="App">
          <FormRegister />
          {/* <Grid container>
        <Grid item xs={6}>
          <Box sx={{ border: '1px solid red', height: '100vh' }}>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ border: '1px solid red', height: '100vh' }}>right</Box>
        </Grid>
      </Grid> */}
        </div>
      </ContextActiveStep.Provider>
    </ContextRegisterForm.Provider>
  );
}
export { ContextRegisterForm, ContextActiveStep };
export default App;
