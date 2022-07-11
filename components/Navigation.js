import styles from "../styles/Header.module.css";
import {Button, Dropdown, DropdownOption, DropdownOptions, Icon, ToolTip} from "@f-ui/core";
import PropTypes from "prop-types";
import {useContext, useEffect, useRef, useState} from "react";
import Link from "next/link";
import useLocale from "../hooks/useLocale";
import {Theme} from "../pages/_app";
import IDS from "../public/IDS";

export default function Navigation({path, onElement, setOnElement}) {
    const [locale, lang, setLang] = useLocale()
    const {dark, setDark} = useContext(Theme)

    useEffect(() => {
        if(path === "/") {
            const targets = document.querySelectorAll(`[data-listen="-"]`)

            const obs = new IntersectionObserver((e) => {
                let intersecting = []
                e.forEach((v,i) => {
                    if(v.isIntersecting)
                        intersecting.push(v.target.id)
                })
                if(intersecting.length > 0)
                    setOnElement(Math.min(...intersecting) - 1)
            }, {rootMargin: "-50%"})
            targets.forEach(t => {
                obs.observe(t)
            })

            return () => obs.disconnect()
        }
    }, [path])

    return (
        <nav className={styles.header}>
            {path !== "/" ?
                <>
                    <Link href={"/"}>
                        <Button className={styles.button} >
                            <Icon styles={{fontSize: "1.1rem"}}>
                                home
                            </Icon>
                        </Button>
                    </Link>
                    <div className={styles.divider}/>
                </>
                :
                null
            }
            {path === "/" ? (
                <>
                    <Button
                        onClick={() => {
                            const el = document.getElementById(IDS.PROFILE)
                            el.parentNode.parentNode.scrollTop = el.offsetTop - window.innerHeight * .1
                        }}
                        className={styles.button}
                        variant={onElement === 0 ? "filled" : undefined}
                    >
                        <Icon styles={{fontSize: "1.1rem"}}>
                            person
                        </Icon>
                        <ToolTip>
                            {locale.PROFILE}
                        </ToolTip>
                    </Button>

                    <Button
                        onClick={() => {
                            const el = document.getElementById(IDS.ABOUT)
                            el.parentNode.parentNode.scrollTop = el.offsetTop - window.innerHeight * .1
                        }}
                        className={styles.button}
                        variant={onElement === 1 ? "filled" : undefined}
                    >
                        <Icon styles={{fontSize: "1.1rem"}}>
                            book
                        </Icon>
                        <ToolTip>
                            {locale.ABOUT}
                        </ToolTip>
                    </Button>

                    <Button
                        onClick={() => {
                            const el = document.getElementById(IDS.EXPERIENCES)
                            el.parentNode.parentNode.scrollTop = el.offsetTop - window.innerHeight * .1
                        }}
                        className={styles.button}
                        variant={onElement === 2 ? "filled" : undefined}
                    >
                        <Icon styles={{fontSize: "1.1rem"}}>
                            school
                        </Icon>
                        <ToolTip>
                            {locale.EXPERIENCES}
                        </ToolTip>
                    </Button>

                    <Button
                        onClick={() => {
                            const el = document.getElementById(IDS.PROJECTS)
                            el.parentNode.parentNode.scrollTop = el.offsetTop - window.innerHeight * .1

                        }}
                        className={styles.button}
                        variant={onElement === 3 ? "filled" : undefined}
                    >
                        <Icon styles={{fontSize: "1.1rem"}}>
                            engineering
                        </Icon>
                        <ToolTip>
                            {locale.PROJECTS}
                        </ToolTip>
                    </Button>

                    <div className={styles.divider}/>
                </>
            ) : null}
            <Dropdown className={styles.button} hideArrow={true} disabled={true}>
                <Icon styles={{fontSize: '1.1rem'}}>language</Icon>
                <ToolTip>
                    {locale.LANG}
                </ToolTip>
                <DropdownOptions>
                    <DropdownOption option={{
                        label: 'English',
                        icon: lang === 'en' ? <Icon styles={{fontSize: '1.1rem'}}>check</Icon> : null,
                        onClick: () => setLang('en'),
                    }}/>
                    <DropdownOption option={{
                        label: 'Português',
                        icon: lang === 'pt' ? <Icon styles={{fontSize: '1.1rem'}}>check</Icon> : null,
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
                }}
                className={styles.button}
            >
                <Icon styles={{fontSize: '1.1rem'}}>{!dark ? 'light_mode' : 'dark_mode'}</Icon>
                <ToolTip>
                    {locale.THEME}
                </ToolTip>
            </Button>

        </nav>
    )
}
Navigation.propTypes = {
    path: PropTypes.string,
    onElement: PropTypes.number,
    setOnElement: PropTypes.func
}