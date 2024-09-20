import { useContext } from "react";
import { ProductsContext } from "../../../store/contexts-D/ProductContext";
import ProductCard from "../productCard/ProductCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from "../../../components/Layout";
import styles from './DemoShop.module.css';

const DemoShop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <Layout bgThemeVariant="light" iconColor="gray">
        <Container className={styles.productContainer}>
            <Row className="g-4">
                {products.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                </Col>
                ))}
            </Row>
        </Container>
        </Layout>
    )
}

export default DemoShop;