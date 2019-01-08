
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import _ from 'lodash';
//import { lookup, history } from 'yahoo-stocks';


import SearchBar from './components/SearchBar/SearchBar';
import StockList from './components/StockList/StockList';
import "./App.css";


class App extends Component {
    constructor() {
      super();

      this.state = {
          stocks: [],
          term: null,
          value: ''
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleClick(e) {
        if(e) e.preventDefault();
        this.setState({
            value: '',
            term: this.state.value
        });

        let term = this.state.value;
        const key = 'NDJE27TEHIINZMFG';
        const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${key}`;

        console.log('I am fetching data');
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let stocks = _.flattenDeep( Array.from(data['Stock Quotes']).map((stock) => [{symbol: stock['1. symbol'], price: stock['2. price'], volume: stock['3. volume'], timestamp: stock['4. timestamp']}]) );
                console.log(stocks);
                this.setState((state, props) => {
                    return {
                        ...state,
                        stocks
                    }
                })
            })
            .catch(error => console.log(error));

    }

    render() {
        let stocks = this.state.stocks;
        let value = this.state.value;
        return(
            <div className="App">
                <h1> Hello, Mansi!, Your stock application is ready to use </h1>
                <SearchBar value={ value }
                           onChange={ this.handleChange }
                           onClick={ this.handleClick }/>
                <StockList stockItems={ this.state.stocks }/>
            </div>
        );
    }
}

export default hot(module)(App);


