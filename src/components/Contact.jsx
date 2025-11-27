import { useLang } from "../hooks/useLanguage"


export function ContactMe() {
  const { t, lang } = useLang()
  
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col gap-8 rounded-xl p-6 md:p-8">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-[-0.033em]">
            {t(`${lang}.ContactMe.Title`)}
            </h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
            {t(`${lang}.ContactMe.p1`)}
            </p>
          </div>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
                {t(`${lang}.ContactMe.Name`)}
                </p>
                <input
                  className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-xl border border-bor-light dark:border-bor-dark bg-white dark:bg-white/5 p-[15px] text-base font-normal leading-normal text-white placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40 h-14"
                  placeholder={t(`${lang}.ContactMe.NamePlaceholder`)}
                  type="text"
                  value=""
                />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
                {t(`${lang}.ContactMe.Email`)}
                </p>
                <input
                  className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-xl border border-bor-light dark:border-bor-dark bg-white dark:bg-white/5 p-[15px] text-base font-normal leading-normal text-white placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40 h-14"
                  placeholder={t(`${lang}.ContactMe.EmailPlaceholder`)}
                  type="email"
                  value=""
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
              {t(`${lang}.ContactMe.Message`)}
              </p>
              <textarea
                className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-xl border border-bor-light dark:border-bor-dark bg-white dark:bg-white/5 p-[15px] text-base font-normal leading-normal text-white placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40 min-h-36"
                placeholder={t(`${lang}.ContactMe.MessagePlaceholder`)}
              ></textarea>
            </label>
            <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90">
              <span className="truncate">{t(`${lang}.ContactMe.ButtonSend`)}</span>
            </button>
          </form>
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-text-secondary-light text-text-secondary-dark">{t(`${lang}.ContactMe.Find`)}</p>
            <div className="flex items-center gap-6">
              <a className="group" href="#">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 text-[#92a4c9] transition-colors group-hover:text-white"
                  fill="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a className="group" href="#">
                <svg
                  aria-hidden="true"
                  className="h-8 w-8 text-[#92a4c9] transition-colors group-hover:text-white"
                  fill="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm hidden">
        <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-xl bg-[#1e293b] p-8 text-center shadow-lg">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
            <span className="material-symbols-outlined text-4xl text-green-400">
              check
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-white">¡Gracias!</h2>
            <p className="text-base text-[#92a4c9]">
              Tu mensaje ha sido enviado. Te responderé lo antes posible.
            </p>
          </div>
          <button className="flex h-11 w-full items-center justify-center rounded-xl bg-primary px-5 text-base font-bold text-white transition-colors hover:bg-primary/90">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
