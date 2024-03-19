import React from 'react';
import Button from './Button';

//component story format

export default {
    title:'Button',//mandatory,has to be unique and it is the one which is displayed on the left side menu bar
    component : Button//optional,addons rely on this

}

export const Primary =() => <Button variant='primary'>Primary</Button>
export const Secondary =() => <Button variant='secondary'>Secondary</Button>
export const Success =() => <Button variant='success'>Success</Button>
export const Danger =() => <Button variant='danger'>Danger</Button>

