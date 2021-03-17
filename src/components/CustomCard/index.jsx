import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import "./style.css";

const CustomCard = ({
    basket,
    product,
    addProduct,
    updateProduct,
    RemoveItemFromBasket,
    rating,
}) => {
    return (
        <>
            <Card className="custom-card">
                <CardActionArea>
                    {!basket ? (
                        <Link
                            to={{
                                pathname: `/products/${product.id}`,
                                state: { rating: rating },
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="260"
                                className="card-image"
                                image={product.media.source}
                                title="Contemplative Reptile"
                            />
                        </Link>
                    ) : (
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="260"
                            className="card-image"
                            image={product.media.source}
                            title="Contemplative Reptile"
                        />
                    )}

                    <CardContent className="content">
                        <Typography className="title" gutterBottom variant="h5">
                            {product.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {basket && (
                    <CardActions>
                        <Typography
                            className="basket-item-price"
                            gutterBottom
                            variant="h5"
                        >
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </CardActions>
                )}
                {!basket && (
                    <div style={{ textAlign: "center" }}>
                        <Stars rating={product.rating} />
                    </div>
                )}

                <CardActions className="actions-content">
                    {!basket && (
                        <>
                            <Typography
                                className="price"
                                gutterBottom
                                variant="h6"
                            >
                                {product.price.formatted_with_symbol}
                            </Typography>
                            <Button
                                size="medium"
                                className="custom-button"
                                onClick={() => {
                                    addProduct(product.id, 1);
                                }}
                            >
                                <ShoppingCart />
                                <span className="text-btn">Add to basket</span>
                            </Button>
                        </>
                    )}
                    {basket && (
                        <>
                            <Button
                                size="small"
                                className="product-quantity"
                                variant="contained"
                                onClick={() => {
                                    RemoveItemFromBasket(product.id);
                                }}
                            >
                                Remove
                            </Button>
                            <>
                                <Button
                                    size="small"
                                    variant="contained"
                                    className="product-quantity"
                                    onClick={() => {
                                        updateProduct(
                                            product.id,
                                            product.quantity + 1
                                        );
                                    }}
                                >
                                    +
                                </Button>
                                <Typography>
                                    &nbsp;{product.quantity}&nbsp;
                                </Typography>
                                <Button
                                    size="small"
                                    className="product-quantity"
                                    variant="contained"
                                    onClick={() => {
                                        updateProduct(
                                            product.id,
                                            product.quantity - 1
                                        );
                                    }}
                                >
                                    -
                                </Button>
                            </>
                        </>
                    )}
                </CardActions>
            </Card>
        </>
    );
};

export default CustomCard;
