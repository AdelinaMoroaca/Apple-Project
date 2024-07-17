// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import { Route, Routes} from 'react-router-dom';
import './index.css';

// import TestAPI from './TestAPI';

import Homepage from './pages/HomePage';
import Storepage from './pages/StorePage';
import Iphonepage from './pages/IPhonePage';
import Iphone from './pages/Iphone';
import Macpage from './pages/MacPage';
import Ipadpage from './pages/IpadPage';
import Watchpage from './pages/WatchPage';
import Visionpage from './pages/VisionPag';


import Page404 from './pages/Page404'
// import {Form, InputValidator} from './demoComponents/Form';
// import ConditinalRendering from './demoComponents/ConditionalRendering';
// import Lists from './demoComponents/Lists';
// import UseEffList from './demoComponents/useEffect/UseEffList';
// import { Button } from 'bootstrap';
// import AppDemo from './demoComponents/App/AppDemo';


function App() {
  return (
    <div className="App">
     {/* <h1>Geolocation in React</h1>
     <Geolocation />
     <AppleMusicComponent/>*/}
     
    
        {/* <NavBar
            homePageLink='/'
            storePageLink='/store/'
            macPageLink='/mac/'

            iPadPageLink='/iPad/'
            iPhonePageLink='/iPhone/'
            watchPageLink='/watch/'

            visionPageLink='/apple-vision-pro/'
            airpodsPageLink='/airpods/'
            tvHomePageLink='/tv-home/'

            entertainmentPageLink='/services/'
            accessoriesPageLink='/accessories/all/'
            supportPageLink='/support.apple.com/'

            searchIcon = ''
            bagIcon = ''
        />   */}

      <Routes>
      
        <Route path='/' element={<Homepage/>}/>
        <Route path='/store/' element={<Storepage/>}/>
        <Route path='/store/category/:id' element={<Storepage/>}/>

        <Route path='/iPhone/' element={<Iphonepage/>}/>
        <Route path='/iPhone/:id' element={<Iphone/>}/>
        <Route path='/mac/' element={<Macpage/>}/>
        <Route path='/iPad/' element={<Ipadpage/>}/>
        <Route path='/watch/' element={<Watchpage/>}/>
        <Route path='/apple-vision-pro/' element={<Visionpage/>}/>
        {/* <Route path='/airpods/' element={<Airpodspage/>}/>
        <Route path='/tv-home/' element={<Tvhomepage/>}/>
        <Route path='/services/' element={<Servicespage/>}/>
        <Route path='/accessories/all/' element={<Accessoriespage/>}/>
        <Route path='/support.apple.com/' element={<Supportpage/>}/> */}

        <Route path='*' element={<Page404/>}/>

      </Routes>





        {/* <Homepage/>     */}
        {/* <Storepage/>  */}
 
     {/* <TestAPI/>  */}








        <div style={{backgroundColor: 'bisque'}}>
      {/* <p>Test Form</p>
      <Form/>
      <p>Test Input</p>
      <InputValidator/> */}

  
     {/* <AppleSingInComponent/>     */}


      {/* <ConditinalRendering/>
      <Lists/>
      <UseEffList/> */}
      {/* <Button/> */}

      {/* <AppDemo/> */}
    </div>



    </div>
  );
}

export default App;
