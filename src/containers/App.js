import React, { Component } from 'react'
import {Link} from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <h2>App</h2>
                <ul>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/genre'>Genre</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}