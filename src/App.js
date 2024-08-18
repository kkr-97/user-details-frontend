import HomePage from "./components/HomePage";
import ProfileWall from "./components/ProfileWall";
import RegistrationForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile-wall" element={<ProfileWall />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
