import {Markdown, useMarkdown} from "@f-ui/markdown";
import PropTypes from "prop-types";

export default function Document(props) {
    const hook = useMarkdown(props.text)

    return (
        <div style={{padding: '0 20%'}}>
            <div style={{background: "var(--fabric-background-primary)", borderRadius: "3px", padding: "8px 12px"}}>
            <Markdown hook={hook} />
            </div>
        </div>
    )
}

Document.propTypes={
    text: PropTypes.string
}