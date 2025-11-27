import { useLang } from "../hooks/useLanguage"

export function Header() {
  const { t, lang } = useLang()
  return (
    <>
      <header className="sticky top-0 flex flex-col lg:flex-row justify-center lg:max-w-[960px] max-w-[100%] m-auto pt-4 border-b border-bor-light dark:border-bor-dark backdrop-blur-xl z-50">
        <div className="flex justify-center">
          <nav className="flex gap-8 lg:mr-8 mb-2">
            <a className="text-sm lg:text-xl" href="">
              {t(`${lang}.Header.AboutMe`)}
            </a>
            <a className="text-sm lg:text-xl" href="">
            {t(`${lang}.Header.Projects`)}
            </a>
            <a className="text-sm lg:text-xl" href="">
            {t(`${lang}.Header.Contact`)}
            </a>
          </nav>
        </div>
      </header>
      <div className="hidden lg:block lg:flex justify-end -mt-12 mr-4 gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-transform hover:scale-105">
            <span className="truncate">CV</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-transform hover:scale-105">
            <span className="truncate">CV</span>
          </button>
        </div>
    </>
  )
}
