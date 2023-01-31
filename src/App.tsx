import { Container, Area, Header } from "./App.styles";
import { TaskItem, AddItemArea } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const taskList = useSelector((state: RootState) => state.taskList);

  return (
    <Container>
      <Area>
        <Header>To-Do List</Header>
        <AddItemArea />

        {taskList.taskList.map((item) => (
          <TaskItem key={item.id} taskName={item.taskName} done={item.done} />
        ))}
      </Area>
    </Container>
  );
};

export default App;
