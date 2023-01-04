import * as s from './BoardList.styles';

const BoardListUI = () => {
  return (
    <s.Wrapper>
      <s.InnerWrapper>
        <s.TodosWrapper>
          <s.Todos>할 일</s.Todos>
        </s.TodosWrapper>

        <s.OnGoingWrapper>
          <s.OnGoing>진행중</s.OnGoing>
        </s.OnGoingWrapper>

        <s.CompleteWrapper>
          <s.Complete>완료</s.Complete>
        </s.CompleteWrapper>
      </s.InnerWrapper>
    </s.Wrapper>
  );
};

export default BoardListUI;
