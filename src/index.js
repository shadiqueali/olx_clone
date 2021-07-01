import React from "react";
import ReactDOM from "react-dom";
import { FirebaseContext } from "./Store/FirebaseContext";
import Context from "./Store/FirebaseContext";
import App from "./App";
import firebase from "./firebase/Config";

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase }}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>,
    document.getElementById("root")
);
