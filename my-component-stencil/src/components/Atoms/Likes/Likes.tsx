import {Component,h,Prop} from '@stencil/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
    tag:'my-like',
    styleUrl:'likes.css',
    shadow:true
})

export class MyLikes{

    @Prop() isLiked:boolean;
    @Prop() onToggleLike:Function;
    private renderIcon(path: string, color: string) {
        return (
     <svg style={{ color }} width="1em" height="1em" viewBox="0 0 512 512">
     <path fill="currentColor" d={path}></path>
     </svg>
        );
      }
      render() {
        const icon = this.isLiked ? solidHeart : regularHeart;
        const color = this.isLiked ? 'red' : 'grey';
        return (
     <div class="like-icon" onClick={() => this.onToggleLike()}>
            {this.renderIcon(icon.icon[4] as string, color)}
     </div>
        );
      }
     }
     
