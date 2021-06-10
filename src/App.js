import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <h2>Let's build a hotel website</h2>
        </div>
       
    )
}

export default App
