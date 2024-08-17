import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './ModalBtn.module.css';

function ModalBtn(props) {
  const { src, titleMovie, className, id, variantType } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        variant={variantType}
        id={id}
        className={`${styles.ModalBtn} ${className}`}
        onClick={handleShow}
      >
        Watch the Film
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{titleMovie}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="video-container"
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
            }}
          >
            <iframe
              src={src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export { ModalBtn };
