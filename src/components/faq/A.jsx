import React from "react";

const A = (props)=> {
    const id = props.id;
    const openedQ = props.openedQ;

    let same = false;

    if(id === openedQ) {
        same = true;
    }

    return(
        <div style={{display: same && "flex"}} className="a">
            {props.content}
        </div>
    )
}

export default A;