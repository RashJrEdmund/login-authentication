import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Register />} />
          <Route element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
