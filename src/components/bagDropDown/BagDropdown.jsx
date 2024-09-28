import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BagContext } from '../../store/contexts-D/BagContext';
import { BtnDemo } from '../buttons/Btn';
import { Container } from 'react-bootstrap';
import { BagItem } from '../bagItem/BagItem';
import styles from './BagDropdown.module.css';

const BagDropdown = () => {
    const { bagItems } = useContext(BagContext);
    const navigate = useNavigate();
    function goToReviewBag() {
        navigate('/bag')
    }


    return (
        <Container className={styles.cartDropdownContainer}>
            <Container className={styles.cartItems}>
                {bagItems.map((item) => (
                    <BagItem key={item.id} bagItem={item} />
                ))}
            </Container>

            <BtnDemo onClick={goToReviewBag}>Review Bag</BtnDemo>
        </Container>
    )
}

export default BagDropdown;