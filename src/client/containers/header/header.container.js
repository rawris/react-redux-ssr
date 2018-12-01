import React, { Component } from 'react';
import {
    connect
} from 'react-redux';


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-container">
                <div>
                    React Server Side rendering With Redux
                </div>
            </div>
        );
    }
}

export default connect((state) => state)(Header);