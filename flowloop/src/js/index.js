import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Chrome from './pages/Chrome'
import { configureStore } from './store/'

const div = document.createElement('div')
div.id = 'root'
div.className = 'app-root'
document.body.appendChild(div)

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Chrome />
    </Provider>,
    // render to this element
    div
)

