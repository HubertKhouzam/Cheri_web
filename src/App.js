import './App.css';
import Home from './Pages/Home';
import Lookbook from './Pages/Lookbook';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/Lookbook" element = {<Lookbook/>}/>
    </Routes>
  );
}

export default App;
