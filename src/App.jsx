
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <Experience />
    <About />
    <Contact />
  </div>
}

export default App
