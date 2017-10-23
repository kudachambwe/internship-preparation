/**
 * Created by kuda on 05.07.2017.
 */

import React from 'react';
import './ContentCards.css'


class ContentCards extends React.Component {

    render() {
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}

export default ContentCards;