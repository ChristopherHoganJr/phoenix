import { Routes, Route } from "react-router-dom";
import "./App.css";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Landing_Page from "./pages/Landing_Page";
import PhoenixVision_Page from "./pages/PhoenixVision_Page";
import Register_Page from "./pages/Register_Page";
import Login_Page from "./pages/Login_Page";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Landing_Page />} />
          <Route path='/phoenix_vision' element={<PhoenixVision_Page />} />
          <Route path='/register' element={<Register_Page />} />
          <Route path='/login' element={<Login_Page />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
