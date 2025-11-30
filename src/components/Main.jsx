import { useLang } from '../hooks/useLanguage'

export function Main({id}) {
  const { t, lang } = useLang()

  function openEmail() {
    const to = 'eliasrivamar11@gmail.com'
    const subject = encodeURIComponent('')
    const body = encodeURIComponent('')
    const url = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${to}&su=${subject}&body=${body}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main id={id} className="grow pt-24 md:pt-32 pb-16">
      <div className="flex flex-col items-center text-center px-4">
        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
            Elias Rivamar
          </h1>
          <p className="text-slate-500 dark:text-[#92a4c9] text-xl md:text-2xl font-normal leading-normal">
            {t(`${lang}.Title`)}
          </p>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg font-normal leading-normal max-w-2xl mt-8">
          <span className="text-primary">{t(`${lang}.ParrafInit0`)}</span>
          <span className="text-text-primary-light dark:text-text-primary-dark">
            {t(`${lang}.ParrafInit1`)}
          </span>
          <span className="text-text-primary-light dark:text-text-primary-dark opacity-70">
            {t(`${lang}.ParrafInit2`)}
          </span>
        </p>

        <div className="mt-20">
          <div className="gap-4 sm:gap-6 flex flex-wrap justify-center">
            <a
              className="flex flex-col items-center gap-2 text-center w-20 group"
              href="https://github.com/EliasRivamar"
              target="_blank"
            >
              <div className="rounded-full bg-slate-200 dark:bg-[#232f48] p-3 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="text-slate-600 dark:text-white group-hover:text-primary dark:group-hover:text-white transition-colors"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
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

            <button
              className="flex flex-col items-center gap-2 text-center w-20 group cursor-pointer"
              onClick={openEmail}
            >
              <div className="rounded-full bg-slate-200 dark:bg-[#232f48] p-3 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="text-slate-600 dark:text-white group-hover:text-primary dark:group-hover:text-white transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                  <path d="M22 6l-10 8L2 6" />
                </svg>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal">
                Email
              </p>
            </button>
            <a
              className="flex flex-col items-center gap-2 text-center w-20 group"
              href="https://www.linkedin.com/in/elias-rivamar-3a43b8269/"
              target="_blank"
            >
              <div className="rounded-full bg-slate-200 dark:bg-[#232f48] p-3 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="text-slate-600 dark:text-white group-hover:text-primary dark:group-hover:text-white transition-colors"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
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
