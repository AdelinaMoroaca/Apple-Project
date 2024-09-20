import { useContext } from 'react';
import { BagContext } from '../../store/contexts-D/BagContext';
import { BtnDemo } from '../buttons/Btn';
import { Container } from 'react-bootstrap';
import BagItem from '../bagItem/BagItem';
import styles from './BagDropdown.module.css';

const BagDropdown = () => {
    const { bagItems } = useContext(BagContext);

    return (
        <Container className={styles.cartDropdownContainer}>
            <Container className={styles.cartItems}>
                {bagItems.map((item) => (
                    <BagItem key={item.id} bagItem={item} />
                ))}
            </Container>
            <BtnDemo>Review Bag</BtnDemo>
        </Container>
    )
}

export default BagDropdown;