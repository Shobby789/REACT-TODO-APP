import { useState } from "react";
import { Button, Input, InputGroup, Container } from "reactstrap";
import "./App.css";
import { Trash3Fill } from "react-bootstrap-icons";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const addTaskHandler = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleDelete = (id) => {
    const newList = taskList.filter((item, index) => {
      return index !== id;
    });
    // console.log(id);
    setTaskList(newList);
  };

  return (
    <>
      <Container className="text-center">
        <h3 className="mt-4">Shoaib's Todo App</h3>
        <Container
          className="mt-3 mx-auto border border-warning p-5 w-50"
          style={{ minHeight: "80vh" }}
        >
          <InputGroup>
            <Input
              className="py-2"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add tasks..."
            />
            <Button color="primary" className="" onClick={addTaskHandler}>
              Add Task
            </Button>
          </InputGroup>
          <Container className="mt-5">
            {taskList.map((item, id) => {
              return (
                <Container
                  key={id}
                  className="border border-warning w-100 mx-auto mt-4 py-2 px-3 d-flex justify-content-between align-items-center rounded"
                >
                  <h3>
                    <Input
                      className="mx-2"
                      addon
                      // aria-label="Checkbox for following text input"
                      type="checkbox"
                    />
                    {item}
                  </h3>
                  <Trash3Fill
                    size={20}
                    onClick={() => handleDelete(id)}
                    role="button"
                  />
                </Container>
              );
            })}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default App;
