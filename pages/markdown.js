import styles from '../styles/Markdown.module.css'
import Head from 'next/head'
import {useEffect, useState} from "react";

import PropTypes from "prop-types";
import useLocale from "../hooks/useLocale";
import Document from "../components/Document";
import Navigation from "../components/Navigation";
import {Button, Icon} from "@f-ui/core";
import Link from "next/link";

export default function Home() {
    const [readMe, setReadMe] = useState('')
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/facobackup/facobackup/main/README.md')
            .then(res => {
                return res.text()
            })
            .then(json => {
                setReadMe(json)
            })
    }, [])


    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Overview | Gustavo Roque</title>
            </Head>
            <Navigation path={"/markdown"}/>
            <div className={styles.header}>
                <h3>Fabric-UI Markdown demo</h3>
                <a rel={"noreferrer"} style={{height: "1.1rem"}} href={"https://github.com/fabric-ui/markdown"}
                   target={"_blank"}>
                    <Icon styles={{fontSize: "1.1rem"}}>
                        open_in_new
                    </Icon>
                </a>
            </div>
            {readMe.length > 0 ? <Document text={readMe}/> : null}
        </div>
    )
}
Home.propTypes = {
    dark: PropTypes.bool,
    setDark: PropTypes.func
}
