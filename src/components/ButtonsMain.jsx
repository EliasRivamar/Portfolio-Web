import { useLang } from '../hooks/useLanguage'
import { CustomSelect } from './CustomSelect'
import { useTheme } from '../hooks/useTheme'
import { DarkIcon } from '../icons/DarkMode'
import { LightIcon } from '../icons/LightMode'

export function ButtonMain({id}) {
  const { lang, setLang } = useLang()
  const { theme, setTheme } = useTheme()
  return (
    <main id={id} className="lg:hidden pt-2 lg:-pt-4 h-5 lg:h-2 scroll-mt-24">
      <header className='flex justify-between'>
        <div className="flex place-items-center justify-start pl-2">
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
        <div className="flex place-items-center justify-end gap-2 pr-2">
          <div className=" flex w-15 place-items-center">
            <CustomSelect
              value={lang === 'es' ? 'ES' : 'EN'}
              onChange={(value) => setLang(value.toLowerCase())}
              options={['ES', 'EN']}
            />
          </div>
        </div>
      </header>
    </main>
  )
}
