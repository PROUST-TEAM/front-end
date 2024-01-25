import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Column from "./pages/Column";
import Home from "./pages/Home";
import Location from "./pages/location/Location";
import LocationDetail from "./pages/location/LocationDetail";
import Login from "./pages/Login";
import MbtiTest from "./pages/mbti/MbtiTest";
import MyList from "./pages/perfume/MyList";
import MyPerfumeDetail from "./pages/perfume/PerfumeDetail";
import Search from "./pages/search/Search";
import NonSearch from "./pages/search/NonSearch";
import Character from "./pages/Character";

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
          <Route path="/character" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
