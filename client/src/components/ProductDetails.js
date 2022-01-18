import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const ProductDetails = (props) => {
    const { id, deleteProduct } = props;

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="card mx-5 my-2">
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <h4 className="card-subtitle text-muted">$ {product.price}</h4>
                <p className="card-text">{product.description}</p>
                <button
                    className="btn btn-outline-danger mx-5"
                    onClick={(e) => {
                        deleteProduct(product._id);
                        navigate("/");
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
