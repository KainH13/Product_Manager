import React, { useState } from "react";

const ProductForm = (props) => {
    const {
        initialTitle,
        initialPrice,
        initialDescription,
        onSubmitAction,
        errors,
    } = props;

    // form values
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    // form submission
    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitAction({
            title,
            price,
            description,
        });

        // clear form fields for a new entry
        setTitle("");
        setPrice("");
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
                    {errors.title ? (
                        <div className="alert alert-danger my-1">
                            {errors.title.message}
                        </div>
                    ) : null}
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
                    {errors.price ? (
                        <div className="alert alert-danger my-1">
                            {errors.price.message}
                        </div>
                    ) : null}
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
                    {errors.description ? (
                        <div className="alert alert-danger my-1">
                            {errors.description.message}
                        </div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
