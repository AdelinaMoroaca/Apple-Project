import { Container, Image, Button, Row, Col} from 'react-bootstrap';
import { Btn } from '../buttons/Btn';
import { useContext } from 'react';
import { BagContext } from '../../store/contexts-D/BagContext';
// import styles from './BagItem.module.css';

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
        <Container style={{
        borderBottom: '1px solid gray', 
         padding: '1rem'}}>
            <Row 
               style={{display: 'flex', 
                justifyContent: 'space-between',
                 alignItems: 'flex-start', 
                 margin: '0rem', 
                 width: '100%',
                 padding: '1rem', 
                 }}>
                <Col lg={3} md={6} sm={12}>
                    <Image fluid src={imageUrl} alt={`${name}`} width="auto" height="130"/>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <p style={{fontSize: '1.5rem'}}>{name}</p>
                </Col>

                <Col lg={3} md={6} sm={12} 
                style={{display: 'flex', 
                justifyContent: 'center', alignItems: 'center'}}>
                    <Button
                        style={{ borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        variant='outline-dark'
                        onClick={removeItemHandler}
                    ><span>-</span></Button>
                    <span style={{ fontSize: '1.5rem', padding: '0 0.5rem' }}>{quantity}</span>
                    <Button
                        variant='outline-dark'
                        style={{ borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        onClick={addItemHandler} 
                    ><span>+</span></Button>                
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <p style={{fontSize: '1.5rem'}}>{basePrice} $</p>
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