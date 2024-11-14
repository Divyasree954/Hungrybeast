import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullMenu from './components/FullMenu/FullMenu';
import FilterData from './components/FilterData/FilterData'
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/fullmenu' element={<FullMenu/>}/>
        <Route path='/fullmenu/:categoryName' element={<FilterData/>}/>
      </Routes>
    </div>
  );
};
export default App;
