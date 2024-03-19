import { Component, State, h, Element, Prop, Watch, Listen } from "@stencil/core";
 import {AV_API_KEY} from '../../global/global';
@Component({
  tag: 'my-stockprice',
  styleUrl: 'stock-price.css',
  shadow: true
})
export class StockPrice {
  stockInput:HTMLInputElement;
  // intialStockSymbol:string;
 
  @Element() el:HTMLElement;
 
  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid=false;
  @State() error:string
  @State() loading=false;
  @Prop({mutable:true, reflect:true}) stockSymbol : string;
 
  @Watch('stockSymbol')
  stockSymbolChanged(newValue:string, oldValue:string){
    if(newValue !== oldValue){
      this.stockUserInput=newValue;
      this.stockInputValid=true;
      this.fetchStockPrice(newValue);
    }
  }
  onUserInput(event:Event){
    // this.stockUserInput=event.target.value;(in typescript it will give error for value so i am writing as HTMLInputElement)
    this.stockUserInput=(event.target as HTMLInputElement).value;
    if(this.stockUserInput.trim()!==''){
      this.stockInputValid=true;
    }else{
      this.stockInputValid=false;
    }
  }
 
  onFetchStockPrice(event: Event) {
 
    event.preventDefault();
    //without element we will get error
    // const stockSymbol=(this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
  this.stockSymbol=this.stockInput.value;
    // this.fetchStockPrice(stockSymbol);
    // console.log('Submitted!');
  }
 
  componentWillLoad(){
    console.log("Comp will load");
    console.log(this.stockSymbol);
  }
 
  componentDidLoad(){
    console.log("componentDidLoad");
    if(this.stockSymbol){
      // this.intialStockSymbol=this.stocksymbol;
        this.fetchStockPrice(this.stockSymbol);
        this.stockInputValid=true;
        this.fetchStockPrice(this.stockSymbol);
 
    }
  }
  componentWillUpdate(){
    console.log("Comp will Update");
  }
 
  componentDidUpdate(){
    console.log("componentDidUpdate");
    // if(this.stocksymbol!==this.intialStockSymbol){
    //   this.intialStockSymbol=this.stocksymbol;
    //   this.fetchStockPrice(this.stocksymbol);
    // }
  }
 
  disconnectedCallback(){
    console.log("componentDidUnload");
 
  }
  @Listen('ucSymbolSelected', { target: 'body' })
    onStockSymbolSelected(event:CustomEvent){
    console.log('stock symbol selected',+event.detail);
    if(event.detail && event.detail !== this.stockSymbol){
      // this.fetchStockPrice(event.detail);
      this.stockSymbol=event.detail;
    }
  }
  fetchStockPrice(stockSymbol: string){
    this.loading=true;
    fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
      )
      .then(res =>{
        if(res.status!== 200){
          throw new Error('Invalid');
        }
        return res.json();
      })
      .then(parsedRes=>{
          if(!parsedRes['Global Quote']['05. price']){
              throw new Error('Invalid Symbol');
          }
        this.error=null;
        this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        this.loading=false;
      })
      .catch(err=>{
      this.error=err.message;
      this.fetchedPrice=null;
      this.loading=false;
      });
  }
  hostData(){
    return{class:this.error ? 'error':''};
  }
  render() {
    let dataContent = <p>Please enter a symbol</p>
    if(this.error){
        dataContent=<p>{this.error}</p>
    }
    if(this.fetchedPrice){
        dataContent=<p>Price: ${this.fetchedPrice}</p>
    }
    if(this.loading){
      dataContent=<uc-spinner></uc-spinner>
    }
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id="stock-symbol"
        ref={el=>(this.stockInput=el)}
        value={this.stockUserInput}
        onInput={this.onUserInput.bind(this)}
        />
        <button type="submit" disabled={!this.stockInputValid || this.loading}>Fetch</button>
      </form>,
      <div>
        {dataContent}
      </div>
    ];
  }
}


// import { Component, State, h, Element, Prop ,Watch,Listen} from "@stencil/core";
//  import {AV_API_KEY} from '../../../src/global/global';
// @Component({
//   tag: 'my-stockprice',
//   styleUrl: 'stock-price.css',
//   shadow: true
// })
// export class StockPrice {
//   stockInput:HTMLInputElement;
//   // initiakStockSymbol:string;
 
