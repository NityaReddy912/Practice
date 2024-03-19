
import './Whatsnew.css';
import React, { useState } from 'react';
import Card from "../../Components/Organisms/Card/Card";


const WhatsNew = () => {

 
  return (
    <Card/>
  );
};
export default WhatsNew;









// import Layout from "../../Layout/Layout";
// import Footer from "../../componunts/Footer/Footer";
// import './Whatsnew.css';
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// import { faHeart as fasHeart, faStar } from '@fortawesome/free-solid-svg-icons';
// const Price = ({ imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQok-h1Luj3jjT4woPMDmrXYSfF4dztUMoKNI906e-hKC6KoON_7JOoiicRaQ&s",
//      productName="", 
//     //  description="This is a brief description of the product.", 
//      price="8909",
//      initialRating ="3",
//     }) => {
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [rating, setRating] = useState(initialRating || 0);
//     const toggleFavorite = () => {
//      setIsFavorite(!isFavorite);
//    };
//    const handleStarClick = (clickedIndex) => {
//      setRating(clickedIndex + 1);
//    };
//    const stars = Array(5).fill(0);
//    return(
//   <Layout>
//   <div>
//   <div className="homepage-cards">
//     <div className="card-container">
//     <div className="heart-icon" onClick={toggleFavorite}>
//     <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} color={isFavorite ? 'red' : 'black'} />
//     </div>
//     <img src='https://w7.pngwing.com/pngs/164/804/png-transparent-e-commerce-online-shopping-icon-double-twelve-shopping-cart-material-love-heart-coffee-shop-thumbnail.png' alt={productName} className="card-image" />
//     <div className="card-info">
//     <h2 className="card-name">{productName}</h2>
//     <span className="card-price">{price}</span>
//     </div>

//     <div className="card-rating">
//     {stars.map((_, index) => (
//       <FontAwesomeIcon
//         key={index}
//         icon={faStar}
//         color={index < rating ? 'yellow' : 'grey'}
//         onClick={() => handleStarClick(index)}
//       />
//     ))}
//     </div>
//     <button className="add-to-cart-btn">Add to Cart</button>
//     </div>
//   </div>
//   <Footer />
// </div>
// </Layout>
//     )
// }
// export default Price;

