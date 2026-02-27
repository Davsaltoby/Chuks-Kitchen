import "./App.css";
import { Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Explore from "./pages/EXplore";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Onboarding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
