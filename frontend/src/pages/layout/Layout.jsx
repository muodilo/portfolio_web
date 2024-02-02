import Header from "../../components/header/Header"
import Services from "../../components/services/Services"
import LatestWork from "../../components/latestWork/LatestWork"
import LatestBlogs from "../../components/latestBlogs/LatestBlogs"

const Layout = () => {
  return (
    <div>
      <Header />
      <Services />
      <LatestWork />
      <LatestBlogs/>
    </div>
  )
}

export default Layout
