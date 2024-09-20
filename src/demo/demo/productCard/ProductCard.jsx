import { useContext } from 'react';
import { BagContext } from '../../../store/contexts-D/BagContext';
import Card from 'react-bootstrap/Card';
import { BtnDemo } from '../../../components/buttons/Btn';
import styles from './ProductCard.module.css';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const { addItemToBag } = useContext(BagContext);

    function addProductToBag() {
        addItemToBag(product);
    }

    return (
        <Card className={styles.productCardContainer}>
            <Card.Img variant="top" src={imageUrl} alt={`${name}`}/>

            <Card.Body className={styles.footer}>
                <Card.Title className={styles.name}>{name}</Card.Title>
                <Card.Text className={styles.price}>{price}</Card.Text>
                <BtnDemo buttonType='inverted' onClick={addProductToBag}>Add to card</BtnDemo>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;