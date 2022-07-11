import {useEffect, useRef} from "react";
import IDS from "../public/IDS";
import styles from "../styles/Index.module.css";

export default function Experience() {

    return (
        <div className={styles.profile} data-listen={"-"} id={"3"} style={{ justifyContent: "unset"}}>
            <h2>Experiência</h2>
            <div className={styles.cellDivider}>
                Hard skills
            </div>
            <div className={styles.rangeWrapper}>
                <label>Frontend</label>
                <input type={"range"} disabled={true} max={100} min={0} value={99}/>
            </div>
            <div className={styles.rangeWrapper}>
                <label>Backend</label>
                <input type={"range"} disabled={true} max={100} min={0} value={75}/>
            </div>
            <div className={styles.rangeWrapper}>
                <label>Infraestrutura</label>
                <input type={"range"} disabled={true} max={100} min={0} value={75}/>
            </div>
            <div className={styles.cellDivider}>
                Soft-skills
            </div>
            <div className={styles.rangeWrapper}>
                <label>Resolução de problemas</label>
                <input type={"range"} disabled={true} max={100} min={0} value={95}/>
            </div>
            <div className={styles.rangeWrapper}>
                <label>Capacidade de aprendizado</label>
                <input type={"range"} disabled={true} max={100} min={0} value={95}/>
            </div>
            <div className={styles.rangeWrapper}>
                <label>Capacidade analítica</label>
                <input type={"range"} disabled={true} max={100} min={0} value={95}/>
            </div>
            <div className={styles.rangeWrapper}>
                <label>Comunicação</label>
                <input type={"range"} disabled={true} max={100} min={0} value={65}/>
            </div>
        </div>
    )
} 