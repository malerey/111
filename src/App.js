import {useState} from 'react'
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import UserContext from './Context/UserContext';
const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0
  }

  * {
    box-sizing: border-box;
  }
`



function App() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="App">
    <UserContext.Provider value={{
      esUsuarioPremium: checked
     }}>
      <GlobalStyle />
      <Nav />
      <Main />
      <div>
        Volverme premium 
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
      </div>
      <Footer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
