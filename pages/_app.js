import '../styles/globals.css'
import styles from '../styles/App.module.css'
import {useState} from "react";
import {ThemeProvider} from "@f-ui/core";

export default function MyApp({Component, pageProps}) {
    const [dark, setDark] = useState(true)
    return (
        <ThemeProvider theme={dark ? 'dark' : 'light'} className={styles.wrapper} language={"pt"}>
            <Component {...pageProps} dark={dark} setDark={setDark} />
        </ThemeProvider>
    )
}
