import './App.css';
import './index.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
//providers
import { FavoriteProvider } from './store/Favorites/context';
import { BagProvider } from './store/Shopping/context';
import { AuthenticationProvider } from './store/Authentication/context';
//nav - main pages
import Homepage from './pages/basicNav/HomePage';
import Storepage from './pages/basicNav/StorePage';
import {WatchPage} from './pages/basicNav/WatchPage';
import {AirPodsPage} from './pages/basicNav/AirPodsPage';
import SupportPage from './pages/basicNav/SupportPage';
import LoginForm from './pages/basicNav/LoginPage';
// import Bag from './pages/shopping/Bag';
import AccessoriesPage from './pages/basicNav/AccessoriesPage';
import {MacPage} from './pages/basicNav/MacPage';
import {IpadPage} from './pages/basicNav/IpadPage';
import Visionpage from './pages/basicNav/VisionPage';
import {TvHomePage} from './pages/basicNav/TvHomePage';
//service pages
import AppleCard from  './pages/service/AppleCard';
import Business from './pages/service/Business';
import Intelligence from './pages/service/Intelligence';
//product pages
import EntertainmentPage from './pages/basicNav/EntertainmentPage';
import IpadProPage from './pages/product/IpadProPage';
import AppleWatch9Page from './pages/product/AppleWatch9Page';
//store pages
import {IPhonePage} from './pages/basicNav/IPhonePage';
// import IphoneList from './components/IphoneList';
// import { BuyProduct } from './pages/storePage/BuyProduct';
import {BuyIphone} from './pages/store/BuyIphone';
import BuyIpad from './pages/store/BuyIpad';
import BuyWatch from './pages/store/BuyWatch';
import BuyAppleVisionPro from './pages/store/BuyAppleVisionPro';
import BuyIpadPro from './pages/store/BuyIpadPro';
import BuyAppleWatch9 from './pages/store/BuyAppleWatch9';
import ApplyAppleCard from './pages/store/ApplyAppleCard'; 
import AppleTradeIn from './pages/service/AppleTradeIn';
//userPages
import Favorites from './pages/userNav/Favourites';
//other pages
import Page404 from './pages/Page404';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';



function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <FavoriteProvider>
          <BagProvider>
            <Routes>     
              <Route path='/' element={<Homepage/>}/>
              <Route path='/store/' element={<Storepage/>}/>
              <Route path='/shop/buy-ipad/' element={<BuyIpad/>}/>
              <Route path='/shop/buy-ipad/ipad-pro/' element={<BuyIpadPro/>}/>
            
              <Route path='/shop/buy-Apple-Watch/' element={<BuyWatch/>}/>  {/* /shop/buy-watch/ not working as expected */}
              <Route path='/shop/buy-watch/apple-watch/' element={<BuyAppleWatch9/>}/>
              <Route path='/shop/accessories/all/' element={<AccessoriesPage/>}/>
              <Route path='/iPhone/' element={<IPhonePage/>}/>
              {/* <Route path='/iPhone/:id' element={<Iphone/>}/> */} {/* exercitiu */}
              <Route path='/mac/' element={<MacPage/>}/>
              <Route path='/business/' element={<Business/>}/>
              <Route path='/apple-intelligence/' element={<Intelligence/>}/>
              <Route path='/apple-card/' element={<AppleCard/>}/>
              <Route path='/apple-card/signin/' element={<ApplyAppleCard/>}/>
              
              <Route path='/iPad/' element={<IpadPage/>}/>
              <Route path='/store/buy-ipad/ipad-pro/' element={<BuyIpadPro/>}/>
              <Route path='/ipad-pro/' element={<IpadProPage/>}/>
              {/* <Route path='/store/buy-ipad/ipad-pro/' element={<IpadProPage/>}/> */}
              <Route path='/airpods/' element={<AirPodsPage/>}/>
              <Route path='/watch/' element={<WatchPage/>}/>
              <Route path='/apple-watch-series-9/' element={<AppleWatch9Page/>}/>
              <Route path='/shop/signIn/' element={<LoginForm/>}/>
              <Route path='/shop/trade-in/' element={<AppleTradeIn/>}/>
              <Route path='/apple-vision-pro/' element={<Visionpage/>}/>
              
              <Route path='/services/' element={<EntertainmentPage/>}/>
              <Route path='/support/' element={<SupportPage/>}/>
              <Route path='/tv-home/' element={<TvHomePage/>}/>

              <Route path='/shop/buy-vision/apple-vision-pro/' element={<BuyAppleVisionPro/>}/>
              <Route path='/shop/buy-iphone/' element={<BuyIphone />} />
              <Route path='/favorites/' element={<Favorites />} />
              <Route path='/bag/' element={<Bag />} />
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </BagProvider>   
        </FavoriteProvider>
      </AuthenticationProvider> 

      
    </div>
  );
}

export default App;
