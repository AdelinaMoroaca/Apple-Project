import { useContext, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AuthenticationContext} from '../store/Authentication/context';
import styles from './Header.module.css'

function HeaderBlack() {
  const { user, setUser } = useContext(AuthenticationContext);
  const [expanded, setExpanded] = useState(false);
  const [collapsed, setCollapsed] = useState(true); //state for dispayed navbar 
  const [isToggled, setIsToggled] = useState(false);//state for toggle icon

  console.log('expanded state', expanded);
  const handleToggle = () => {
    setCollapsed(!collapsed);
    setIsToggled(!isToggled);
    console.log('isToggled', isToggled);
    console.log('collapsed', collapsed, ' style collapsedNavLink active');
    triggerAnimations();
  };

  const logoutUser = () => {
    setUser(null);
  }

  const triggerAnimations = () => {
    const bottomAnimOpen = document.getElementById('globalnav-anim-menutrigger-bread-bottom-open');
    const bottomAnimClose = document.getElementById('globalnav-anim-menutrigger-bread-bottom-close');
    const topAnimOpen = document.getElementById('globalnav-anim-menutrigger-bread-top-open');
    const topAnimClose = document.getElementById('globalnav-anim-menutrigger-bread-top-close');

    if(collapsed) {
      bottomAnimOpen.beginElement();
      topAnimOpen.beginElement();
    } else {
      bottomAnimClose.beginElement();
      topAnimClose.beginElement();
    }
  };


  return (
    <header>
      <Navbar expand="lg" className={styles.navbar} bg="dark" data-bs-theme="dark"
        onToggle={() => setExpanded(!expanded)}
      >

        <Navbar.Toggle aria-controls="basic-navbar-nav"  bg="dark" onClick={handleToggle} >
          {collapsed ? (
            <svg width="18" height="18" viewBox="0 0 18 18">
              <polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom">
                <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate>
                <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate>
              </polyline>
              <polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top">
                <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate>
                <animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate>
              </polyline>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18">
              <polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom">
                <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate>
                <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate>
              </polyline>
              <polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top">
                <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate>
                <animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate>
              </polyline>
            </svg>
          )}
        </Navbar.Toggle>

        <Navbar.Collapse
          id="basic-navbar-nav"
          bg="dark"
           data-bs-theme="dark"
          className={`justify-content-end ${isToggled ? styles.listToggledBackground : styles.listDefaultBackgroundLight}`}
        >
            
          <Nav className={`${styles.navbarLinks} ${collapsed ? styles.collapsedNavLinks : styles.notCollapsedNavLinks}`}>
            { expanded ? '' : (
              <Navbar.Brand as={Link} to="/" className={`styles.navBrand`}>
                <svg className={styles.logoSvg} height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
              </Navbar.Brand>
              )} 
            <Nav.Link as={Link} to="/store" className={`${styles.navLink}`}>Store</Nav.Link>
            <Nav.Link as={Link} to="/mac" className={`${styles.navLink}`}>Mac</Nav.Link>
            <Nav.Link as={Link} to="/ipad" className={`${styles.navLink}`}>iPad</Nav.Link>
            <Nav.Link as={Link} to="/iphone" className={`${styles.navLink}`}>iPhone</Nav.Link>
            <Nav.Link as={Link} to="/watch" className={`${styles.navLink}`}>Watch</Nav.Link>
            <Nav.Link as={Link} to="/apple-vision-pro" className={`${styles.navLink}`}>Vision</Nav.Link>
            <Nav.Link as={Link} to="/airpods" className={`${styles.navLink}`}>AirPods</Nav.Link>
            <Nav.Link as={Link} to="/tv-home" className={`${styles.navLink}`}>TV & Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className={`${styles.navLink}`}>Entertainment</Nav.Link>
            <Nav.Link as={Link} to="/shop/accessories/all"className={`${styles.navLink}`}>Accessories</Nav.Link>
            <Nav.Link as={Link} to="/support" className={`${styles.navLink}`}>Support</Nav.Link>
            <Nav.Link as={Link} to="/bag" className={`${styles.navLink}`}>
              <svg className={styles.cartSvg} height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
              <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path></svg>
            </Nav.Link>

            {user ? (
              <Nav.Link as={Link} to="/favorites" className={`${styles.navLink}`}>
                <svg viewBox="0 0 40 40" className={styles.favouritesDarkSvg} class="as-svgicon as-svgicon-heart as-svgicon-base as-svgicon-heartbase" 
                  role="img" aria-hidden="true" width="28" height="28">
                    <path fill="none" d="M0 1.213h35v35H0z"></path>
                    <path  className={styles.favouritesDarkSvg} d="M17.5 29.263a1.194 1.194 0 0 1-.85-.352L6.967 19.2a6.531 6.531 0 0 1 .46-9.617 6.708 6.708 0 0 1 8.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 0 1 8.943-.647 6.531 6.531 0 0 1 .46 9.617l-9.683 9.711a1.192 1.192 0 0 1-.85.352Zm-6.06-20a5.154 5.154 0 0 0-3.31 1.167 5.352 5.352 0 0 0-1.948 3.913 5.424 5.424 0 0 0 1.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 0 0 1.564-4.081 5.352 5.352 0 0 0-1.948-3.913 5.6 5.6 0 0 0-7.461.577l-1.7 1.7a.3.3 0 0 1-.425 0l-1.7-1.7a5.89 5.89 0 0 0-4.144-1.741Z"></path></svg>            
              </Nav.Link>
            ): '' } 

            <Nav.Link as={Link} to="/shop/signIn" onClick={logoutUser} className={`${styles.navLink} ${collapsed ? styles.collapsedNavLink : styles.notCollapsedNavLink}`} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0.2rem'}} >
              <svg className={styles.signInDarkSvg} height="30" viewBox="0 0 17 27" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z"></path>
              </svg>
                {user ? (
                  <span>Sign Out Adelina</span>          
                ): '' } 
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

function HeaderWhite() {
  const { user, setUser } = useContext(AuthenticationContext);
  const [expanded, setExpanded] = useState(false);
  const [collapsed, setCollapsed] = useState(true); //state for dispayed navbar 
  const [isToggled, setIsToggled] = useState(false);//state for toggle icon

  console.log('expanded state', expanded);
  const handleToggle = () => {
    setCollapsed(!collapsed);
    setIsToggled(!isToggled);
    console.log('isToggled', isToggled);
    console.log('collapsed', collapsed, ' style collapsedNavLink active');
    triggerAnimations();
  };

  const logoutUser = () => {
    setUser(null);
  }

  const triggerAnimations = () => {
    const bottomAnimOpen = document.getElementById('globalnav-anim-menutrigger-bread-bottom-open');
    const bottomAnimClose = document.getElementById('globalnav-anim-menutrigger-bread-bottom-close');
    const topAnimOpen = document.getElementById('globalnav-anim-menutrigger-bread-top-open');
    const topAnimClose = document.getElementById('globalnav-anim-menutrigger-bread-top-close');

    if(collapsed) {
      bottomAnimOpen.beginElement();
      topAnimOpen.beginElement();
    } else {
      bottomAnimClose.beginElement();
      topAnimClose.beginElement();
    }
  };


  return (
    <header>
      <Navbar expand="lg" className={`${styles.navbar} navbarParent`} bg="light" data-bs-theme="light"
        onToggle={() => setExpanded(!expanded)}
      >

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} bg="light" style={{  border: 'none' }}>
          {collapsed ? (
            <svg width="18" height="18" viewBox="0 0 18 18">
              <polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom">
                <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate>
                <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate>
              </polyline>
              <polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top">
                <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate>
                <animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate>
              </polyline>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18">
              <polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom">
                <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate>
                <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate>
              </polyline>
              <polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top">
                <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate>
                <animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate>
              </polyline>
            </svg>
          )}
        </Navbar.Toggle>

        <Navbar.Collapse 
          id="basic-navbar-nav"
          bg="light"
          data-bs-theme="light"
          className={`justify-content-end ${isToggled ? styles.listToggledBackgroundLight : styles.listDefaultBackgroundLight}`}

        >
            
          <Nav className={`${styles.navbarLinks} ${collapsed ? styles.collapsedNavLinks : styles.notCollapsedNavLinks}`}>
            { expanded ? '' : (
              <Navbar.Brand as={Link} to="/" className={styles.navBrand}>
                <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
              </Navbar.Brand>
            )}
            <Nav.Link as={Link} to="/store" className={styles.navLink}>Store</Nav.Link>
            <Nav.Link as={Link} to="/mac" className={styles.navLink}>Mac</Nav.Link>
            <Nav.Link as={Link} to="/ipad" className={styles.navLink}>iPad</Nav.Link>
            <Nav.Link as={Link} to="/iphone" className={styles.navLink}>iPhone</Nav.Link>
            <Nav.Link as={Link} to="/watch" className={styles.navLink}>Watch</Nav.Link>
            <Nav.Link as={Link} to="/apple-vision-pro" className={styles.navLink}>Vision</Nav.Link>
            <Nav.Link as={Link} to="/airpods" className={styles.navLink}>AirPods</Nav.Link>
            <Nav.Link as={Link} to="/tv-home" className={styles.navLink}>TV & Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className={styles.navLink}>Entertainment</Nav.Link>
            <Nav.Link as={Link} to="/shop/accessories/all" className={styles.navLink}>Accessories</Nav.Link>
            <Nav.Link as={Link} to="/support" className={styles.navLink}>Support</Nav.Link>
            <Nav.Link as={Link} to="/bag" className={styles.navLink}>
              <svg className={styles.cartLightSvg} height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
              <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path></svg>
            </Nav.Link>

            {user ? (
              <Nav.Link as={Link} to="/favorites" className={styles.navLink} >
                <svg viewBox="0 0 40 40" className={styles.favouritesSvg} class="as-svgicon as-svgicon-heart as-svgicon-base as-svgicon-heartbase" 
                  role="img" aria-hidden="true" width="28" height="28">
                    <path fill="none" d="M0 1.213h35v35H0z"></path>
                    <path  className={styles.favouritesSvg} d="M17.5 29.263a1.194 1.194 0 0 1-.85-.352L6.967 19.2a6.531 6.531 0 0 1 .46-9.617 6.708 6.708 0 0 1 8.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 0 1 8.943-.647 6.531 6.531 0 0 1 .46 9.617l-9.683 9.711a1.192 1.192 0 0 1-.85.352Zm-6.06-20a5.154 5.154 0 0 0-3.31 1.167 5.352 5.352 0 0 0-1.948 3.913 5.424 5.424 0 0 0 1.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 0 0 1.564-4.081 5.352 5.352 0 0 0-1.948-3.913 5.6 5.6 0 0 0-7.461.577l-1.7 1.7a.3.3 0 0 1-.425 0l-1.7-1.7a5.89 5.89 0 0 0-4.144-1.741Z"></path></svg>            
              </Nav.Link>
            ): '' } 

            <Nav.Link as={Link} to="/shop/signIn" onClick={logoutUser} className={styles.navLink} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0.2rem'}} >
              <svg className={styles.signInLightSvg} height="30" viewBox="0 0 17 27" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z"></path>
              </svg>
                {user ? (
                  <span>Sign Out Adelina</span>          
                ): '' } 
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export { HeaderBlack, HeaderWhite };