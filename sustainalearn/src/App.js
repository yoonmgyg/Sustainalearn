import './App.css';
import NavBar from "./NavBar";
import Homepage from "./pages/Homepage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="Sustainalearn">
            <NavBar/>
            <h1>Sustainalearn</h1>
            <div id="page-body">
                <Routes>
                    <Route path={"/"} element={<Homepage/>} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;