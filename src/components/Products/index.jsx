import React, { useState } from "react";
import {
    Grid,
    Container,
    Divider,
    Tab,
    Tabs,
    makeStyles,
} from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";
import { ArrowRightAltSharp } from "@material-ui/icons";
import TabPanel from "./TabPanel";
import "./style.css";

const Products = ({ products, addProduct, categories }) => {
    /** useStyles Settings */
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            height: 224,
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        },
    }));
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            "aria-controls": `vertical-tabpanel-${index}`,
        };
    }

    const classes = useStyles();

    /** define State for index tab */
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const prodctsByCat = categories.map((cat) => {
        return products.filter(
            (prod, i) =>
                prod.categories[0].id === cat.id ||
                prod.categories[1].id === cat.id
        );
    });

    

    if (!products.length) return <Spinner />;

    return (
        <>
            <Container id="products">
                <div className="header-sec">
                    <h2 className="sec-title">
                        Products List
                        <ArrowRightAltSharp />
                    </h2>
                </div>
                <Divider />
                <Grid container spacing={2}>
                    <Grid
                        item
                        lg={2}
                        md={2}
                        sm={12}
                        xs={12}
                        style={{ borderRadius: "7px", textAlign: "center" }}
                    >
                        <h4 className="cat-title">Categories</h4>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={[classes.tabs, "tabs-container"].join(
                                " "
                            )}
                        >
                            {categories.map((cat, i) => {
                                const index = i;
                                return (
                                    <Tab
                                        label={cat.name}
                                        {...a11yProps(index)}
                                        key={cat.name}
                                    />
                                );
                            })}
                        </Tabs>
                    </Grid>

                    <Grid item lg={10} md={10} sm={12} xs={12}>
                        <Grid container spacing={2}>
                            {prodctsByCat.map((prod, i) => {
                                const index = i;
                                return prod.map((prod) => {
                                    const rating = Math.ceil(Math.random() * 5);
                                    prod.rating = rating;
                                    return (
                                        <TabPanel
                                            value={value}
                                            index={index}
                                            key={prod.id}
                                        >
                                            <Product
                                                product={prod}
                                                addProduct={addProduct}
                                                rating={prod.rating}
                                            />
                                        </TabPanel>
                                    );
                                });
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Products;
