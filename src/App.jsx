import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto  bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
      <Header />
      <Main/>
      <Projects/>
    </div>
  )
}

export default App
