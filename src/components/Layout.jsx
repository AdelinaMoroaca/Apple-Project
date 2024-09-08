import {  Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Layout.module.css"

function Layout({ children, bgThemeVariant, iconColor }) {
    return(
        <div className={styles.layout}>
            <Header 
                bgThemeVariant={bgThemeVariant}
                iconColor={iconColor}
            />
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export { Layout };