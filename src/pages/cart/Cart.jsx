import React, {useContext} from "react";
import { CartContext } from "../../store/Cart/context";
// import { removeFromCart } from "../../store/Cart/actions";
import { LayoutWhite } from '../../components/Layout';
import {  Container } from "react-bootstrap";
// import styles from "./Cart.module.css";

function Cart() {
  const { cartState } = useContext(CartContext); 


  return (
    <LayoutWhite>
   
        <Container>
            
            
            <div>
                <h1>Cart 
                    {`(${cartState.cart.length})`}

                </h1>
                {
                    cartState.cart.length === 0 ?
                    <p>Your cart is empty.</p> : 
                    <ul>
                        {
                            cartState.cart.map((product) => {
                                return <li key={product.id}>{product.title}</li>
                            })
                        }
                    </ul>
                }

                {/* <ListGroup >
                    
                    <ListGroupItem className={styles.cartItem}>
                        <p></p>
                            <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleRemoveFromCart(iPhone.id)}
                            >
                            Remove
                            </Button>
                    
                    </ListGroupItem>
            
                </ListGroup> */}
            </div>
        
        </Container>
    </LayoutWhite>
  )
}

export default Cart;
