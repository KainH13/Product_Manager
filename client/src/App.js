import React from "react";
import { Router } from "@reach/router";

// views
import NewProduct from "./views/NewProduct";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Router>
                <NewProduct path="/" />
            </Router>
        </div>
    );
}

export default App;
