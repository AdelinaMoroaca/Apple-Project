import { Container, Image, Button } from 'react-bootstrap';
import { Btn } from '../buttons/Btn';
import { useContext } from 'react';
import { BagContext } from '../../store/contexts-D/BagContext';
import styles from './BagItem.module.css';

const BagItem = ({bagItem}) => {
    const { name, imageUrl, price, quantity } = bagItem;
    return (
        <Container className={styles.bagItemContainer}>
            <Image src={imageUrl} alt={`${name}`} rounded />
            <div className={styles.itemDetails}>
                <span className={styles.name}>{name}</span>
                <span className={styles.quantity}>{quantity} x ${price}</span>
            </div>

        </Container>
    )
}

const BagItemReview = ({bagItem}) => {
    const { name, imageUrl, basePrice, quantity } = bagItem;
    const { clearItemFromBag, addItemToBag, removeItemToBag  } = useContext(BagContext);

    function clearItemHandler(){
        clearItemFromBag(bagItem);
    }

    function addItemHandler(){
        addItemToBag(bagItem)
    }

    function removeItemHandler(){
        removeItemToBag(bagItem);
    }

    return (
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0', borderBottom: '1px solid gray', padding: '1rem'}}>
            <Image src={imageUrl} alt={`${name}`} width="300" height="130"/>
         
            <div style={{width: '60%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', gap: '', backgroundColor: 'lightgray'}}>
                <div>{name}</div>
                <div className="d-flex justify-content-center align-items-center">
                      <Button
                        style={{ borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        variant='outline-dark'
                        onClick={removeItemHandler}
                        >-
                        </Button>
                      <span style={{ padding: '0 0.5rem' }}>{quantity}</span>
                      <Button
                        variant='outline-dark'
                        style={{ borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        onClick={addItemHandler} 
                        >+</Button>
                </div>
               
                <div>
                    <div>{basePrice} $</div>
                    <Btn
                        variantType='danger'
                        handleOnClick={clearItemHandler}
                        btnText='x'
                    />
                </div>
            </div>
        </Container>
    )
}

export { BagItem, BagItemReview };