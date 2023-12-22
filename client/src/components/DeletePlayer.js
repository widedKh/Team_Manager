import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const url = 'http://192.168.1.249:8002';

const DeletePlayer = props => {
  const {playerId, playerName, successCallback} = props;
  const [showModal, setShowModal] = useState(false);

  const deletePlayer = e => {
    axios.delete (url + '/api/player/' + playerId).then (res => {
      successCallback ();
      setShowModal(false);
    });
  };
  return (
    <div>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        Delete
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to remove {playerName} ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deletePlayer}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default DeletePlayer;
