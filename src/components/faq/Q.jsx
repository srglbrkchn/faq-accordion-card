import React from "react";
import Arrow from "../../picsComponents/Arrow.tsx";

const Q = (props)=> {
    return (
        <div className="q">
           {props.content}
           <Arrow />
        </div>
    );
}

export default Q;