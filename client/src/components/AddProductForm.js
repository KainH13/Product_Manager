import React, { useState } from "react";
import axios from "axios";

const AddProductForm = (props) => {
    // form values
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    // form submission
    const submitHandler = (e) => {
        e.preventDefault();

        // send new product data to server for storage
        axios
            .post("http://localhost:8000/api/products", {
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // clear form fields for a new entry
        setTitle("");
        setPrice(0);
        setDescription("");
    };

    return (
        <div className="border rounded p-2 m-5">
            <h2 className="text-center">Add a Product</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Price" className="form-label">
                        Price:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="Price"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <textarea
                        className="form-control"
                        name="description"
                        id="workout"
                        cols="30"
                        rows="3"
                        wrap="hard"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
