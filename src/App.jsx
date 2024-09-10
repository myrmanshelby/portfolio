
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/projects';

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
  </div>
}

export default App
