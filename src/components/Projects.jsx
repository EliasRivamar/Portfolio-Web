import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <main className="flex flex-1 justify-center py-5 sm:py-10 mt-6.5">
      <div className="layout-content-container flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
          <h2 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Mis Proyectos
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">

          <ProjectCard title={'Sistema de Gestión de Inventario'} description={'Sistema web para administar productos, precios y existencias. Con analíticas de ventas.'} techs={['React', 'TypeScript', 'IndexedDB']}/>

          <ProjectCard title={'Uniheroes'} description={'Algo'} techs={['Next.JS', 'TypeScript', 'React', 'Supabase', 'Motion']}/>
          
          <ProjectCard title={'Country Quiz'} description={'Juego de adivinanzas de países y ciudades'} techs={['JavaScript', 'React']}/>
          
          <ProjectCard title={'To-Do App'} description={'Algo'} techs={['JavaScript', 'React']}/>
          
          <ProjectCard title={'Aplicación de Clima'} description={'Consulta del pronóstico del tiempo con una UI limpia'} techs={['React', 'Javascript']}/>
          
        </div>
      </div>
    </main>
  )
}
