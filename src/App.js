import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Pages/HomePage/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
