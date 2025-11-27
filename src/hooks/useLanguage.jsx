import {useContext} from 'react'
import { LangContext } from '../context/LanguageContext';

export const useLang = () => {
    const context = useContext(LangContext)
    if(context === undefined){
        throw new Error('useLangt must be used within a LangProvider')
    }
    return context
}
