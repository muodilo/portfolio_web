import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import TopNav from "./components/topNav/TopNav"
import Layout from "./pages/layout/Layout"
import Footer from "./components/footer/Footer"
import BlogPage from "./pages/blogPage/BlogPage"
import SinglePost from "./pages/singlePost/SinglePost";
import CreatePost from "./pages/createPost/CreatePost";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";

function App() {

  return (
    <Router>
      <TopNav />

      <Routes>
        <Route path='/' element={<Layout/> } />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<SinglePost />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      <Footer />
      <ToastContainer/>
    </Router>
  )
}

export default App
