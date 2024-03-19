import { Component, h, State } from '@stencil/core';
import '../../Atoms/Button/Button';
import '../../Atoms/Likes/Likes'
import '../../Atoms/star-rating/star-rating';
 
@Component({
  tag: 'my-card',
  styleUrl: 'card.css',
  shadow: true,
})
export class CustomCard {
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
src: `https://www.shutterstock.com/image-vector/3d-shopping-cart-cloud-online-260nw-2143411437.jpg`,
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