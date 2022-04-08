import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Conponents/Home/Home';
import Header from './Conponents/Header/Header';
import LogIn from './Conponents/LogIn/LogIn';

function App() {
  return (
    <div className="App">

      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>

    </div>
  );
}

export default App;
