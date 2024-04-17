import './App.css';
import {Link, Route,Routes,useLocation} from "react-router-dom";
import Home from './components/Home';
import NewsDetails from './components/NewsDetails';
import Error from "./components/Error";
import { IoMdArrowRoundBack } from "react-icons/io";
import Signin from './components/Signinn';


function App() {
  const location = useLocation();

  return (
    <>
    {(location.pathname !== "/" && location.pathname !== "/signin") && (
        <Link to="/">
          <div className='fixed justify-center flex items-center bg-zinc-300 top-20 left-0 w-10 h-7'>
            <IoMdArrowRoundBack />
          </div>
        </Link>
      )}
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
