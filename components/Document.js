import styles from '../styles/Markdown.module.css'
import {Markdown, useMarkdown} from "@f-ui/markdown";
import PropTypes from "prop-types";

export default function Document(props) {
    const hook = useMarkdown(props.text)

    return (
        <div className={styles.document}>
            <Markdown hook={hook} className={styles.documentContent}/>
        </div>
    )
}

Document.propTypes={
    text: PropTypes.string
}