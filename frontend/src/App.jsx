import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import TopNav from "./components/topNav/TopNav"
import Layout from "./pages/layout/Layout"
import Footer from "./components/footer/Footer"
import BlogPage from "./pages/blogPage/BlogPage"

function App() {

  return (
    <Router>
      <TopNav />

      <Routes>
        <Route path='/' element={<Layout/> } />
        <Route path='/blog' element={<BlogPage/> } />
      </Routes>
      <Footer />
      <ToastContainer/>
    </Router>
  )
}

export default App
