import styled, { createGlobalStyle } from 'styled-components';
import List from './List';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    max-width: 700px;
  }
`

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      hello world!
      <List />
    </Container>
  );
}

export default App;

const Container = styled.div`
  border: 1px solid red;
`;