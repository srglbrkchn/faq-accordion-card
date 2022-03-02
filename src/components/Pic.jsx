import React from "react";
import SvgWomanDesktop from "../picsComponents/WomanDesktop.tsx";
import BoxDesktop from "../picsComponents/BoxDesktop.tsx";
import PatternDesktop from "../picsComponents/PatternDesktop.tsx";

const Pic = (props) => {
    return (
        <div className="pic-frame">
            <div className="pic">
                <PatternDesktop/>
                <SvgWomanDesktop/>
            </div>
            <BoxDesktop/>
        </div>

    );
}

export default Pic;