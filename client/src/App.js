import React from "react";
import { Router } from "@reach/router";

// views
import Home from "./views/Home";
import Detail from "./views/Detail";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Home path="/" />
                <Detail path="/products/:id" />
            </Router>
        </div>
    );
}

export default App;
