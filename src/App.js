import { useState, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import {  createGlobalStyle } from 'styled-components'
import UserContext from './Context/UserContext';
import Card from './components/Card';

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0
  }

  * {
    box-sizing: border-box;
  }
`


function App() {
  const [checked, setChecked ] = useState(false)
  const [user, setUser ] = useState({})

  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
    .then(res => res.json())
    .then(data => setUser(data.data))
  }, [])


  const estadoGlobal = {
    estaLogueado: checked,
    guardarEnElContexto: (bool) => setChecked(bool),
   }

   console.log(user)


  return (
    <div className="App">
    <UserContext.Provider value={{
     ...user,
     ...estadoGlobal,
     age: 22
     // destructuring para crear un nuevo objeto con todas las propiedades de los demas
   }}>
      <GlobalStyle />
      <Nav />
      <Main />
      <Footer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
