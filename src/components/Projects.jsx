import { ProjectCard } from "./ProjectCard";
import { useLang } from "../hooks/useLanguage"
import projectMan from "../assets/productManager.png";
import projectCountry from "../assets/countryGame.png";
import projectUni from "../assets/uniheroes.png";
import projectToDo from "../assets/toDoApp.png";


export function Projects({id}) {
    const { t, lang  } = useLang()
  
  return (
    <main id={id} className="flex flex-1 justify-center py-5 sm:py-10 mt-6.5 scroll-mt-6">
      <div className="layout-content-container flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
          <h2 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              {t(`${lang}.MyProjects`)}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">

          <ProjectCard title={t(`${lang}.Projects.1.Title`)} url={"https://shrimp-inventory-system.netlify.app/"} image={projectMan} description={t(`${lang}.Projects.1.Description`)} techs={['React', 'TypeScript', 'IndexedDB']}/>

          <ProjectCard title={t(`${lang}.Projects.2.Title`)} url={"https://github.com/EliasRivamar"} image={projectUni} description={t(`${lang}.Projects.2.Description`)} techs={['Next.JS', 'TypeScript', 'React', 'Supabase', 'Motion']}/>
          
          <ProjectCard title={t(`${lang}.Projects.3.Title`)} url={"https://github.com/EliasRivamar"} image={projectCountry} description={t(`${lang}.Projects.3.Description`)} techs={['JavaScript', 'React']}/>
          
          <ProjectCard title={t(`${lang}.Projects.4.Title`)} url={"https://weekly-planner-project.netlify.app/"} image={projectToDo} description={t(`${lang}.Projects.4.Description`)} techs={['JavaScript', 'React']}/>
          
          
        </div>
      </div>
    </main>
  )
}
