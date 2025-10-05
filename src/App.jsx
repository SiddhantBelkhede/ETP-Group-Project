import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </Router>
  );
}

export default App;

