import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Grid container spacing={3} className="ban-container">
                    <Grid item sm={12} className="ban-detail">
                        <Typography className="title" variant="h1">
                            Welcome to Hoda Salah Store Shop
                        </Typography>
                        <Button
                            className="shopping-button"
                            component={Link}
                            to="/products"
                        >
                            Shopping
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;
