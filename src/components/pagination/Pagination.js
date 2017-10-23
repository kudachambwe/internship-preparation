/**
 * Created by kuda on 19.07.2017.
 */

import React from 'react'
import {Col, Icon} from 'react-materialize'


class Pagination extends React.Component {
    render() {
        return (

            <div>
                <Col s={12} m={4} l={2}>
                    <div className="center-align">
                        <Icon small className="center">keyboard_arrow_left</Icon>
                        <p className="tiny grey-text thin ">Previous</p>
                    </div>
                </Col>

                <Col s={12} m={4} l={8}>

                </Col>

                <Col s={12} m={4} l={2}>
                    <div className="center-align">
                        <Icon small>keyboard_arrow_right</Icon>
                        <p className="tiny grey-text thin ">Next</p>
                    </div>
                </Col>
            </div>

        );
    }
}


export default Pagination;