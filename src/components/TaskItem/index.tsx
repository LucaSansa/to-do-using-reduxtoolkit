import { Container, TitleContainer, Title, InfoTextContainer } from "./styles";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../features/task/task-slice";

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

  return (
    <Container>
      <InfoTextContainer>
        <TitleContainer>
          <Title>{taskName}</Title>
        </TitleContainer>
      </InfoTextContainer>

      <input
        type="checkbox"
        checked={done}
        onChange={() => handleCheckBox(id, !done)}
        style={{ height: 25, width: 25 }}
      />
    </Container>
  );
};
