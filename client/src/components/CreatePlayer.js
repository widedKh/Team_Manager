import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate, Link} from 'react-router-dom';
import PlayerForm from '../components/PlayerForm';


const url = 'http://192.168.1.249:8002';

const CreatePlayer = props => {
  const [playerList, setPlayerList] = useState ([]);
  const [errors, setErrors] = useState ([]);
  
  const navigate = useNavigate ();

  useEffect (() => {
    axios
      .get (url + '/api/player')
      .then (res => {
        setPlayerList (res.data);
      })
      .catch (err => console.log (err));
  }, []);

  const createPlayer = playerParam => {
    axios
      .post (url + '/api/player', playerParam)
      .then (res => {
        setPlayerList ([...playerList, res.data]);
        navigate ('/players/list');
      })
      
      .catch (err => {
        if (err.response.status === 401) navigate ('/');
        else {
          setErrors (err.response.data.errors);
        }
      });
  };

  return (
    <Container className="mt-2">
      
      <Link className="mb-3" to={`/players/list`}>List</Link>
      <Row className="mt-3">
        <Col>
          <PlayerForm
            errors={errors}
            setErrors={setErrors}
            actionType={'create'}
            onSubmitProp={createPlayer}
            initialName=""
            initialPreferredPosition=""
          />

        </Col>

      </Row>
    </Container>
  );
};
export default CreatePlayer;
