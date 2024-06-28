//import 
import './App.css';
import { MovieList } from './components/MovieList';
import AddMovie from './components/AddMovie';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditMovie from './components/EditMovie';
import { MovieDetails } from './components/MovieDetails';
import Error404 from './components/Error404';



function App() {

  
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<MovieList/>}/>
        <Route path='/addmovie' element={<AddMovie/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/editmovie/:id' element={<EditMovie/>}/>
        <Route path='*' element={<Error404/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
