import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullMenu from './components/FullMenu/FullMenu';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/fullmenu' element={<Fullmenu/>} /> */}
        <Route path='/fullmenu' element={<FullMenu/>}/>
      </Routes>
    </div>
  );
};
export default App;
