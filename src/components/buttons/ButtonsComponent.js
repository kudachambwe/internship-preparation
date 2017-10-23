/**
 * Created by kuda on 17.07.2017.
 */

import React from 'react';
import {Button} from 'react-materialize'


class ButtonsComponent extends React.Component {

    render() {
        return (
            <Button floating fab='vertical' icon='more_vert' className='red' large
                    style={{bottom: '45px', right: '24px'}}>
                <Button floating icon='error' className='red'/>
                <Button floating icon='email' className='green'/>
                <Button floating icon='message' className='yellow darken-1'/>
                <Button floating icon='contact_phone' className='blue'/>
            </Button>

        )
    }
}

export default ButtonsComponent;