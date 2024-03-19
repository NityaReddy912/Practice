import {Component,h} from '@stencil/core'

@Component({
    tag:'my-whats-new-page',
    // styleUrl:'',
    shadow:true
})

export class WhatsNew{
    render(){
        return(
            <div>
                <my-layout>
                    <my-new-card></my-new-card>
                </my-layout>
            </div>
        )
    }
}