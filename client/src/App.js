import React from "react";
import { Router } from "@reach/router";
import axios from "axios";

// views
import Home from "./views/Home";
import Detail from "./views/Detail";
import Update from "./components/UpdateProduct";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
    // lifted state to be used in functions below
    const [products, setProducts] = useState([]);

    // functions used in more than one view
    const removeFromDom = (productID) => {
        setProducts(products.filter((product) => product._id !== productID));
    };

    const deleteProduct = (productID) => {
        axios
            .delete(`http://localhost:8000/api/products/${productID}`)
            .then((res) => {
                console.log(res.data);
                removeFromDom(productID);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="App">
            <Router>
                <Home
                    path="/"
                    products={products}
                    setProducts={setProducts}
                    deleteProduct={deleteProduct}
                />
                <Detail
                    path="/products/:id"
                    products={products}
                    setProducts={setProducts}
                    deleteProduct={deleteProduct}
                />
                <Update path="/products/update/:id" />
            </Router>
        </div>
    );
}

export default App;
