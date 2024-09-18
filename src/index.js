import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import { NetfilxRegisterComponent } from './components/NetflixRegisterComponent';
import NetflixIndexComponent from './components/NetflixIndexComponent';
import reportWebVitals from './reportWebVitals';
import NetflixHeaderComponent from './components/NetflixHeaderComponent';
import LoginComponent from './components/LoginComponent';
import DataBindingComponent from './components/DataBindingComponent';
import DataBindingComponent2 from './components/DataBindingComponent2';
import DataBindingComponent3 from './components/DataBindingComponent3';
import DataBinding4 from './components/DataBinding4';
import UseEffectHook from './components/UseEffectHook';
import ShoppingComponent from './components/ShoppingComponent';
import EventBindingComponent from './components/EventBindingComponent';
import TwoWayBinding from './components/TwoWayBinding';
import FormComponent from './components/FormComponent';
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/FormikValidation';
import YupValidation from './components/YupValidation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <NetflixIndexComponent/> */}
   {/* <LoginComponent/> */}
   {/* <ShoppingComponent/> */}
   {/* <EventBindingComponent/> */}
   {/* <TwoWayBinding/> */}
   {/* <FormComponent/> */}
   {/* <FormikDemo/> */}
   {/* <FormikValidation/> */}
   <YupValidation/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
