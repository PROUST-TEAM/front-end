import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Column from "./pages/Column";
import Home from "./pages/Home";
import Location from "./pages/location/Location";
import LocationDetail from "./pages/location/LocationDetail";
import Login from "./pages/Login";
import MbtiTest from "./pages/MbtiTest";
import MyPerfumeList from "./pages/perfume/PerfumeList";
import MyPerfumeDetail from "./pages/perfume/PerfumeDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/myList" element={<MyPerfumeList />} />
          <Route path="/detail" element={<MyPerfumeDetail />} />
          <Route path="/column" element={<Column />} />
          <Route path="/location" element={<Location />} />
          <Route path="/locationDetail" element={<LocationDetail />} />
          <Route path="/mbtiTest" element={<MbtiTest />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
