import React, { useState, useEffect } from "react";
import { Grid, Divider, Container } from "@material-ui/core";
import ProductBadge from "./ProductBadge";
import Spinner from "../Spinner";
import { ArrowRightAltSharp } from "@material-ui/icons";

import "./layout.css";

const NewProducts = ({ products, addProduct }) => {
    const [idWord, setID] = useState("NEW");
    const [New, setNew] = useState([]);
    useEffect(() => {
        const data =
            products &&
            products.sort(() => Math.random() - Math.random()).slice(1, 4);
        setNew(data);
    }, [products, idWord]);

    return (
        <Container>
            <div className="header-sec">
                <h2 className="sec-title">
                    Latest Products
                    <ArrowRightAltSharp />
                </h2>
                <ul className="latest-panel">
                    <li>
                        <a href="#new" onClick={() => setID("NEW")}>
                            New
                        </a>
                    </li>
                    <li>
                        <a href="#feat" onClick={() => setID("Features")}>
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#offer" onClick={() => setID("Offers")}>
                            Offers
                        </a>
                    </li>
                </ul>
            </div>
            <Divider />
            <Grid container spacing={2}>
                {New ? (
                    New.map((product) => (
                        <Grid
                            item
                            key={product.id}
                            md={4}
                            sm={6}
                            xs={12}
                            style={{
                                textAlign: "center",
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <ProductBadge
                                key={product.id}
                                badge={idWord}
                                product={product}
                                idWord={idWord}
                                addProduct={() => addProduct(product.id, 1)}
                            />
                        </Grid>
                    ))
                ) : (
                    <Spinner />
                )}
            </Grid>
        </Container>
    );
};

export default NewProducts;
