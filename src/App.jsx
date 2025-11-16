import Navbar from './components/Navbar'
import Tagline from './components/Tagline'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pillars from './components/Pillars'
import Stats from './components/Stats'
import Security from './components/Security'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Token from './components/Token'
import Utility from './components/Utility'
import Vision from './components/Vision'
import Messaging from './components/Messaging'
import SocialProof from './components/SocialProof'
import AnimatedRouteVisualizer from './components/AnimatedRouteVisualizer'
import Tokenomics from './components/Tokenomics'
import MicroInteractions from './components/MicroInteractions'
import Waitlist from './components/Waitlist'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Tagline />
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Pillars />
        <Stats />
        <Security />
        <SocialProof />
        <AnimatedRouteVisualizer />
        <Token />
        <Tokenomics />
        <Utility />
        <Vision />
        <Messaging />
        <MicroInteractions />
        <Waitlist />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
