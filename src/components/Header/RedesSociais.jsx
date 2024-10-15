import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function RedesSociais() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contato
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>Nos siga em nossas redes sociais!
        <hr />
        <a target="blank" href="#">instagram.com/@hqstore</a> <br/>
        <a target="blank" href="#">x.com/hqStore</a> <br/>
        <a target="blank" href="#">youtube.com/HQStore</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
