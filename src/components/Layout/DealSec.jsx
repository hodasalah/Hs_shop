import React from "react";
import { Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./layout.css";
import { ArrowRightAlt, ArrowRightAltSharp } from "@material-ui/icons";

const DealSec = () => {
    return (
        <Container>
            <Grid container spacing={4}>
                <div className="header-sec">
                    <h2 className="sec-title">
                        Check our Deals
                        <ArrowRightAltSharp />
                    </h2>
                </div>

                <Grid item xl={6} md={6} sm={12}>
                    <div
                        className="deal"
                        style={{
                            backgroundImage: "url('assets/bg-1.jpg')",
                        }}
                    >
                        <div className="deal-top">
                            <h4>Deal of the Day.</h4>
                            <h5>Limited quantities.</h5>
                        </div>

                        <div className="deal-content">
                            <h6 className="product-title">
                                <Link to="/">
                                    Home Smart Speaker with Google Assistant
                                </Link>
                            </h6>

                            <div className="product-price">
                                <span className="new-price">$129.00</span>
                                <span className="old-price">Was $150.99</span>
                            </div>

                            <Link to="/" className="btn btn-link">
                                <span>Shop Now</span>
                                <ArrowRightAlt />
                            </Link>
                        </div>

                        <div className="deal-bottom">
                            <div className="deal-countdown" data-until="+10h">
                                <span className="countdown-row countdown-show3">
                                    <span className="countdown-section">
                                        <span className="countdown-amount">
                                            09
                                        </span>
                                        <span className="countdown-period">
                                            hours
                                        </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount">
                                            57
                                        </span>
                                        <span className="countdown-period">
                                            minutes
                                        </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount">
                                            44
                                        </span>
                                        <span className="countdown-period">
                                            seconds
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xl={6} md={6} sm={12}>
                    <div
                        className="deal"
                        style={{
                            backgroundImage: "url('assets/bg-2.jpg')",
                        }}
                    >
                        <div className="deal-top">
                            <h4>Deal of the Day.</h4>
                            <h5>Limited quantities.</h5>
                        </div>

                        <div className="deal-content">
                            <h6 className="product-title">
                                <Link to="/">
                                    Home Smart Speaker with Google Assistant
                                </Link>
                            </h6>

                            <div className="product-price">
                                <span className="new-price">$129.00</span>
                                <span className="old-price">Was $150.99</span>
                            </div>

                            <Link to="/" className="btn btn-link">
                                <span>Shop Now</span>
                                <ArrowRightAlt />
                            </Link>
                        </div>

                        <div className="deal-bottom">
                            <div className="deal-countdown" data-until="+10h">
                                <span className="countdown-row countdown-show3">
                                    <span className="countdown-section">
                                        <span className="countdown-amount">
                                            09
                                        </span>
                                        <span className="countdown-period">
                                            hours
                                        </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount">
                                            57
                                        </span>
                                        <span className="countdown-period">
                                            minutes
                                        </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount">
                                            44
                                        </span>
                                        <span className="countdown-period">
                                            seconds
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DealSec;
