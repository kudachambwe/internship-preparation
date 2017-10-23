/**
 * Created by kuda on 17.07.2017.
 */

import React from 'react';
import '../css/docs.css';
import {Card, CardTitle, Collapsible, CollapsibleItem, MediaBox} from 'react-materialize'
import test from '../../images/test.jpg'
import abb from '../../images/logo-abb.png'


export const chapter_2 = (

    <div>
        <h5 className="center-on-small-only grey-text darken-3 light center">Facilities and Processes</h5>

        <p> The oil and gas industry facilities and systems are broadly defined, according to their use in the oil and
            gas industry production stream:</p>

        <table className="highlight">
            <tbody>
            <tr>
                <td><em>Exploration</em></td>
                <td><p>Includes prospecting, seismic and drilling activities that take place before the development of a
                    field is finally decided.</p></td>
            </tr>

            <tr>
                <td><em>Upstream</em></td>
                <td><p>Typically refers to all facilities for production and stabilization of oil and gas. The reservoir
                    and drilling community often uses upstream for the wellhead, well, completion and reservoir only,
                    and downstream of the wellhead as production or processing. Exploration and upstream/production
                    together is referred to as E&P.</p></td>
            </tr>

            <tr>
                <td><em>Midstream</em></td>
                <td><p>Broadly defined as gas treatment, LNG production and regasification plants, and oil and gas
                    pipeline systems.</p></td>
            </tr>

            <tr>
                <td><em>Refining</em></td>
                <td><p>Where oil and condensates are processed into marketable products with defined specifications such
                    as gasoline, diesel or feedstock for the petrochemical industry. Refinery offsites such as tank
                    storage and distribution terminals are included in this segment, or may be part of a separate
                    distributions operation.</p></td>
            </tr>

            <tr>
                <td><em>Petrochemical</em></td>
                <td><p>These products are chemical products where the main feedstock is hydrocarbons. Examples are
                    plastics, fertilizer and a wide range of industrial chemicals.</p></td>
            </tr>

            </tbody>
        </table>


        <Collapsible popout>
            <CollapsibleItem header='De Finibus Bonorum et Malorum' icon='add'>

                <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur </p>

                <blockquote>
                    This is an example quotation that uses the blockquote tag.
                </blockquote>

                <MediaBox src={abb} caption="A demo media box1" width="250"/>


                <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur </p>

                <MediaBox src={abb} caption="A demo media box1" width="500"/>

            </CollapsibleItem>
        </Collapsible>

        <Collapsible popout>
            <CollapsibleItem header='Lorem sit de consectetur' icon='add'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </CollapsibleItem>

        </Collapsible>

        <Collapsible popout>
            <CollapsibleItem header='Sit voluptatem accusantium doloremque' icon='add'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur
            </CollapsibleItem>
        </Collapsible>

        <Collapsible popout>
            <CollapsibleItem header='Lorem sit de consectetur' icon='add'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.

                <blockquote className="blue-grey-text">
                    This is an example quotation that uses the blockquote tag.
                </blockquote>

            </CollapsibleItem>
        </Collapsible>

        <Collapsible popout>

            <CollapsibleItem header='Sit voluptatem accusantium doloremque' icon='add'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur

                <Card className='small hoverable'
                      header={<CardTitle image={test}></CardTitle>}>
                    <p> I am a very simple card. I am good at containing small bits of information. I am convenient
                        because I require little markup to use effectively.</p>
                </Card>

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur

            </CollapsibleItem>


        </Collapsible>


    </div>

);

export const chapter_2_1 = (

    <div>
        <h5 className="center-on-small-only grey-text darken-3 light center">Exploration</h5>

        <p>In the past, surface features such as tar seeps or gas pockmarks provided initial clues to the location of
            shallow hydrocarbon deposits. Today, a series of surveys, starting with broad geological mapping through
            increasingly advanced methods such as passive seismic, reflective seismic, magnetic and gravity surveys give
            data to sophisticated analysis tools that identify potential hydrocarbon bearing rock as “prospects.”</p>

        <p>An offshore well typically costs $30 million, with most falling in the $10-$100 million range. Rig leases are
            typically $200,000 - $700,000 per day. The average US onshore well costs about $4 million, as many have much
            lower production capacity. Smaller companies exploring marginal onshore fields may drill a shallow well for
            as little as $100,000.</p>

        <p>This means that oil companies spend much time on analysis models of good exploration data, and will only
            drill when models give a good indication of source rock and probability of finding oil or gas. The first
            wells in a region are called wildcats because little may be known about potential dangers, such as the
            downhole pressures that will be encountered, and therefore require particular care and attention to safety
            equipment.</p>

        <p>If a find (strike, penetration) is made, additional reservoir characterization such as production testing,
            appraisal wells, etc., are needed to determine the size and production capacity of the reservoir in order to
            justify a development decision.</p>


    </div>

);


export const chapter_2_2 = (

    <div>

    </div>

);


export const chapter_2_3 = (

    <div>

    </div>

);


export const chapter_2_4 = (

    <div>

    </div>
);
    


