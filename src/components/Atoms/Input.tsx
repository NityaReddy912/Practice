import {Component,h} from '@stencil/core';

@Component({
    tag:'my-input',
    shadow:true
})

export class MyInput{
    render(){
        return(
            <input type="text" ></input>
        )
        }
}