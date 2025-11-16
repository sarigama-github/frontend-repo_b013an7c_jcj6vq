import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Security from './components/Security'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
