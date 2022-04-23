// import { Button } from "bootstrap";
import React, { useState } from "react";
import {
  ListGroupItem,
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  // console.log('todo check', todo)

  function addClick() {
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  console.log("todo List check", todoList, todo);

  function editTodoList(e) {
    if (e.key == "Enter") {
      addClick();
    }
    return;
  }

  function btnClick(e){
    addClick();
  }

 

  function deleteClick(key) {
    setTodoList(todoList.filter((one, delKey) => delKey !== key));
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Todo List</h2>
          <InputGroup>
            <FormControl
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              onKeyDown={(e) => {
                editTodoList(e);
              }}
            />
            <InputGroup.Text>
              <Button
                onClick={(e) => {
                  btnClick(e)
                }}
              >
                추가
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          {todoList.length && Array.isArray(todoList) > 0
            ? todoList.map((one, key) => {
                return (
                  <ListGroupItem
                    onClick={() => {
                      deleteClick(key);
                    }}
                    action
                    key={key}
                  >
                    {one}
                  </ListGroupItem>
                );
              })
            : "목록없음"}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
