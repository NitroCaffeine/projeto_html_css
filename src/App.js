
import './App.css';
import { Header } from './components/Header/Header'

import { Container } from './styles/global'

function App() {
  return (
    <Container>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col col-2'>
            <Header>

            </Header>
          </div>
          <div className='col col-7'>
            sjhdjddh
          </div>

          <div className='col col-3'>
            coluna 3
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
