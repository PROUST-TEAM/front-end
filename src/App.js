import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Column from "./pages/Column";
import Home from "./pages/Home";
import Location from "./pages/locations/Location";
import LocationDetail from "./pages/locations/LocationDetail";
import Login from "./pages/Login";
import MbtiTest from "./pages/mbti/MbtiTest";
import MyList from "./pages/perfumes/MyList";
import MyPerfumeDetail from "./pages/perfumes/PerfumeDetail";
import Search from "./pages/Search/Search";
import NonSearch from "./pages/Search/NonSearch";

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
          <Route path="/search" element={<Search />} />
          <Route path="/nonSearch" element={<NonSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
