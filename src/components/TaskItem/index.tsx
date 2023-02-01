import {
  Container,
  TitleContainer,
  Title,
  InfoTextContainer,
  ButtonsContainer,
} from "./styles";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTask } from "../../features/task/task-slice";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface ITaskItemProps {
  id: string;
  taskName?: string;
  done: boolean;
}

export const TaskItem = ({ id, taskName, done }: ITaskItemProps) => {
  const dispatch = useDispatch();
  const handleCheckBox = (id: string, status: boolean) => {
    dispatch(
      changeStatus({
        id,
        status,
      })
    );
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <Container>
      <InfoTextContainer>
        <TitleContainer>
          <Title>{taskName}</Title>
        </TitleContainer>
      </InfoTextContainer>

      <ButtonsContainer>
        <input
          type="checkbox"
          checked={done}
          onChange={() => handleCheckBox(id, !done)}
          style={{ height: 25, width: 25 }}
        />

        <button
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            marginLeft: 25,
          }}
          onClick={() => handleDeleteTask(id)}
        >
          <IoMdCloseCircleOutline size={34} color={"red"} />
        </button>
      </ButtonsContainer>
    </Container>
  );
};