//   @Element() el:HTMLElement;
//   @State() fetchedPrice: number;
//   @State() stockUserInput: string;
//   @State() stockInputValid=false;
//   @State() error:string;
//   @State() loading=false;

//   @Prop({mutable:true,reflect:true}) stockSymbol : string;



//   @Watch('stockSymbol')
//     stockSymbolChanged(newValue: string,oldValue: string){

//       if(newValue !== oldValue){
//         this.stockUserInput=newValue;
//         this.stockInputValid= true;
//         this.fetchStockPrice(newValue);
//       }

//     }
 
//   onUserInput(event:Event){
//     // this.stockUserInput=event.target.value;(in typescript it will give error for value so i am writing as HTMLInputElement)
//     this.stockUserInput=(event.target as HTMLInputElement).value;
//     if(this.stockUserInput.trim()!==''){
//       this.stockInputValid=true;
//     }else{
//       this.stockInputValid=false;
//     }
//   }
 
//   onFetchStockPrice(event: Event) {
 
//     event.preventDefault();
//     //without element we will get error
//     // const stockSymbol=(this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
//     this.stockSymbol=this.stockInput.value;
//     // this.fetchStockPrice(stockSymbol);
//     // console.log('Submitted!');
//   }

//   componentWillLoad(){
//     console.log("Comp will load");
//   }

//   componentDidLoad(){
//     console.log("Comp did load");

//     if(this.stockSymbol){
//       // if(this.stocksymbol=this.initiakStockSymbol)
//       this.fetchStockPrice(this.stockSymbol);
//       this.stockInputValid=true;
//         this.fetchStockPrice(this.stockSymbol);
//     }
//   }

//   componentWillUpdate(){
//     console.log("Comp will update");
//   }

//   componentDidUpdate(){
//     console.log("Comp did update");
//     // if(this.stocksymbol!== this.initiakStockSymbol){
//     //   this.initiakStockSymbol=this.stocksymbol;
//     //   this.fetchStockPrice(this.stocksymbol);
//     // }
//   }

//   disconnectedCallback(){
//     console.log("Comp did unload");
//   }

//   @Listen('mySymbolSelected',{target:'body'})
//   onStockSymbolSelected(event: CustomEvent){
//     console.log(`stock-symbol selected: `+event.detail)
//     if(event.detail && event.detail!== this.stockSymbol){
//       // this.fetchStockPrice(event.detail);
//       this.stockSymbol=event.detail;
//     }
//   }

  
//   fetchStockPrice(stockSymbol: string){
//     this.loading=true;
//     fetch(
     
//         `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
//       )
//       .then(res =>{
//         if(res.status!== 200){
//           throw new Error('Invalid');
//         }
//         return res.json();
//       })
//       .then(parsedRes=>{
//           if(!parsedRes['Global Quote']['05. price']){
//               throw new Error('Invalid Symbol');
//           }
//         this.error=null;
//         this.fetchedPrice = +parsedRes['Global Quote']['05. price']
//         this.loading= false;
//       })
//       .catch(err=>{
//       this.error=err.message;
//       this.fetchedPrice=null;
//       this.loading=false;
        
//       });
//   }
// //new
//   hostData(){
//     return{class: this.error?'error': ''}
//   }
 
//   render() {
//     let dataContent = <p>Please enter a symbol</p>
//     if(this.error){
//         dataContent=<p>{this.error}</p>
//     }
//     if(this.fetchedPrice){
//         dataContent=<p>Price: ${this.fetchedPrice}</p>
//     }
//     if(this.loading){
//       //nesting comp
//       dataContent = <my-spinner/>
//     }
//     return [
//       <form onSubmit={this.onFetchStockPrice.bind(this)}>
//         <input
//         id="stock-symbol"
//         ref={el=>this.stockInput=el}
//         value={this.stockUserInput}
//         onInput={this.onUserInput.bind(this)}
//         />
//         <button type="submit" disabled={!this.stockInputValid|| this.loading}>Fetch</button>
//       </form>,
//       <div>
//         {dataContent}
//       </div>
//     ];
//   }
// }

