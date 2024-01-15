import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Column from "./pages/Column";
import Home from "./pages/Home";
import Location from "./pages/Location/Location";
import Login from "./pages/Login";
import MbtiTest from "./pages/MbtiTest";
import MyList from "./pages/MyList";
import LocationDetail from "./pages/Location/LocationDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/myList" element={<MyList />} />
          <Route path="/column" element={<Column />} />
          <Route path="/location" element={<Location />} />
          <Route path="/mbtiTest" element={<MbtiTest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/location1" element={<LocationDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
