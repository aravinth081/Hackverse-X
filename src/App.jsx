import { useMouseGlow } from './hooks/useMouseGlow'
import ThreeSpaceBackground from './components/ThreeSpaceBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Tracks from './components/Tracks'
import HowItWorks from './components/HowItWorks'
import Prizes from './components/Prizes'
import Sponsor from './components/Sponsor'
import Judges from './components/Judges'
import JudgingCriteria from './components/JudgingCriteria'
import Submission from './components/Submission'
import Community from './components/Community'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useMouseGlow()

  return (
    <>
      <div className="mouse-glow" aria-hidden="true" />
      <ThreeSpaceBackground />
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-blob ambient-blob--blue" />
        <div className="ambient-blob ambient-blob--cyan" />
        <div className="ambient-blob ambient-blob--purple" />
        <div className="ambient-grid" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <EventDetails />
        <Tracks />
        <HowItWorks />
        <Prizes />
        <Sponsor />
        <Judges />
        <JudgingCriteria />
        <Submission />
        <Community />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>

  )
}
