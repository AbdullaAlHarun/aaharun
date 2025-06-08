import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Service from "./components/Services";
import BookScape from "./pages/BookScape"; 
import ScienceMuseum from "./pages/ScienceMuseum";
import AntiochiaGrill from "./pages/AntiochiaGrill";


function App() {
  return (
    <Router>
      <Routes>
        {/* Full layout with scroll sections */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Header />
              <About />
              <Projects />
              <Service />
              <Contact />
            </MainLayout>
          }
        />
        {/* Single project detail page */}
        
        <Route path="/project/bookscape" 
          element={
            <MainLayout>
              <BookScape />
            </MainLayout>} 
        />
        <Route path="/project/sciencemuseum" 
          element={
            <MainLayout>
              <ScienceMuseum />
            </MainLayout>} 
        />
        <Route path="/project/antiochiagrill" 
          element={
            <MainLayout>
              <AntiochiaGrill />
            </MainLayout>} 
        />
      </Routes>
    </Router>
  );
}

export default App;
