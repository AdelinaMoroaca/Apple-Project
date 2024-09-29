import { useContext } from 'react';
import { BagContext } from '../../../store/contexts-D/BagContext';
import Card from 'react-bootstrap/Card';
import { BtnDemo } from '../../../components/buttons/Btn';
import { ReactComponent as EducationIcon } from '../../../assets/education-hat.svg';
import styles from './ItemCard.module.css';

const ItemCard = ({ product }) => {
    const {name, basePrice, giftCardPrice, newPrice, newItem, imageUrl} = product;
    const { addItemToBag } = useContext(BagContext);

    function addProductToBag() {
        addItemToBag(product);
    }

    return (
        <Card className={styles.productCardContainer}>
            <div className={styles.infoContainer}>
                {giftCardPrice &&
                    <Card.Text
                        className={giftCardPrice ? styles.visibleText : styles.hiddenText}>
                        {giftCardPrice ? `GET A $${giftCardPrice} GIFT CARD` : 'bbbbb'}
                    </Card.Text>
                }
  
                {newItem &&
                    <Card.Text
                        className={newItem ? styles.visibleText : styles.hiddenText}>
                        {newItem ? 'New' : 'sss'}
                    </Card.Text>
                }

                {newPrice &&
                    <Card.Text 
                        className={newPrice ? styles.visibleText : styles.hiddenText}>
                        {newPrice ? 'New Price' : 'sss'}
                    </Card.Text>
                }
                <div className={styles.svgContainer}>
                    <EducationIcon />
                </div>
            </div>

            <Card.Title className={styles.cardTitle}>{name}</Card.Title>

            <Card.Img 
                variant="" 
                src={imageUrl} 
                alt={`${name}`} 
                className={styles.imageCard} 
            />

            {basePrice ? (
                <Card.Body className={styles.footer}>
                    <Card.Text className={styles.price}>
                        From ${basePrice} or ${(basePrice / 12).toFixed(2)}/mo for 12 mo.* with education savings
                    </Card.Text>
                    <BtnDemo buttonType='google' onClick={addProductToBag} style={{ textTransform: 'capitalize', minWidth: '70px' }}>Buy</BtnDemo>
                </Card.Body>
            ) : null}
        </Card>
    )
}

export default ItemCard;