import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import VisaCard from './components/VisaCard'
import VisaCardVM from './components/VisaCardTailsWinds.jsx'
// import { store } from './app/store'
import { store } from './store'
import { Provider } from 'react-redux'
import ReduxSimple from './ReduxSimple'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="VisaCard" element={<VisaCard />} />
          <Route path="VisaCardVM" element={<VisaCardVM />} />
          <Route path="ReduxSimple" element={<ReduxSimple />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
