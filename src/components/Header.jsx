import { useLang } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import { DarkIcon } from '../icons/DarkMode'
import { LightIcon } from '../icons/LightMode'
import { ButtonMain } from './ButtonsMain'
import { CustomSelect } from './CustomSelect'
import { useEffect, useState } from 'react'

export function Header() {
  const { t, lang, setLang } = useLang()
  const { theme, setTheme } = useTheme()
  
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 1024)
      check()
      window.addEventListener('resize', check)
      return () => window.removeEventListener('resize', check)
    }, [])

    return isMobile
  }

  const isMobile = useIsMobile();

  return (
    <>
      <header className=" lg:justify-between sticky top-0 flex flex-col lg:flex-row justify-center  max-w-full m-auto pt-4 border-b border-bor-light dark:border-bor-dark backdrop-blur-xl z-50 place-items-center">
        <div className=" place-items-center justify-start pl-2 pb-3 lg:block hidden">
          <div className="flex items-center gap-2 p-1 rounded-lg bg-background-light dark:bg-surface-dark border border-bor-light dark:border-bor-dark ">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-1 hover:bg-primary/20 cursor-pointer
                            `}
            >
              {theme === 'dark' ? (
                <>
                  <DarkIcon theme={theme} />
                </>
              ) : (
                <>
                  <LightIcon theme={theme} />
                </>
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <nav className="flex gap-2 lg:mr-8 mb-2 -mt-2 min-h-[30px]">
            <a
              className="text-sm items-center justify-center p-2 rounded-md lg:text-xl hover:bg-[#dbdbdf] dark:hover:bg-white/5 h-full"
              href={isMobile ? '#home-mobile' : '#home-desktop'}
            >
              {t(`${lang}.Header.Home`)}
            </a>
            <a
              className="text-sm items-center justify-center p-2 rounded-md lg:text-xl hover:bg-[#dbdbdf] dark:hover:bg-white/5 h-full"
              href="#about"
            >
              {t(`${lang}.Header.AboutMe`)}
            </a>
            <a
              className="text-sm items-center justify-center p-2 rounded-md lg:text-xl hover:bg-[#dbdbdf] dark:hover:bg-white/5 h-full"
              href="#projects"
            >
              {t(`${lang}.Header.Projects`)}
            </a>
            <a
              className="text-sm items-center justify-center p-2 rounded-md lg:text-xl hover:bg-[#dbdbdf] dark:hover:bg-white/5 h-full"
              href="#contact"
            >
              {t(`${lang}.Header.Contact`)}
            </a>
          </nav>
        </div>
        <div className="hidden lg:block place-items-center justify-end gap-2 pr-2 -mt-2">
          <div className=" flex w-15 place-items-center">
            <CustomSelect
              value={lang === 'es' ? 'ES' : 'EN'}
              onChange={(value) => setLang(value.toLowerCase())}
              options={['ES', 'EN']}
            />
          </div>
        </div>
      </header>
    </>
  )
}
