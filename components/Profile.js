import styles from "../styles/Index.module.css";
import {Button, Dropdown, DropdownOption, DropdownOptions, Icon} from "@f-ui/core";
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
import IDS from "../public/IDS";

export default function Profile({setOn}) {
    const ref=useRef()
    useEffect(() => {
        const obs = new IntersectionObserver((e) => {
            if(e[0].isIntersecting)
                setOn()
        })
        obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])
    return (
        <div className={styles.profile} ref={ref}>
            <img
                alt={'js'}
                className={styles.image}

                src={'https://avatars.githubusercontent.com/facobackup'}
            />

            <h2>Gustavo Micael Barbosa Roque</h2>

            <h4>Desenvolvedor full-stack web e programador gráfico.</h4>
        </div>
    )
}