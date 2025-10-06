import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProject from "./pages/AddProject";
import HomePage from "./pages/HomePage";
import AllProject from "./pages/AllProject";


function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/all-project" element={<AddProject />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

