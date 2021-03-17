import CustomCard from "../CustomCard";

const Product = ({
    basket,
    product,
    addProduct,
    RemoveItemFromBasket,
    rating,
}) => {
    return (
        <CustomCard
            basket={basket}
            product={product}
            addProduct={addProduct}
            RemoveItemFromBasket={RemoveItemFromBasket}
            rating={rating}
        />
    );
};

export default Product;
