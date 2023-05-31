import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UrlShortener from "./components/UrlShortener";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Redirect from "./Redirect";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
function App() {
  const isAuthenticated = Boolean(useSelector((state: RootState) => state.user.token));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:urlId" element={<Redirect />}></Route>
        <Route path="/short" element={<UrlShortener />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={!!isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
