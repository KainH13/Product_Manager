import React from "react";
import { navigate } from "@reach/router";

// components
import DeleteButton from "./DeleteButton";

const ProductDetails = (props) => {
    const { product } = props;

    return (
        <div className="card mx-5 my-2">
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <h4 className="card-subtitle text-muted">$ {product.price}</h4>
                <p className="card-text">{product.description}</p>
                <DeleteButton
                    productID={product._id}
                    successAction={() => navigate("/")}
                />
            </div>
        </div>
    );
};

export default ProductDetails;
