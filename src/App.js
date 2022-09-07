import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowSummary from "./pages/ShowSummary";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<ShowSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
