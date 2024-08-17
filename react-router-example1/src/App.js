import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import User from "./User";
import Profile from "./Profile";
import Settings from "./Settings";
function App() {
  const navigate = useNavigate();
  const userId = 20;
  const handleLogin = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      <nav>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/about" >
          About
        </NavLink>
        <NavLink to={`/user/${userId}`} >
          User
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
