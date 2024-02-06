import Header from "../../components/header/Header"
import Services from "../../components/services/Services"
import LatestWork from "../../components/latestWork/LatestWork"
import LatestBlogs from "../../components/latestBlogs/LatestBlogs"
import Testimanials from "../../components/testimonials/Testimonials"

const Layout = () => {
  return (
    <div>
      <Header />
      <Services />
      <LatestWork />
      <LatestBlogs />
      <Testimanials />
    </div>
  )
}

export default Layout
