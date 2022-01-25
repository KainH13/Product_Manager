import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Home = (props) => {
    // add all products into state
    const [products, setProducts] = useState([]);
    // store errors from backend validation
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
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
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
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
                errors={errors}
            />
            <ProductList
                products={products}
                removeFromDom={removeFromDom}
            />
        </div>
    );
};

export default Home;
