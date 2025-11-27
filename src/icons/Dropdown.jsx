import DropDown from '../assets/dropdown.svg?react'

export function DropDownIcon ({isActive}) {
  return(
    <DropDown className={`stroke-text-primary-light dark:stroke-text-primary-dark
      ${isActive===true ? 'rotate-180' : '' }`}/>
  )
}