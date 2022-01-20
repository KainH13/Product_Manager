import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Home = (props) => {
    // add all products into state
    const [products, setProducts] = useState([]);
    // so product list will not try to load before products state is populated
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // product creation logic
    const createProduct = (product) => {
        axios
            .post("http://localhost:8000/api/products", product)
            .then((res) => {
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch((err) => console.log(err));
    };

    // product deletion success action
    const removeFromDom = (productID) => {
        setProducts(products.filter((product) => product._id !== productID));
    };

    return (
        <div>
            <h1 className="text-center">New Product</h1>
            <ProductForm
                initialTitle=""
                initialPrice=""
                initialDescription=""
                onSubmitAction={createProduct}
            />
            {loaded && (
                <ProductList
                    products={products}
                    removeFromDom={removeFromDom}
                />
            )}
        </div>
    );
};

export default Home;
