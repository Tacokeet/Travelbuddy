import React, { Component } from 'react';

import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';


class App extends Component {
    apirequest(){
        fetch("http://api.ipstack.com/check?access_key=201a9fbb71fcb2b3195f6626795b5907")
            .then(response => response.json())

            .then(json => {
                    console.log(json);
                }
            )
        ;

    };

    render() {
    return (
      <div className="App">
          {this.apirequest()}
		<Header />
		
		<Main />
		
		<Footer />
		
      </div>
    );
  }
}

export default App;
