import { Container, Content } from './styles.js';
import GloboStyle from './styles/global'
import Imagens from './components/Upload';
import { AppProvider } from './Context/AppContextState.js';
import './App.scss'
import { Button, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <AppProvider>
      <Container>
        <Content>
          <Imagens />
          <Button>
            Enviar
          </Button>
        </Content>
        <GloboStyle />
      </Container>
      <Row className="mx-0 mt-2">
        <Button as={Col} variant="primary">Button #1</Button>
        <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        <Button as={Col} variant="success">Button #3</Button>
      </Row>
    </AppProvider>
  );
}

export default App;
