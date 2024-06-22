import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App || Shawon</h1>
        </div>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit google"
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
    "a",
    {href: "https//google.com", target: "_blank"},
    "Visit Googleeeeeee"
)

const anotherUser = "Rakibul"

const shawon = ReactDOM.createRoot(document.getElementById('shawon'))
shawon.render(
  
    <App />
  
)