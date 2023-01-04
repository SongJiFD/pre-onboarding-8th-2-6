import { useEffect, useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';

const BoardWrite = () => {
  const [issue, setIssue] = useState(0);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [deadLine, setDeadline] = useState('');
  const [manager, setManager] = useState('');

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('data')));
    setIssue(Math.max(...JSON.parse(localStorage.getItem('data')).map(data => Number(data.id))));
  }, [setIssue]);

  const onChangeIssueInput = event => {
    localStorage.setItem('data', [
      { id: '', title: '', contents: '', deadLine: '', status: '', manager: '', order: '' },
    ]);
  };

  const onChangeTitle = event => {
    setTitle(event.target.value);
  };
  const onChangeContents = event => {
    setContents(event.target.value);
  };
  const onChangeDeadline = event => {
    setDeadline(event.target.value);
  };

  const onChangeSearchManager = event => {
    //
  };

  const onClickSubmit = () => {
    // const errors = {
    //   Title: '제목을 입력해주세요',
    //   Contents: '내용을 입력해주세요',
    //   Manager: '담당자를 입력해주세요',
    //   DeadLine: '마감일을 지정해주세요',
    // };
    const data = {
      id: issue + 1,
      title,
      contents,
      deadLine,
      status: 'TODO',
      manager,
      order: JSON.parse(localStorage.getItem('data'))
        ? JSON.parse(localStorage.getItem('data')).filter(el => el.status === 'TODO').length + 1
        : 1,
    };
    localStorage.setItem(
      'data',
      JSON.stringify(
        localStorage.getItem('data')
          ? JSON.parse(localStorage.getItem('data')).concat(data)
          : [data]
      )
    );
    setIssue(issue + 1);
  };

  const onClickUpdate = event => {
    const original = JSON.parse(localStorage.getItem('data')).filter(
      el => el.id === event.currentTarget.id
    );
    const newData = {
      id: original.id,
      title,
      contents,
      deadLine,
      status: original.status,
      manager,
      order: original.order,
    };
    localStorage.setItem(
      'data',
      JSON.stringify(
        JSON.parse(localStorage.getItem('data'))
          .filter(el => el.id !== event.currentTarget.id)
          .concat(newData)
      )
    );
  };

  return (
    <BoardWriteUI
      issue={issue}
      // onChangeIssueInput={onChangeIssueInput}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeDeadline={onChangeDeadline}
      onChangeSearchManager={onChangeSearchManager}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
};

export default BoardWrite;
