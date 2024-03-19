// import {Component,h,Prop,State} from '@stencil/core';

// @Component({
//     tag:'my-tool-tip',
//     styleUrl:'./tooltip.css',
//     shadow:true
// })

// export class TooltipStencil{
//     @State() tooltipVisible = false;
//     @Prop() text: string;

//     onToggletooltip(){
//         this.tooltipVisible=!this.tooltipVisible;
//     }


// render(){
//     let tooltip=null;
//     if(this.tooltipVisible){
//         tooltip = <div id='tooltip-text'>{this.text}</div>
//     }
//     return [
//         <slot/>,
//         <span id='tooltip-icon' onClick={this.onToggletooltip.bind(this)}>?</span>

//     ]
// }
// }