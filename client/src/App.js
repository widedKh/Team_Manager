// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import PlayerStatus from './components/PlayerStatus';
import PlayerList from './components/PlayerList';
import CreatePlayer from './components/CreatePlayer';
import Header from './components/Header';

function App () {
  return (
    <Container>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PlayerList />} path="/players/list" default />
          <Route element={<CreatePlayer />} path="/players/addplayer" />
          <Route element={<PlayerStatus />} path="/status/game/:id" />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
