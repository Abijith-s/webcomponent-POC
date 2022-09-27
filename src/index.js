import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import reactToWebComponent from 'react-to-webcomponent'
import App from './App'
import StoreService from './services/storeSerices';
const store = StoreService.configureStore();

const index = () => {
  return (
    <div className='container'>
     <Provider store={store}>
      <App />
    </Provider>
    </div>
  )
}

customElements.define('my-com', reactToWebComponent(index, React, ReactDOM));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);