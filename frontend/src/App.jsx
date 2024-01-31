import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import TopNav from "./components/topNav/TopNav"
import Layout from "./pages/layout/Layout"

function App() {

  return (
    <Router>
      <TopNav />

      <Routes>
        <Route path='/' element={<Layout/> } />
      </Routes>

    </Router>
  )
}

export default App
