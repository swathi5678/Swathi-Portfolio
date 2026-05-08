import './index.css';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
