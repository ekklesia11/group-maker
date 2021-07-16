import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import List from './List';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #fdfdfd;
  }

  body {
    margin: 0 auto;
    padding: 0;
    max-width: 700px;
  }
`;

const Controller = () => {
  const [name, setName] = useState('');
  const [targetNumber, setTargetNumber] = useState(0);

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder=''
          value={name}
          onChange={(e) => setName(() => e.target.value)}
        />
        <button>추가</button>
      </div>
      <div>
        <span>그룹 인원</span>
        <input
          type='text'
          placeholder=''
          value={targetNumber}
          onChange={(e) =>
            typeof e.target.value === 'number' || e.target.value === ''
              ? setTargetNumber(() => e.target.value)
              : null
          }
        />
        <span>명</span>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Title>Group Maker</Title>
      <Controller />
    </Container>
  );
};

export default App;

const Container = styled.div``;

const Title = styled.h2`
  text-align: center;
`;
