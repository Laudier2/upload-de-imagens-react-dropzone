import { Container, Content } from './styles.js';
import GloboStyle from './styles/global'
import Imagens from './components/Upload';
import { AppProvider } from './Context/AppContextState.js';

function App() {

  return (
    <AppProvider>
      <Container>
        <Content>
          <Imagens />
        </Content>
        <GloboStyle />
      </Container>
    </AppProvider>
  );
}

export default App;
