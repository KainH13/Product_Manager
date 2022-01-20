import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
    const { productID, successAction } = props;

    const deleteProduct = (e) => {
        axios
            .delete(`http://localhost:8000/api/products/${productID}`)
            .then((res) => {
                console.log(res.data);
                successAction();
            })
            .catch((err) => console.log(err));
    };

    return (
        <button className="btn btn-outline-danger mx-5" onClick={deleteProduct}>
            Delete
        </button>
    );
};

export default DeleteButton;
