import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from './pages/HomePage';
import Storepage from './pages/StorePage';
import Iphonepage from './pages/productPage/IPhonePage';
import Iphone from './pages/Iphone';
import Macpage from './pages/productPage/MacPage';
import Ipadpage from './pages/productPage/IpadPage';
import Watchpage from './pages/WatchPage';
// import Visionpage from './pages/productPage/VisionPage';
// import IphoneList from './components/IphoneList';
// import { BuyProduct } from './pages/storePage/BuyProduct';
import {BuyIphone} from './pages/storePage/BuyIphone';
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
    
      <Routes>     
        <Route path='/' element={<Homepage/>}/>
        <Route path='/store/' element={<Storepage/>}/>
        {/* <Route path='/store/category/iPhone:id/' element={<IphoneList />} />
        <Route path='/shop/buy-iphone/iPhone:id/' element={<IphoneList />} /> */}

        <Route path='/iPhone/' element={<Iphonepage/>}/>
        <Route path='/iPhone/:id' element={<Iphone/>}/>
        <Route path='/mac/' element={<Macpage/>}/>
        <Route path='/iPad/' element={<Ipadpage/>}/>
        <Route path='/watch/' element={<Watchpage/>}/>
        {/* <Route path='/apple-vision-pro/' element={<Visionpage/>}/> */}
        {/* <Route path='/airpods/' element={<Airpodspage/>}/>
        <Route path='/tv-home/' element={<Tvhomepage/>}/>
        <Route path='/services/' element={<Servicespage/>}/>
        <Route path='/accessories/all/' element={<Accessoriespage/>}/>
        <Route path='/support.apple.com/' element={<Supportpage/>}/> */}

        {/* <Route path='/shop/buy-iphone/' element={<BuyIphone />}/> */}
        {/* <Route path='/shop/buy-:productType/' element={<BuyProduct />} /> */}
       
        {/* <Route path='/buy-iphone/' element={<BuyIphone />} /> */}
        <Route path='/shop/buy-iphone/' element={<BuyIphone />} />
        
        <Route path='*' element={<Page404/>}/>

      </Routes>

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
