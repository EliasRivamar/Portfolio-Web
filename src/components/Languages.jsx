import { useLang } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import { CssIcon } from '../icons/Css'
import { ExpressDarkIcon } from '../icons/ExpressDark'
import { ExpressLightIcon } from '../icons/ExpressLight'
import { HtmlIcon } from '../icons/Html'
import { JavaScriptIcon } from '../icons/JavascriptIcon'
import { MotionLightIcon } from '../icons/MotionLight'
import { NextJSIcon } from '../icons/NextJS'
import { PostgreIcon } from '../icons/Postgres'
import { PythonIcon } from '../icons/PyhtonIcon'
import { ReactIcon } from '../icons/ReactIcon'
import { SupabaseIcon } from '../icons/Supabase'
import { TailwindIcon } from '../icons/Tailwind'
import { TypeScriptIcon } from '../icons/TypeScript'
import { LangButton } from './LanButton'


export function Languages({ id }) {
  const { t, lang } = useLang()
  const {theme} = useTheme()
  return (
    <main
      id={id}
      className="flex flex-1 justify-center py-5 sm:py-10 mt-6.5 scroll-mt-6"
    >
      <div className="layout-content-container flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-4 p-4 items-center mb-4">
          <h2 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            {t(`${lang}.Languages`)}
          </h2>
        </div>
        <div className="flex gap-y-6 gap-x-4 m-auto flex-wrap lg:w-[40%] justify-center">
          <LangButton color={'cyan'} icon={<ReactIcon />} name={'React'} />
          <LangButton color={'bluePython'} icon={<PythonIcon />} name={'Python'} />
          <LangButton color={'violet'} icon={<CssIcon />} name={'CSS'} />
          <LangButton
            color={'yellow'}
            icon={<JavaScriptIcon />}
            name={'JavaScript'}
          />
          <LangButton color={'orange'} icon={<HtmlIcon />} name={'HTML5'} />
          <LangButton color={'gray'} icon={<NextJSIcon />} name={'NextJS'} />
          <LangButton color={'green'} icon={<SupabaseIcon />} name={'Supabase'} />
          { theme === 'light' ?
          <LangButton color={'yellow'} icon={<MotionLightIcon />} name={'Framer Motion'} />
          :
          <LangButton color={'yellow'} icon={<MotionLightIcon />} name={'Framer Motion'} />
          }
          { theme === 'light' ?
          <LangButton color={'gray'} icon={<ExpressLightIcon />} name={'ExpressJS'} />
          :
          <LangButton color={'gray'} icon={<ExpressDarkIcon />} name={'ExpressJs'} />
          }
          <LangButton color={'cyan'} icon={<TailwindIcon />} name={'TailwindCSS'} />
          <LangButton color={'blue'} icon={<TypeScriptIcon />} name={'TypeScript'} />
          <LangButton color={'blue'} icon={<PostgreIcon />} name={'PostgreSQL'} />
        </div>
      </div>
    </main>
  )
}
