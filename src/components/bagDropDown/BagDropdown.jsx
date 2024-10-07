import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BagContext } from '../../store/contexts-D/BagContext';
import { BtnDemo } from '../buttons/Btn';
import { Container, Image } from 'react-bootstrap';
import styles from './BagDropdown.module.css';

function BagItemDropdown({bagItem}){
    const { name, imageUrl, basePrice, quantity } = bagItem;
    return (
        <Container className={styles.bagItemContainer}>
            <Image src={imageUrl} alt={`${name}`} rounded />
            <div className={styles.itemDetails}>
                <span className={styles.name}>{name}</span>
                <span className={styles.quantity}>{quantity} x ${basePrice}</span>
            </div>
        </Container>
    )
}

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
                    <BagItemDropdown key={cartItem.id} bagItem={cartItem} />
                ))}
            </Container>

            <BtnDemo onClick={goToReviewBag}>Review Bag</BtnDemo>
        </Container>
    )
}

export default BagDropdown;