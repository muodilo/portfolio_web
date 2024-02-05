import Header from "../../components/header/Header"
import Services from "../../components/services/Services"
import LatestWork from "../../components/latestWork/LatestWork"
import LatestBlogs from "../../components/latestBlogs/LatestBlogs"
import Testimanials from "../../components/testimonials/Testimonials"
import Footer from "../../components/footer/Footer"

const Layout = () => {
  return (
    <div>
      <Header />
      <Services />
      <LatestWork />
      <LatestBlogs />
      <Testimanials />
      <Footer/>
    </div>
  )
}

export default Layout