// import { Component, State, h, Element, Prop ,Watch,Listen} from "@stencil/core";
//  import {AV_API_KEY} from '../../../src/global/global';
// @Component({
//   tag: 'my-stockprice',
//   styleUrl: 'stock-price.css',
//   shadow: true
// })
// export class StockPrice {
//   stockInput:HTMLInputElement;
//   // initiakStockSymbol:string;
 
//   @Element() el:HTMLElement;
  
//   @State() fetchedPrice: number;
//   @State() stockUserInput: string;
//   @State() stockInputValid=false;
//   @State() error:string;

//   @Prop({mutable:true,reflect:true}) stockSymbol : string;



//   @Watch('stockSymbol')
//     stockSymbolChanged(newValue: string,oldValue: string){

//       if(newValue !== oldValue){
//         this.stockUserInput=newValue;
//         this.stockInputValid= true;
//         this.fetchStockPrice(newValue);
//       }

//     }
  



 
//   onUserInput(event:Event){
//     // this.stockUserInput=event.target.value;(in typescript it will give error for value so i am writing as HTMLInputElement)
//     this.stockUserInput=(event.target as HTMLInputElement).value;
//     if(this.stockUserInput.trim()!==''){
//       this.stockInputValid=true;
//     }else{
//       this.stockInputValid=false;
//     }
//   }
 
//   onFetchStockPrice(event: Event) {
 
//     event.preventDefault();
//     //without element we will get error
//     // const stockSymbol=(this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
//     this.stockSymbol=this.stockInput.value;
//     // this.fetchStockPrice(stockSymbol);
//     // console.log('Submitted!');
//   }

//   componentWillLoad(){
//     console.log("Comp will load");
//   }

//   componentDidLoad(){
//     console.log("Comp did load");

//     if(this.stockSymbol){
//       // if(this.stocksymbol=this.initiakStockSymbol)
//       this.stockUserInput=this.stockSymbol;
//       this.stockInputValid=true;
//         this.fetchStockPrice(this.stockSymbol);
//     }
//   }

//   componentWillUpdate(){
//     console.log("Comp will update");
//   }

//   componentDidUpdate(){
//     console.log("Comp did update");
//     // if(this.stocksymbol!== this.initiakStockSymbol){
//     //   this.initiakStockSymbol=this.stocksymbol;
//     //   this.fetchStockPrice(this.stocksymbol);
//     // }
//   }

//   disconnectedCallback(){
//     console.log("Comp did unload");
//   }

//   @Listen('mySymbolSelected',{target:'body'})
//   onStockSymbolSelected(event: CustomEvent){
//     console.log(`stock-symbol selected: `+event.detail)
//     if(event.detail && event.detail!== this.stockSymbol){
//       // this.fetchStockPrice(event.detail);
//       this.stockSymbol=event.detail;
//     }
//   }

  
//   fetchStockPrice(stockSymbol: string){
//     fetch(
     
//         `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
//       )
//       .then(res =>{
//         if(res.status!== 200){
//           throw new Error('Invalid');
//         }
//         return res.json();
//       })
//       .then(parsedRes=>{
//           if(!parsedRes['Global Quote']['05. price']){
//               throw new Error('Invalid Symbol');
//           }
//         this.error=null;
//         this.fetchedPrice = +parsedRes['Global Quote']['05. price']
//       })
//       .catch(err=>{
//       this.error=err.message;
        
//       });
//   }
 
//   render() {
//     let dataContent = <p>Please enter a symbol</p>
//     if(this.error){
//         dataContent=<p>{this.error}</p>
//     }
//     if(this.fetchedPrice){
//         dataContent=<p>Price: ${this.fetchedPrice}</p>
//     }
//     return [
//       <form onSubmit={this.onFetchStockPrice.bind(this)}>
//         <input id="stock-symbol"
//         ref={el=>this.stockInput=el}
//         value={this.stockUserInput}
//         onInput={this.onUserInput.bind(this)}
//         />
//         <button type="submit" disabled={!this.stockInputValid}>Fetch</button>
//       </form>,
//       <div>
//         {dataContent}
//       </div>
//     ];
//   }
// }