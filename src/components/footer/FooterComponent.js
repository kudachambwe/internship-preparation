/**
 * Created by kuda on 14.07.2017.
 */


import React from 'react'
import './FooterComponent.css';
import {Footer, Row} from 'react-materialize'


class FooterComponent extends React.Component {

    render() {
        return (

            <Row>
                <Footer copyrights="&copy; 2015 Copyright Text"
                        moreLinks={
                            <a className="white-text text-lighten-4 right" href="#!">More Links</a>
                        }
                        links={
                            <ul>
                                <li><a className="grey-text darken-3" href="#!">Link 1</a></li>
                                <li><a className="grey-text darken-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text darken-3" href="#!">Link 3</a></li>
                                <li><a className="grey-text darken-3" href="#!">Link 4</a></li>
                            </ul>
                        }
                        className='grey lighten-2'
                >
                    <h5 className="grey-text darken-3 thin">Om ABB</h5>
                    <divide/>

                    <div className="grey-text darken-5">
                        <ul>
                            <li>Kort om oss</li>
                            <li>Teknologi</li>
                            <li>Integrity</li>
                            <li>Supplying</li>
                        </ul>
                    </div>
                </Footer>

            </Row>

        )
    }
}


export default FooterComponent;