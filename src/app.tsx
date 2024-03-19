
import { Component, h } from "@stencil/core";
import { Homepage } from "./components/Pages/Homepage/home-page";
import { AboutPage } from "./components/Pages/About/about-page";
@Component({
    tag: 'my-app-root',
    // styleUrl: 'App.css', 
    shadow: false,
  })
  export class MyApp {
    render() {
      return[


        <div>
          <stencil-router id="router">
            <stencil-route 
              url="/"
              component = "my-home-page"
              router = "#router"
              exact={true}
            />
            <stencil-route 
              url="/about"
              component = "my-about-page"
              router = "#router"
              exact={true}
            />
            <stencil-route 
              url="/whatsnew"
              component = "my-whats-new-page"
              router = "#router"
              exact={true}
            />
          </stencil-router>



          <ul>
            <li>
              <stencil-route-link
                router="#router"
                url="/"
                activeClass = "active"
                exact={true}
              >Home</stencil-route-link>
            </li>
            <li>
              <stencil-route-link
                router="#router"
                url="/about"
                activeClass = "active"
                exact={true}
              >About</stencil-route-link>
            </li>
            <li>
              <stencil-route-link
                router="#router"
                url="/whatsnew"
                activeClass = "active"
                exact={true}
              >What's New</stencil-route-link>
            </li>
          </ul>
        </div>
        
      ];
    }
  }





