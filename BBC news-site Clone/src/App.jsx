import './App.css';
import {Route,Routes} from "react-router-dom";
import Signin from './components/signin';
import Home from './components/Home';
import NewsDetails from './components/NewsDetails';
import Error from "./components/Error";


function App() {

  return (
    <>
    <Routes>
      <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<NewsDetails />} />
      <Route path="*" element={<Error />} />

    </Routes>
    </>
  )
}

export default App;
