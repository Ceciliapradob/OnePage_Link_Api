import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Main/Hero'
import ShorterLinks from './components/Main/ShorterLinks'
import Stats from './components/Main/Stats'
import GetStarted from './components/Main/GetStarted'


function App() {

  return (
    <>
    <Header />

    <main id="main">
      <Hero />
      <ShorterLinks />
      <Stats />
      <GetStarted />
    </main>

    <Footer />
    </>
  )
}

export default App
