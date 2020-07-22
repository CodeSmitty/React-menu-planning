import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/rootStore'

import App from "./components/App";

ReactDOM.render(
  <div>

      <Provider store={store}> 
      <BrowserRouter>
          <App />
      </BrowserRouter>
      </Provider>
   
      
  </div>,
  document.getElementById("root")
);
