import React from "react";
import Arrow from "../../picsComponents/Arrow.tsx";

const Q = (props)=> {
    const id = props.id;
    const openedQ = props.openedQ;

    let same = 0;
    let designSame = false;

    if(id === openedQ) {
        same = 1;
        designSame = true;
    }

    return (
        <div style={{fontWeight: designSame && 900}} className="q">
           {props.content}
           <Arrow same={same}/>
        </div>
    );
}

export default Q;