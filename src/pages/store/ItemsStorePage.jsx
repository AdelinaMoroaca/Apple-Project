import React from "react";
import { Col, Row, Container} from 'react-bootstrap';
//old:
// import { useFetchData } from '../../utils/hooks/useFetch';
// import { Spinner, Figure, Card } from 'react-bootstrap';

//unpdate firebase
import { CategoriesContext } from "../../store/contexts-D/CategoriesContext";
import { useContext, Fragment } from "react";
import ItemCard from "../../components/cards/productCard/ItemCard";
// import styles from './ProductsStorePage.module.css'; 

function ItemsStorePage({ categoryItems }) {
  const { categoriesMap } = useContext(CategoriesContext);
  // const category = categoriesMap[categoryItems];

  return (
    <Container>
      {categoriesMap[categoryItems] ? (
        <Fragment key={categoryItems}>
          <Row className="g-4">
            {categoriesMap[categoryItems].items && categoriesMap[categoryItems].items.length > 0 ? (
              categoriesMap[categoryItems].items.map((product) => (
                <Col xs={12} sm={6} lg={4} key={product.id}>
                  <ItemCard key={product.id} product={product} />
                </Col>
              ))
            ) : (
              <p>No products found for this category.</p>
            )}
          </Row>
        </Fragment>
      ) : (
        <p>Category not found.</p>
      )}
    </Container>
  );
}


export { ItemsStorePage };
