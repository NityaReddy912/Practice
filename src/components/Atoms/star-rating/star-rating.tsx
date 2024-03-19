
import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';
@Component({
 tag: 'my-star-rating',
 styleUrl: 'star-rating.css',
 shadow: true,
})
export class StarRating {
 @Prop() totalStars: number = 5;
 @State() currentRating: number = 0;
 @Event() ratingChange: EventEmitter;
 private handleRatingChange(newRating: number) {
   this.currentRating = newRating;
   this.ratingChange.emit({ rating: newRating });
 }
 render() {
   return (
<div class="star-rating">
       {Array.from({ length: this.totalStars }).map((_, index) => {
         const starClass = index < this.currentRating ? 'star rated' : 'star';
         return (
<span class={starClass} onClick={() => this.handleRatingChange(index + 1)}>
&#9733;
</span>
         );
       })}
</div>
   );
 }
}