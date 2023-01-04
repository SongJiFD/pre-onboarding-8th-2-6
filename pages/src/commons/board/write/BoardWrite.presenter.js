import * as s from './BoardWrite.styles';

const BoardWriteUI = props => {
  return (
    <>
      <s.Container>
        <s.Wrapper>
          <s.TitleWrapper>{props.isEdit ? '게시글 수정' : '게시글 등록'}</s.TitleWrapper>
          <s.WriterWrapper>
            <s.InputWrapper>
              <s.Label>담당자</s.Label>
              <s.Manager
                id="manager"
                type="text"
                placeholder="담당자를 입력해주세요"
                onChange={props.onChangeSearchManager}
                // defaultValue={props.data?.}
              />
            </s.InputWrapper>
          </s.WriterWrapper>
          <s.IssueNumberWrapepr>
            <s.Label>이슈 번호</s.Label>
            <s.Number
              id="IssueNumber"
              type="number"
              defaultValue={String(props.issue + 1)}
              disabled
            />
          </s.IssueNumberWrapepr>
          <s.InputWrapper>
            <s.Label>제목</s.Label>
            <s.Title
              id="title"
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={props.onChangeTitle}
            />
          </s.InputWrapper>
          <s.InputWrapper>
            <s.Label>상세 내용</s.Label>
            <s.Contents
              id="contents"
              type="text"
              placeholder="상세 내용을 입력해주세요"
              onChange={props.onChangeContents}
            />
          </s.InputWrapper>
          <s.InputWrapper>
            <s.Label>마감일</s.Label>
            <s.DeadLine id="DeadLine" type="datetime-local" onChange={props.onChangeDeadline} />
          </s.InputWrapper>
          <s.ButtonWrapper>
            <s.SubmitButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
              isActive={props.isEdit ? true : props.isActive}
            >
              {props.isEdit ? '수정' : '저장'}
            </s.SubmitButton>
          </s.ButtonWrapper>
        </s.Wrapper>
      </s.Container>
    </>
  );
};

export default BoardWriteUI;
