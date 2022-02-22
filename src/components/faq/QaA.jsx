import React from "react";
import {QA} from "../../data";
import Q from "./Q";
import A from "./A";

const QaA = () => {
    return QA.map((qa, index) => {
        return (
            <div key={index} className="qa">
                <Q content={qa.q}/>
                <A content={qa.a}/>
            </div>
        );
    });
}

export default QaA;