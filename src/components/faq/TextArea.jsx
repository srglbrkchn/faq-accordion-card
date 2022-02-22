import React from "react";
import Heading from "./Heading";
import QaA from "./QaA";

const TextArea = ()=> {
    return (
        <div className="text-area"> 
            <Heading content="FAQ" />
            <QaA />
        </div>
    );
}

export default TextArea;