import {useContext} from 'react'
import { LangContext } from '../context/LanguageContext';

export function useLang() {
  return useContext(LangContext);
}