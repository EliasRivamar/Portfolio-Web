import { useLang } from "../hooks/useLanguage"
import { ButtonMain } from "./ButtonsMain"

export function Header() {
  const { t, lang } = useLang()
  return (
    <>
      <header className="sticky top-0 flex flex-col lg:flex-row justify-center  max-w-full m-auto pt-4 border-b border-bor-light dark:border-bor-dark backdrop-blur-xl z-50">
        <div className="flex justify-center">
          <nav className="flex gap-2 lg:mr-8 mb-2 -mt-2 min-h-[30px]">
            <a className="text-sm items-center justify-center p-2 rounded-md lg:text-xl hover:bg-[#dbdbdf] dark:hover:bg-white/5 h-full" href="#home">
              {t(`${lang}.Header.Home`)}
            </a>
            <a className="text-sm items-center justify-center p-2 rounded-md lg:text-xl hover:bg-[#dbdbdf] dark:hover:bg-white/5 h-full"  href="#about">
              {t(`${lang}.Header.AboutMe`)}
            </a>
            <a className="text-sm items-center justify-center p-2 rounded-md lg:text-xl hover:bg-[#dbdbdf] dark:hover:bg-white/5 h-full"  href="#projects">
            {t(`${lang}.Header.Projects`)}
            </a>
            <a className="text-sm items-center justify-center p-2 rounded-md lg:text-xl hover:bg-[#dbdbdf] dark:hover:bg-white/5 h-full"  href="#contact">
            {t(`${lang}.Header.Contact`)}
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
