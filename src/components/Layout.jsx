import { HeaderBlack, HeaderWhite } from "./Header";
import styles from "./Layout.module.css"

function LayoutBlack({ children }) {
    return(
        <div className={styles.LayoutBlackContainer}>
            <HeaderBlack/>
            <main>{children}</main>
        </div>
    )
}

function LayoutWhite({ children }) {
    return(
        <div className={styles.LayoutWhiteContainer}>
            <HeaderWhite/>
            <main>{children}</main>
        </div>
    )
}

export { LayoutBlack, LayoutWhite };