import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blog from './Pages/Blog/Blog.jsx';
import SingleBlog from './Pages/SingleBlog/SingleBlog.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </>
  );
}

export default App;
