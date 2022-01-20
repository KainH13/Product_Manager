import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import ProductDetails from "../components/ProductDetails";

const Detail = (props) => {
    const { id } = props;

    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1 className="text-center">Product Details</h1>
            {loaded && <ProductDetails product={product} />}
        </div>
    );
};

export default Detail;
