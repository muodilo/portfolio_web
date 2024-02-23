import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import TopNav from "./components/topNav/TopNav"
import Layout from "./pages/layout/Layout"
import Footer from "./components/footer/Footer"
import BlogPage from "./pages/blogPage/BlogPage"
import SinglePost from "./pages/singlePost/SinglePost";

function App() {

  return (
    <Router>
      <TopNav />

      <Routes>
        <Route path='/' element={<Layout/> } />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<SinglePost/>}/>
      </Routes>
      <Footer />
      <ToastContainer/>
    </Router>
  )
}

export default App
