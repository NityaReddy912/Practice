import {Component,h,Prop} from '@stencil/core';

@Component({
    tag:'my-button',
    styleUrl:'Button.css',
    shadow:true
})

export class Button{
    @Prop() text:string;

    render(){
        return(
            <button>
                {this.text}
            </button>
        )
    }

}