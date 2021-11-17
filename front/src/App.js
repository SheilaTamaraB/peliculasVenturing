import './App.css';
import UpBar from './core/UpBar';
import Main from './core/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import PeliculasContextProvder from './comtext/peliculaContext';

function App() {
  return (
    <div >
      <PeliculasContextProvder>
        <Router>
          <UpBar />
          <Main />
        </Router>
      </PeliculasContextProvder>
    </div>
  );
}

export default App;
