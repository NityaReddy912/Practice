import {Component,Prop,h,State, Method} from '@stencil/core';

//decorator which is also a function
@Component({
    tag:'my-side-drawer',
    // styles:`
    // div{background-color:black}`,
    styleUrl:'./side-drawer.css',
    shadow: true
    // scoped:true;

})
export class SideDrawer {
    @State() showContactInfo= false;
    //when ever the title got changed the attribute change is reflected
    @Prop({reflect:true}) title: string;
    @Prop({reflect:true,mutable:true}) opened:boolean;

    onCloseDrawer(){
    this.opened=false;
        
    }

    onContentChange(content: string){
      this.showContactInfo = content === 'contact'
    }

    @Method()
    open(){
      this.opened=true;
    }


    render(){
      let mainContent= <slot/>
      if(this.showContactInfo)
      {
        mainContent=(
          <div>
          <h2 id="contact">Contact Info</h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>Phone:987655667</li>
            <li>
              E-mail:
              <a href="mailto:something@gmail.com">something@gmail.com</a>
            </li>
          </ul>
          </div>
        )
      }
      
          // let content=null;
        // if(this.open){
            // content=(
            //     <aside>
            //       <header><h1>{this.title}</h1></header>
            //       <main>
            //         <slot></slot>
            //       </main>
            //     </aside>
            // );
        return [

          <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}/>,
            <aside>
              <header>
                <h1>{this.title}</h1>
                <button onClick={this.onCloseDrawer.bind(this)}>X</button>
              </header>
              <section id='tabs'>
                <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this,'nav')}>Navigation</button>
                <button class={this.showContactInfo ? 'active' : ''}
                onClick={this.onContentChange.bind(this,'contact')}>Contact</button>

              </section>
              <main>
                {mainContent}
              </main>
            </aside>
        ];
    }
   
}