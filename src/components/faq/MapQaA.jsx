import React from "react";
import {useState} from "react";
import {QA} from "../../data";
import QaA from "./QaA";

const MapQaA = () => {

    const [QANew,
        setQANew] = useState(QA);

    const [openedQ,
        setOpenedQ] = useState(null);

    function open(id) {

        QA.forEach((question) => {
            if (question.id === id) {
                if (question.clicked === false) {
                    question.clicked = true;
                    setOpenedQ(id);
                }else {
                    question.clicked = false;
                    setOpenedQ(null);
                }
            } else {
                question.clicked = false;
            }
        });

        setQANew(QA);
    }

    return (QANew.map((qa, index) => {
        return (<QaA q={qa.q} a={qa.a} key={index} id={index} open={open} openedQ={openedQ}/>);
    }));
}

export default MapQaA;