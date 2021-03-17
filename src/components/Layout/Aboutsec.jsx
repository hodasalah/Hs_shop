import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { ArrowRightAltSharp } from "@material-ui/icons";
import "./layout.css";

const Aboutsec = () => {
    return (
        <div className="about-sec">
            <Container>
                <div className="header-sec">
                    <h2 className="sec-title">
                        About our company
                        <ArrowRightAltSharp />
                    </h2>
                </div>
                <Grid container className="widthVW">
                    <Grid item md={6} sm={12} className="about-info">
                        <Typography variant="h4">
                            you're going to fall in love with nature
                        </Typography>
                        <Typography className="paragraph" variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ipsa odit quo est quasi soluta culpa iusto
                            voluptatum sapiente sit expedita, exercitationem
                            aliquam ut beatae asperiores dolor libero tenetur
                            non mollitia.
                        </Typography>
                        <Typography variant="h5">
                            you're going to fall in love with nature
                        </Typography>
                        <Typography
                            className="paragraph"
                            variant="body2"
                            gutterBottom
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ipsa odit quo est quasi soluta culpa iusto
                            voluptatum sapiente sit expedita, exercitationem
                            aliquam ut beatae asperiores dolor libero tenetur
                            non mollitia.
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={12} className="widthVW">
                        <div className="composition">
                            <img src="/assets/about1.jpg" alt="about1" />
                            <img src="/assets/about2.jpg" alt="about2" />
                            <img src="/assets/about3.jpg" alt="about3" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Aboutsec;
