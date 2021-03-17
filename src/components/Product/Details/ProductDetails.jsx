import React from "react";
import { useLocation, useParams, withRouter } from "react-router";
import {
    Container,
    Grid,
    Typography,
    Button,
    Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/index.js";
import Stars from "../../Stars/Stars";
import RelatedProducts from "./RelatedProducts.jsx";

const ProductDetails = ({ products, addProduct, ...props }) => {
    let { id } = useParams();
    let { state } = useLocation();

    const product = products.find((prod) => prod.id === id);

    /**
     * another way to get product
     * const [product, setProduct] = useState({});
     useEffect(() => {
        const fetchSingleProduct = async (id) => {
            const p = await commerce.products.retrieve(id);
            setProduct(p);
        };
        fetchSingleProduct(id);
        return () => fetchSingleProduct(id);
    }, [id]); */

    return (
        <Container>
            {product ? (
                <Grid container spacing={4}>
                    <div
                        className="header-sec"
                        style={{
                            margin: "50px 0",
                            textAlign: "center",
                            display: "block",
                        }}
                    >
                        <Typography variant="h2" className="sec-title">
                            Product Details
                        </Typography>
                    </div>
                    <Grid item md={6} sm={6} xs={12}>
                        <div style={{ maxWidth: "550px", padding: "40px" }}>
                            <img
                                src={
                                    product.media
                                        ? product.media.source
                                        : "./img.png"
                                }
                                alt={product.name}
                                style={{ width: "100%", maxWidth: "100%" }}
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} style={{ width: "100%" }}>
                        <div>
                            <Typography
                                variant="h4"
                                style={{
                                    color: "#323232",
                                    fontWeight: "700",
                                }}
                            >
                                {product.name}
                            </Typography>
                            <div style={{ margin: "5px 0" }}>
                                <Stars rating={state.rating} />
                            </div>

                            <Typography
                                variant="h5"
                                style={{
                                    color: "#e12128",
                                    fontWeight: "700",
                                }}
                            >
                                {product.price.formatted_with_symbol}
                            </Typography>
                            <Divider />
                        </div>
                        <ul style={{ margin: "30px 0" }}>
                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    style={{
                                        color: "#555",
                                        fontWeight: "700",
                                    }}
                                >
                                    Category:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{
                                        color: "#666",
                                        fontWeight: "400",
                                        margin: "0 15px -5px",
                                    }}
                                >
                                    {product.categories[0].name}
                                </Typography>
                            </li>

                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "5px",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    style={{
                                        color: "#555",
                                        fontWeight: "700",
                                    }}
                                >
                                    Code:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{
                                        color: "#666",
                                        fontWeight: "400",
                                        margin: "0 15px 0px",
                                    }}
                                >
                                    {product.permalink}
                                </Typography>
                            </li>

                            <li
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    style={{
                                        color: "#555",
                                        fontWeight: "700",
                                    }}
                                >
                                    Availability:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{
                                        color: "#666",
                                        fontWeight: "400",
                                        margin: "0 15px -5px",
                                    }}
                                >
                                    In Stock
                                </Typography>
                            </li>
                        </ul>
                        <Divider />
                        <div style={{ margin: "30px 0" }}>
                            <Typography
                                variant="body1"
                                style={{
                                    color: "#666",
                                    fontWeight: "400",
                                }}
                            >
                                More room to move. With 80GB or 160GB of storage
                                and up to 40 hours of battery life, the new iPod
                                classic lets you enjoy up to 40,000 songs or up
                                to 200 hours of video or any combination
                                wherever you go. Cover Flow. Browse through your
                                music collection by flipping..
                            </Typography>
                        </div>
                        <div className="actions">
                            <Button
                                size="medium"
                                component={Link}
                                to="/products"
                                variant="contained"
                                style={{
                                    background: "#f7f7f7",
                                    color: " #e12128",
                                    border: "2px solid #e12128",
                                    fontSize: "15px",
                                    marginRight: "5px",
                                }}
                            >
                                Go Back
                            </Button>
                            <Button
                                size="medium"
                                variant="contained"
                                style={{
                                    background: "#e12128",
                                    color: "#f7f7f7",
                                    fontSize: "15px",
                                }}
                                onClick={() => addProduct(product.id, 1)}
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            ) : (
                <Spinner />
            )}
            <Grid
                container
                spacing={2}
                style={{ margin: "40px 0", justifyContent: "center" }}
            >
                <div
                    className="header-sec"
                    style={{
                        margin: "50px 0",
                    }}
                >
                    <Typography variant="h4" className="sec-title">
                        Related Products
                    </Typography>
                </div>
                <RelatedProducts product={product} />
            </Grid>
        </Container>
    );
};

export default withRouter(ProductDetails);
