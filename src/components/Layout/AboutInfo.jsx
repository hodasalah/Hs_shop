import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import TrendingUpSharpIcon from "@material-ui/icons/TrendingUpSharp";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import "./layout.css";

const AboutInfo = () => {
    return (
        <Container>
            <Grid container className="info-wrapper">
                <Grid
                    item
                    md={4}
                    sm={6}
                    xs={12}
                    className="item-info header-sec"
                >
                    <Typography variant="h2" className="">
                        Start your journey
                    </Typography>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="item-info">
                    <Typography variant="body2">01.</Typography>
                    <Typography variant="h4">Our Agency</Typography>
                    <Typography variant="body2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English
                    </Typography>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="item-info">
                    <Typography variant="body2">02.</Typography>
                    <Typography variant="h4">Our Goal</Typography>
                    <Typography variant="body2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English
                    </Typography>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="item-info">
                    <Typography variant="body2">03.</Typography>
                    <Typography variant="h4">Our Vision</Typography>
                    <Typography variant="body2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English
                    </Typography>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="item-info">
                    <Typography variant="body2">03.</Typography>
                    <Typography variant="h4">Our Mission</Typography>
                    <Typography variant="body2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English
                    </Typography>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="item-info">
                    <Typography variant="body2">05.</Typography>
                    <Typography variant="h4">Quality Policy</Typography>
                    <Typography variant="body2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className="info-wrapper-2">
                <Grid item md={4} sm={6} xs={12} className="item-info">
                    <Typography variant="h5" className="">
                        {" "}
                        About Agency
                    </Typography>
                    <div className="about-icon">
                        <img src="hoda.png" alt="our logo" />
                        <Typography variant="h4">Store Shop</Typography>
                    </div>
                </Grid>
                <Grid item md={8} sm={6} xs={12} className="item-info">
                    <Grid container>
                        <Grid item md={6} xs={12}>
                            <div className="about-icon ">
                                <TrendingUpSharpIcon />
                                <Typography variant="h4">13</Typography>
                            </div>
                            <Typography variant="body2">
                                Years of experience
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div className="about-icon ">
                                <LocalMallOutlinedIcon />
                                <Typography variant="h4">100000</Typography>
                            </div>
                            <Typography variant="body2">
                                Successful Selling
                            </Typography>
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <div className="about-icon ">
                                <GroupOutlinedIcon />
                                <Typography variant="h4">1000</Typography>
                            </div>
                            <Typography variant="body2">New Clients</Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div className="about-icon ">
                                <WhatshotOutlinedIcon />
                                <Typography variant="h4">30000</Typography>
                            </div>
                            <Typography variant="body2">
                                Testimonials Receives{" "}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutInfo;
