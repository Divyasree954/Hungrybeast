import About from "../components/About/About"
import NavHead from "../components/NavHead/NavHead"
import Menu from '../components/Menu/Menu'
import Reviews from '../components/Reviews/Reviews'
import WorkerFooter from '../components/WorkerFooter/WorkerFooter'
const Home = () => {
  return (
    <div>
      <NavHead/>
      <About/>
      <Menu/>
      <Reviews/>
      <WorkerFooter/>
    </div>
  )
}

export default Home