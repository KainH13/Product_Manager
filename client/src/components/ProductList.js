import React from "react";
import { Link } from "@reach/router";

const ProductList = (props) => {
    const { products, deleteProduct } = props;

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
                            <button
                                className="btn btn-outline-danger mx-5"
                                onClick={(e) => {
                                    deleteProduct(product._id);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
