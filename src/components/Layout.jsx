import {  Header } from "./Header";
// import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Layout.module.css"

function LayoutBlack({ children }) {
    // return(
    //     <div className={styles.LayoutBlackContainer}>
    //         <HeaderBlack/>
    //         <main>{children}</main>
    //         <Footer/>
    //     </div>
    // )
}

function LayoutWhite({ children }) {
    // return(
    //     <div className={styles.LayoutWhiteContainer}>
    //         <HeaderWhite/>
    //         <main>{children}</main>
    //         <Footer/>
    //     </div>
    // )
}

//need to implement layoutBlue for ipad air 

function Layout({ children, bgThemeVariant, iconColor }) {
    return(
        <div className={styles.layout}>
            <Header 
            //   bg={bg}
            //   theme={theme}
            //   btnVariant={btnVariant}
            bgThemeVariant={bgThemeVariant}
              iconColor={iconColor}
            />
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export { LayoutBlack, LayoutWhite, Layout };