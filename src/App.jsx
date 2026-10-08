import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Home from "./components/Home";
import Museums from "./components/Museums";
import MuseumDetails from "./components/MuseumDetails";
import Statues from "./components/Statues";
import StatueDetailsPage from "./components/StatueDetailsPage";
import Footer from "./Footer";



function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/museums"
          element={<Museums />}
        />

        <Route
          path="/museums/:id"
          element={<MuseumDetails />}
        />

        <Route
          path="/statues"
          element={<Statues />}
        />
        <Route path="/statues/:id" element={<StatueDetailsPage/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
