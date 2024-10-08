import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { BagContext } from '../../store-contexts/contexts-D/BagContext';
import styles from './BagIcon.module.css';

function BagIcon(){
    const { isBagOpen, setIsBagOpen, bagCount } = useContext(BagContext);
    function toggleIsBagOpen(){
        setIsBagOpen(!isBagOpen);
    }
    
    return(
        <div className={styles.cartIconContainer} onClick={toggleIsBagOpen}>
            <ShoppingIcon className={styles.shoppingIcon} />
            {bagCount > 0 && (
                <span className={styles.itemCount}>{bagCount}</span>
            )}
        </div>
    )
}

export default BagIcon;