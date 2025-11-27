import Light from '../assets/light.svg?react'


export function LightIcon({theme}) {
  return (
    <Light className={`${theme==='light' ? 'stroke-primary' : 'stroke-text-secondary-light dark:stroke-text-secondary-dark'} `}/>
  )
}
