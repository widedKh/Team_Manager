import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const url = 'http://192.168.1.249:8002';

const ChangeStatus = props => {
  const {gameId, playerParams} = props;
  
  const [variant1, setVariant1] = useState ('');
  const [variant2, setVariant2] = useState ('');
  const [variant3, setVariant3] = useState ('');

  const status1="Playing";
  const status2="Not Playing";
  const status3="Undecided";

  useEffect (() => {
    if (gameId === "1") {
        console.log("player params",playerParams.game_1_status);
        if (playerParams.game_1_status === status1) {
            setVariant1("success");
        } else if (playerParams.game_1_status === status2) {
            setVariant2("danger");
        } else {if (playerParams.game_1_status === status3) {setVariant3("warning");}}
    };
    if (gameId === "2") {
        console.log("player params",playerParams.game_1_status);
        if (playerParams.game_2_status === status1) {
            setVariant1("success");
        } else if (playerParams.game_2_status === status2) {
            setVariant2("danger");
        } else {if (playerParams.game_2_status === status3) {setVariant3("warning");}}
    };
    if (gameId === "3") {
        console.log("player params",playerParams.game_1_status);
        if (playerParams.game_3_status === status1) {
            setVariant1("success");
        } else if (playerParams.game_3_status === status2) {
            setVariant2("danger");
        } else {if (playerParams.game_3_status === status3) {setVariant3("warning");}}
    };
  }, []);
  
  const changeStatus = status => {
    if (gameId === "1") {
        playerParams.game_1_status=status;
    } else if (gameId === "2") {
        playerParams.game_2_status=status;
    } else {playerParams.game_3_status=status;}

    axios
      .put (url + `/api/player/${playerParams._id}`, playerParams)
      .then (res => {
        console.log ('res',res.data);
      })
      .catch (err => { console.log(err); });  
    
  };
  return (
    <div>
      <Button
       variant={variant1}
       onClick={() => {
        setVariant1 ('success');
        setVariant2 ('');
        setVariant3 ('');
        changeStatus(status1);
        }}>
        Playing
      </Button>
      <Button
       variant={variant2}
       onClick={() => {
       setVariant2 ('danger');
       setVariant3 ('');
       setVariant1 ('');
       changeStatus(status2);
       }}>
        Not Playing
      </Button>
      <Button
       variant={variant3}
       onClick={() => {
       setVariant3 ('warning');
       setVariant2 ('');
       setVariant1 ('');
       changeStatus(status3);
       }}>
        Undecided
      </Button>
    </div>
  );
};
export default ChangeStatus;
