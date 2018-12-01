import React, { Component } from 'react';
import {
    connect
} from 'react-redux';
import {
    Helmet
} from "react-helmet";
import {
    asyncHomeFetch
} from '../../action/index';
import Feed from '../../components/feed';


class Home extends Component {

    componentDidMount() {
        // to not load data when Server have already fetched the data
        if (this.props.homeReducer.users.length === 0) {
            this.props.dispatch(asyncHomeFetch());
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>React Server Side rendering With Redux</title>
                    <link rel="icon" href="https://reactjs.org/favicon.ico"></link>
                </Helmet>
                <div
                    className="home-feed-section">
                    {this.props.homeReducer.users.map((value, i) => {
                        return (
                            <Feed
                                card={value}
                                key={i} />
                        );
                    })}
                </div>
            </div>
        )
    }
}

function loadDataHome(store) {
    return store.dispatch(asyncHomeFetch());
}

export {
    loadDataHome
};

export default connect((state) => state)(Home);