import { Container, TitleContainer, Title, InfoTextContainer } from "./styles";

interface ITaskItemProps {
  taskName?: string;
  done?: boolean;
  date?: Date;
}

export const TaskItem = ({ taskName, done, date }: ITaskItemProps) => {
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
        onChange={() => {}}
        style={{ height: 25, width: 25 }}
      />
    </Container>
  );
};
