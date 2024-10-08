import { Container, Image, Button, Row, Col} from 'react-bootstrap';
import { Btn } from '../buttons/Btn';
import { useContext } from 'react';
import { BagContext } from '../../store-contexts/contexts-D/BagContext';
import styles from './BagItem.module.css';

function BagItem({bagItem}) {
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
        <Container className={styles.bagItemContainer}>
            <Row className={styles.rowContainer}>
                <Col lg={3} md={6} sm={12}>
                    <Image fluid src={imageUrl} alt={`${name}`} width="auto" height="130"/>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <p className={styles.textInformation}>{name}</p>
                </Col>

                <Col lg={3} md={6} sm={12} className={styles.counterCol}>
                    <Button className={styles.counterBtn}
                        variant='outline-dark'
                        onClick={removeItemHandler}
                    >
                        <span>-</span>
                    </Button>

                    <span className={styles.textInformation}>{quantity}</span>
                    
                    <Button
                        className={styles.counterBtn}
                        variant='outline-dark'
                        onClick={addItemHandler} 
                    >
                        <span>+</span>
                    </Button>                
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <p className={styles.textInformation}>{basePrice} $</p>
                    <Btn
                        variantType='danger'
                        handleOnClick={clearItemHandler}
                        btnText='x'
                    />                
                </Col>
            </Row>
        </Container>
    )
}

export { BagItem };