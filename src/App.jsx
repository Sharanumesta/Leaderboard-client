import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AwardPoint from "./components/AwardPoint";
import Leaderboard from "./pages/Leaderboard";
import PointsHistory from "./pages/PointsHistory";
import "../src/App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/claim-point/:name" element={<AwardPoint />} />
            <Route path="/points-history/:name" element={<PointsHistory />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
