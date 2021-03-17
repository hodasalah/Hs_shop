import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "../style.css";
const RelatedProducts = ({ product }) => {
    return (
        <>
            {product && product.related_products.length !== 0 ? (
                product.related_products.map((product) => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <div class="img-wrap">
                            <Link
                                to={{
                                    pathname: `/products/${product.id}`,
                                    state: {
                                        rating: `${Math.ceil(
                                            Math.random() * 5
                                        )}`,
                                    },
                                }}
                            >
                                <img
                                    src={product.media.source}
                                    alt={product.name}
                                />
                            </Link>
                        </div>
                    </Grid>
                ))
            ) : (
                <h5
                    style={{
                        textAlign: "center",
                        color: "#444",
                        width: "100%",
                    }}
                >
                    No Related Products for this product
                </h5>
            )}
        </>
    );
};

export default RelatedProducts;
