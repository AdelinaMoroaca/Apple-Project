import { Container, Image } from 'react-bootstrap';
import styles from './BagItemDropDown.module.css';

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


export default BagItemDropdown;