import './App.css'
import { Route,Routes, useLocation, useNavigate } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Favorites from './components/Favorites/Favorites';
import SearchBar from './components/SearchBar/SearchBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';

const email = 'user@gmail.com';
const password = '12345';

function App() {

  const {pathname} = useLocation();
  
  const [access,setAccess] = useState(false);

  const navigate = useNavigate();

  const login = (userData) => {

    if(userData.email===email && userData.password===password){
      setAccess(true);
      navigate('/home')
    }else{
      alert('Credenciales incorrectas')
    }

  }

  useEffect(()=>{
    !access && navigate('/');
  },[access])

  return (
    <div>
      {

        pathname !=='/'
        &&(<div className='navBar' >
        <NavBar/>
        {
          (pathname==='/home') && (<SearchBar/>) 
        }
      </div>)
      
      }
      
      <Routes>
        <Route path='/' element={<Form login={login} /> } />
        <Route path='/home' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
