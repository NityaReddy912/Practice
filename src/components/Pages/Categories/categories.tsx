import {Component,h} from '@stencil/core';

@Component({
    tag:'my-categories-page',
    shadow:true
})

export class CategoriesPage{
    render(){
        return(
            <h1>Categories Page</h1>
        )
    }
}