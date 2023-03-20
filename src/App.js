import "./App.css";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Product from "./Components/Product";
import { Routes, Route, useNavigate ,Navigate } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Dashboard/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { useContext, useState } from "react";
import { UserContext } from "./Components/Context/AuthContext";
import ParticularProduct from "./ParticularProduct";
function App() {
  const [search, setSearch] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(user);
  return (
    <div className="App container-fluid">
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Navigate to="login"/>} ></Route>
        {user && <Route path="/home" element={<Home />}></Route>}
        {!user && <Route path="/login" element={<Login />}></Route>}
        {!user && <Route path="/signup" element={<Signup />}></Route>}
        {user && <Route path="/product/:id" element={<ParticularProduct/>} />}
        {user && <Route path="/shirts" element={<Product search={search} />} />}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
