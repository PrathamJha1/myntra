import './App.css';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Dashboard/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/signup"
          element={<Signup />}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
