import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

// components
import ProductForm from "../components/ProductForm";

const Update = (props) => {
    const { id } = props;

    // Get product to update
    const [product, setProduct] = useState();
    // so page will not load before data is in product state
    const [loaded, setLoaded] = useState(false);
    // store errors for validation failures
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Product update logic
    const updateProduct = (product) => {
        axios
            .put(`http://localhost:8000/api/products/${id}`, product)
            .then((res) => console.log(res))
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });

        navigate("/");
    };

    return (
        <div>
            <h1 className="text-center">Update Product Info</h1>
            {loaded && (
                <ProductForm
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                    onSubmitAction={updateProduct}
                    errors={errors}
                />
            )}
        </div>
    );
};

export default Update;
