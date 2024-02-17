import './App.css';
import {Route,Routes} from "react-router-dom";
import Signin from './components/signin';
import Home from './components/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default App;
