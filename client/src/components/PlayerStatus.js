import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
import {useNavigate, useParams, Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ChangeStatus from './ChangeStatus';
import '../App.css';

const url = 'http://192.168.1.249:8002';
const PlayerStatus = props => {
  const {id} = useParams ();
  const [playerList, setPlayerList] = useState ([]);
  //   const {authorList, setAuthorList} = props;
  const navigate = useNavigate ();

  useEffect (() => {
    axios
      .get (url + '/api/player')
      .then (res => {
        setPlayerList (res.data);
      })
      .catch (err => console.log (err));
  }, []);

  return (
    <Container className="mt-4">

      <Row className="border p-4">
        <h1>Player Status - Game {id}</h1>
        <div className="d-flex justify-content-center mb-3">
          <a href={`/status/game/1`}>Game 1</a>
          <span className="mx-3">{"  |  "}</span>
          <span className="mx-3"></span>
          <a href={`/status/game/2`}>Game 2</a>
          <span className="mx-3">{"  |  "}</span>
          <span className="mx-3"></span>
          <a href={`/status/game/3`}>Game 3</a>
        </div>
        <Col>
          <Table striped bordered hover size="sm" variant="light">
            <thead>
              <tr>
                <th>Player Name</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {playerList.map ((player, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <p className="text-color">{player.name}</p>
                    </td>

                    <td>
                      <div className="d-flex justify-content-around">
                        <ChangeStatus
                          gameId={id}
                          playerParams={player}
                          // playerId={player._id}
                        />

                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default PlayerStatus;
