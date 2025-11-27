import './App.css'
import { AboutMe } from './components/AboutMe'
import { ContactMe } from './components/Contact'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto  bg-background-light dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark">
      <Header />
      <Main/>
      <Projects/>
      <AboutMe/>
      <ContactMe/>
    </div>
  )
}

export default App
