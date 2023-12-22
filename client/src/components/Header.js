import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import DeletePlayer from './DeletePlayer';
import '../App.css';
import {Link} from 'react-router-dom';

const url = 'http://192.168.1.249:8002';

const Header = props => {
  return (
    <Container className="mt-4">
      
        <a href={`/players/list`}>Manage Players</a>
        {" | "}
        <a href={`/status/game/1`}>Manage Player Status</a>
     
    </Container>
  );
};
export default Header;
