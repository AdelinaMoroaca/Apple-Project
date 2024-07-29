import React from 'react';
import { Container, Spinner, Card } from 'react-bootstrap';
import { useFetchData } from "./../../utils/hooks/useFetchNew";
import PropTypes from 'prop-types';

function VideoCardComponent({ selectedId }) {
    const { data, loading } = useFetchData(
        "https://json-server-deployment-5til.onrender.com/category/"
    );

    console.log('Received selectedId:', selectedId, 'Type:', typeof selectedId); // Added log to debug selectedId

    if (loading) {
        return (
            <Container>
                <Spinner animation="border" />
            </Container>
        );
    }

    if (!data) return <p>No data</p>;

    console.log('Data from API:', data);
    console.log('Selected ID:', selectedId, 'Type:', typeof selectedId);

    // List of available IDs
    const availableIds = data.map(item => item.id);
    console.log('Available IDs:', availableIds);
    console.log('Types of Available IDs:', availableIds.map(id => typeof id));

    const filteredData = selectedId
        ? data.filter(item => item.id === selectedId)
        : data;

    // Check if filteredData is empty, indicating that selectedId does not exist in the data
    if (selectedId && filteredData.length === 0) {
        return (
            <Container>
                <p>No matching data for selected ID: {selectedId}</p>
                <p>Available IDs: {availableIds.join(', ')}</p>
            </Container>
        );
    }

    console.log('Filtered Data:', filteredData);

    return (
        <Container>
            {filteredData.length === 0 ? (
                <p>No matching data</p>
            ) : (
                filteredData.map((item, index) => (
                    <Card key={index} style={{ background: 'pink', margin: '1rem' }}>
                        <video
                            src={item.videoPath}
                            loop
                            muted
                            playsInline
                            autoPlay
                            style={{ background: 'green', margin: '2rem', width: '100%' }}
                        >
                            Your browser does not support the video tag.
                        </video>
                        <Card.Body>
                            <Card.Title style={{ background: 'yellow', margin: '2rem' }}>
                                <h2>{item.title}</h2>
                            </Card.Title>
                            <Card.Text style={{ background: 'red', margin: '2rem' }}>
                                <p>{item.id}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            )}
        </Container>
    );
}

VideoCardComponent.propTypes = {
    selectedId: PropTypes.string, // Define selectedId as a string
};

export default VideoCardComponent;
