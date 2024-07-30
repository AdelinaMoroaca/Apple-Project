import React from 'react';
import { Container, Spinner, Card } from 'react-bootstrap';
import { useFetchData } from "../../utils/hooks/useFetchNew";
import PropTypes from 'prop-types';

function PresentationLargeCard({ selectedId, firstAboutText, secondAboutText }) {
    const { data, loading } = useFetchData(
        "https://json-server-deployment-5til.onrender.com/category/"
    );

    console.log('Received selectedId:', selectedId, 'Type:', typeof selectedId);

    if (loading) {
        return (
            <Container>
                <Spinner />
            </Container>
        );
    }

    if (!data) return <p>No data</p>;

    console.log('Data from API:', data);
    console.log('Selected ID:', selectedId, 'Type:', typeof selectedId);

    const availableIds = data.map(item => item.id);
    console.log('Available IDs:', availableIds);
    console.log('Types of Available IDs:', availableIds.map(id => typeof id));

    const filteredData = selectedId
        ? data.filter(item => item.id === selectedId)
        : data;

    // if filteredData is empty, indicating that selectedId does not exist in the data
    // if (selectedId && filteredData.length === 0) {
    //     return (
    //         <Container>
    //             <p>No matching data for selected ID: {selectedId}</p>
    //             <p>Available IDs: {availableIds.join(', ')}</p>
    //         </Container>
    //     );
    // }

    // console.log('Filtered Data:', filteredData);

    return (
         <Container style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', padding: '0rem', margin: '0 auto' }}>
            {filteredData.length === 0 ? (
                <p>No matching data</p>
            ) : (
                filteredData.map((item, index) => (
                    <Card key={index} style={{ border: 'none', borderRadius: '0rem', background: 'transparent', maxWidth:'100vw', width:'100%' }}>
                        <Card.Body 
                            className="d-flex flex-column flex-md-row justify-content-md-between align-items-center" 
                            style={{ padding: '1rem 8rem 5rem 8rem' }}
                        >

                            <Card.Title style={{  flex: '1 1 auto', margin: '1rem' }}>
                                <h1 style={{fontSize: '5rem', textAlign: 'left'}}><b>{item.title}</b></h1>                        
                            </Card.Title>

                            <Card.Text 
                                style={{ display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'center', 
                                    flex: '1 1 auto', 
                                    margin: '1rem' 
                                }}>
                                
                                <p style={{ fontSize: '1.8rem', textAlign: 'right', margin: '0rem'}}><b>{firstAboutText}</b></p>
                                <p style={{ fontSize: '1.8rem', textAlign: 'right'}}><b>{secondAboutText}</b></p>
                            </Card.Text>

                        </Card.Body>

                        <video
                            src={item.videoPath}
                            loop
                            muted
                            playsInline
                            autoPlay
                            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        >
                            Your browser does not support the video tag.
                        </video>

                    </Card>
                ))
            )}
        </Container>
    );
}

PresentationLargeCard.propTypes = {
    selectedId: PropTypes.string, // Define selectedId as a string acording to actual database
};

export default PresentationLargeCard;
