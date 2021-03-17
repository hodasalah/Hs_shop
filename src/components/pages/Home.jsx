import React from "react";
import { CssBaseline } from "@material-ui/core";
import Banner from "../Banner";
import Aboutsec from "../Layout/Aboutsec";
import DealSec from "../Layout/DealSec";
import NewProducts from "../Layout/NewProducts";

const Home = ({ addProduct, products }) => {
    return (
        <>
            <CssBaseline />

            <Banner />

            <Aboutsec />
            <NewProducts products={products} addProduct={addProduct} />
            <DealSec />
        </>
    );
};

export default Home;
