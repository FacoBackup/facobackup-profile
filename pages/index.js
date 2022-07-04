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

export default function Home({dark, setDark}) {
    const [open, setOpen] = useState(0)
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
        <div className={styles.wrapper}>
            <Head>
                <title>Gustavo Roque | Web DEV</title>
            </Head>
            <div className={styles.header}>
                <img
                    alt={'js'}
                     className={styles.image}
                     style={{borderRadius: '50%', maxWidth: '125px'}}
                     src={'https://avatars.githubusercontent.com/facobackup'}
                />
                <h1 className={styles.header1}>
                    Gustavo Micael Barbosa Roque
                </h1>
                <h3 className={styles.header2}>
                    {locale.HEADER}
                </h3>
                <div className={styles.options}>
                    <Dropdown className={styles.button} variant={"outlined"} hideArrow={true}>
                        <Icon styles={{fontSize: '1.1rem'}}>language</Icon>
                        <DropdownOptions>
                            <DropdownOption option={{
                                label: 'English',
                                icon: lang === 'en' ?  <Icon styles={{fontSize: '1.1rem'}}>check</Icon> : null,
                                onClick: () => setLang('en'),
                            }}/>
                            <DropdownOption option={{
                                label: 'Português',
                                icon: lang === 'pt' ?  <Icon styles={{fontSize: '1.1rem'}}>check</Icon> : null,
                                onClick: () => setLang('pt'),
                            }}/>

                        </DropdownOptions>
                    </Dropdown>
                    <Button
                        onClick={() => {
                            if (dark)
                                localStorage.setItem('dark', '0')
                            else
                                localStorage.setItem('dark', '1')
                            setDark(!dark)
                        }} className={styles.button} variant={"outlined"}>
                        <Icon styles={{fontSize: '1.1rem'}}>{!dark ? 'light_mode' : 'dark_mode'}</Icon>
                    </Button>
                </div>
            </div>
            <Tabs open={open} setOpen={setOpen} headerStyles={{justifyContent: 'center'}}>
                <Tab label={'Overview'} className={styles.tab}>
                    {readMe.length > 0 ? <Document text={readMe}/> : null}
                </Tab>
                <Tab label={locale[1]} className={styles.tab}>
                    <Timeline spineGap={'24px'} cardSize={'85px'} styles={{width: '100%'}}>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'js.png'}/>
                            {locale.JS}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'react.png'}/>
                            {locale.REACT}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            {locale.CSS}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'electron.png'}/>
                            {locale.ELECTRON}
                        </TimelineCell>


                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'py.png'}/>
                            {locale.PYTHON}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'RabbitMQ.png'}/>
                            {locale.MICRO}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            {locale.REST}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            {locale.SOAP}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            {locale.SQL}
                        </TimelineCell>

                        <TimelineCell className={styles.cell}>
                            {locale.GIT}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            {locale.OS}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            {locale.VM}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'ps2.png'}/>
                            {locale.SCRIPT}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            {locale.REGEX}
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'opengl.png'}/>
                            {locale.GL}
                        </TimelineCell>
                    </Timeline>
                </Tab>
                <Tab label={locale[2]} className={styles.tab}>
                    <Timeline spineGap={'4px'} cardSize={'70px'} styles={{width: '100%'}}>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'wasm.png'}/>
                            <p>WebAssembly.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'rs.png'}/>
                            <p>Rust.</p>
                        </TimelineCell>

                    </Timeline>
                </Tab>
            </Tabs>

        </div>
    )
}
Home.propTypes = {
    dark: PropTypes.bool,
    setDark: PropTypes.func
}
