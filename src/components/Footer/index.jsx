import "./style.css";
import {
    Container,
    Grid,
    Typography,
    List,
    Divider,
    makeStyles,
    ListItem,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));
const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    const classes = useStyles();

    return (
        <footer className="footer">
            <Container className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Typography variant="h6" className="footer-logo">
                            HS Store Shop
                        </Typography>

                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit sed do eiusmod tempor incididunt ut labore.
                        </Typography>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Typography variant="h4">Quick Links</Typography>
                        <List>
                            <ListItem>
                                <Typography component={Link} to="/about">
                                    <ArrowForwardIosIcon />
                                    About
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/about">
                                    <ArrowForwardIosIcon />
                                    Offers & Discounts
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/about">
                                    <ArrowForwardIosIcon />
                                    Get Coupon
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/about">
                                    <ArrowForwardIosIcon />
                                    Contact Us
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Typography variant="h4">New Products</Typography>
                        <List>
                            <ListItem>
                                <Typography component={Link} to="/">
                                    <ArrowForwardIosIcon />
                                    Computer Accessories
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/">
                                    <ArrowForwardIosIcon />
                                    LapTops & Tablets
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/">
                                    <ArrowForwardIosIcon />
                                    Fitness Watches
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/">
                                    <ArrowForwardIosIcon />
                                    Techs and Electronics
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Typography variant="h4">Support</Typography>
                        <List>
                            <ListItem>
                                <Typography component={Link} to="/">
                                    <ArrowForwardIosIcon />
                                    Frequently Asked Questions
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/">
                                    <ArrowForwardIosIcon />
                                    Terms & Conditions
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/">
                                    <ArrowForwardIosIcon />
                                    Privacy Policy
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography component={Link} to="/">
                                    <ArrowForwardIosIcon />
                                    Report a Payment Issue
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

                <Divider style={{ backgroundColor: "rgba(256,256,256,0.1)" }} />
                {/* copyRight footer */}
                <Grid container spacing={2} className="copyRight">
                    <Grid item xl={9} lg={7} md={7} sm={7} xs={12}>
                        <Typography variant="body2">
                            Copyright &copy; All rights reserved | This template
                            is made with
                            <FavoriteBorderTwoToneIcon />
                            by{" "}
                            <a href="mailTo:hodasalah35@gmail.com">
                                Hoda Salah
                            </a>
                            &nbsp;
                            {fullYear}
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={5} md={5} sm={5} xs={12}>
                        <div className="footer-social">
                            <Link to="/">
                                <TwitterIcon />
                            </Link>
                            <Link to="/">
                                <FacebookIcon />
                            </Link>
                            <Link to="/">
                                <GitHubIcon />
                            </Link>
                            <Link to="/">
                                <LinkedInIcon />
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
