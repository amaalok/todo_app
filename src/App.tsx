import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
