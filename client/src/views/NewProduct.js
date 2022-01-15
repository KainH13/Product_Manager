import React from "react";

// components
import AddProductForm from "../components/AddProductForm";

const NewProduct = (props) => {

    return (
        <div>
            <h1 className="text-center">New Product</h1>
            <AddProductForm />
        </div>
    );
};

export default NewProduct;
