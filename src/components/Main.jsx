
export function Main() {
  return (
    <main className="grow pt-24 md:pt-32 pb-16">
      <div className="flex flex-col items-center text-center px-4">
        
        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
            Elias Rivamar
          </h1>
          <p className="text-slate-500 dark:text-[#92a4c9] text-xl md:text-2xl font-normal leading-normal">
            Desarrollador Full-Stack
          </p>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg font-normal leading-normal max-w-2xl mt-8">
          <span className="text-text-primary-light dark:text-text-primary-dark">
            Estudiante en Ciencias de la Computacion y apasionado en el
            desarrollo web
          </span>
          <span className="text-text-primary-light dark:text-text-primary-dark opacity-70">
            . Especializado en construir aplicaciones web modernas, responsivas,
            intuitivas y elegantes.
          </span>
        </p>

        <div className="flex pt-10">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-transform hover:scale-105">
            <span className="truncate">Ver mis proyectos</span>
          </button>
        </div>

        <div className="mt-20">
          <div className="gap-4 sm:gap-6 flex flex-wrap justify-center">
            <a
              className="flex flex-col items-center gap-2 text-center w-20 group"
              href="#"
            >
              <div className="rounded-full bg-slate-200 dark:bg-[#232f48] p-3 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="text-slate-600 dark:text-white group-hover:text-primary dark:group-hover:text-white transition-colors"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">
                GitHub
              </p>
            </a>
            <a
              className="flex flex-col items-center gap-2 text-center w-20 group"
              href="#"
            >
              <div className="rounded-full bg-slate-200 dark:bg-[#232f48] p-3 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="text-slate-600 dark:text-white group-hover:text-primary dark:group-hover:text-white transition-colors"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect height="12" width="4" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">
                LinkedIn
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
