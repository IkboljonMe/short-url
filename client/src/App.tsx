import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UrlShortener from "./components/UrlShortener";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/short" element={<UrlShortener />} />
      </Routes>
    </Router>
  );
}

export default App;
