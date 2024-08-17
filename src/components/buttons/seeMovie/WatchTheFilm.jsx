import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './WatchTheFilm.module.css';

function WatchTheFilm(props){
  const {src, titleMovie, className, id } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary"
       id={id}
       className={`${styles.watchTheFilm} ${className}`}
      onClick={handleShow}>
        Watch the Film
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{titleMovie}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src={src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};


export { WatchTheFilm};

