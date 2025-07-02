import React from 'react'
import { createRoot } from 'react-dom/client'
import Pizza from './Pizza'

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza, {
                name: "pepperoni pizza",
                description:"delicious"
            }),
            React.createElement(Pizza, {
                name: "supreme pizza",
                description:"delicious 2"
            }),
            React.createElement(Pizza, {
                name: "Americano pizza",
                description:"delicious"
            }),
            React.createElement(Pizza, {
                name: "hawaian",
                description:"delicious"
            }),
            
        ]
        
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(React.createElement(App))