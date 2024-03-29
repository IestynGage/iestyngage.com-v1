import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import IestynScreen from "../Screens/Iestyn/IestynScreen";
import PortfolioScreen from "../Screens/Portfolio/PortfolioScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="iestyn" />} />
          <Route path="iestyn" element={<IestynScreen />} />
          <Route path="portfolio" element={<PortfolioScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
