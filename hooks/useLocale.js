import {useEffect, useState} from "react";
import EN from "../templates/EN";
import PT from "../templates/PT";

export default function useLocale(){
    const [locale, setLocale] = useState(EN)
    const [lang, setLang] = useState('pt')
    useEffect(() => {
        if (lang === 'en')
            setLocale(EN)
        else
            setLocale(PT)
        localStorage.setItem('locale', lang)
    }, [lang])
    return [locale, lang, setLang]
}