import {useEffect, useRef} from "react";
import IDS from "../public/IDS";
import styles from "../styles/Index.module.css";

export default function About({setOn}) {

    return (
        <div className={styles.profile} data-listen={"-"} id={"2"}>
            <h2>Quem sou eu ?</h2>
            <div className={styles.group}>
                <div>
                    <p>
                        Olá sou Gustavo Roque, desenvolvedor web full-stack. Curso <strong>Engenharia da computação</strong> no <strong>IESB</strong>.
                    </p>
                    <p>
                        Moro em <strong>Brasília/DF</strong> e atualmente sou estagiário na <strong><a href={"https://www.gov.br/aeb/pt-br"} target={"_blank"} rel={"noreferrer"}>Agência Espacial Brasileira</a></strong> e trabalho com desenvolvendo/acompanhando sistemas web.
                    </p>
                    <p>
                        Tenho anos de experiência trabalhando em <strong>apps e componentes com ReactJS</strong> e desenvolvimento de APIs REST.
                    </p>
                    <p>
                        Gosto de trabalhar em grandes projetos e coisas que me desafiam.
                    </p>
                    <p>Possuo conhecimento avançado em inglês.</p>
                </div>
                <div className={styles.cells}>
                    <div className={styles.cellDivider}>
                        Linguagens e ferramentas
                    </div>
                    <div data-highlight={"-"}>
                        Javascript
                    </div>
                    <div data-highlight={"-"}>
                        ReactJS
                    </div>
                    <div data-highlight={"-"}>
                        WebGL
                    </div>
                    <div data-highlight={"-"}>
                        CSS
                    </div>
                    <div data-highlight={"-"}>
                        HTML / SVG / Canvas API
                    </div>
                    <div>
                        NodeJS
                    </div>
                    <div>
                        ExpressJS
                    </div>
                    <div>
                        Rollup
                    </div>
                    <div>
                        Webpack
                    </div>
                    <div>
                        Python
                    </div>
                    <div data-highlight={"-"}>
                        Flask
                    </div>
                    <div >
                        Django
                    </div>
                    <div data-highlight={"-"}>
                        Linux
                    </div>
                    <div>
                        PowerShell
                    </div>
                    <div data-highlight={"-"}>
                        PowerBI
                    </div>

                    <div className={styles.cellDivider}>
                        Padrões e arquiteturas
                    </div>
                    <div data-highlight={"-"}>
                        APIs REST/RESTFUL
                    </div>
                    <div>
                        Micro-serviços
                    </div>
                    <div>
                        APIs SOAP
                    </div>
                    <div>
                        Métodos ágeis
                    </div>
                    <div>
                        Clean code
                    </div>
                </div>
            </div>

        </div>
    )
}