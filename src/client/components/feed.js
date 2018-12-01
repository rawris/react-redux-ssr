import React, { Component } from 'react';
import {
    connect
} from 'react-redux';
import {
    Link
} from 'react-router-dom';


class Feed extends Component {
    render() {
        return (
            <div className="feed-container">
                <img
                    className="avatar"
                    src={this.props.card.avatar_url}
                />
                <div
                    style={{
                        marginLeft: '10px'
                    }}>
                    <div>
                        {this.props.card.login}
                    </div>
                    <a
                        target="_blank"
                        href={`https://github.com/${this.props.card.login}`}>
                        <div
                            style={{
                                color: '#e74c3c'
                            }}>
                            Check out Repositories
                        </div>
                    </a>
                </div>
            </div >
        );
    }
}

export default connect((state) => state)(Feed);