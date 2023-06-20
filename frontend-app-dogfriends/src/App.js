// Modules & Libraries
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Settings from './pages/Settings';
import About from './pages/About';


function App() {
  return (
    <div className='App'>
    <Sidebar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/NewPost" element={<NewPost/>}/>
    <Route path="/Settings" element={<Settings/>}/>
    <Route path="/About" element={<About/>}/>

    </Routes>
    </div>
  );
}

export default App;

// delete all junk *
// Components folder + pages *



