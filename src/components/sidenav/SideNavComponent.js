/**
 * Created by kuda on 05.07.2017.
 */

import React, {Component} from 'react';
import './SideNavComponent.css';
import {Collapsible, CollapsibleItem} from 'react-materialize'


class SideNavComponent extends Component {


    render() {

        const chap_2_group = ['2.0. Facilities and processes', '2.1. Exploration', '2.2. Production', '2.3. Upstream process sections', '2.4. Midstream', '2.5. Refining', '2.6. Petrochemical'];
        return (

            <div>

                <h6 className=" light grey-text center-align ">
                    Table of Contents
                </h6>

                <Collapsible>

                    <CollapsibleItem header="1. Introduction">

                        <ul>
                            <li><a onClick={this.props.changeCard.bind(this, 'ch1')} className="grey-text thin"
                                   href="#1">1.1. Introduction </a></li>

                        </ul>

                    </CollapsibleItem>

                    <CollapsibleItem header="2. Facilities and processes">

                        <ul>
                            {chap_2_group.map((chapter) => {
                                return (
                                    <li><a onClick={this.props.changeCard.bind(this, chapter)}
                                           className="grey-text thin" href="#1">{chapter} </a></li>
                                );
                            })}
                        </ul>

                    </CollapsibleItem>

                    <CollapsibleItem header="3. Reservoir and wellheads">

                        <ul>
                            <li><a className="grey-text thin" href="#1">3.1. Crude oil and natural gas </a></li>
                            <li><a className="grey-text thin" href="#1">3.2. The reservoir </a></li>
                            <li><a className="grey-text thin" href="#1">3.3. Exploration and drilling </a></li>
                            <li><a className="grey-text thin" href="#1">3.4. The well </a></li>
                            <li><a className="grey-text thin" href="#1">3.5. Wellhead </a></li>
                            <li><a className="grey-text thin" href="#1">3.6. Artificial lift </a></li>
                            <li><a className="grey-text thin" href="#1">3.7. Well workover, intervention and
                                stimulation </a></li>
                        </ul>
                    </CollapsibleItem>


                    <CollapsibleItem header="4. The upstream oil and gas process">

                        <ul>
                            <li><a className="grey-text thin" href="#1">4.1. Manifolds and gathering</a></li>
                            <li><a className="grey-text thin" href="#1">4.2. Separation </a></li>
                            <li><a className="grey-text thin" href="#1">4.3. Gas treatment and compression </a></li>
                            <li><a className="grey-text thin" href="#1">4.4. Oil and gas storage, metering and
                                export </a></li>

                        </ul>
                    </CollapsibleItem>


                    <CollapsibleItem header="5. Midstream facilities ">

                        <ul>
                            <li><a className="grey-text thin" href="#1">5.1. Gathering</a></li>
                            <li><a className="grey-text thin" href="#1">5.2. Gas plants </a></li>
                            <li><a className="grey-text thin" href="#1">5.3. Gas processing </a></li>
                            <li><a className="grey-text thin" href="#1">5.4. Pipelines </a></li>
                            <li><a className="grey-text thin" href="#1">5.5. LNG </a></li>
                        </ul>
                    </CollapsibleItem>

                    <CollapsibleItem header="6. Refining">

                        <ul>
                            <li><a className="grey-text thin" href="#1">6.1. Fractional distillation</a></li>
                            <li><a className="grey-text thin" href="#1">6.2. Basic products </a></li>
                            <li><a className="grey-text thin" href="#1">6.3. Upgrading and advanced processes </a></li>
                            <li><a className="grey-text thin" href="#1">6.4. Blending and distribution </a></li>
                        </ul>
                    </CollapsibleItem>

                    <CollapsibleItem header="7. Petrochemical ">

                        <ul>
                            <li><a className="grey-text thin" href="#1">7.1. Aromatics</a></li>
                            <li><a className="grey-text thin" href="#1">7.2. Olefins </a></li>
                            <li><a className="grey-text thin" href="#1">7.3. Synthesis gas (syngas) </a></li>

                        </ul>
                    </CollapsibleItem>

                    <CollapsibleItem header="8. Utility systems">

                        <ul>
                            <li><a className="grey-text thin" href="#1">8.1. Process control systems</a></li>
                            <li><a className="grey-text thin" href="#1">8.2. Digital oilfield </a></li>
                            <li><a className="grey-text thin" href="#1">8.3. Power generation, distribution and
                                drives </a></li>
                            <li><a className="grey-text thin" href="#1">8.4. Flare and atmospheric ventilation </a></li>
                            <li><a className="grey-text thin" href="#1">8.5. Instrument air </a></li>
                            <li><a className="grey-text thin" href="#1">8.6. HVAC </a></li>
                            <li><a className="grey-text thin" href="#1">8.7. Water systems</a></li>
                            <li><a className="grey-text thin" href="#1">8.8. Chemicals and additives </a></li>
                            <li><a className="grey-text thin" href="#1">8.9. Telecom</a></li>
                        </ul>

                    </CollapsibleItem>

                    <CollapsibleItem header="9. Unconventional and conventional resources and environmental effects">

                        <ul>
                            <li><a className="grey-text thin" href="#1">9.1. Unconventional sources of oil and gas</a>
                            </li>
                            <li><a className="grey-text thin" href="#1">9.2. Emissions and environmental effects</a>
                            </li>

                        </ul>
                    </CollapsibleItem>

                    <CollapsibleItem header="10. Units">

                        <ul>
                            <li><a className="grey-text thin" href="#1">10.1. Units</a></li>

                        </ul>
                    </CollapsibleItem>

                    <CollapsibleItem header="11. Glossary of terms and acronyms ">

                        <ul>
                            <li><a className="grey-text thin" href="#1">11.1. Glossary</a></li>

                        </ul>

                    </CollapsibleItem>

                    <CollapsibleItem header="12. References ">

                        <ul>
                            <li><a className="grey-text thin" href="#1">12.1. References</a></li>

                        </ul>

                    </CollapsibleItem>

                </Collapsible>
            </div>

        );
    }
}


export default SideNavComponent;