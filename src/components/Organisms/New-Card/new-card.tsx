import { Component, h, State } from '@stencil/core';
import '../../Atoms/Button/Button';
import '../../Atoms/Likes/Likes'
import '../../Atoms/star-rating/star-rating';
 
@Component({
  tag: 'my-new-card',
  styleUrl: 'new-card.css',
  shadow: true,
})
export class NewCard {
  @State() isLiked: boolean = false;
  @State() favorites: boolean[] = Array.from({ length: 10 }, () => false);
  @State() ratings: number[] = Array.from({ length: 10 }, () => 0);
 
  toggleFavorite(imageIndex: number) {
    const newFavorites = [...this.favorites];
    newFavorites[imageIndex] = !newFavorites[imageIndex];
    this.favorites = newFavorites;
  }

  handleRatingChange(imageIndex: number, newRating: number) {
    const newRatings = [...this.ratings];
    newRatings[imageIndex] = newRating;
    this.ratings = newRatings;
  }
 
  render() {
    const images = Array.from({ length: 10 }, (value, index) => ({
      id: index + 1,
      src: `data:image/png;base64,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`,
      alt: `Product ${index + 1}`,
    }));
 
    return (
      
      <div class="homepage-cards">
        {images.map((image, index) => (
<div key={image.id} class="card">
            <img src={image.src} alt={image.alt} class="card-image" />
            <my-like class='heart-icon'></my-like>
            <div class="card-info">
                <h2 class="card-name">Product {image.id}</h2>
              <span class="card-price">$9999</span>
            </div>
            <div class="card-rating">
              <my-star-rating onRatingChange={(newRating) =>
                console.log(newRating)}></my-star-rating>
                </div>
              <my-button text="Add to Cart"></my-button>
          
          </div>
        ))}
      </div>
     
    );
  }
}