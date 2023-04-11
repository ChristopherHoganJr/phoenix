import { Routes, Route } from "react-router-dom";
import "./App.css";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Landing_Page from "./pages/Landing_Page";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Landing_Page />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
