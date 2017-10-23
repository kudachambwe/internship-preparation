/**
 * Created by kuda on 05.07.2017.
 */

import React from 'react';
import './MainContent.css';
import {Col, Row} from 'react-materialize';
import SideNav from "../sidenav/SideNavComponent";
import ContentCards from "../contentcards/ContentCards";
import ButtonsComponent from "../buttons/ButtonsComponent";
import Pagination from "../pagination/Pagination";

import {chapter_1} from "../../docs/ch_1/ch_1.js";


class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCard: null,
        };

        this.changeCard = this.changeCard.bind(this);
    }

    changeCard(card) {
        if (card === 'ch1') {
            this.setState({currentCard: chapter_1});
        } else {
            console.log('Chapter does not exist');
        }
    }

    render() {

        let currentCard = chapter_1;
        if (this.state.currentCard !== null) {
            currentCard = this.state.currentCard;
        }

        let card = <ContentCards content={currentCard}/>;

        return (

            <div className="container">

                <ButtonsComponent/>

                <Row>
                    <Col s={12} m={4} l={3}>

                        <SideNav changeCard={this.changeCard}/>

                    </Col>

                    <Col s={12} m={8} l={9} className='card-panel'>

                        {card}

                        <Pagination/>

                    </Col>


                </Row>
            </div>

        )
    }
}


export default MainContent;