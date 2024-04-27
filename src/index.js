import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  // createHashRouter,
} from "react-router-dom";
import Index from './pages';
import Welcome from './pages/welcome';
import Define from './pages/define';
import AL from './pages/AL';
import Doors from './pages/doors';
import ST from './pages/ST';
import Ktchn from './pages/Ktchn';
import Department from './pages/department';
import Experience from './pages/experience';
import Structure from './pages/structure';
import Owl from './components/owl';
import Map from './components/map';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
     <Route index element={<Index/>}/>
     <Route path='/welcome' element={<Welcome/>}/>
     <Route path='/definition' element={<Define/>}/>
     <Route path='/Al' element={<AL/>}/>
     <Route path='/doors' element={<Doors/>}/>
     <Route path='/st' element={<ST/>}/>
     <Route path='/kitchen' element={<Ktchn/>}/>
     <Route path='/departments' element={<Department/>}/>
     <Route path='/types-experience' element={<Experience/>}/>
     <Route path='/structure' element={<Structure/>}/>
     <Route path='/owl' element={<Owl/>}/>
     <Route path='/map' element={<Map/>}/>











   {/* <Route path="projects" element={<Projects/>}/>
    <Route path="about-us" element={<Abt/>}/>

    <Route path="services" element={<Services/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="jobs" element={<Jobs/>}/>
    <Route path="modals/:ok" element={<Modals/>}/> */}





   
  </Route>)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router}>
   <App />
   </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
