import '../styles/globals.css'
import styles from '../styles/App.module.css'
import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@f-ui/core";
import useLocale from "../hooks/useLocale";
export const Theme = React.createContext({})
export default function MyApp({Component, pageProps}) {
    const [dark, setDark] = useState(true)
    const [,, setLang] = useLocale()
    useEffect(() => {

        setDark(localStorage.getItem('dark') === '1')
        setLang(localStorage.getItem('locale'))
    }, [])


    return (
        <ThemeProvider theme={dark ? 'dark' : 'light'} className={styles.wrapper} language={"pt"}>
            <Theme.Provider value={{
                setDark,
                dark
            }}>
            <Component {...pageProps} dark={dark} setDark={setDark} />
            </Theme.Provider>
        </ThemeProvider>
    )
}
