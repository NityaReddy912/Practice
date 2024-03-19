import { Component, State, h,Event,EventEmitter} from "@stencil/core";
import {AV_API_KEY} from '../../../global/global';
import api from '../../../services/api';

@Component({
    tag:'my-stock-finder',
    styleUrl:'stock-finder.css',
    shadow:true
})
export class StockFinder{
    stockNameInput:HTMLInputElement;
 
    @State() searchResults:{symbol:string, name:string}[]=[];
    @State() loading=false;
    @Event({bubbles: true, composed:true}) mysymbolSelected: EventEmitter<string>;
   
    async onFindStocks(event:Event){
        event.preventDefault();
        this.loading=true;
        const stockName=this.stockNameInput.value;
        let res=await api.getData(stockName);
        console.log(res);
        if(res){
            this.searchResults=res["bestMatches"].map(match=>{
                return { name: match['2. name'], symbol:match['1. symbol']};
                });
                this.loading=false;
        }
       
        // fetch(
        //     `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`
        // )
        //     .then(res=>res.json())
        //     .then(parsedRes=>{
        //         // console.log(parsedRes);
        //         this.searchResults=parsedRes["bestMatches"].map(match=>{
        //             return { name: match['2. name'], symbol:match['1. symbol']};
        //         })
        //         console.log(this.searchResults);
        //     })
        //     .catch(err=>{
        //         console.log(err);
        //     }
        //     );
    }

    onSelectSymbol(symbol:string){
        this.mysymbolSelected.emit(symbol)

    }
    render(){
        let content=
            <ul>{this.searchResults.map(result=>(
            <li onClick={this.onSelectSymbol.bind(this,result.symbol)}>
              <strong>{result.symbol}</strong>-{result.name}
            </li>
           
        ))} </ul>;
        if(this.loading){
            content= <my-spinner/>
        }
        return[
            <form onSubmit={this.onFindStocks.bind(this)}>
                <input
                id="stock-symobl"
                ref={el => (this.stockNameInput=el)}
                />
                <button type="submit">Find!</button>
            </form>,
            content
        ];
    }
}





// import { Component,h,State } from "@stencil/core";
// import {AV_API_KEY} from '../../../global/global';



// @Component({
//     tag:'my-stock-finder',
//     styleUrl:'./stock-finder.css',
//     shadow:true
// })
// export class StockFinder{
//   stockNameInput :HTMLInputElement;

//   @State() searchResults:{symbol : string, name:string}[]=[];

//   onFindStock(event:Event){
//     event.preventDefault();
//     const stockName= this.stockNameInput.value;
//     fetch (
//     `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
//     .then(res => res.json())
//     .then(parsedRes =>{
//       this.searchResults = parsedRes['bestMatches'].map(match =>{
//         return {name: match['2. name'], symbol: match['1. symbol']};
//       })
//       console.log( parsedRes['bestMatches']);
      
//     }).catch(err=> {console.log(err);
//     });
    
//   }

// render(){
//     return[
//         <form onSubmit={this.onFindStock.bind(this)}>
//         <input id="stock-symbol"
//         ref={el=>this.stockNameInput=el}

//         />
//         <button type="submit">
//         Find
//         </button>
//       </form>,
//       <ul>
//       {this.searchResults.map(result => (
//       <li>{result.name}</li>
//       ))}
//       </ul>
//     ]
// }

// }