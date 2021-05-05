import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0
  }

  * {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
