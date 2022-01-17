import React, { useState } from "react";

// components
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";

const Home = (props) => {
    const [products, setProducts] = useState([]);

    return (
        <div>
            <h1 className="text-center">New Product</h1>
            <AddProductForm products={products} setProducts={setProducts} />
            <ProductList products={products} setProducts={setProducts} />
        </div>
    );
};

export default Home;
