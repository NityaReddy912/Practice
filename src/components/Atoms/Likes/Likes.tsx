
import { Component, h, State, Prop,Event,EventEmitter } from '@stencil/core';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
 tag: 'my-like',
 styleUrl: 'likes.css',
 shadow: true,
})
export class MyLikes {
 @State() isLiked: boolean = false;
 @Prop() size: string = '24px';

 toggleLike = () => {
   this.isLiked = !this.isLiked;
 };
 render() {
   const currentIcon = this.isLiked ? fasHeart : farHeart;
   const color = this.isLiked ? 'red' : 'grey';
   return (
<svg viewBox="0 0 600 600" width={this.size} height={this.size} fill={color} onClick={this.toggleLike}>
<path d={currentIcon.icon[4] as string}></path>
</svg>
   );
 }
}