// import React from "react";
// import ReactDom from "react-dom"
// import App from "./App";
// import { Provider } from "react-redux"
// import store from './store'
// ReactDom.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, document.getElementById('root')
// )

import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import { Provider } from "react-redux"
import store from './store'
const container = document.getElementById('root')
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
