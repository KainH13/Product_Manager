import React from "react";

// components
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";

const Home = (props) => {
    const { products, setProducts, deleteProduct } = props;

    return (
        <div>
            <h1 className="text-center">New Product</h1>
            <AddProductForm products={products} setProducts={setProducts} />
            <ProductList
                products={products}
                setProducts={setProducts}
                deleteProduct={deleteProduct}
            />
        </div>
    );
};

export default Home;
