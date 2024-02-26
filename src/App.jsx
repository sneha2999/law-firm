import './App.css'
import Carousels from './components/Carousels/Carousels';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Team from './components/Team/Team';
import Verticals from './components/Verticals/Verticals';
import WhyUs from './components/WhyUs/WhyUs';
import FAQ from './components/FAQ/FAQ';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
   <Header/>
   <main>
    <Intro/>
    <WhyUs/>
    <Verticals/>
    <Carousels/>
    <Team/>
    <FAQ/>
    <Subscribe/>
   </main>
   <Footer/>
   </>
  )
}

export default App
