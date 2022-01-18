import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Update = (props) => {
    const { id } = props;

    // state holding current values
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/${id}`, {
                title,
                price,
                description,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        navigate("/");
    };

    return (
        <div className="border rounded p-2 m-5">
            <h2 className="text-center">Add a Product</h2>
            <form onSubmit={updateProduct}>
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
    )
};

export default Update;
