export function AboutMe() {
  return (
    <main className="flex flex-1 justify-center py-5 sm:py-10 mt-6.5">
      <div className="layout-content-container flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
          <h2 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Sobre Mi
          </h2>
        </div>
        <div className="flex gap-4">
          <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg font-normal leading-normal max-w-2xl mt-8">
            <span className="text-text-primary-light dark:text-text-primary-dark text-wrap">
              Soy programador universitario, especializado en &nbsp;
              <span className="text-orange-500">JavaScript,&nbsp;</span>
              <span className="text-blue-500">
                Phyton, TypeScript, React,&nbsp;
              </span>
              entre otros. Tengo como objetivo desarrollar páginas web de alto
              impacto, originales e innovadoras
              <span className="text-primary opacity-70">
                . En búsqueda de equipos de trabajo comprometidos y con metas
                afines
              </span>
              <span className="text-text-primary-light dark:text-text-primary-dark opacity-85">
                . Dispuesto a aprender y adaptarme a nuevas tecnologías,
                comunicarme asertivamente con los colaboradores de proyecto, y
                afrontar cambios de requisitos de manera eficaz.
              </span>
            </span>
          </p>
        </div>
      </div>
    </main>
  )
}
