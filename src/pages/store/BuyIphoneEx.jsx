// import React, { useState, useEffect, useContext } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { Link  } from 'react-router-dom';
// import { LayoutBlack } from "../../components/Layout";
// import { CartContext } from "../../store/Cart/context";
// import styles from './BuyIphone.module.css'
// import { addToCartAction } from "../../store/Cart/actions";

// function BuyIphone() {
//     const [iPhone, setproductCategory] = useState([]);
//     const {cartState, cartDispatch} = useContext(CartContext);

//     function getAppleCategory() {
//         fetch("https://json-server-deployment-5til.onrender.com/iPhone")
//             .then((response) => response.json())
//             .then((data) => {
//                 setproductCategory(data);
//             });
//     }

//     useEffect(() => {
//         getAppleCategory();
//     }, []);

//     useEffect(() => {
//         console.log('useEffect', cartState);
//     }, [cartState]);

//     const handleAddToCart = (phone) => {
//         cartDispatch(addToCartAction(phone));
//         console.log('add')
//     };

//     return (
//         <LayoutBlack>
//             <Container>
//                 <h1><b>iPhone STORE</b></h1>
//                 <Row className={styles.row} >
//                     {iPhone.map((iPhone) => (
//                         <Col className={styles.column} key={iPhone.id}>
//                             <Container style={{backgroundColor: "white", borderRadius: '5px'}}>
//                                 <h4>
//                                 <Link to={`/iPhone/${iPhone.id}`}>{iPhone.title}</Link>
//                                 </h4>
//                                 <h6>
//                                      Model: {iPhone.model}
//                                 </h6>
//                                 <h6>
//                                     storageSize: {iPhone.storageSize}
//                                 </h6>
//                                 <Button 
//                                 onClick={()=>handleAddToCart(iPhone)}>
//                                     Add to Cart
//                                 </Button>
//                             </Container>
                
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </LayoutBlack>
//     );
// }


// export { BuyIphone };




// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { LayoutBlack } from "../../components/Layout";
// import styles from './BuyIphone.module.css'; 

// function BuyIphone(){
//     const [iPhones, setIPhones] = useState([]);
//     // const [iPhone, setproductCategory] = useState([]);

//     const {cartState, cartDispatch } = useContext(CartContext);
//     const [selectedOptions, setSelectedOptions] = useState({});

//     useEffect(() => {
//         fetch('https://json-server-deployment-5til.onrender.com/iPhone')
//             .then(response => response.json())
//             .then(data => {
//                 setIPhones(data);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const handleAddToCart = (iPhone) => {
//         const selected = selectedOptions[iPhone.id] || {};
//         console.log(`Added ${iPhone.title} with ${selected.finish} finish and ${selected.storage} storage to cart`);
//     };

//     const handleOptionChange = (iPhoneId, type, value) => {
//         setSelectedOptions(prevState => ({
//             ...prevState,
//             [iPhoneId]: {
//                 ...prevState[iPhoneId],
//                 [type]: value,
//             },
//         }));
//     };

//     return (
//         <LayoutBlack>
//         <Container>
//             <h1><b>iPhone STORE</b></h1>
//             <Row className={styles.row}>
//                 {iPhones.map((iphone) => (
//                     <Col className={styles.column} key={iphone.id}>
//                         <Container style={{ backgroundColor: "white", borderRadius: '5px' }}>
//                             <h4>{iphone.title}</h4>
//                             <h5>Model: {iphone.model}</h5>
//                             <h6>Finishes:</h6>
//                             <div>
//                                 {iphone.finishesColor.map((color, index) => (
//                                     <label key={index} className={styles.optionLabel}>
//                                         <input
//                                             type="radio"
//                                             name={`finish-${iphone.id}`}
//                                             value={color}
//                                             checked={selectedOptions[iphone.id]?.finish === color}
//                                             onChange={() => handleOptionChange(iphone.id, 'finish', color)}
//                                             className={styles.optionInput}
//                                         />
//                                         {color}
//                                     </label>
//                                 ))}
//                             </div>
//                             <h6>Storage Sizes:</h6>
//                             <div>
//                                 {iphone.storageSize.map((size, index) => (
//                                     <label key={index} className={styles.optionLabel}>
//                                         <input
//                                             type="radio"
//                                             name={`storage-${iphone.id}`}
//                                             value={`${size}${index < iphone.storageType.length ? iphone.storageType[index] : 'GB'}`}
//                                             checked={selectedOptions[iphone.id]?.storage === `${size}${index < iphone.storageType.length ? iphone.storageType[index] : 'GB'}`}
//                                             onChange={() => handleOptionChange(iphone.id, 'storage', `${size}${index < iphone.storageType.length ? iphone.storageType[index] : 'GB'}`)}
//                                             className={styles.optionInput}
//                                         />
//                                         {size}{index < iphone.storageType.length ? iphone.storageType[index] : 'GB'}
//                                     </label>
//                                 ))}
//                             </div>
//                             <h6>Price: {iphone.countryValue}{iphone.price}</h6>
//                             <Button onClick={() => handleAddToCart(iphone)}>
//                                 Add to Cart
//                             </Button>
//                             <h6>Details:</h6>
//                             <ul>
//                                 {iphone.details.map((detail, index) => (
//                                     <li key={index}>{detail}</li>
//                                 ))}
//                             </ul>
//                             {/* <h6>Images:</h6>
//                             <ul>
//                                 {iphone.imagePath.map((path, index) => (
//                                     <li key={index}>
//                                         <img src={path} alt={`iPhone ${iphone.model}`} style={{ width: '100px', height: 'auto' }} />
//                                     </li>
//                                 ))}
//                             </ul> */}
//                         </Container>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//         </LayoutBlack>
//     );
// };

//test