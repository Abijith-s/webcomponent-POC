
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Routes>
      <Route  path="/"  element={<Login />} />
      <Route path="signup"  element={<SignUp />} />
      <Route path="home" element={<Home />} />
      </Routes>
      </BrowserRouter>
  </div>
);
}

export default App
