import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';

const BoardWrite = () => {
  const [issue, setIssue] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [deadLine, setDeadline] = useState('');
  const [manager, setManager] = useState('');

  const onChangeIssueInput = event => {
    localStorage.setItem('data', [{ id: '', title: '', des: '', end: '', status: '', assign: '' }]);
  };

  const onChangeTitleInput = event => {
    setTitle(event.target.value);
  };
  const onChangeContentsInput = event => {
    setContents(event.target.value);
  };
  // const onChangeDeadLineInput = event => {
  //   setDeadline(event.target.value);
  // }; 날짜지정이 가능해야해
  const onChangeManagerInput = event => {
    setManager(event.target.value);
  };

  const onClickSubmit = async () => {
    const errors = {
      Title: '제목을 입력해주세요',
      Contents: '내용을 입력해주세요',
      Manager: '담당자를 입력해주세요',
      DeadLine: '마감일을 지정해주세요',
    };
  };
  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data);
    const isChangedFiles = currentFiles !== defaultFiles;
  };

  return (
    <BoardWriteUI
      // onChangeIssueInput={onChangeIssueInput}
      onChangeTitleInput={onChangeTitleInput}
      onChangeContentsInput={onChangeContentsInput}
      // onChangeDeadLineInput={onChangeDeadLineInput}
      onChangeManagerInput={onChangeManagerInput}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
};

export default BoardWrite;
