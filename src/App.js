import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Column from "./pages/Column";
import Home from "./pages/Home";
import Location from "./pages/locations/Location";
import LocationDetail from "./pages/locations/LocationDetail";
import Login from "./pages/Login";
import MbtiMain from "./pages/mbti/MbtiMain";
import MbtiResult from "./pages/mbti/MbtiResult";
import MbtiTest from "./pages/mbti/MbtiTest";
import MyList from "./pages/perfume/MyList";
import MyPerfumeDetail from "./pages/perfume/PerfumeDetail";
import Search from "./pages/search/Search";
import NonSearch from "./pages/search/NonSearch";

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
          <Route path="/mbtiMain" element={<MbtiMain />} />
          <Route path="/mbtiTest" element={<MbtiTest />} />
          <Route path="/mbtiResult" element={<MbtiResult />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/nonSearch" element={<NonSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
