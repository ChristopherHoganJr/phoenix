import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// layouts
import MainLayout from "./layouts/MainLayout";
import LoggedInLayout from "./layouts/LoggedInLayout";

// pages
import Landing_Page from "./pages/Landing_Page";
import PhoenixVision_Page from "./pages/PhoenixVision_Page";
import Register_Page from "./pages/Register_Page";
import Login_Page from "./pages/Login_Page";

// authenticated pages
import PhoenixTalk_Page from "./pages/PhoenixTalk_Page";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Landing_Page />} />
          <Route path='/phoenix_vision' element={<PhoenixVision_Page />} />
          <Route path='/register' element={<Register_Page />} />
          <Route path='/login' element={<Login_Page />} />
          <Route path='/phoenix_talk' element={<PhoenixTalk_Page />} />
        </Route>
        <Route path='/phoenix' element={<LoggedInLayout />}>
          <Route index element={<PhoenixTalk_Page />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
