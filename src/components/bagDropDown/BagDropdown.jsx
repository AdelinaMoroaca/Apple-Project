import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BagContext } from '../../store-contexts/contexts-D/BagContext';
import { BtnDemo } from '../buttons/Btn';
import { Container } from 'react-bootstrap';
import BagItemDropDown from './BagItemDropDown';
import styles from './BagDropdown.module.css';


function BagDropdown() {
    const { bagItems } = useContext(BagContext);
    const navigate = useNavigate();
    function goToReviewBag() {
        navigate('/bag')
    }

    return (
        <Container className={styles.cartDropdownContainer}>
            <Container className={styles.cartItems}>
                {bagItems.map((cartItem) => (
                    <BagItemDropDown key={cartItem.id} bagItem={cartItem} />
                ))}
            </Container>

            <BtnDemo onClick={goToReviewBag}>Review Bag</BtnDemo>
        </Container>
    )
}

export default BagDropdown;