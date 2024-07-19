import React from "react";
import { Link } from "react-router-dom";
// import styles from "./NavBar.module.css";
import styles from "./Header.module.css";

function HeaderBlack() {
  return (
    <header className={styles.headerBlack}>
      {/* <nav className='nav'> */}
      <nav className={styles.nav}>
        {/* <ul className='nav-list'> */}
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">-Sigla-Home</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/store/">Store</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/mac/">Mac</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/iPad/">iPad</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/iPhone/">iPhone</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/watch/">Watch</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/apple-vision-pro/">Vision</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/airpods/">AirPods</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/tv-home/">TV & Home</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/services/">Entertainment</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/accessories/all/">Accessories</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/support.apple.com/">Support</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/users">-Icon-</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/about">-Icon-</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function HeaderWhite() {
  return (
    <header className={styles.headerWhite}>
      {/* <nav className='nav'> */}
      <nav className={styles.nav}>
        {/* <ul className='nav-list'> */}
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">-Sigla-Home</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/store/">Store</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/mac/">Mac</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/iPad/">iPad</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/iPhone/">iPhone</Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/watch/">Watch</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/apple-vision-pro/">Vision</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/airpods/">AirPods</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/tv-home/">TV & Home</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/services/">Entertainment</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/accessories/all/">Accessories</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/support.apple.com/">Support</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/users">-Icon-</Link>
          </li>
          
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/about">-Icon-</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { HeaderBlack, HeaderWhite} ;