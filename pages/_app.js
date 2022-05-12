import '../styles/globals.css'
import {Button, Fabric, ToolTip} from "@f-ui/core";
import styles from '../styles/App.module.css'
import "@fontsource/roboto";
import {useState} from "react";

function MyApp({Component, pageProps}) {
    const [dark, setDark] = useState(true)
    return (
        <Fabric theme={dark ? 'dark' : 'light'} className={styles.wrapper}>
            <Component {...pageProps} dark={dark} setDark={setDark} />
        </Fabric>
    )
}

export default MyApp
