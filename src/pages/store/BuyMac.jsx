import React, { useState, useEffect} from 'react';
// import React, { useContext } from 'react';
import { LayoutBlack } from "../../components/Layout";
import { useFetchData } from '../../utils/hooks/useFetch';
// import { addToBag } from '../../store/Shopping/actions';
// import { addToFavorite } from '../../store/Favorites/actions';
// import { BagContext } from '../../store/Shopping/context';
// import { FavoriteContext } from '../../store/Favorites/context';
import { Container, Card, Col, Row, Spinner } from 'react-bootstrap';
import styles from './BuyIphone.module.css'; 

function BuyMac() {
    // const { bagDispatch } = useContext(BagContext);
    // const { favoriteDispatch } = useContext(FavoriteContext);
    // const [selectedOptions, setSelectedOptions] = useState({});
    const [macBookAirModels, setMacBookAirModels] = useState([]);
    const [macBookProModels, setMacBookProModels] = useState([]);
    const [filteredStorage, setFilteredStorage] = useState([]);
    const [selectedModelId, setSelectedModelId] = useState(null);
    const [loadingStorage, setLoadingStorage] = useState(false);

    const { data, loading } = useFetchData(
        "https://json-server-deployment-5til.onrender.com/MacStoreProducts"
    );

    useEffect(() => {
        const fetchMacModels = async () => {
            try {
                const response = await fetch("https://json-server-deployment-5til.onrender.com/MacModels");
                const modelsData = await response.json();

                // Filter the models based on MacStoreProductsId
                const filteredMacBookAir = modelsData.filter(model => model.MacStoreProductsId === 1);
                const filteredMacBookPro = modelsData.filter(model => model.MacStoreProductsId === 2);

                // Set the state for each product type
                setMacBookAirModels(filteredMacBookAir);
                setMacBookProModels(filteredMacBookPro);
            } catch (error) {
                console.error("Error fetching Mac models:", error);
            }
        };

        fetchMacModels();
    }, []);

    const handleModelClick = async (modelId) => {
        setSelectedModelId(modelId); // Set the clicked model ID to the state
        setLoadingStorage(true); // Start loading
    
        try {
            const response = await fetch("https://json-server-deployment-5til.onrender.com/MacStorage");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const storageData = await response.json();
    
            // Filter storage data based on the selected model ID
            const filteredStorageData = storageData.filter(storage => storage.MacModelsId === modelId);
    
            // Update the state with the filtered data
            setFilteredStorage(filteredStorageData);
        } catch (error) {
            console.error("Error fetching Mac storage:", error);
        } finally {
            setLoadingStorage(false); // Stop loading
        }
    };

    // const handleAddToBag = (product) => {
    //     const selected = selectedOptions[product.id] || {};

    //     if (!selected.finish || !selected.storage) {
    //         alert('Please select both finish and storage options before adding to cart.');
    //         return;
    //     }

    //     bagDispatch(addToBag({
    //         ...product,
    //         finish: selected.finish,
    //         storage: selected.storage,
    //     }));

    //     console.log(`Added ${product.title} with ${product.price}, ${selected.finish} finish and ${selected.storage} storage to cart`);    
    // };

    // const handleAddToFavorites = (product) => {
    //     favoriteDispatch(addToFavorite(product));
    //     console.log(`Added to Favorite ${product.title} with ${product.price}`);
    // };

    // const handleOptionChange = (productId, type, value) => {
    //     setSelectedOptions(prevState => ({
    //         ...prevState,
    //         [productId]: {
    //             ...prevState[productId],
    //             [type]: value,
    //         },
    //     }));
    // };

    return (
        <LayoutBlack>
            <section style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '3rem'
                }}>
                <h1 style={{ paddingBottom: '2rem' }}><b>Shop Mac for Education</b></h1>
                {loading && <Spinner animation="border" />}
                <Container>
                    <Row>
                        {data && data.map((product) => (
                            <Col xs={12} sm={6} className="mb-4" key={product.id}>
                                <Card className={styles.buyCard}
                                    style={{
                                        width: '100%',
                                        borderRadius: '1rem',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                        padding: '1rem',
                                        height: '100%'
                                    }}>
                                    <Card.Body>                                      
                                        <h1 style={{ textAlign: 'left' }}>Buy: {product.title}</h1>
                                        <img src={product.imagePath} alt="" width={170} height={150} />
                                        
                                        {product.title === "MacBook Air" && (
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div>
                                                    <h2>Models:</h2>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        {macBookAirModels.map((model) => (
                                                            <div key={model.id} style={{ marginBottom: '1rem' }}>
                                                                <p 
                                                                    style={{padding: '0rem', cursor: 'pointer' }}
                                                                    onClick={() => handleModelClick(model.id)}
                                                                >
                                                                     {model.title}
                                                                </p>

                                                             
                                                                {selectedModelId === model.id && (
                                                                    <div>
                                                                        {loadingStorage ? (
                                                                            <p>Loading storage options...</p>
                                                                        ) : (
                                                                            <div>
                                                                                {filteredStorage.length > 0 ? (
                                                                                    filteredStorage.map(storage => (
                                                                                        <div key={storage.id} style={{ marginBottom: '1rem' }}>
                                                                                            <p><b>Storage Size:</b> {storage.storage} GB</p>
                                                                                            <p><b>Price:</b> {storage.price} $</p>
                                                                                        </div>
                                                                                    ))
                                                                                ) : (
                                                                                    <p>No storage options available for this model.</p>
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {product.title === "MacBook Pro" && (
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div>
                                                    <h2>Models:</h2>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        {macBookProModels.map((model) => (
                                                            <div key={model.id} style={{ marginBottom: '1rem' }}>
                                                                <p 
                                                                    style={{padding: '0rem', cursor: 'pointer' }}
                                                                    onClick={() => handleModelClick(model.id)}
                                                                >
                                                                    {model.title}
                                                                </p>
                                                      
                                                                {selectedModelId === model.id && (
                                                                    <div>
                                                                        {loadingStorage ? (
                                                                            <p>Loading storage options...</p>
                                                                        ) : (
                                                                            <div>
                                                                                {filteredStorage.length > 0 ? (
                                                                                    filteredStorage.map(storage => (
                                                                                        <div key={storage.id} style={{ marginBottom: '1rem' }}>
                                                                                            <p><b>Storage Size:</b> {storage.storage} GB</p>
                                                                                            <p><b>Price:</b> {storage.price} $</p>
                                                                                        </div>
                                                                                    ))
                                                                                ) : (
                                                                                    <p>No storage options available for this model.</p>
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </LayoutBlack>
    );
}

export { BuyMac };
