import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import TopNav from "./components/topNav/TopNav"
import Layout from "./pages/layout/Layout"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <Router>
      <TopNav />

      <Routes>
        <Route path='/' element={<Layout/> } />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
