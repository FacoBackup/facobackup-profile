import {Markdown, useMarkdown} from "@f-ui/markdown";
import PropTypes from "prop-types";

export default function Document(props) {
    const hook = useMarkdown(props.text)

    return (
        <div style={{padding: '0 15%'}}>
            <Markdown hook={hook}/>
        </div>
    )
}

Document.propTypes={
    text: PropTypes.string
}