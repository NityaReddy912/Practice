// // import { Component, h, State } from '@stencil/core';
 
// // @Component({
// //   tag: 'custom-header',
// //   styleUrl: 'header.css',
// //   shadow: true,
// // })
// // export class CustomHeader {
 
// //   @State() currentPage: string = 'home';
 
// //   handlePageChange(page: string) {
// //     this.currentPage = page;
// //   }
 
// //   render() {
// //     return (
// //       <div class="custom-header">
// //         <div class="nav-class">
// //           <div class="header-border">
// //             <div class="header-name">
// //               <img
// // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqfw-CbImdrHUYd@gxBSXYVMnjRL7dFqIiw&usqp-CAU"
// //                 class="header-image"
// //               />
// //               <h1 class="Header-text">ShopCart</h1>
// //             </div>
// //             <div class="Header-Content">
// //               <div>
// //                 <a href="/">HomePage</a>
// //                 <a href="/Details">Details</a>
// //                 <a href="/Whats New">WhatsNew</a>
// //                 <a href="/delivery">Delivery</a>
// //                 <a href="categories">Categories</a>
// //               </div>
// //             </div>
// //             <div>
// //               {/* You may need to implement your SearchBar component here */}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }


// import { Component, h, State } from '@stencil/core';
// import '@ionic/core';
 
// @Component({
//   tag: 'my-header',
//   styleUrl: 'header.css',
//   shadow: true,
// })
// export class CustomHeader {
 
//   @State() currentPage: string = 'home';
 
//   handlePageChange(page: string) {
//     this.currentPage = page;
//   }
 
//   render() {
//     return (
//       <ion-header>
//         <ion-navbar color="dark" class="nav-class">
//           <ion-toolbar class="header-border">
//             <ion-row class="header-name">
//               <ion-col size="auto">
//                 <ion-img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqfw-CbImdrHUYd@gxBSXYVMnjRL7dFqIiw&usqp-CAU"
//                   class="header-image"
//                 ></ion-img>
//               </ion-col>
//               <ion-col>
//                 <ion-title class="Header-text">ShopCart</ion-title>
//               </ion-col>
//             </ion-row>
//             <ion-row class="Header-Content">
//               <ion-col>
//                 <ion-menu-button autoHide={false}></ion-menu-button>
//               </ion-col>
//               <ion-col>
//                 <ion-buttons slot="end">
//                   <ion-button href="/">HomePage</ion-button>
//                   <ion-button href="/Details">Details</ion-button>
//                   <ion-button href="/Whats New">WhatsNew</ion-button>
//                   <ion-button href="/delivery">Delivery</ion-button>
//                   <ion-button href="categories">Categories</ion-button>
//                 </ion-buttons>
//               </ion-col>
//             </ion-row>
//             <ion-row>
//               <ion-col>
//                 {/* You may need to implement your SearchBar component here */}
//               </ion-col>
//             </ion-row>
//           </ion-toolbar>
//         </ion-navbar>
//       </ion-header>
//     );
//   }
// }


import { Component, h, State } from '@stencil/core';
 
@Component({
  tag: 'my-header',
  styleUrl: 'header.css',
  shadow: true,
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
                <a href="/Whats New">WhatsNew</a>
                <a href="/delivery">Delivery</a>
                <a href="categories">Categories</a>
              </div>
            </div>
            <div>
              {/* You may need to implement your SearchBar component here */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}