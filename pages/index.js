
import styles from '../styles/Index.module.css'
import Head from 'next/head'
import {Button, Tab, Tabs} from "@f-ui/core";
import {useState} from "react";


export default function Home() {
    const [open, setOpen] = useState(0)
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Gustavo Roque | Web DEV</title>
            </Head>
            <div className={styles.header}>
                <img alt={'js'} className={styles.image} src={'https://avatars.githubusercontent.com/facobackup'}/>
                <section className={styles.section}>
                    <h1>
                        Web Developer and graphics programmer
                    </h1>
                    <h3>
                        Gustavo Micael Barbosa Roque
                    </h3>
                </section>
            </div>
            <Tabs open={open} setOpen={setOpen}>
                <Tab label={'Myself'}>
                    <section className={styles.content}>
                        <div className={styles.contentRow}>
                            <p>
                                Hi, I am a Full-stack web developer and graphics programmer who lives in
                                Brasília/Brazil.
                            </p>
                        </div>
                        <div className={styles.contentRow}>
                            <p>
                                Currently a intern on the <b>Brazilian Space Agency</b> working with web-based software
                                development
                            </p>

                        </div>
                        <div className={styles.contentRow}>
                            <p>
                                I am also on my way to finishing my graduation in computer engineering.
                            </p>
                        </div>
                        <div className={styles.contentRow}>
                            <p>
                                I Have some big projects that you can take a look by clicking this button
                            </p>
                            <Button onClick={() => setOpen(2)}>
                                My projects
                            </Button>
                        </div>
                    </section>
                </Tab>
                <Tab label={'Developer'}>
                    <h3>Frontend</h3>
                    <section className={styles.content}>
                        <div className={styles.contentRow}>
                            <p>+2 years of experience building complex frontend systems using <b>Javascript</b>.</p>
                            <img alt={'js'} className={styles.image} src={'./icons/js.png'}/>
                        </div>
                        <div className={styles.contentRow}>
                            <img alt={'js'} className={styles.image} src={'./icons/css.png'}/>
                            <p>~3 years of experience with raw <b>css</b> for complex UI designs.</p>

                        </div>
                        <div className={styles.contentRow}>
                            <p>My main JS frontend framework is <b>ReactJS</b>.</p>
                            <img alt={'js'} className={styles.image} src={'./icons/react.png'}/>
                        </div>
                        <div className={styles.contentRow}>
                            <img alt={'js'} className={styles.image} src={'./icons/electron.png'}/>
                            <p>But I also have experience building <b>ElectronJS</b> apps.</p>
                        </div>
                    </section>
                    <h3>Backend</h3>
                    <section className={styles.content}>
                        <div className={styles.contentRow}>
                            <p>+2 years of experience with backend systems using <b>Python</b>.</p>
                        </div>
                        <div className={styles.contentRow}>
                            <img alt={'js'} className={styles.image} src={'./icons/py.png'}/>
                            <p>Multiple projects using <b>Django</b> / <b>Flask</b>.</p>
                        </div>
                    </section>
                    <h3>Misc</h3>
                    <section className={styles.content}>
                        <div className={styles.contentRow}>
                            <p>Experience setting up dev environments in Linux and Windows.</p>
                            {/*<img alt={'js'} src={'./icons/linux.png'}/>*/}
                        </div>
                        <div className={styles.contentRow}>
                            <p>Experience with Shell scripts and Powershell for automation and data collection.</p>
                            <img alt={'js'} className={styles.image} src={'./icons/ps2.png'}/>
                        </div>
                        <div className={styles.contentRow} style={{display: 'grid'}}>
                            <p>Experience with <b>Github</b> and <b>GitLab</b>.</p>
                        </div>
                        <div className={styles.contentRow} style={{display: 'grid'}}>
                            <p>Experience with <b>regEX</b> checkout my <a target={'_blank'}
                                href={'https://github.com/fabric-ui/markdown'}>Markdown processor</a>.</p>
                        </div>
                    </section>
                    <h3>Studies</h3>
                    <section className={styles.content}>
                        <div className={styles.contentRow}>
                            <img alt={'js'} className={styles.image} src={'./icons/rs.png'}/>
                            <p>Studying Rust for WebAssembly and native NodeJS modules.</p>
                        </div>
                        <div className={styles.contentRow}>
                            <p>Studying Webassembly for performance sensitive applications.</p>
                            <img alt={'js'} className={styles.image} src={'./icons/wasm.png'}/>
                        </div>
                    </section>
                </Tab>
                <Tab label={'Projects'}>
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
