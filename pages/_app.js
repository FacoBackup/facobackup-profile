import '../styles/globals.css'
import {Button, Fabric, ToolTip} from "@f-ui/core";
import styles from '../styles/App.module.css'
import {useState} from "react";

function MyApp({Component, pageProps}) {
    return (
        <Fabric theme={'dark'} className={styles.wrapper}>
            <Component {...pageProps} />
        </Fabric>
    )
}

export default MyApp
