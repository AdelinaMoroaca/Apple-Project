import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {AuthenticationContext} from '../store/Authentication/context';
import styles from './Header.module.css'

function HeaderBlack() {
  const { user, setUser } = useContext(AuthenticationContext);

  const logoutUser = () => {
    setUser(null);
  }

  return (
    <Navbar className={styles.navbar} bg="dark" data-bs-theme="dark">
      <Container className={styles.navContainer}>
        <Nav className={styles.navLinks}>
          <Navbar.Brand as={Link} to="/" className={styles.navBrand}>
            <svg className={styles.logoSvg} height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
          </Navbar.Brand>
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
            <svg className={styles.cartSvg} height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path></svg>
          </Nav.Link>

          {user ? (
            <Nav.Link as={Link} to="/favorites" className={styles.navLink} >
                <svg viewBox="0 0 40 40" className={styles.favouritesDarkSvg} class="as-svgicon as-svgicon-heart as-svgicon-base as-svgicon-heartbase" 
                role="img" aria-hidden="true" width="28" height="28">
                  <path fill="none" d="M0 1.213h35v35H0z"></path>
                  <path  className={styles.favouritesDarkSvg} d="M17.5 29.263a1.194 1.194 0 0 1-.85-.352L6.967 19.2a6.531 6.531 0 0 1 .46-9.617 6.708 6.708 0 0 1 8.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 0 1 8.943-.647 6.531 6.531 0 0 1 .46 9.617l-9.683 9.711a1.192 1.192 0 0 1-.85.352Zm-6.06-20a5.154 5.154 0 0 0-3.31 1.167 5.352 5.352 0 0 0-1.948 3.913 5.424 5.424 0 0 0 1.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 0 0 1.564-4.081 5.352 5.352 0 0 0-1.948-3.913 5.6 5.6 0 0 0-7.461.577l-1.7 1.7a.3.3 0 0 1-.425 0l-1.7-1.7a5.89 5.89 0 0 0-4.144-1.741Z"></path></svg>            
            </Nav.Link>
           ): '' } 

          <Nav.Link as={Link} to="/shop/signIn" onClick={logoutUser} className={styles.navLink} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0.2rem'}} >
            <svg 
              className={styles.signInDarkSvg} 
              height="30" 
              viewBox="0 0 17 27" 
              width="17" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z"></path>
            </svg>
            {user ? (
              <span>Sign Out Adelina</span>          
            ): '' } 
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function HeaderWhite() {
    const { user, setUser } = useContext(AuthenticationContext);
    const logoutUser = () => {
      setUser(null);
    }

    return (
    <Navbar className={styles.navbar} bg='light' data-bs-theme="light">
      <Container className={styles.navContainer}>
        <Nav className={styles.navLinks}>
          <Navbar.Brand as={Link} to="/" className={styles.navBrand}>
            <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path></svg>
          </Navbar.Brand>
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
                  <path  d="M17.5 29.263a1.194 1.194 0 0 1-.85-.352L6.967 19.2a6.531 6.531 0 0 1 .46-9.617 6.708 6.708 0 0 1 8.943.647l1.13 1.133 1.13-1.133a6.706 6.706 0 0 1 8.943-.647 6.531 6.531 0 0 1 .46 9.617l-9.683 9.711a1.192 1.192 0 0 1-.85.352Zm-6.06-20a5.154 5.154 0 0 0-3.31 1.167 5.352 5.352 0 0 0-1.948 3.913 5.424 5.424 0 0 0 1.564 4.081l9.684 9.711.53.388-.39-.388 9.684-9.711a5.424 5.424 0 0 0 1.564-4.081 5.352 5.352 0 0 0-1.948-3.913 5.6 5.6 0 0 0-7.461.577l-1.7 1.7a.3.3 0 0 1-.425 0l-1.7-1.7a5.89 5.89 0 0 0-4.144-1.741Z"></path></svg>            
            </Nav.Link>
           ): '' } 

          <Nav.Link as={Link} to="/shop/signIn" onClick={logoutUser} className={styles.navLink} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0.2rem'}}>
              <svg 
                className={styles.signInLightSvg} 
                height="30" 
                viewBox="0 0 17 27" 
                width="17" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z"></path>
              </svg>
              
              {user ? (
              <span>Sign Out Adelina</span>          
            ): '' } 
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
  }

export { HeaderBlack, HeaderWhite };