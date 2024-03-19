import {Component,h} from '@stencil/core';

@Component({
    tag:'my-about-page',
    shadow:true
})

export class AboutPage{
    render(){
        return(
            <h1>About Page</h1>
        )
    }
}