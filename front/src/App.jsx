import { useState } from 'react'
import './App.css'
import Header from './components/helpers/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/layout/Main'
import Footer from './components/helpers/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <Header/>
      <Main/>
      <Footer/>
    </section>
  )
}

export default App
