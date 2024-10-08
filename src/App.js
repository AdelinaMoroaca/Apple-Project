// import './index.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../src/utils/firebase/firebase';
import { setCurrentUser } from './store/user/user.action';
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from 'react-router-dom';
//providers
import { FavoriteProvider } from './store-contexts/Favorites/context';
import { BagProvider } from './store-contexts/Shopping/context';

//nav - main pages
import Homepage from './pages/basicNav/HomePage';
import Storepage from './pages/basicNav/StorePage';
import {WatchPage} from './pages/basicNav/WatchPage';
import {AirPodsPage} from './pages/basicNav/AirPodsPage';
import SupportPage from './pages/basicNav/SupportPage';
import Authentification from './pages/basicNav/Authentification';
import BagPage from './pages/shopping/BagPage';
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
import {BuyMac} from './pages/store/BuyMac';
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

//demo
import DemoShop from './demo/demo/DemoShop/DemoShop';

import { BagProviderD } from './store-contexts/contexts-D/BagContext';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })

    return unsubscribe;
  },[dispatch]);

  return (
    <div className="App">
          <BagProviderD>
            <FavoriteProvider>
              <BagProvider>
                <ScrollToTop />
                <Routes>     
                  <Route path='/' element={<Homepage/>}/>
                  <Route path='/store/' element={<Storepage/>}/>
                  <Route path='/shop/' element={<DemoShop/>}/>
                  <Route path='/shop/buy-ipad/' element={<BuyIpad/>}/>
                  <Route path='/shop/buy-ipad/ipad-pro/' element={<BuyIpadPro/>}/>
                
                  <Route path='/shop/buy-watch/' element={<BuyWatch/>}/>  {/* /shop/buy-watch/ is not defined already */}
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

                  <Route path='/auth' element={<Authentification/>}/>
                  <Route path='/shop/trade-in/' element={<AppleTradeIn/>}/>
                  <Route path='/apple-vision-pro/' element={<Visionpage/>}/>
                  
                  <Route path='/services/' element={<EntertainmentPage/>}/>
                  <Route path='/support/' element={<SupportPage/>}/>
                  <Route path='/tv-home/' element={<TvHomePage/>}/>

                  <Route path='/shop/buy-vision/apple-vision-pro/' element={<BuyAppleVisionPro/>}/>
                  
                  <Route path='/shop/buy-mac/' element={<BuyMac />} />
                  <Route path='/shop/buy-iphone/' element={<BuyIphone />} />
                  <Route path='/favorites/' element={<Favorites />} />
                  <Route path='/bag/' element={<BagPage />} />
                  <Route path='*' element={<Page404/>}/>
                </Routes>
              </BagProvider>   
            </FavoriteProvider>
          </BagProviderD>
    </div>
  );
}

export default App;
