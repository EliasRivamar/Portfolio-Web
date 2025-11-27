import { useLang } from '../hooks/useLanguage'

export function AboutMe({ id }) {
  const { t, lang } = useLang()
  return (
    <main
      id={id}
      className="flex flex-1 justify-center py-5 sm:py-10 mt-6.5 scroll-mt-6"
    >
      <div className="layout-content-container flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
          <h2 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            {t(`${lang}.AboutMe.Title`)}
          </h2>
        </div>
        <div className="flex gap-4">
        <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg font-normal leading-normal mt-8">
            <span className="text-text-primary-light dark:text-text-primary-dark text-wrap">
              {t(`${lang}.AboutMe.p1`)} &nbsp;
              <span className="text-orange-500">
                {t(`${lang}.AboutMe.p2`)},&nbsp;
              </span>
              <span className="text-blue-500">
                {t(`${lang}.AboutMe.p3`)}&nbsp;
              </span>
              {t(`${lang}.AboutMe.p4`)}
              <span className="text-primary opacity-70">
                {t(`${lang}.AboutMe.p5`)}
              </span>
              <span className="text-text-primary-light dark:text-text-primary-dark opacity-85">
                {t(`${lang}.AboutMe.p6`)}
              </span>
            </span>
          </p>
        </div>
      </div>
    </main>
  )
}
