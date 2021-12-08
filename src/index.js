import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
