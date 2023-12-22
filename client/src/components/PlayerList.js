import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DeletePlayer from './DeletePlayer';
import '../App.css';
import {Link} from 'react-router-dom';

const url = 'http://192.168.1.249:8002';
const PlayerList = props => {
  const [playerList, setPlayerList] = useState ([]);
  //   const {authorList, setAuthorList} = props;
  const navigate = useNavigate ();
  const removeFromDom = playerId => {
    setPlayerList (playerList.filter (player => player._id !== playerId));
  };

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

        <Col>
          <div className="mb-4">
            <a href={`/players/list`}>List</a>
            {" | "}
            <a href={`/players/addplayer`}>Add Player</a>
          </div>
          <Table striped bordered hover size="sm" variant="light">
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Preferred Position</th>
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
                      <p className="text-color">{player.preferred_position}</p>
                    </td>
                    <td>
                      <div className="d-flex justify-content-around">
                        <DeletePlayer
                          playerId={player._id}
                          playerName={player.name}
                          successCallback={() => removeFromDom (player._id)}
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
export default PlayerList;
