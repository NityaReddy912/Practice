import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Link,Route,Routes,} from "react-router-dom";
import Home from './pages/Home/HomePage';
import About from './pages/About/Details';
import Whatsnew from './pages/Whatsnew/Whatsnew';
import Delivery from './pages/Delivery/Delivery'
import Categories from './pages/Categories/Categories';
export default function App() {
  <meta name='viewport' content='width=devide-width,initial-scale=1.0'/>
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Whatsnew" element={<Whatsnew />} />
        <Route path='delivery' element={<Delivery/>}/>
        <Route path='categories' element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  );
}
