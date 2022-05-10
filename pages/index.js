import styles from '../styles/Index.module.css'
import Head from 'next/head'
import {useEffect, useState} from "react";

import {TimelineCell, Timeline, Tab, Tabs, VerticalTabs} from "@f-ui/core";
import {MarkdownMinimal, useMarkdown} from "@f-ui/markdown";

function MD({readMe}) {
    const hook = useMarkdown(readMe)

    return (
        <div style={{padding: '0 15%'}}>
            <MarkdownMinimal hook={hook}/>
        </div>
    )
}

export default function Home() {
    const [open, setOpen] = useState(0)
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
                <title>Gustavo Roque | Web DEV</title>
            </Head>
            <div className={styles.header}>
                <img alt={'js'} className={styles.image} style={{borderRadius: '50%', maxWidth: '125px'}}
                     src={'https://avatars.githubusercontent.com/facobackup'}/>

                <h1 className={styles.header1}>
                    Gustavo Micael Barbosa Roque
                </h1>
                <h3 className={styles.header2}>
                    Web Developer and graphics programmer
                </h3>
            </div>
            <Tabs open={open} setOpen={setOpen} headerStyles={{justifyContent: 'center'}}>
                <Tab label={'Overview'} className={styles.tab}>
                    {readMe.length > 0 ? <MD readMe={readMe}/> : null}
                </Tab>
                <Tab label={'Frontend'} group={'Myself'} className={styles.tab}>
                    <Timeline spineGap={'4px'} cardSize={'150px'} styles={{width: '100%'}}>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'js.png'}/>
                            <p>2+ years in <b>Javascript</b> development</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'react.png'}/>
                            <p>2+ years developing with <b>ReactJS</b></p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'css.png'}/>
                            <p>~3 years of experience with raw <b>css</b> for complex UI designs.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'electron.png'}/>
                            <p>Big projects using <b>ElectronJS</b></p>
                        </TimelineCell>
                    </Timeline>
                </Tab>
                <Tab label={'Backend'} group={'Myself'} className={styles.tab}>
                    <Timeline spineGap={'4px'} cardSize={'150px'} styles={{width: '100%'}}>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'py.png'}/>
                            <p>Python and frameworks like Django and Flask</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>Multiple projects using micro-services</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'RabbitMQ.png'}/>
                            <p>RabbitMQ</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>REST APIs</p>
                        </TimelineCell>
                    </Timeline>
                </Tab>
                <Tab label={'Graphics'} group={'Myself'} className={styles.tab}>
                    <Timeline spineGap={'4px'} cardSize={'150px'} styles={{width: '100%'}}>
                        <TimelineCell className={styles.cell}>
                            <img alt={'js'} className={styles.image} src={'opengl.png'}/>
                            <p>OpenGL.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>PBR Rendering.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>Research in global illumination methods.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>GLSL.</p>
                        </TimelineCell>

                    </Timeline>
                </Tab>
                <Tab label={'Misc'} group={'Myself'} className={styles.tab}>
                    <Timeline spineGap={'4px'} cardSize={'150px'} styles={{width: '100%'}}>
                        <TimelineCell className={styles.cell}>
                            <p>Shell scripts and Powershell for automation and data collection.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>Linux and Windows.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>GitHub and GitLab.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>
                                <a rel="noreferrer" target={'_blank'}
                                   href={'https://github.com/fabric-ui/markdown'}>regEX</a>.
                            </p>
                        </TimelineCell>
                    </Timeline>
                </Tab>

                <Tab label={'Learning'} group={'Myself'} className={styles.tab}>
                    <Timeline spineGap={'4px'} cardSize={'150px'} styles={{width: '100%'}}>
                        <TimelineCell className={styles.cell}>
                            <p>WebAssembly.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>Rust.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>More UI/UX by developing a full on game engine.</p>
                        </TimelineCell>
                        <TimelineCell className={styles.cell}>
                            <p>Agile project management methods.</p>
                        </TimelineCell>
                    </Timeline>
                </Tab>
                <Tab label={'Projects'} className={styles.tab}>
                    <h3>Fabric-UI</h3>

                    <div className={styles.contentRow}>
                        <p><b>Core</b>: Essential UI components for React.</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p><b>Markdown</b>: Markdown processor for React.</p>
                    </div>

                </Tab>
            </Tabs>

        </div>
    )
}
