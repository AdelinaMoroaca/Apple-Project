import React, { useContext } from "react";
import { FavoriteContext } from "../../store/Favorites/context";
import { LayoutWhite } from '../../components/Layout';
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Favourites.module.css";


function Favourites() {
  const { favoriteState } = useContext(FavoriteContext); 

  return (
    <LayoutWhite >
        <Container className={styles.pageContainer}>
            <Row className={styles.pageTitle}>
                <Col>
                    <h1>
                    Favorite {`(${favoriteState.favorite.length})`}
                    </h1>
                    {
                        favoriteState.favorite.length === 0 ?
                        <p>Your Favorite Section is empty.</p> : 
                        <ul>
                            {
                                favoriteState.favorite.map((product) => {
                                    return <li key={product.id}>{product.title} - {product.price}</li>
                                    
                                })
                            }
                        </ul>
                    }
                </Col>
            </Row>

        </Container>
    </LayoutWhite>
  )
}

export default Favourites;
