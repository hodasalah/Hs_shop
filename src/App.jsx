import { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { Switch, Route, useHistory } from "react-router-dom";
import { commerce } from "./lib/commerce";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ProductDetails from "./components/Product/Details/ProductDetails";
import Register from "./components/Auth/Register";
import LogIn from "./components/Auth/LogIn";
import ResetPassword from "./components/Auth/ResetPassword";
import Contact from "./components/pages/Contact";

const App = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    const [basketData, setBasketData] = useState({});
    const [orderInfo, setOrderInfo] = useState({});
    const [orderError, setOrderError] = useState("");
    const [categories, setCategories] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchProducts = async () => {
        const limit = 200;
        const response = await commerce.products.list({ limit: limit });
        setProducts((response && response.data) || []);
    };
    const fetchCategories = async () => {
        const response = await commerce.categories.list();
        setCategories(response.data);
    };

    const fetchBasketData = async () => {
        const response = await commerce.cart.retrieve();
        setBasketData(response);
    };

    const addProduct = async (productId, quantity) => {
        const response = await commerce.cart.add(productId, quantity);
        setBasketData(response.cart);
    };

    const RemoveItemFromBasket = async (itemId) => {
        const response = await commerce.cart.remove(itemId);
        setBasketData(response.cart);
    };

    const handleEmptyBasket = async () => {
        const response = await commerce.cart.empty();
        setBasketData(response.cart);
    };

    const updateProduct = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity });
        setBasketData(response.cart);
    };

    const refreshBasket = async () => {
        const newBasketData = await commerce.cart.refresh();
        setBasketData(newBasketData);
    };

    const handleCheckout = async (checkoutId, orderData) => {
        try {
            setOrderInfo(orderData);

            refreshBasket();
        } catch (error) {
            setOrderError(
                (error.data && error.data.error && error.data.error.message) ||
                    "There is an error occurred"
            );
        }
    };

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
        history.push("/");
    };

    useEffect(() => {
        fetchProducts();
        fetchBasketData();
        fetchCategories();
    }, []);

    return (
        <>
            <CssBaseline />
            <NavBar
                basketItems={basketData.total_items}
                totalCost={
                    (basketData.subtotal &&
                        basketData.subtotal.formatted_with_symbol) ||
                    "00.00"
                }
                isLoggedIn={isLoggedIn}
                handleLogin={handleLogin}
            />

            <Switch>
                <Route exact path="/">
                    {isLoggedIn ? (
                        <Home products={products} addProduct={addProduct} />
                    ) : (
                        <LogIn
                            isLoggedIn={isLoggedIn}
                            handleLogin={handleLogin}
                        />
                    )}
                </Route>

                <Route exact path="/signup">
                    <Register />
                </Route>

                <Route exact path="/reset-password">
                    <ResetPassword />
                </Route>
                {isLoggedIn && (
                    <Route exact path="/products">
                        <Products
                            products={products}
                            addProduct={addProduct}
                            categories={categories}
                        />
                    </Route>
                )}
                {isLoggedIn && (
                    <Route exact path={`/products/:id`}>
                        <ProductDetails
                            products={products}
                            addProduct={addProduct}
                        />
                    </Route>
                )}
                {isLoggedIn && <Route path="/contact" component={Contact} />}
                {isLoggedIn && <Route path="/about" component={About} />}
                {isLoggedIn && (
                    <Route exact path="/basket">
                        <Basket
                            basketData={basketData}
                            updateProduct={updateProduct}
                            handleEmptyBasket={handleEmptyBasket}
                            RemoveItemFromBasket={RemoveItemFromBasket}
                        />
                    </Route>
                )}
                {isLoggedIn && (
                    <Route exact path="/checkout">
                        <Checkout
                            orderInfo={orderInfo}
                            orderError={orderError}
                            basketData={basketData}
                            handleCheckout={handleCheckout}
                        />
                    </Route>
                )}
                <Route
                    render={() => (
                        <h1
                            style={{
                                fontSize: "100px",
                                margin: "50px auto",
                                textAlign: "center",
                                color: "#e12128",
                            }}
                        >
                            404 Not Found
                        </h1>
                    )}
                />
            </Switch>

            <Footer />
        </>
    );
};

export default App;
