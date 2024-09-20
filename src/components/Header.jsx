import React, { useEffect,useContext, useState } from 'react';
import { UserContext } from '../store/Authentication/UserAuthentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartIcon from './bagIcon/BagIcon';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { faSearch} from '@fortawesome/free-solid-svg-icons'; //will be implemented
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle as fasUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle as farUserCircle, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; 
import { Nav, Navbar, Container, Button, Collapse } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { signOutUser } from '../utils/firebase/firebase';
import BagDropdown from './bagDropDown/BagDropdown';
import { BagContext } from '../store/contexts-D/BagContext';
// import {AuthenticationContext} from '../store/Authentication/context';
import styles from './Header.module.css'
 

function Header({ bgThemeVariant, iconColor }) {
  // const { user, setUser } = useContext(AuthenticationContext);
  const { currentUser } = useContext(UserContext);
  const { isBagOpen } = useContext(BagContext);


  const [isExpanded, setExpanded] = useState(false);
  const [isCollapsed, setCollapsed] = useState(true);
  const [isToggled, setIsToggled] = useState(false);
  const [renderContent, setRenderContent] = useState(false);

  const location = useLocation();



  useEffect(() => {
    const body = document.body;

    if (!isCollapsed) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  
    const preventScroll = (event) => {
      if (!isCollapsed) {
        event.preventDefault();
      }
    };
  
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', (event) => {
      if (!isCollapsed  && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        preventScroll(event);
      }
    });
  
    return () => {
      body.classList.remove('no-scroll');
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScroll);
    };
  }, [isCollapsed]);

  useEffect(() => {
    if (!isCollapsed) {
      const timer = setTimeout(() => setRenderContent(true), 300);
      return () => clearTimeout(timer); 
    } else {
      setRenderContent(false);
    }
  }, [isCollapsed]);
  
  
  function toggleCollapsedState(){
    setCollapsed(!isCollapsed);
    setIsToggled(!isToggled);
  };


  // const handleMouseEnter = () => {
  //   console.log(isToggled, 'handleMouseEnter');
  //   setIsToggled(true);
  //   console.log(isToggled);
  // };

  // const handleMouseLeave = () => {
  //   console.log(isToggled, 'handleMouseLeave');
  //   console.log(isToggled);
  //   setIsToggled(false);
  // };

  
  // useEffect(() => {
  //   console.log('useEffect called');
  //   const navLinks = document.querySelectorAll('.nav-link');
  //   console.log('navLinks:', navLinks);
  //   navLinks.forEach((link) => {
  //     console.log('adding event listener to:', link);
  //     link.addEventListener('mouseleave', handleMouseLeave);
  //   });
  //   return () => {
  //     console.log('cleaning up');
  //     navLinks.forEach((link) => {
  //       link.removeEventListener('mouseleave', handleMouseLeave);
  //     });
  //   };
  // }, [handleMouseLeave]);
  return (
    <header>
      <Navbar bg={bgThemeVariant} className={styles.navbar} data-bs-theme={bgThemeVariant} expand="lg" onToggle={() => setExpanded(!isExpanded)}>
        <Container className={`d-flex justify-content-between align-items-center`} fluid>
          <div className="d-none d-lg-flex justify-content-center align-items-center flex-grow-1">
            <Nav className={styles.basicNav}>
              <Nav.Link className={`${styles.navLogo} d-none d-lg-block`} as={Link} to="/"> 
                <FontAwesomeIcon icon={faApple} className={styles.iconNavLarge} />
              </Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/store">Store</Nav.Link>
              {/* <Nav.Link className={styles.navLink} as={Link} to="/shop">Shop</Nav.Link> */}
              <Nav.Link className={styles.navLink} as={Link} to="/mac">Mac</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/ipad">iPad</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/iphone">iPhone</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/watch">Watch</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/apple-vision-pro">Vision</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/airpods">AirPods</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/tv-home">TV & Home</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/services">Entertainment</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/shop/accessories/all">Accessories</Nav.Link>

              {/* {need to implement after the searchbar implementation} */}
              {/* <Nav.Link className={styles.navLink} as={Link} to="/support">Support</Nav.Link> */}
             
              {/* {need to implement searchbar} */}
              {/* <Nav.Link as={Link} to="/search" className="d-none d-lg-block">
                <FontAwesomeIcon icon={faSearch} size="sm" color={iconColor} />
              </Nav.Link> */}

              <Nav.Link as={Link} to="/bag" className={`${styles.navLink} d-none d-lg-block`}>
                <CartIcon className={styles.iconNav}/>
              </Nav.Link>

              {currentUser ? (
                <Nav.Link as={Link} to="/favorites" className={styles.navLink} >
                  <FontAwesomeIcon icon={farHeart} className={styles.iconNav}/>
                </Nav.Link>
              ): '' } 

              {/* <Nav.Link as={Link} to="/shop/signIn" onClick={logoutUser}  className={`${styles.navLink} d-none d-lg-block`} > */}

              <Nav.Link as={Link} to="/auth" onClick={signOutUser}  className={`${styles.navLink} d-none d-lg-block`} >
                {currentUser ? (

                  <div className="d-flex align-items-center d-none d-lg-block" 
                  style={{ whiteSpace: 'nowrap'}}>
                    <FontAwesomeIcon icon={fasUserCircle}  className={styles.iconNav}/>
                    <span className={styles.navUserIcon}> Sign Out</span>  
                  </div>        
                ) : (
                  <>
                    <FontAwesomeIcon icon={farUserCircle}  className={styles.iconNav}/>
                    <span className={styles.navUserIcon}> Sign In</span>  
                  </>
                )} 
              </Nav.Link>
            </Nav>

          </div>


          {/* Navbar for small screens */}
          <div bg={bgThemeVariant} data-bs-theme={bgThemeVariant} className="d-lg-none d-flex justify-content-between align-items-center">
            {isCollapsed && ( 
              <Navbar.Brand bg={bgThemeVariant} data-bs-theme={bgThemeVariant} as={Link} to="/" >
                <FontAwesomeIcon icon={faApple} className={styles.iconNavLarge} style={{ margin : '0rem 0rem 0.62rem 0.62rem'}} color={iconColor}/>
              </Navbar.Brand>       
            )}  
          </div>

          <div className={`d-lg-none d-flex justify-content-between align-items-center`} style={{margin: '0rem 0rem 0.3rem'}}>
              {/* {need to implement searchbar} */}
              {/* <Nav.Link as={Link} to="/search" className="d-none d-lg-block">
                <FontAwesomeIcon icon={faSearch} size="md" color={iconColor} />
              </Nav.Link> */}
   
              {currentUser && isCollapsed ? (
                <Nav.Link as={Link} to="/favorites" className={styles.navLink}>
                  <div className="d-flex align-items-start">
                    <FontAwesomeIcon icon={farHeart} className={styles.iconNavLarge} style={{  marginBottom: '5px' }} color={iconColor}/>    
                  </div>  
                </Nav.Link>): '' } 

              {isCollapsed && (
                <Nav.Link as={Link} to="/auth" onClick={signOutUser}>
                  {currentUser ? (
                    <div className="d-flex align-items-start">
                      <FontAwesomeIcon icon={fasUserCircle} className={styles.iconNavLarge} color={iconColor} />
                      <span className={styles.iconSpan}> Sign Out </span>  
                    </div>    
                  ):(        
                    <div className="d-flex align-items-start" style={{marginBottom: '5px'}}>
                      <FontAwesomeIcon icon={farUserCircle} className={styles.iconNavLarge} color={iconColor} /> 
                      <span> Sign In</span>  
                      {/* <span className={styles.iconSpan}> </span>     */}
                    </div>
                  )}
                </Nav.Link>)}

              {isCollapsed && (
              <Nav.Link as={Link} to="/bag" className={styles.navLink}>
              <span className="d-inline-flex align-items-start">
                <CartIcon className={styles.iconNavLarge} color={iconColor}/>
              </span>
              </Nav.Link>)}

              <Button onClick={toggleCollapsedState} className={styles.burgerBtn} aria-expanded={!isCollapsed}>
                {isToggled ? (
                  <span className="d-inline-flex align-items-center">
                    <FontAwesomeIcon icon={faXmark} className={styles.iconNavLarge} />
                  </span>
                ) : (
                  <span className="d-inline-flex align-items-center">  
                    <FontAwesomeIcon icon={faBars} className={styles.iconNavLarge} />
                  </span>
                )}
              </Button>
            </div>
        </Container>
      </Navbar>

      <Collapse in={!isCollapsed}>
        <div className={`bg-${bgThemeVariant} text-${bgThemeVariant === 'dark' ? 'light' : 'dark'} ${styles.collapsedContainer}`} data-bs-theme={bgThemeVariant}>
          {renderContent && (
            <Nav bg={bgThemeVariant} data-bs-theme={bgThemeVariant} className={`flex-column text-left ${styles.collapsedNav}`}>
              <Nav.Link className={`${location.pathname === '/store' ? styles.activeLink : ''}`} as={Link} style={{ color: `${iconColor}`}} to="/store">Store</Nav.Link>
              <Nav.Link className={`${location.pathname === '/mac' ? styles.activeLink : ''}`} as={Link} style={{ color: `${iconColor}`}} to="/mac">Mac</Nav.Link>
              <Nav.Link className={location.pathname === '/ipad' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/ipad">iPad</Nav.Link>
              <Nav.Link className={location.pathname === '/iphone' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/iphone">iPhone</Nav.Link>
              <Nav.Link className={location.pathname === '/watch' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/watch">Watch</Nav.Link>
              <Nav.Link className={location.pathname === '/apple-vision-pro' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/apple-vision-pro">Vision</Nav.Link>
              <Nav.Link className={location.pathname === '/airpods' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/airpods">AirPods</Nav.Link>
              <Nav.Link className={location.pathname === '/tv-home' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/tv-home">TV & Home</Nav.Link>
              <Nav.Link className={location.pathname === '/services' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/services">Entertainment</Nav.Link>
              <Nav.Link className={location.pathname === '/shop/accessories/all' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/shop/accessories/all">Accessories</Nav.Link>
              <Nav.Link className={location.pathname === '/support' ? styles.activeLink : ''} as={Link} style={{ color: `${iconColor}`}} to="/support">Support</Nav.Link>
            </Nav>
          )}
        </div>
      </Collapse>

      {isBagOpen && <BagDropdown />}
    </header>
  );
}

export { Header };