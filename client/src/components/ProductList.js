import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductList = (props) => {
    const { products, setProducts } = props;

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

    return (
        <div>
            {products.map((product, index) => {
                return (
                    <div className="card mx-5 my-2" key={index}>
                        <div className="card-body">
                            <h3 className="card-title">{product.title}</h3>
                            <h4 className="card-subtitle text-muted">$ {product.price}</h4>
                            <p className="card-text">{product.description}</p>
                            <Link className="card-link" to={`/products/${product._id}`}>Details</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default ProductList;
