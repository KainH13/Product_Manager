import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = (props) => {
    const { id } = props;

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
            </div>
        </div>
    );
};

export default ProductDetails;
