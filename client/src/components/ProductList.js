import React from "react";
import { Link } from "@reach/router";

// components
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
    const { products, removeFromDom } = props;

    return (
        <div>
            {products.map((product, index) => {
                return (
                    <div className="card mx-5 my-2" key={index}>
                        <div className="card-body">
                            <h3 className="card-title">{product.title}</h3>
                            <h4 className="card-subtitle text-muted">
                                $ {product.price}
                            </h4>
                            <p className="card-text">{product.description}</p>
                            <Link
                                className="card-link"
                                to={`/products/${product._id}`}
                            >
                                Details
                            </Link>
                            <Link
                                className="card-link"
                                to={`/products/update/${product._id}`}
                            >
                                Update
                            </Link>
                            <DeleteButton
                                productID={product._id}
                                successAction={() => removeFromDom(product._id)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
