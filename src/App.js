import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full bg-[#FAFAFA]">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
