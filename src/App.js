import "./App.css";
import Login from "./pages/Login";
import LoginUP from "./pages/signup";
import PlayingField from "./pages/playingfield";
import { Route, Routes, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<LoginUP />} />
        <Route path="/playing" element={<PlayingField />} />
      </Routes>
    </div>
  );
}
