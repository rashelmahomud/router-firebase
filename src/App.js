import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Conponents/Home/Home';
import Header from './Conponents/Header/Header';
import LogIn from './Conponents/LogIn/LogIn';
import Registerd from './Conponents/Registerd/Registerd';
import Shops from './Conponents/Shops/Shops';
import Products from './Conponents/Products/Products';

function App() {
  return (
    <div className="App">

      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shops' element={<Shops></Shops>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/registerd' element={<Registerd></Registerd>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>

    </div>
  );
}

export default App;
