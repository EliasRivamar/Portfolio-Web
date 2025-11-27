export function ProjectCard({title, description, techs}){
  return (
    <div className="flex cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white dark:border-white/10 dark:bg-white/5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-primary/10">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover"
              data-alt="Landing page for a tech startup"
            ></div>
            <div className="flex flex-col gap-4 p-5 grow">
              <div className="grow">
                <p className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-normal">
                  {title}
                </p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal mt-1">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {techs.map((tech, index) =>(<span key={index}className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20">
                  {tech}
                </span>

                )

                )}
              </div>
            </div>
          </div>
  )
}