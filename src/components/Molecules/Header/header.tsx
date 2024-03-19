import {Component,h,State} from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'header.css',
  shadow: false,
})
export class CustomHeader {
 
  @State() currentPage: string = 'home';
 
  handlePageChange(page: string) {
    this.currentPage = page;
  }
 
  render() {
    return (
      <div class="my-header">
        <div class="nav-class">
          <div class="header-border">
            <div class="header-name">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqfw-CbImdrHUYd0gxB5XYVMnjRL7dFqIiw&usqp=CAU"
                class="header-image"
              />
              <h1 class="Header-text">ShopCart</h1>
            </div>
            <div class="Header-Content">
              <div>
           
              <a href="/">HomePage</a>
              <a href="/Details">Details</a>
              <a href="/WhatsNew">WhatsNew</a>
              <a href="/Delivery">Delivery</a>
              <a href="/Categories">Categories</a>

              {/* <stencil-route-link url="/">HomePage</stencil-route-link>
              <stencil-route-link url="/details">Details</stencil-route-link>
              <stencil-route-link url="/dhatsNew">WhatsNew</stencil-route-link>
              <stencil-route-link url="/delivery">Delivery</stencil-route-link>
              <stencil-route-link url='categories'>Categories</stencil-route-link>

               */}
               {/* <my-navigation></my-navigation> */}
                  
              </div>
            </div>
            <div>
              <my-search-bar></my-search-bar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}