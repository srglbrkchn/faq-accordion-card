import React from "react";
import { useState } from "react";
import Q from "./Q";
import A from "./A";

const QaA = (props) => {
 

    return (
        <div className="qa" onClick={()=> {
            props.open(props.id);
        }}>
            <Q content={props.q} openedQ={props.openedQ} id={props.id} />
            <A content={props.a} openedQ={props.openedQ} id={props.id} />
        </div>
    );

}

export default QaA;