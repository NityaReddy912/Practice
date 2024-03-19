import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import './Likes.css';

const LikeComponent = ({ isLiked, onToggleLike }) => {

 return (
<div className='like-icon' onClick={onToggleLike}>
<FontAwesomeIcon 
    icon={isLiked ? solidHeart : regularHeart} 
    color={isLiked ? 'red' : 'grey'} />
</div>
 );
};
export default LikeComponent;