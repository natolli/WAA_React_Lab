import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { PostDetail } from "./components/PostDetail";
import { AddPost } from "./components/AddPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Router>
      <Dashboard />
    </div>
  );
}

export default App;
