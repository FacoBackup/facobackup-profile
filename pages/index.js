import styles from '../styles/Index.module.css'
import Head from 'next/head'
import {useEffect, useState} from "react";

import {
    TimelineCell,
    Timeline,
    Tab,
    Tabs,
    VerticalTabs,
    Button,
    Dropdown,
    DropdownOptions,
    DropdownOption, Icon
} from "@f-ui/core";
import {MarkdownMinimal, useMarkdown} from "@f-ui/markdown";
import EN from "../templates/EN";
import PT from "../templates/PT";
import PropTypes from "prop-types";
import useLocale from "../hooks/useLocale";
import Document from "../components/Document";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import IDS from "../public/IDS";

export default function Home({dark, setDark}) {
    const [onElement, setOnElement] = useState(0)
    const [locale, lang, setLang] = useLocale()
    const [readMe, setReadMe] = useState('')

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/facobackup/facobackup/main/README.md')
            .then(res => {
                return res.text()
            })
            .then(json => {
                setReadMe(json)
            })
        setDark(localStorage.getItem('dark') === '1')
        setLang(localStorage.getItem('locale'))
    }, [])

    return (
        <>
            <Navigation path={"/"} onElement={onElement}/>
            <div className={styles.wrapper}>
                <Head>
                    <title>Gustavo Roque | Full-stack web dev</title>
                </Head>

                <section className={styles.section} id={IDS.PROFILE}>
                    <Profile setOn={() => setOnElement(0)}/>
                </section>

                <section className={styles.section} id={IDS.ABOUT}>
                    <About setOn={() => setOnElement(1)}/>
                </section>

                <section className={styles.section} id={IDS.EXPERIENCES}>
                    <Experience setOn={() => setOnElement(2)}/>
                </section>

                <section className={styles.section} id={IDS.PROJECTS}>
                    <Projects setOn={() => setOnElement(3)}/>
                </section>
            </div>
        </>
    )
}
Home.propTypes = {
    dark: PropTypes.bool,
    setDark: PropTypes.func
}
