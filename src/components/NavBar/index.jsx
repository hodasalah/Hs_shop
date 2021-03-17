import { useEffect, useState } from "react";
import {
    Container,
    IconButton,
    Badge,
    Typography,
    List,
    Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Items from "./Items";
import MobileNav from "./MobileNav";

import "./style.css";

const NavBar = ({ basketItems, totalCost, isLoggedIn, handleLogin }) => {
    const [showAlert, setShowAlert] = useState(true);

    const location = useLocation();

    let data = localStorage.user ? JSON.parse(localStorage.user) : "";
    let fullName = data.firstName + " " + data.lastName;
    useEffect(() => {
        isLoggedIn && setShowAlert(true);
    }, [isLoggedIn]);

    const handleAlert = () => {
        setShowAlert(false);
    };
    let success = (
        <>
            <Alert variant="filled" severity="success" className="hoda">
                <Typography>Welcome {fullName} </Typography>
                <button onClick={handleAlert}>X</button>
            </Alert>
        </>
    );

    return (
        <>
            {isLoggedIn ? showAlert && success : null}
            <nav position="fixed" className="custom-navbar">
                <div className="nav-wrap">
                    <Container className="nav-wrap desktop">
                        <Typography
                            component={Link}
                            to="/"
                            variant="h6"
                            className="custom-title"
                            color="inherit"
                        >
                            <img
                                src="Hoda.png"
                                alt="Hoda logo"
                                height="25px"
                                className="logo"
                            />
                            <Typography
                                style={{ color: "#e12128", fontWeight: "bold" }}
                            >
                                Shop
                            </Typography>
                        </Typography>

                        {isLoggedIn ? (
                            <>
                                <div className="nav-container mobile-container">
                                    <List className="main-nav navbar">
                                        <Items />
                                    </List>
                                    {isLoggedIn ? (
                                        <Button
                                            className="button"
                                            onClick={handleLogin}
                                        >
                                            {" "}
                                            Sign out
                                        </Button>
                                    ) : (
                                        ""
                                    )}

                                    {location.pathname === "/basket" ? (
                                        <div className="basket-wrapper">
                                            <h4>
                                                Total:{" "}
                                                <strong>{totalCost}</strong>
                                            </h4>
                                        </div>
                                    ) : (
                                        <div className="basket-wrapper">
                                            <IconButton
                                                component={Link}
                                                to="/basket"
                                                aria-label="Show basket contents"
                                                color="inherit"
                                            >
                                                <Badge
                                                    badgeContent={basketItems}
                                                    color="secondary"
                                                >
                                                    <ShoppingCart className="custom-basket" />
                                                </Badge>
                                            </IconButton>
                                        </div>
                                    )}
                                </div>
                                <div className="nav-toggle">
                                    <input
                                        type="checkbox"
                                        id="nav-btn"
                                        className="nav-checkbox"
                                    />
                                    <label
                                        htmlFor="nav-btn"
                                        className="nav-button"
                                    >
                                        <span />
                                    </label>
                                    <MobileNav />
                                </div>
                            </>
                        ) : (
                            <Typography
                                style={{
                                    color: "#e12128",
                                    fontSize: "12px",
                                    textAlign: "right",
                                }}
                            >
                                Please Log In To Continue
                            </Typography>
                        )}
                    </Container>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
