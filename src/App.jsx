import './App.css'
import { AboutMe } from './components/AboutMe'
import { ButtonMain } from './components/ButtonsMain'
import { ContactMe } from './components/Contact'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto  bg-background-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark scroll-smooth">
      <Header />
      <ButtonMain id="home"/>
      <Main/>
      <Projects id="projects"/>
      <AboutMe id="about"/>
      <ContactMe id="contact"/>
    </div>
  )
}

export default App
