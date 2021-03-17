import React from "react";
import { Link } from "react-router-dom";

const ProductBadge = ({ badge, product, idWord, addProduct }) => {
    let bg = "#e12128";
    if (idWord === "Features") {
        bg = "#3399ff";
    }
    if (idWord === "Offers") {
        bg = "#777";
    }
    return (
        <>
            <div className="product-img" onClick={addProduct}>
                <img src={product.media.source} alt={product.description} />

                <div className="new-badge">
                    <span style={{ background: bg }}>{badge}</span>
                </div>
                <div className="product-caption">
                    <h5 style={{ textTransform: "uppercase" }}>
                        <Link to="/">{product.name}</Link>
                    </h5>
                    <div className="price">
                        {idWord === "Offers" ? (
                            <ul>
                                <li>
                                    $
                                    {(
                                        Number(product.price.raw) -
                                        Number(product.price.raw) / 10
                                    ).toFixed(2)}
                                </li>
                                <li className="discount">
                                    {product.price.formatted_with_symbol}
                                </li>
                            </ul>
                        ) : (
                            <h4>{product.price.formatted_with_symbol}</h4>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductBadge;
