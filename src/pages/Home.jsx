import About from "../components/About/About"
import NavHead from "../components/NavHead/NavHead"
import Menu from '../components/Menu/Menu'
import Reviews from '../components/Reviews/Reviews'
import WorkerFooter from '../components/WorkerFooter/WorkerFooter'
import FullMenu from '../components/FullMenu/FullMenu'
const Home = () => {
  return (
    <div>
      <NavHead/>
      <About/>
      <Menu/>
      <FullMenu/>
      <Reviews/>
      <WorkerFooter/>
      {/* this is home */}
    </div>
  )
}

export default Home