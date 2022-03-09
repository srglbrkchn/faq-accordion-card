import React from "react";
import SvgWomanDesktop from "../picsComponents/WomanDesktop.tsx";
import BoxDesktop from "../picsComponents/BoxDesktop.tsx";
import PatternDesktop from "../picsComponents/PatternDesktop.tsx";
import PatternMobile from "../picsComponents/PatternMobile.tsx";
import WomanMobile from "../picsComponents/WomanMobile.tsx";

const Pic = (props) => {
    return (
        <div className="pic-frame">
            <div className="pic">
                <PatternDesktop/>
                <SvgWomanDesktop/>

                {/* For Tablet/Mobile design */}
                <PatternMobile />
                <WomanMobile />
            </div>
            <BoxDesktop/>
        </div>

    );
}

export default Pic;