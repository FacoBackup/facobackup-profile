import styles from "../styles/Index.module.css";
import {Button, Dropdown, DropdownOption, DropdownOptions, Icon} from "@f-ui/core";
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
import IDS from "../public/IDS";
import Image from "next/image";

export default function Profile({setOn}) {

    return (<div className={styles.profile} data-listen={"-"} id={"1"}>
            <img
                alt={'js'}
                className={styles.image}

                src={'https://avatars.githubusercontent.com/facobackup'}
            />

            <h2>Gustavo Micael Barbosa Roque</h2>

            <h4>Desenvolvedor full-stack web e programador gráfico.</h4>
            <div className={styles.cells}>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/git.png?raw=true"/>
                </div>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/js.png?raw=true"/>
                </div>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/react.png?raw=true"/>
                </div>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/node.png?raw=true"/>
                </div>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/py.png?raw=true"/>
                </div>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/flask.png?raw=true"/>
                </div>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/django.svg?raw=true"/>
                </div>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/psql.png?raw=true"/>
                </div>
                <div className={styles.image} style={{width: "50px", height: "50px", position: "relative"}}>
                    <Image layout={'fill'} objectFit={'contain'}
                           src="https://github.com/facobackup/facobackup/blob/main/webgl.png?raw=true"/>
                </div>
            </div>
            <div className={styles.cells} style={{width: "100%", justifyContent: "center", marginTop: "32px"}}>
                <div
                    style={{display: "flex", alignItems: "center", gap: "8px"}}
                >
                    <Icon>place</Icon>
                    <div>
                        Brasília/DF
                    </div>
                </div>
                <div
                    style={{display: "flex", alignItems: "center", gap: "8px", cursor: "pointer"}}
                    onClick={() => {
                        navigator.clipboard.write("(61)-99871-1025")
                        alert.pushAlert("Copiado", "info")
                    }}
                >
                    <Icon>whatsapp</Icon>
                    <div>
                        (61) 99871-1025
                    </div>
                </div>
                <div
                    style={{display: "flex", alignItems: "center", gap: "8px", cursor: "pointer"}}
                    onClick={() => {
                        navigator.clipboard.write("gustavomicaelbarbosa@gmail.com")
                        alert.pushAlert("Copiado", "info")
                    }}
                >
                    <Icon>mail</Icon>
                    <div>gustavomicaelbarbosa@gmail.com</div>
                </div>
            </div>
        </div>)
}