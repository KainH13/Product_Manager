import React from "react";

// components
import ProductDetails from "../components/ProductDetails";

const Home = (props) => {
    const { id } = props;

    return (
        <div>
            <h1 className="text-center">Product Details</h1>
            <ProductDetails id={id}/>
        </div>
    );
};

export default Home;
