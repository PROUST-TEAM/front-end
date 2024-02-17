import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Column from "./pages/Column";
import Home from "./pages/Home";
import Location from "./pages/locations/Location";
import LocationDetail1 from "./pages/locations/LocationDetail1";
import LocationDetail2 from "./pages/locations/LocationDetail2";
import LocationDetail3 from "./pages/locations/LocationDetail3";
import LocationDetail4 from "./pages/locations/LocationDetail4";
import Login from "./pages/Login";
import Search from "./pages/search/Search";
import NonSearch from "./pages/search/NonSearch";
import MbtiMain from "./pages/mbti/MbtiMain";
import MbtiResult from "./pages/mbti/MbtiResult";
import MbtiTest from "./pages/mbti/MbtiTest";
import Mbti from "./pages/mbti/Mbti";
import MyList from "./pages/perfume/MyList";
import MyPerfumeDetail from "./pages/perfume/PerfumeDetail";
import FindPassword from "./pages/FindPassword";
import FindPasswordSecond from "./pages/FindPasswordSecond";
import Join from "./pages/Join";
import JoinSecond from "./pages/JoinSecond";
import MyPage from "./pages/MyPage";
import MyPageModify from "./pages/MyPageModify";
import Character from "./pages/Character";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/myList" element={<MyList />} />
          <Route path="/detail" element={<MyPerfumeDetail />} />
          <Route path="/column" element={<Column />} />
          <Route path="/location" element={<Location />} />
          <Route path="/locationDetail1" element={<LocationDetail1 />} />
          <Route path="/locationDetail2" element={<LocationDetail2 />} />
          <Route path="/locationDetail3" element={<LocationDetail3 />} />
          <Route path="/locationDetail4" element={<LocationDetail4 />} />
          <Route path="/mbtiMain" element={<MbtiMain />} />
          <Route path="/mbtiTest" element={<MbtiTest />} />
          <Route path="/mbtiResult" element={<MbtiResult />} />
          <Route path="/mbti" element={<Mbti />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/nonSearch" element={<NonSearch />} />
          <Route path="/find-pw" element={<FindPassword />} />
          <Route path="/find-pw-second" element={<FindPasswordSecond />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join-second" element={<JoinSecond />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/myPageModify" element={<MyPageModify />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
