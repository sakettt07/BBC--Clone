import './App.css';
import {Route,Routes} from "react-router-dom";
import Signin from './components/signin';
import Home from './components/Home';
import NewsDetails from './components/NewsDetails';

function App() {

  return (
    <>
    <Routes>
      <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<NewsDetails />} />
    </Routes>
    </>
  )
}

export default App;
