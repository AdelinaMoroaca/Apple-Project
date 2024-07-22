import './App.css';
import './index.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import Storepage from './pages/StorePage';
import Iphone from './pages/Iphone';
import Watchpage from './pages/WatchPage';
import Cart from './pages/cart/Cart';
import Page404 from './pages/Page404';

import Iphonepage from './pages/product/IPhonePage';
import Macpage from './pages/product/MacPage';
import Ipadpage from './pages/product/IpadPage';
import Visionpage from './pages/product/VisionPage';
import AppleCard from  './pages/service/AppleCard';

import IpadProPage from './pages/product/IpadProPage';
import Business from './pages/service/Business';
import Intelligence from './pages/service/Intelligence';
import AppleWatch9Page from './pages/product/AppleWatch9Page';
// import IpadProPage from './pages/store/IpadProPage';
// import IphoneList from './components/IphoneList';
// import { BuyProduct } from './pages/storePage/BuyProduct';
import {BuyIphone} from './pages/store/BuyIphone';
import BuyIpad from './pages/store/BuyIpad';
import BuyWatch from './pages/store/BuyWatch';
import BuyAppleVisionPro from './pages/store/BuyAppleVisionPro';
import BuyIpadPro from './pages/store/BuyIpadPro';
import BuyAppleWatch9 from './pages/store/BuyAppleWatch9';
import ApplyAppleCard from './pages/store/ApplyAppleCard'; 
import LoginForm from './pages/forms/LoginForm';

import {CartProvider} from './store/Cart/context';
import {AuthenticationProvider} from './store/Authentication/context';


import AppleTradeIn from './pages/service/AppleTradeIn';
// import BuyAppleVisionPro from './pages/store/BuyAppleVisionPro';


// import {Form, InputValidator} from './demoComponents/Form';
// import ConditinalRendering from './demoComponents/ConditionalRendering';
// import Lists from './demoComponents/Lists';
// import UseEffList from './demoComponents/useEffect/UseEffList';
// import { Button } from 'bootstrap';
// import AppDemo from './demoComponents/App/AppDemo';


function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <CartProvider>
          <Routes>     
            <Route path='/' element={<Homepage/>}/>
            <Route path='/store/' element={<Storepage/>}/>
            <Route path='/shop/buy-ipad/' element={<BuyIpad/>}/>
            <Route path='/store/buy-ipad/ipad-pro/' element={<BuyIpadPro/>}/>
           
            <Route path='/shop/buy-watch/' element={<BuyWatch/>}/>  {/* /shop/buy-watch/ not working as expected */}
            <Route path='/shop/buy-watch/apple-watch/' element={<BuyAppleWatch9/>}/>
            
            <Route path='/iPhone/' element={<Iphonepage/>}/>
            <Route path='/iPhone/:id' element={<Iphone/>}/>

            <Route path='/mac/' element={<Macpage/>}/>
            <Route path='/business/' element={<Business/>}/>
            <Route path='/apple-intelligence/' element={<Intelligence/>}/>
            <Route path='/apple-card/' element={<AppleCard/>}/>
            <Route path='/apple-card/signin/' element={<ApplyAppleCard/>}/>
            
            <Route path='/iPad/' element={<Ipadpage/>}/>
            {/* <Route path='/store/buy-ipad/ipad-pro/' element={<BuyIpadPro/>}/> */}
            <Route path='/ipad-pro/' element={<IpadProPage/>}/>
            {/* <Route path='/store/buy-ipad/ipad-pro/' element={<IpadProPage/>}/> */}
            
            <Route path='/watch/' element={<Watchpage/>}/>
            <Route path='/apple-watch-series-9/' element={<AppleWatch9Page/>}/>
            <Route path='/shop/signIn/' element={<LoginForm/>}/>
            <Route path='/shop/trade-in/' element={<AppleTradeIn/>}/>
            <Route path='/apple-vision-pro/' element={<Visionpage/>}/>
            
            
            
            
            {/* <Route path='/airpods/' element={<Airpodspage/>}/>
            <Route path='/tv-home/' element={<Tvhomepage/>}/>
            <Route path='/services/' element={<Servicespage/>}/>
            <Route path='/accessories/all/' element={<Accessoriespage/>}/>
            <Route path='/support.apple.com/' element={<Supportpage/>}/> */}

            {/* <Route path='/shop/buy-iphone/' element={<BuyIphone />}/> */}
            {/* <Route path='/shop/buy-:productType/' element={<BuyProduct />} /> */}
          
            {/* <Route path='/buy-iphone/' element={<BuyIphone />} /> */}
            <Route path='/shop/buy-vision/apple-vision-pro/' element={<BuyAppleVisionPro/>}/>
            <Route path='/shop/buy-iphone/' element={<BuyIphone />} />
            
            <Route path='/cart/' element={<Cart />} />
            <Route path='*' element={<Page404/>}/>

          </Routes>
        </CartProvider>   
        
      </AuthenticationProvider> 

      
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
