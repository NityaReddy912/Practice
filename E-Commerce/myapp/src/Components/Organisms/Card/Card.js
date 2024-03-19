import React, { useState } from 'react';
import './Card.css';
import Layout from '../../Molecules/Layout/Layout';
import Button from '../../atoms/Button/Button';
import StarRating from '../../atoms/StarRating/StarRating';
import LikeComponent from '../../atoms/Likes/Likes';


const images = Array.from({ length: 10 }, (_, index) => ({
 id: index + 1,
 src: `https://www.shutterstock.com/image-vector/3d-shopping-cart-cloud-online-260nw-2143411437.jpg`,
 alt: `Product ${index + 1}`,
}));
const Card = () => {
 const [favorites, setFavorites] = useState(Array(images.length).fill(false));
 const [ratings, setRatings] = useState(Array(images.length).fill(0));
 const toggleFavorite = (imageIndex) => {
   const newFavorites = [...favorites];
   newFavorites[imageIndex] = !newFavorites[imageIndex];
   setFavorites(newFavorites);
 };
 const handleRatingChange = (imageIndex, newRating) => {
   const newRatings = [...ratings];
   newRatings[imageIndex] = newRating;
   setRatings(newRatings);
 };
 return (
<Layout>
<div className="homepage-cards">
       {images.map((image, index) => (
<div key={image.id} className="card">
<img src={image.src} alt={image.alt} className="card-image" />
<LikeComponent
             isLiked={favorites[index]}
             onToggleLike={() => toggleFavorite(index)}
           />
<div className="card-info">
<h2 className="card-name"><pre>  Product {image.id}</pre></h2>
<span className="card-price">$8900</span>
</div>
<div className="card-rating">
<StarRating
               currentRating={ratings[index]}
               onRatingChange={(newRating) => handleRatingChange(index, newRating)}
             />
</div>
<Button>Add to Cart</Button>
</div>
       ))}
</div>
</Layout>
 );
};
export default Card;













// const Card = ({ imageUrl, productName, price, initialRating }) => {
//  const [isFavorite, setIsFavorite] = useState(false);
//  const [rating, setRating] = useState(initialRating || 0);
//  const toggleFavorite = () => {
//   setIsFavorite(!isFavorite);
// };
// const handleStarClick = (clickedIndex) => {
//   setRating(clickedIndex + 1);
// };
// const stars = Array(5).fill(0);
//  return (
// <div className="card-container">
// <div className="heart-icon" onClick={toggleFavorite}>
// <FontAwesomeIcon icon={isFavorite ? farHeart : farHeart} color={isFavorite ? 'red' : 'black'} />
// </div>
// <img src={imageUrl} alt={productName} className="card-image" />
// <div className="card-info">
// <h2 className="card-name">{productName}</h2>
// <span className="card-price">{price}</span>
// </div>
// <div className="card-rating">
// {stars.map((_, index) => (
//   <FontAwesomeIcon
//     key={index}
//     icon={faStar}
//     color={index < rating ? 'yellow' : 'grey'}
//     onClick={() => handleStarClick(index)}
//   />
// ))}
// </div>
// {/* <button className="add-to-cart-btn">Add to Cart</button> */}
// <Button name="Add to Cart" className="add-to-cart-btn">Add to Cart </Button>
// </div>
//  );
// };
