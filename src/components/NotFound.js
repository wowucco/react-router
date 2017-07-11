import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NotFound extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        Page not found. Go back to <Link to='/'>Home</Link> page?
                    </div>
                </div>
            </div>
        )
    }
}