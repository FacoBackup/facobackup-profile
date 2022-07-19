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
    DropdownOption, Icon, useAlert
} from "@f-ui/core";
import {MarkdownMinimal, useMarkdown} from "@f-ui/markdown";
import EN from "../public/EN";
import PT from "../public/PT";
import PropTypes from "prop-types";
import useLocale from "../hooks/useLocale";
import Document from "../components/Document";
import Navigation from "../components/Navigation";
import About from "../components/About"; 
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import IDS from "../public/IDS";

export default function Home({dark, setDark}) {
    const [onElement, setOnElement] = useState(0)
    const [,,setLang] = useLocale()

    useEffect(() => {
        setDark(localStorage.getItem('dark') === '1' || !localStorage.getItem("dark"))
        setLang(localStorage.getItem('locale'))
    }, [])
    useAlert(dark)
    return (
        <>
            <Navigation path={"/"} onElement={onElement} setOnElement={setOnElement}/>
            <div className={styles.wrapper}>
                <Head>
                    <title>Gustavo Roque | Full-stack web dev</title>
                </Head>

                <section className={styles.section} id={IDS.PROFILE}>
                    <Profile/>
                </section>

                <section className={styles.section} id={IDS.ABOUT}>
                    <About/>
                </section>
 

                <section className={styles.section} id={IDS.PROJECTS}>
                    <Projects/>
                </section>
            </div>
        </>
    )
}
Home.propTypes = {
    dark: PropTypes.bool,
    setDark: PropTypes.func
}
