import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Formations from "./pages/formation/Formations";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Projets from "./pages/projets/Projets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="formations">
            <Route index element={<Formations />} />
            {/* <Route path="excel" />
            <Route path="web" />
            <Route path="mobile" /> */}
          </Route>
          <Route path="services">
            <Route index element={<Services />} />
            {/* <Route path="excel" element={< />} />
            <Route path="web" element={< />} />
            <Route path="mobile" element={< />} /> */}
          </Route>
          <Route path="projets" element={<Projets />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
