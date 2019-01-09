import React, { Component} from "react";
import './StockListItem.css';
import { browserHistory } from "react-router";




// const StockListItem = (stock, props) => {
//     function handleClick(e) {
//         console.log("This is a test");
//     }
//   return (
//     <li className="StockListItem" onClick={ handleClick }>
//       <div className="StockListItem_Symbol"><span>Stock: </span>{ stock.symbol }</div>
//       <div className="StockListItem_Price"><span>Price: </span>${ parseInt(stock.price).toFixed(2) }</div>
//       <div className="StockListItem_Volume"><span>Vol: </span>{ stock.volume }</div>
//       <div className="StockListItem_Time"><span>Time: </span>{ stock.timestamp }</div>
//     </li>
//   )
// }

class StockListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        console.log("I am click");
        browserHistory.push(`/stockDetails?symbol=${this.props.symbol}`);
    }
    render() {
        return (
            <li className="StockListItem" onClick={ this.handleClick }>
              <div className="StockListItem_Symbol"><span>Stock: </span>{this.props.symbol}</div>
              <div className="StockListItem_Price"><span>Price: </span>${parseInt(this.props.price).toFixed(2)}</div>
              <div className="StockListItem_Volume"><span>Vol: </span>{this.props.volume}</div>
              <div className="StockListItem_Time"><span>Time: </span>{this.props.timestamp}</div>
            </li>
        );
    }
}
export default StockListItem;
