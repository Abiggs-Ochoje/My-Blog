import './index.css';
import Navbar from './BlogApp/Navbar';
import Home from './BlogApp/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './BlogApp/Create';
import BlogDetails from './BlogApp/BlogDetails';
import NotFound from './BlogApp/NotFound';

 
function App() {
 //The Navbar component is not in the switch/route because it will be on all pages
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className='content'>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Create' element={<Create/>}/>
            <Route path='/blogs/:id' element={<BlogDetails/>}/>
            <Route path="*" element={ <NotFound />  } /> 
          </Routes>
        {/* path="*"" must be used last, do not use it at the top of the list */}
        
      </div>
    </div>
    </BrowserRouter>
  );

}


export default App;
