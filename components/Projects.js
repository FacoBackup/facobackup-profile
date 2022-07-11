import {useEffect, useRef} from "react";
import IDS from "../public/IDS";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import {Button, Masonry} from "@f-ui/core";
import {useRouter} from "next/router";

const PROJECTS = [
    {
        title: "SIS-AEB",
        description: `Conjunto de multiplos sistemas web desenvolvidos na Agência Espacial Brasileira. Inclue sistemas para gerênciamento de colaboradores, projetos/TEDs e acompanhameto de máquinas virtuais com HyperV.`,
        technologies: [
            "ReactJS e NextJS",
            "Flask",
            "Django",
            "PowerShell",
            "Shell scripts",
            "RabbitMQ",
            "PostgreSQL",
            "NodeJS",
            "Markdown (documentação)",
        ],
        patterns: ["APIs REST", "Micro-serviços"],
        link: "https://github.com/not-only-gateway"
    },
    {
        title: "Fabric-UI / core",
        description: `Conjunto de componentes essenciais para ReactJS. Utilizados no projeto SIS-AEB e Projection Engine.`,
        technologies: [
            "ReactJS",
            "ReactDOM",
            "Rollup",
            "Markdown (documentação)",
            "Storybook (documentação)"
        ],
        patterns: ["Componentes avançados", "Estilização e reusabilidade"],
        link: "https://github.com/fabric-ui/core"
    },
    {
        title: "Fabric-UI / markdown",
        description: `Processador markdown para React. Recebe string e retorna elemento com a estrutura`,
        technologies: [
            "ReactJS",
            "ReactDOM",
            "Rollup",
            "RegEX"
        ],
        patterns: ["Componentes avançados", "Estilização e reusabilidade"],
        demo: {
            type: 0,
            href: "/markdown"
        },
        link: "https://github.com/fabric-ui/markdown"
    },
    {
        title: "Rasterização com API Canvas",
        description: `Princípios de rasterização com api Canvas com contexto 2D. `,
        technologies: [
            "ReactJS",
            "API Canvas"
        ],
        patterns: ["Computação gráfica"],
        demo: {
            href: "https://engine-demo.vercel.app/"
        }
    },
    {
        title: "Projection Engine",
        description: `Motor gráfico construído com foco em portabilidade, facilidade de uso e flexibilidade.`,
        technologies: [
            "ReactJS",
            "Webpack",
            "ElectronJS",
            "NodeJS",
            "GLSL",
            "WebGL"
        ],
        patterns: ["Computação gráfica", "Clean code"],
        demo: {
            href: "https://github.com/projection-engine/editor/releases/tag/v0.2.0"
        },
        link: "https://github.com/projection-engine"
    }
]
export default function Projects({setOn}) {

    const router = useRouter()

    return (
        <div className={styles.profile} id={"4"} style={{alignContent: "flex-start"}} data-listen={"-"}>
            <h2>Projetos</h2>

            <Masonry quantityPerRow={2} gap={"16px"} styles={{paddingBottom: "10vh"}}>
                {PROJECTS.map((p, i) => (
                    <div className={styles.projectWrapper} key={i + "-project"}>
                        <h3>{p.title}</h3>
                        <div className={styles.cellDivider}>
                            Descrição
                        </div>
                        <p>
                            {p.description}
                        </p>
                        <div className={styles.cellDivider}>
                            Tecnologias
                        </div>
                        <div className={styles.cells}>
                            {p.technologies.map((t, j) => (
                                <div key={j + "-tech-" + i}>{t}</div>
                            ))}
                        </div>

                        <div className={styles.cellDivider}>
                            Padrões e arquiteturas
                        </div>
                        <div className={styles.cells}>
                            {p.patterns.map((t, j) => (
                                <div key={j + "-patterns-" + i}>{t}</div>
                            ))}
                        </div>
                        <div className={styles.projectFooter}>
                            {p.demo ?
                                p.demo.type === 0 ? (
                                        <Button
                                            className={styles.button}
                                            variant={"filled"}
                                            onClick={() => router.push(p.demo.href)}
                                        >
                                            DEMO
                                        </Button>
                                    )
                                    : <a href={p.demo.href} rel={"noreferrer"} target={"_blank"}>
                                        <Button
                                            className={styles.button}
                                            variant={"filled"}
                                        >
                                            DEMO
                                        </Button>
                                    </a>
                                : null}
                            {p.link ? <a href={p.link} rel={"noreferrer"} target={"_blank"}>Disponível no GitHub</a> : null}
                        </div>

                    </div>
                ))}
            </Masonry>
        </div>
    )
} 