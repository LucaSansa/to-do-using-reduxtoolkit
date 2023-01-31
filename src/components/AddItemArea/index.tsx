import React from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { increment } from "../../features/task/task-slice";

import { IoIosAddCircleOutline } from "react-icons/io";

export const AddItemArea = () => {
  const dispatch = useDispatch();

  const [taskName, setTaskName] = React.useState("");

  const isEmptyOrSpaces = (str: string) => {
    return str === null || str.match(/^ *$/) !== null;
  };

  const handleAddClick = (value: string) => {
    dispatch(
      increment({
        id: taskName + String(Math.random()),
        taskName: taskName.trim(),
        done: false,
      })
    );
    setTaskName("");
  };

  console.log(taskName);
  return (
    <Container>
      <input
        type="text"
        value={taskName}
        placeholder="Add a new task!"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button
        style={{ border: "none", background: "transparent", cursor: "pointer" }}
        disabled={isEmptyOrSpaces(taskName)}
        onClick={() => handleAddClick(taskName)}
      >
        <IoIosAddCircleOutline
          size={34}
          color={isEmptyOrSpaces(taskName) ? "grey" : "white"}
        />
      </button>
    </Container>
  );
};
