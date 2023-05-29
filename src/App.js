import "./App.css";
import Header from "./Layout/header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./Layout/Footer";
import AboutPage from "./pages/aboutPage";
import ProjectsPage from "./pages/projectsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
