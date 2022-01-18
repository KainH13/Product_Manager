import React from "react";

// components
import UpdateProduct from "../components/UpdateProduct";

const Update = (props) => {
    const { id } = props;

    return (
        <div>
            <h1 className="text-center">Update Product Info</h1>
            <UpdateProduct id={id} />
        </div>
    );
};

export default Update;