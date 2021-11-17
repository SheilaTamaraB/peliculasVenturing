import './App.css';
import UpBar from './core/UpBar';
import Main from './core/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import PeliculasContextProvider from './context/peliculaContext';

function App() {
  return (
    <div >
      <PeliculasContextProvider>
        <Router>
          <UpBar />
          <Main />
        </Router>
      </PeliculasContextProvider>
    </div>
  );
}

export default App;
