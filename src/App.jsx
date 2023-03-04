import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [credentials, setCredentials] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: {
      pass: '',
      confirm: '',
    },
  });

  console.log('this credentials in app', credentials);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Register setCredentials={setCredentials} />} />
          <Route path="/login" element={<Login credentials={credentials} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
