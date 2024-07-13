// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import TestAPI from './TestAPI';
import Homepage from './pages/HomePage';
import Storepage from './pages/StorePage';
import {Form, InputValidator} from './demoComponents/Form';
import ConditinalRendering from './demoComponents/ConditionalRendering';

function App() {
  return (
    <div className="App">
     {/* <h1>Geolocation in React</h1>
     <Geolocation />
     <AppleMusicComponent/>*/}
     <NavBar
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
     />  



     <Homepage/>    
     <Storepage/> 
 
     <TestAPI/> 
    
    <div style={{backgroundColor: 'bisque'}}>
      <p>Test Form</p>
      <Form/>
      <p>Test Input</p>
      <InputValidator/>
     {/* <AppleSingInComponent/>     */}


      <ConditinalRendering/>
    </div>



    </div>
  );
}

export default App;
