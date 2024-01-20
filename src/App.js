import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Column from "./pages/Column";
import Home from "./pages/Home";
import Location from "./pages/Location/Location";
import LocationDetail from "./pages/Location/LocationDetail";
import Login from "./pages/Login";
import MbtiTest from "./pages/MbtiTest";
import MyList from "./pages/perfume/MyList";
import MyPerfumeDetail from "./pages/perfume/PerfumeDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/myList" element={<MyList />} />
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
