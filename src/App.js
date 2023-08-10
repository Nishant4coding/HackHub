import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Components/Main';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter  basename={window.location.pathname || ''}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
