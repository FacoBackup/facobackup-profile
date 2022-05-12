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
    DropdownOption
} from "@f-ui/core";
import {MarkdownMinimal, useMarkdown} from "@f-ui/markdown";
import EN from "../templates/EN";
import PT from "../templates/PT";
import PropTypes from "prop-types";

function MD({readMe}) {
    const hook = useMarkdown(readMe)

    return (
        <div style={{padding: '0 15%'}}>
            <MarkdownMinimal hook={hook}/>
        </div>
    )
}

export default function Home({dark, setDark}) {
    const [open, setOpen] = useState(0)
    const [locale, setLocale] = useState(EN)

    const [lang, setLang] = useState('en')
    const [readMe, setReadMe] = useState('')
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/facobackup/facobackup/main/README.md')
            .then(res => {
                return res.text()
            })
            .then(json => {
                setReadMe(json)
            })
        console.log(localStorage.getItem('dark'))
        setDark(localStorage.getItem('dark') === '1')
        setLang(localStorage.getItem('locale'))
    }, [])
    useEffect(() => {
        if (lang === 'en')
            setLocale(EN)
        else
            setLocale(PT)
        localStorage.setItem('locale', lang)
    }, [lang])

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Gustavo Roque | Web DEV</title>
            </Head>
            <div className={styles.header}>
                <img alt={'js'} className={styles.image} style={{borderRadius: '50%', maxWidth: '125px'}}
                     src={'https://avatars.githubusercontent.com/facobackup'}/>

                <h1 className={styles.header1}>
                    Gustavo Micael Barbosa Roque
                </h1>
                <h3 className={styles.header2}>
                    {locale.HEADER}
                </h3>
                <div className={styles.options}>
                    <Dropdown className={styles.button} variant={"outlined"}>
                        <span className={'material-icons-round'} style={{fontSize: '1.1rem'}}>language</span>
                        <DropdownOptions>
                            <DropdownOption option={{
                                label: 'English',
                                icon: lang === 'en' ?  <span className={'material-icons-round'}
                                                             style={{fontSize: '1.1rem'}}>check</span> : null,
                                onClick: () => setLang('en'),
                            }}/>
                            <DropdownOption option={{
                                label: 'Português',
                                icon: lang === 'pt' ?  <span className={'material-icons-round'}
                                                             style={{fontSize: '1.1rem'}}>check</span> : null,
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
                        <span className={'material-icons-round'}
                              style={{fontSize: '1.1rem'}}>{!dark ? 'light_mode' : 'dark_mode'}</span>
                    </Button>
                </div>
            </div>
            <Tabs open={open} setOpen={setOpen} headerStyles={{justifyContent: 'center'}}>
                <Tab label={'Overview'} className={styles.tab}>
                    {readMe.length > 0 ? <MD readMe={readMe}/> : null}
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
