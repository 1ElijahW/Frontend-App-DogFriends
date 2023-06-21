// Modules & Libraries
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";

// Components
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Settings from "./pages/Settings";
import About from "./pages/About";
import { AuthContext } from "./context/AuthContextComponent";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/About" element={<About />} />
        {isLoggedIn && (
          <>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/NewPost" element={<NewPost />} />
            <Route path="/Settings" element={<Settings />} />
           
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

// delete all junk *
// Components folder + pages *
