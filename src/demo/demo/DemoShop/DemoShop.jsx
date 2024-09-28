import { useContext } from "react";
import { CategoriesContext } from "../../../store/contexts-D/CategoriesContext";
import Container from 'react-bootstrap/Container';
import { Row, Col, Figure } from 'react-bootstrap';
//old
// import Col from 'react-bootstrap/Col';
// import ProductCard from "../productCard/ProductCardFirebase";
// import { Fragment } from "react";
import { Layout } from "../../../components/Layout";
// import ItemCard from "../../../demo/demo/productCard/ItemCard";
// import { Link } from "react-router-dom";
import SwiperDemo from "./SwiperDemo";
// import styles from './DemoShop.module.css';

// function ContainerEx() {
//   const { categoriesMap } = useContext(CategoriesContext);
//   return (
//       <Container style={{border: '1px solid blue', width: '100vw', margin: '0'}}>
//         <Row className="g-4" 
//         style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}} >
//             {Object.keys(categoriesMap).map((title) => (
//                 <Col key={title} xs={6} sm={4} md={2} lg={1} 
//                 style={{backgroundColor: 'pink', 
//                   // display: 'flex', justifyContent: 'center', alignItems: 'center'
//                 }}
//                 >

//                     <Figure key={title} style={{
//                       marginRight: '0.5rem',
//                       display: 'flex', 
//                       flexDirection: 'column',
//                       justifyContent: 'center', alignItems: 'center',
//                       border: '1px solid red'}}>
//                         <Figure.Image
//                             fluid
//                             style={{border: '1px solid green', width: '260px'}}
//                             // width={180}
//                             // height={180}
//                             alt={title}
//                             src={categoriesMap[title].imageUrl}
//                         />
                            
//                         <Figure.Caption style={{
//                              whiteSpace: 'nowrap',
//                             //  overflow: 'hidden',
//                           backgroundColor: 'green'}}>
                        
//                             <Link to={`/${categoriesMap[title].routeName}`} 
//                             style={{
//                               // whiteSpace: 'nowrap',
//                               // overflow: 'hidden',
//                               // textOverflow: 'ellipsis',

//                               color: 'black', textDecoration: 'none', 
//                               fontWeight: 'bold'
//                             }}
//                             >
//                               {title}
//                             </Link>
//                         </Figure.Caption>
//                     </Figure>
//                 </Col>
//             ))}
//         </Row>
//       </Container>
//   )
// }


const DemoShop = () => {
    // const { categoriesMap } = useContext(CategoriesContext);



    return (
        <Layout bgThemeVariant="light" iconColor="gray">
          {/* <ContainerEx/> */}
          <SwiperDemo/>

          {/* <Container>
          {Object.keys(categoriesMap).map((title) => (
            <Fragment key={title}>
              <h1 style={{margin: '3rem 0'}}>{title}</h1>
              <Row className="g-4">
                {categoriesMap[title].items && categoriesMap[title].items.length > 0 ? (
                  categoriesMap[title].items.map((product) => (
                    <Col xs={12} sm={6} lg={4} key={product.id}>
                      <div style={{ height: '100%'}}>
                        <ItemCard key={product.id} product={product} />
                      </div>
                    </Col>
                  ))
                ) : (
                  <p>No products found for this category.</p>
                )}
              </Row>
            </Fragment>
          ))}
        </Container> */}
      </Layout>
    )
}

// function ItemsStorePageDemo() {
//     const { categoriesMap } = useContext(CategoriesContext);
//     // const category = categoriesMap[categoryItems];
  
//     return (
//       <Container>
//         {categoriesMap ? (
//           <Fragment key={categoryItems}>
//             <h1 style={{ margin: '3rem 0' }}>{categoryItems}</h1>
//             <Row className="g-4">
//               {categoriesMap.items && categoriesMap.items.length > 0 ? (
//                 categoriesMap.items.map((product) => (
//                   <Col xs={12} sm={6} lg={4} key={product.id}>
//                     <ItemCard key={product.id} product={product} />
//                   </Col>
//                 ))
//               ) : (
//                 <p>No products found for this category.</p>
//               )}
//             </Row>
//           </Fragment>
//         ) : (
//           <p>Category not found.</p>
//         )}
//       </Container>
//     );
//   }

export default DemoShop;