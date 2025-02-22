import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/First_Page/LandingPage';
import LoginPage from "./Components/Second_Page/LoginPage";
import SignupPage from './Components/Second_Page/SignupPage';
import Dashboard from './Components/Main_Page/Dashboard';
import Completed from './Components/Main_Page/Completed';
import To_Do from './Components/Main_Page/To_Do';
import Team from './Components/Main_Page/Team';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} exact/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/todo" element={<To_Do />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default App;
