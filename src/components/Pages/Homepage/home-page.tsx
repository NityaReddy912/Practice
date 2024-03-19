import {Component,h} from '@stencil/core'

@Component({
    tag:"my-home-page",
    shadow:true,
})

export class Homepage{
    render(){
        return(
            <my-layout>
                <my-card>
                    <h1>My Name is Nityaaa</h1>
                </my-card>
            </my-layout>
        )
    }
}