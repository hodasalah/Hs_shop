import React from "react";
import { ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Items = () => {
    const location = useLocation();
    
    return (
        <>
            <ListItem>
                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                >
                    ABOUT
                </Link>
            </ListItem>

            <ListItem>
                <Link
                    to="/products"
                    className={
                        location.pathname === "/products" ? "active" : ""
                    }
                >
                    Products
                </Link>
            </ListItem>

            <ListItem>
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "active" : ""}
                >
                    CONTACT
                </Link>
            </ListItem>
        </>
    );
};

export default Items;
