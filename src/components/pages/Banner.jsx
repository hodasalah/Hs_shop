import React from "react";

import "./style.css";

const Banner = (props) => {
    return (
        <div className="Banner-pages">
            <h2 className="Banner-pages__title">{props.children}</h2>
        </div>
    );
};

export default Banner;
