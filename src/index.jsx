import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import {BrowserRouter} from "react-router";
import {App} from "./App.jsx";
import {Provider} from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter>
                <App/>
          </BrowserRouter>
      </Provider>
  </StrictMode>,
)
