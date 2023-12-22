import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../App.css';

const PlayerForm = props => {
  //keep track of what is being typed via useState hook
  const {
    errors,
    setErrors,
    actionType,
    onSubmitProp,
    initialName,
    initialPreferredPosition,
  } = props;
  const [name, setName] = useState (initialName);
  const [preferred_position, setPreferredPosition] = useState (
    initialPreferredPosition
  );

  const navigate = useNavigate ();
  //handler when the form is submitted
  const onSubmitHandler = e => {
    //prevent default behavior of the submit
    e.preventDefault ();
    onSubmitProp ({name, preferred_position});
  };

  return (
    <Container>
      <Row>
        {actionType == 'create'
          ? <h4 className="text-color">Add a new Author</h4>
          : <h4 className="text-color">Edit this Author</h4>}
      </Row>
      <Row>
        <Col sm={4} className="border p-2">
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3">

              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={e => {
                  setName (e.target.value);
                  setErrors ([]);
                }}
              />

            </Form.Group>
            {errors.name
              ? <p className="text-danger">{errors.name.message}</p>
              : null}
            <Form.Group className="mb-3">

              <Form.Label>Preferred Position</Form.Label>
              <Form.Control
                type="text"
                value={preferred_position}
                onChange={e => {
                    setPreferredPosition (e.target.value);
                  
                }}
              />

            </Form.Group>
            
            <div className="d-flex justify-content-end">
              
              {name.length < 3?
               actionType == 'create'?
                   <Button className="wide-button" variant="success" type="submit" disabled={true}>ADD</Button>
                   :<Button className="wide-button" variant="success" type="submit" disabled={true}>Update</Button>
                :actionType == 'create'?
                <Button className="wide-button" variant="success" type="submit" >ADD</Button>
                :<Button className="wide-button" variant="success" type="submit" >Update</Button>}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default PlayerForm;
