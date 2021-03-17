import React from "react";
import { List } from "@material-ui/core";
import Items from "./Items";

const MobileNav = () => {
    return (
        <nav className="mobile-nav navbar">
            
            <List>
                <Items />
            </List>
        </nav>
    );
};

export default MobileNav;
