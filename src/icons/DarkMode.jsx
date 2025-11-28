import Dark from '../assets/dark.svg?react'

export function DarkIcon({theme}) {
  return (
    <Dark className={`${theme==='dark' ? 'stroke-primary' : 'stroke-text-secondary-light dark:stroke-text-secondary-dark'} `}/>
  )
}
