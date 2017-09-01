import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Chrome from './pages/Chrome.jsx'
import { configureStore } from './store/'


// remove loading screen
const loading = document.getElementById('loading-screen');
if (loading) loading.parentNode.removeChild(loading);

const div = document.createElement('div')
div.id = 'root'
div.className = 'app-root'
document.body.appendChild(div)

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Chrome />
    </Provider>,
    div
)

